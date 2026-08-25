import { NextResponse } from "next/server";

export const runtime = "nodejs";

// The application pipeline is email-only (no database, no stored CVs), so
// health is exactly the email configuration. Booleans only — safe to expose.
export async function GET() {
  const health = {
    pipeline: "email-only",
    resendKey: Boolean(process.env.RESEND_API_KEY),
    fromEmail: Boolean(process.env.APPLICATIONS_FROM_EMAIL),
    notifyEmail: Boolean(process.env.APPLICATIONS_NOTIFY_EMAIL),
    turnstile: Boolean(process.env.TURNSTILE_SECRET_KEY),
  };

  const ok = health.resendKey && health.fromEmail && health.notifyEmail;
  return NextResponse.json(health, {
    status: ok ? 200 : 503,
    headers: { "Cache-Control": "no-store" },
  });
}
