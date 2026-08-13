import { Pool } from "pg";

declare global {
  var pgPool: Pool | undefined;
}

export function getPool(): Pool {
  if (!globalThis.pgPool) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error("DATABASE_URL is not set");
    }
    globalThis.pgPool = new Pool({ connectionString, max: 5 });
  }
  return globalThis.pgPool;
}
