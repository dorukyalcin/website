import { randomUUID } from "node:crypto";
import { NextResponse, type NextRequest } from "next/server";
import { validateApplicationIntake } from "@/lib/applicationIntake";
import { insertApplication } from "@/lib/applications";
import { sendAdminNotification, sendCandidateConfirmation } from "@/lib/email";
import { isRateLimited } from "@/lib/rateLimit";
import { verifyTurnstileToken } from "@/lib/turnstile";
import {
  CV_MAX_BYTES,
  deleteCv,
  isPdf,
  sanitizeOriginalFilename,
  saveCv,
  storedCvFilename,
} from "@/lib/uploads";

export const runtime = "nodejs";

const RATE_LIMIT = { limit: 5, windowMs: 10 * 60 * 1000 };
// Form fields + multipart overhead on top of the CV size cap.
const MAX_REQUEST_BYTES = CV_MAX_BYTES + 1024 * 1024;

function clientIp(request: NextRequest): string {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

function error(status: number, code: string, fields: string[] = []) {
  return NextResponse.json({ error: code, fields }, { status });
}

function formString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > MAX_REQUEST_BYTES) {
    return error(413, "cv_size", ["cv"]);
  }

  const ip = clientIp(request);
  if (isRateLimited(`applications:${ip}`, RATE_LIMIT)) {
    return error(429, "rate_limited");
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return error(400, "validation");
  }

  const turnstileOk = await verifyTurnstileToken(
    formString(formData, "turnstileToken"),
    ip === "unknown" ? undefined : ip,
  );
  if (!turnstileOk) {
    return error(400, "turnstile");
  }

  const questionAnswers: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (key.startsWith("question:") && typeof value === "string") {
      questionAnswers[key.slice("question:".length)] = value;
    }
  }

  const intake = validateApplicationIntake({
    openingSlug: formString(formData, "openingSlug"),
    locale: formString(formData, "locale"),
    name: formString(formData, "name"),
    email: formString(formData, "email"),
    phone: formString(formData, "phone"),
    link: formString(formData, "link"),
    motivation: formString(formData, "motivation"),
    consent: formString(formData, "consent"),
    questionAnswers,
  });
  if (!intake.ok) {
    return error(intake.error === "closed" ? 409 : 400, intake.error, intake.fields);
  }

  const cv = formData.get("cv");
  if (!(cv instanceof File) || cv.size === 0) {
    return error(400, "validation", ["cv"]);
  }
  if (cv.size > CV_MAX_BYTES) {
    return error(413, "cv_size", ["cv"]);
  }
  const cvBuffer = Buffer.from(await cv.arrayBuffer());
  if (!isPdf(cvBuffer)) {
    return error(400, "cv_type", ["cv"]);
  }

  const id = randomUUID();
  const cvStoredFilename = storedCvFilename(id);

  try {
    await saveCv(id, cvBuffer);
  } catch (err) {
    console.error("applications: failed to store CV", err);
    return error(500, "generic");
  }

  let application;
  try {
    application = await insertApplication({
      id,
      openingSlug: intake.opening.slug,
      locale: intake.locale,
      name: intake.name,
      email: intake.email,
      phone: intake.phone,
      link: intake.link,
      motivation: intake.motivation,
      answers: intake.answers,
      cvOriginalFilename: sanitizeOriginalFilename(cv.name),
      cvStoredFilename,
      cvSizeBytes: cvBuffer.length,
      consentedAt: new Date(),
    });
  } catch (err) {
    console.error("applications: failed to insert application", err);
    await deleteCv(cvStoredFilename).catch(() => {});
    return error(500, "generic");
  }

  // Email failures are logged but never fail a stored application.
  const emailResults = await Promise.allSettled([
    sendAdminNotification(application, intake.opening),
    sendCandidateConfirmation(application, intake.opening),
  ]);
  for (const result of emailResults) {
    if (result.status === "rejected") {
      console.error("applications: email failed", result.reason);
    }
  }

  return NextResponse.json({ id: application.id }, { status: 201 });
}
