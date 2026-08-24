import { mkdir, readFile, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { getStore } from "@netlify/blobs";

export const CV_MAX_BYTES = 5 * 1024 * 1024;

const PDF_MAGIC = Buffer.from("%PDF-");
const BLOB_STORE_NAME = "cvs";

// On Netlify the function filesystem is read-only, so CVs live in Netlify
// Blobs; everywhere else (local dev, self-hosted) they live on disk.
function useBlobs(): boolean {
  return (
    process.env.NETLIFY === "true" ||
    Boolean(process.env.NETLIFY_BLOBS_CONTEXT)
  );
}

export function cvStorageBackend(): "netlify-blobs" | "disk" {
  return useBlobs() ? "netlify-blobs" : "disk";
}

function cvStore() {
  return getStore(BLOB_STORE_NAME);
}

function uploadDir(): string {
  return process.env.UPLOAD_DIR || path.join(process.cwd(), ".uploads");
}

function toArrayBuffer(buffer: Buffer): ArrayBuffer {
  return buffer.buffer.slice(
    buffer.byteOffset,
    buffer.byteOffset + buffer.byteLength,
  ) as ArrayBuffer;
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
  if (useBlobs()) {
    await cvStore().set(filename, toArrayBuffer(buffer));
    return filename;
  }
  await mkdir(uploadDir(), { recursive: true });
  await writeFile(path.join(uploadDir(), filename), buffer, { flag: "wx" });
  return filename;
}

export async function readCv(storedFilename: string): Promise<Buffer> {
  // basename() blocks path traversal out of the upload directory/store.
  const filename = path.basename(storedFilename);
  if (useBlobs()) {
    const data = await cvStore().get(filename, { type: "arrayBuffer" });
    if (!data) {
      throw new Error(`cv blob missing: ${filename}`);
    }
    return Buffer.from(data);
  }
  return readFile(path.join(uploadDir(), filename));
}

export async function deleteCv(storedFilename: string): Promise<void> {
  const filename = path.basename(storedFilename);
  if (useBlobs()) {
    await cvStore().delete(filename);
    return;
  }
  await unlink(path.join(uploadDir(), filename)).catch(
    (error: NodeJS.ErrnoException) => {
      if (error.code !== "ENOENT") {
        throw error;
      }
    },
  );
}

// Round-trips a sentinel through the active backend so /api/health can
// report broken storage before a candidate hits it.
export async function probeCvStorage(): Promise<boolean> {
  const sentinel = ".health-probe";
  try {
    if (useBlobs()) {
      await cvStore().set(sentinel, "ok");
      await cvStore().delete(sentinel);
      return true;
    }
    await mkdir(uploadDir(), { recursive: true });
    const probePath = path.join(uploadDir(), sentinel);
    await writeFile(probePath, "ok");
    await unlink(probePath);
    return true;
  } catch {
    return false;
  }
}
