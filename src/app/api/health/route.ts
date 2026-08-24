import { NextResponse } from "next/server";
import { getPool } from "@/lib/db";
import { cvStorageBackend, probeCvStorage } from "@/lib/uploads";

export const runtime = "nodejs";

// Dependency health for the application pipeline. Booleans only — no
// connection details — so it is safe to expose publicly.
export async function GET() {
  const health = {
    db: false,
    migrations: false,
    cvStorage: false,
    storageBackend: cvStorageBackend(),
    email: Boolean(
      process.env.RESEND_API_KEY && process.env.APPLICATIONS_FROM_EMAIL,
    ),
    turnstile: Boolean(process.env.TURNSTILE_SECRET_KEY),
  };

  try {
    const { rows } = await getPool().query<{ count: string }>(
      "SELECT count(*)::text AS count FROM schema_migrations",
    );
    health.db = true;
    health.migrations = Number(rows[0]?.count) > 0;
  } catch {
    // db and/or migrations stay false.
  }

  health.cvStorage = await probeCvStorage();

  const ok = health.db && health.migrations && health.cvStorage;
  return NextResponse.json(health, {
    status: ok ? 200 : 503,
    headers: { "Cache-Control": "no-store" },
  });
}
