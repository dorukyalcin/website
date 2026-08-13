import { getPool } from "@/lib/db";
import type { ApplicationStatus } from "@/lib/applicationStatus";

export type Application = {
  id: string;
  openingSlug: string;
  locale: string;
  name: string;
  email: string;
  phone: string | null;
  link: string | null;
  motivation: string | null;
  answers: Record<string, string>;
  cvOriginalFilename: string;
  cvStoredFilename: string;
  cvSizeBytes: number;
  status: ApplicationStatus;
  notes: string;
  consentedAt: Date;
  createdAt: Date;
  updatedAt: Date;
};

export type NewApplication = {
  id: string;
  openingSlug: string;
  locale: string;
  name: string;
  email: string;
  phone: string | null;
  link: string | null;
  motivation: string | null;
  answers: Record<string, string>;
  cvOriginalFilename: string;
  cvStoredFilename: string;
  cvSizeBytes: number;
  consentedAt: Date;
};

type ApplicationRow = {
  id: string;
  opening_slug: string;
  locale: string;
  name: string;
  email: string;
  phone: string | null;
  link: string | null;
  motivation: string | null;
  answers: Record<string, string>;
  cv_original_filename: string;
  cv_stored_filename: string;
  cv_size_bytes: number;
  status: ApplicationStatus;
  notes: string;
  consented_at: Date;
  created_at: Date;
  updated_at: Date;
};

function toApplication(row: ApplicationRow): Application {
  return {
    id: row.id,
    openingSlug: row.opening_slug,
    locale: row.locale,
    name: row.name,
    email: row.email,
    phone: row.phone,
    link: row.link,
    motivation: row.motivation,
    answers: row.answers,
    cvOriginalFilename: row.cv_original_filename,
    cvStoredFilename: row.cv_stored_filename,
    cvSizeBytes: row.cv_size_bytes,
    status: row.status,
    notes: row.notes,
    consentedAt: row.consented_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function insertApplication(
  application: NewApplication,
): Promise<Application> {
  const { rows } = await getPool().query<ApplicationRow>(
    `INSERT INTO applications (
       id, opening_slug, locale, name, email, phone, link, motivation, answers,
       cv_original_filename, cv_stored_filename, cv_size_bytes, consented_at
     ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
     RETURNING *`,
    [
      application.id,
      application.openingSlug,
      application.locale,
      application.name,
      application.email,
      application.phone,
      application.link,
      application.motivation,
      JSON.stringify(application.answers),
      application.cvOriginalFilename,
      application.cvStoredFilename,
      application.cvSizeBytes,
      application.consentedAt,
    ],
  );
  return toApplication(rows[0]);
}

export type ApplicationFilters = {
  openingSlug?: string;
  status?: ApplicationStatus;
};

export async function listApplications(
  filters: ApplicationFilters = {},
): Promise<Application[]> {
  const conditions: string[] = [];
  const values: string[] = [];

  if (filters.openingSlug) {
    values.push(filters.openingSlug);
    conditions.push(`opening_slug = $${values.length}`);
  }
  if (filters.status) {
    values.push(filters.status);
    conditions.push(`status = $${values.length}`);
  }

  const where =
    conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";
  const { rows } = await getPool().query<ApplicationRow>(
    `SELECT * FROM applications ${where} ORDER BY created_at DESC`,
    values,
  );
  return rows.map(toApplication);
}

export async function getApplication(id: string): Promise<Application | null> {
  const { rows } = await getPool().query<ApplicationRow>(
    "SELECT * FROM applications WHERE id = $1",
    [id],
  );
  return rows[0] ? toApplication(rows[0]) : null;
}

export async function updateApplicationStatus(
  id: string,
  status: ApplicationStatus,
): Promise<Application | null> {
  const { rows } = await getPool().query<ApplicationRow>(
    `UPDATE applications SET status = $2, updated_at = now()
     WHERE id = $1 RETURNING *`,
    [id, status],
  );
  return rows[0] ? toApplication(rows[0]) : null;
}

export async function updateApplicationNotes(
  id: string,
  notes: string,
): Promise<Application | null> {
  const { rows } = await getPool().query<ApplicationRow>(
    `UPDATE applications SET notes = $2, updated_at = now()
     WHERE id = $1 RETURNING *`,
    [id, notes],
  );
  return rows[0] ? toApplication(rows[0]) : null;
}

export async function deleteApplication(
  id: string,
): Promise<Application | null> {
  const { rows } = await getPool().query<ApplicationRow>(
    "DELETE FROM applications WHERE id = $1 RETURNING *",
    [id],
  );
  return rows[0] ? toApplication(rows[0]) : null;
}

export async function countApplicationsByOpening(): Promise<
  Record<string, number>
> {
  const { rows } = await getPool().query<{
    opening_slug: string;
    count: string;
  }>(
    "SELECT opening_slug, count(*)::text AS count FROM applications GROUP BY opening_slug",
  );
  return Object.fromEntries(rows.map((row) => [row.opening_slug, Number(row.count)]));
}
