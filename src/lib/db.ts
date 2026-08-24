import { Pool } from "pg";

declare global {
  var pgPool: Pool | undefined;
}

export function getPool(): Pool {
  if (!globalThis.pgPool) {
    // NETLIFY_DATABASE_URL is what Netlify DB (Neon) injects.
    const connectionString =
      process.env.DATABASE_URL || process.env.NETLIFY_DATABASE_URL;
    if (!connectionString) {
      throw new Error("DATABASE_URL / NETLIFY_DATABASE_URL is not set");
    }
    globalThis.pgPool = new Pool({
      connectionString,
      max: 5,
      connectionTimeoutMillis: 8000,
    });
  }
  return globalThis.pgPool;
}
