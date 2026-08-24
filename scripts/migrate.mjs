// Applies db/migrations/*.sql in filename order, tracking progress in
// schema_migrations. Runs standalone (plain JS) so the Docker entrypoint can
// execute it before the server starts.
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import pg from "pg";

const MIGRATIONS_DIR = path.join(process.cwd(), "db", "migrations");
const CONNECT_ATTEMPTS = 30;

async function connectWithRetry(databaseUrl) {
  for (let attempt = 1; ; attempt += 1) {
    const client = new pg.Client({ connectionString: databaseUrl });
    try {
      await client.connect();
      return client;
    } catch (error) {
      await client.end().catch(() => {});
      if (attempt >= CONNECT_ATTEMPTS) {
        throw error;
      }
      console.log(`migrate: database not ready (attempt ${attempt}), retrying...`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
}

async function main() {
  const databaseUrl =
    process.env.DATABASE_URL || process.env.NETLIFY_DATABASE_URL;
  if (!databaseUrl) {
    // --if-configured lets the Netlify build run migrations only when a
    // database is attached, without failing deploys of a database-less site.
    if (process.argv.includes("--if-configured")) {
      console.warn("migrate: no database configured, skipping");
      return;
    }
    throw new Error("DATABASE_URL / NETLIFY_DATABASE_URL is not set");
  }

  const client = await connectWithRetry(databaseUrl);
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS schema_migrations (
        name text PRIMARY KEY,
        applied_at timestamptz NOT NULL DEFAULT now()
      )
    `);

    const files = (await readdir(MIGRATIONS_DIR))
      .filter((file) => file.endsWith(".sql"))
      .sort();

    const { rows } = await client.query("SELECT name FROM schema_migrations");
    const applied = new Set(rows.map((row) => row.name));

    for (const file of files) {
      if (applied.has(file)) {
        continue;
      }
      const sql = await readFile(path.join(MIGRATIONS_DIR, file), "utf8");
      console.log(`migrate: applying ${file}`);
      await client.query("BEGIN");
      try {
        await client.query(sql);
        await client.query("INSERT INTO schema_migrations (name) VALUES ($1)", [
          file,
        ]);
        await client.query("COMMIT");
      } catch (error) {
        await client.query("ROLLBACK");
        throw error;
      }
    }
    console.log("migrate: up to date");
  } finally {
    await client.end();
  }
}

main().catch((error) => {
  console.error("migrate: failed", error);
  process.exit(1);
});
