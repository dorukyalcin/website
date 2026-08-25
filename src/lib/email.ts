import { getDictionary, isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import type { Opening } from "@/lib/openings";

// The submission pipeline is email-only: an application exists as the
// admin-notification email (CV attached), nothing is stored server-side.
export type ApplicationEmail = {
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
  cvSizeBytes: number;
};

const RESEND_URL = "https://api.resend.com/emails";

type EmailAttachment = {
  filename: string;
  content: string; // base64
};

type EmailMessage = {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
  attachments?: EmailAttachment[];
};

// Skips (with a warning) when Resend is not configured, so local dev and
// misconfiguration never block an application from being stored. Returns
// whether the message was actually handed to Resend.
async function sendEmail(message: EmailMessage): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.APPLICATIONS_FROM_EMAIL;
  if (!apiKey || !from) {
    console.warn(
      `email: RESEND_API_KEY/APPLICATIONS_FROM_EMAIL not configured, skipping "${message.subject}"`,
    );
    return false;
  }

  const response = await fetch(RESEND_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [message.to],
      subject: message.subject,
      text: message.text,
      ...(message.replyTo ? { reply_to: [message.replyTo] } : {}),
      ...(message.attachments?.length
        ? { attachments: message.attachments }
        : {}),
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`resend: ${response.status} ${body}`);
  }
  return true;
}

function fillTemplate(template: string, values: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? values[key] : match,
  );
}

export async function sendCandidateConfirmation(
  application: ApplicationEmail,
  opening: Opening,
): Promise<void> {
  const locale: Locale = isLocale(application.locale)
    ? application.locale
    : defaultLocale;
  const template =
    getDictionary(locale).pages.careers.emails.confirmation;
  const values = {
    name: application.name,
    title: opening.content[locale].title,
  };

  const text = [
    fillTemplate(template.greeting, values),
    ...template.body.map((line) => fillTemplate(line, values)),
    template.signoff,
  ].join("\n\n");

  await sendEmail({
    to: application.email,
    subject: fillTemplate(template.subject, values),
    text,
    replyTo: process.env.APPLICATIONS_NOTIFY_EMAIL,
  });
}

export async function sendContactEmail(message: {
  name: string;
  email: string;
  subject: string;
  message: string;
  locale: string;
}): Promise<boolean> {
  const to = process.env.APPLICATIONS_NOTIFY_EMAIL;
  if (!to) {
    console.warn("email: APPLICATIONS_NOTIFY_EMAIL not configured, skipping contact message");
    return false;
  }

  const subjectLabel =
    getDictionary(defaultLocale).pages.contact.form.subjectOptions.find(
      (option) => option.value === message.subject,
    )?.label ?? message.subject;

  return sendEmail({
    to,
    subject: `Contact form: ${subjectLabel} — ${message.name}`,
    text: [
      `Name: ${message.name}`,
      `Email: ${message.email}`,
      `Topic: ${subjectLabel}`,
      `Locale: ${message.locale}`,
      "",
      message.message,
    ].join("\n"),
    replyTo: message.email,
  });
}

// This email IS the application record — there is no database — so any
// configuration or delivery problem must throw, making the submission fail
// visibly instead of silently dropping a candidate.
export async function sendAdminNotification(
  application: ApplicationEmail,
  opening: Opening,
  cv: Buffer,
): Promise<void> {
  const to = process.env.APPLICATIONS_NOTIFY_EMAIL;
  if (!to) {
    throw new Error("email: APPLICATIONS_NOTIFY_EMAIL not configured");
  }

  const title = opening.content[defaultLocale].title;
  const answers = Object.entries(application.answers)
    .map(([id, value]) => `- ${id}: ${value}`)
    .join("\n");

  const lines = [
    `New application for ${title} (${application.openingSlug})`,
    "",
    `Reference: ${application.id}`,
    `Name: ${application.name}`,
    `Email: ${application.email}`,
    application.phone ? `Phone: ${application.phone}` : null,
    application.link ? `Link: ${application.link}` : null,
    `Locale: ${application.locale}`,
    answers ? `\nAnswers:\n${answers}` : null,
    application.motivation ? `\nMotivation:\n${application.motivation}` : null,
    "",
    `CV: ${application.cvOriginalFilename} (${Math.round(application.cvSizeBytes / 1024)} kB), attached`,
  ].filter((line): line is string => line !== null);

  const sent = await sendEmail({
    to,
    subject: `New application: ${application.name} — ${title}`,
    text: lines.join("\n"),
    replyTo: application.email,
    attachments: [
      {
        filename: application.cvOriginalFilename,
        content: cv.toString("base64"),
      },
    ],
  });
  if (!sent) {
    throw new Error("email: RESEND_API_KEY/APPLICATIONS_FROM_EMAIL not configured");
  }
}
