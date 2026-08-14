import { defaultLocale, getDictionary, isLocale, type Locale } from "@/lib/i18n";

export type ContactFields = {
  locale: string;
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactResult =
  | {
      ok: true;
      locale: Locale;
      name: string;
      email: string;
      subject: string;
      message: string;
    }
  | { ok: false };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LIMITS = {
  name: 200,
  email: 320,
  message: 10000,
} as const;

// Valid subject values are defined by the (locale-independent) option values
// in the contact form dictionary.
function validSubjectValues(): string[] {
  return getDictionary(defaultLocale).pages.contact.form.subjectOptions.map(
    (option) => option.value,
  );
}

export function validateContactIntake(fields: ContactFields): ContactResult {
  const locale = isLocale(fields.locale) ? fields.locale : defaultLocale;
  const name = fields.name.trim().slice(0, LIMITS.name);
  const email = fields.email.trim().slice(0, LIMITS.email);
  const message = fields.message.trim().slice(0, LIMITS.message);
  const subject = fields.subject.trim();

  if (
    !name ||
    !email ||
    !EMAIL_PATTERN.test(email) ||
    !message ||
    !validSubjectValues().includes(subject)
  ) {
    return { ok: false };
  }

  return { ok: true, locale, name, email, subject, message };
}
