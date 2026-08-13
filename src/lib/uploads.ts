import { mkdir, readFile, unlink, writeFile } from "node:fs/promises";
import path from "node:path";

export const CV_MAX_BYTES = 5 * 1024 * 1024;

const PDF_MAGIC = Buffer.from("%PDF-");

function uploadDir(): string {
  return process.env.UPLOAD_DIR || path.join(process.cwd(), ".uploads");
}

export function isPdf(buffer: Buffer): boolean {
  return (
    buffer.length >= PDF_MAGIC.length &&
    buffer.subarray(0, PDF_MAGIC.length).equals(PDF_MAGIC)
  );
}

export function sanitizeOriginalFilename(name: string): string {
  const base = path.basename(name).replace(/[^\w.\- ]+/g, "_");
  const trimmed = base.slice(0, 120) || "cv.pdf";
  return trimmed.toLowerCase().endsWith(".pdf") ? trimmed : `${trimmed}.pdf`;
}

export function storedCvFilename(applicationId: string): string {
  return `${applicationId}.pdf`;
}

export async function saveCv(
  applicationId: string,
  buffer: Buffer,
): Promise<string> {
  const filename = storedCvFilename(applicationId);
  await mkdir(uploadDir(), { recursive: true });
  await writeFile(path.join(uploadDir(), filename), buffer, { flag: "wx" });
  return filename;
}

export async function readCv(storedFilename: string): Promise<Buffer> {
  // basename() blocks path traversal out of the upload directory.
  return readFile(path.join(uploadDir(), path.basename(storedFilename)));
}

export async function deleteCv(storedFilename: string): Promise<void> {
  await unlink(path.join(uploadDir(), path.basename(storedFilename))).catch(
    (error: NodeJS.ErrnoException) => {
      if (error.code !== "ENOENT") {
        throw error;
      }
    },
  );
}
