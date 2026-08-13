import { NextResponse, type NextRequest } from "next/server";
import { verifyAdminRequest } from "@/lib/adminAuth";
import { getApplication } from "@/lib/applications";
import { readCv } from "@/lib/uploads";

export const runtime = "nodejs";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(request: NextRequest, context: RouteContext) {
  const auth = await verifyAdminRequest(request.headers);
  if (!auth.ok) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;
  const application = await getApplication(id).catch(() => null);
  if (!application) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }

  let file: Buffer;
  try {
    file = await readCv(application.cvStoredFilename);
  } catch {
    return NextResponse.json({ error: "file_missing" }, { status: 404 });
  }

  return new NextResponse(new Uint8Array(file), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${application.cvOriginalFilename.replaceAll('"', "")}"`,
      "X-Robots-Tag": "noindex",
      "Cache-Control": "private, no-store",
    },
  });
}
