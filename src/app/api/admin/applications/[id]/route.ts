import { NextResponse, type NextRequest } from "next/server";
import { verifyAdminRequest } from "@/lib/adminAuth";
import { isApplicationStatus } from "@/lib/applicationStatus";
import {
  deleteApplication,
  updateApplicationNotes,
  updateApplicationStatus,
} from "@/lib/applications";
import { deleteCv } from "@/lib/uploads";

export const runtime = "nodejs";

type RouteContext = { params: Promise<{ id: string }> };

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

async function authorize(request: NextRequest) {
  const auth = await verifyAdminRequest(request.headers);
  if (!auth.ok) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  return null;
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  const unauthorized = await authorize(request);
  if (unauthorized) {
    return unauthorized;
  }

  const { id } = await context.params;
  if (!UUID_PATTERN.test(id)) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }

  const body = (await request.json().catch(() => null)) as {
    status?: unknown;
    notes?: unknown;
  } | null;
  if (!body) {
    return NextResponse.json({ error: "validation" }, { status: 400 });
  }

  let application = null;
  if (typeof body.status === "string") {
    if (!isApplicationStatus(body.status)) {
      return NextResponse.json({ error: "validation" }, { status: 400 });
    }
    application = await updateApplicationStatus(id, body.status);
  }
  if (typeof body.notes === "string") {
    application = await updateApplicationNotes(id, body.notes.slice(0, 20000));
  }

  if (!application) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }
  return NextResponse.json({ id: application.id, status: application.status });
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  const unauthorized = await authorize(request);
  if (unauthorized) {
    return unauthorized;
  }

  const { id } = await context.params;
  if (!UUID_PATTERN.test(id)) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }

  const application = await deleteApplication(id);
  if (!application) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }
  await deleteCv(application.cvStoredFilename);
  return NextResponse.json({ deleted: true });
}
