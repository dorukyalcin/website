import { NextResponse, type NextRequest } from "next/server";
import { validateContactIntake } from "@/lib/contactIntake";
import { sendContactEmail } from "@/lib/email";
import { isRateLimited } from "@/lib/rateLimit";
import { verifyTurnstileToken } from "@/lib/turnstile";

export const runtime = "nodejs";

const RATE_LIMIT = { limit: 5, windowMs: 10 * 60 * 1000 };

function clientIp(request: NextRequest): string {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

export async function POST(request: NextRequest) {
  const ip = clientIp(request);
  if (isRateLimited(`contact:${ip}`, RATE_LIMIT)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const body = (await request.json().catch(() => null)) as {
    locale?: unknown;
    name?: unknown;
    email?: unknown;
    subject?: unknown;
    message?: unknown;
    turnstileToken?: unknown;
  } | null;
  if (!body) {
    return NextResponse.json({ error: "validation" }, { status: 400 });
  }

  const asString = (value: unknown) => (typeof value === "string" ? value : "");

  const turnstileOk = await verifyTurnstileToken(
    asString(body.turnstileToken),
    ip === "unknown" ? undefined : ip,
  );
  if (!turnstileOk) {
    return NextResponse.json({ error: "turnstile" }, { status: 400 });
  }

  const intake = validateContactIntake({
    locale: asString(body.locale),
    name: asString(body.name),
    email: asString(body.email),
    subject: asString(body.subject),
    message: asString(body.message),
  });
  if (!intake.ok) {
    return NextResponse.json({ error: "validation" }, { status: 400 });
  }

  let delivered: boolean;
  try {
    delivered = await sendContactEmail(intake);
  } catch (error) {
    console.error("contact: failed to send", error);
    return NextResponse.json({ error: "generic" }, { status: 502 });
  }

  // In production an unconfigured mailer must not pretend to deliver;
  // in development the skip (logged) still counts as success.
  if (!delivered && process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "generic" }, { status: 502 });
  }

  return NextResponse.json({ sent: true }, { status: 200 });
}
