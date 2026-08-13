import type { Application } from "@/lib/applications";
import { getDictionary, isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import type { Opening } from "@/lib/openings";
import { siteConfig } from "@/lib/seo";

const RESEND_URL = "https://api.resend.com/emails";

type EmailMessage = {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
};

// No-op (with a warning) when Resend is not configured, so local dev and
// misconfiguration never block an application from being stored.
async function sendEmail(message: EmailMessage): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.APPLICATIONS_FROM_EMAIL;
  if (!apiKey || !from) {
    console.warn(
      `email: RESEND_API_KEY/APPLICATIONS_FROM_EMAIL not configured, skipping "${message.subject}"`,
    );
    return;
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
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`resend: ${response.status} ${body}`);
  }
}

function fillTemplate(template: string, values: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? values[key] : match,
  );
}

export async function sendCandidateConfirmation(
  application: Application,
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

export async function sendAdminNotification(
  application: Application,
  opening: Opening,
): Promise<void> {
  const to = process.env.APPLICATIONS_NOTIFY_EMAIL;
  if (!to) {
    console.warn("email: APPLICATIONS_NOTIFY_EMAIL not configured, skipping notification");
    return;
  }

  const title = opening.content[defaultLocale].title;
  const answers = Object.entries(application.answers)
    .map(([id, value]) => `- ${id}: ${value}`)
    .join("\n");

  const lines = [
    `New application for ${title} (${application.openingSlug})`,
    "",
    `Name: ${application.name}`,
    `Email: ${application.email}`,
    application.phone ? `Phone: ${application.phone}` : null,
    application.link ? `Link: ${application.link}` : null,
    `Locale: ${application.locale}`,
    answers ? `\nAnswers:\n${answers}` : null,
    application.motivation ? `\nMotivation:\n${application.motivation}` : null,
    "",
    `CV: ${application.cvOriginalFilename} (${Math.round(application.cvSizeBytes / 1024)} kB)`,
    `Review: ${siteConfig.url}/admin/applications/${application.id}`,
  ].filter((line): line is string => line !== null);

  await sendEmail({
    to,
    subject: `New application: ${application.name} — ${title}`,
    text: lines.join("\n"),
    replyTo: application.email,
  });
}
