import { isLocale, type Locale } from "@/lib/i18n";
import {
  getOpeningBySlug,
  isQuestionActive,
  type Opening,
  type OpeningQuestion,
} from "@/lib/openings";

export type IntakeErrorCode = "validation" | "closed";

export type IntakeFields = {
  openingSlug: string;
  locale: string;
  name: string;
  email: string;
  phone: string;
  link: string;
  motivation: string;
  consent: string;
  questionAnswers: Record<string, string>;
};

export type IntakeResult =
  | {
      ok: true;
      opening: Opening;
      locale: Locale;
      name: string;
      email: string;
      phone: string | null;
      link: string | null;
      motivation: string | null;
      answers: Record<string, string>;
    }
  | { ok: false; error: IntakeErrorCode; fields: string[] };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LIMITS = {
  name: 200,
  email: 320,
  phone: 50,
  link: 500,
  motivation: 5000,
  answer: 2000,
} as const;

function normalize(value: string, maxLength: number): string {
  return value.trim().slice(0, maxLength);
}

function validateAnswer(
  question: OpeningQuestion,
  raw: string | undefined,
): { ok: boolean; value?: string } {
  const value = normalize(raw ?? "", LIMITS.answer);

  if (!value) {
    return question.required ? { ok: false } : { ok: true };
  }

  if (question.type === "select") {
    const allowed = (question.options ?? []).some(
      (option) => option.value === value,
    );
    return allowed ? { ok: true, value } : { ok: false };
  }

  return { ok: true, value };
}

export function validateApplicationIntake(
  fields: IntakeFields,
): IntakeResult {
  const opening = getOpeningBySlug(fields.openingSlug);
  if (!opening || !isLocale(fields.locale)) {
    return { ok: false, error: "validation", fields: [] };
  }
  if (opening.status !== "open") {
    return { ok: false, error: "closed", fields: [] };
  }

  const invalidFields: string[] = [];

  const name = normalize(fields.name, LIMITS.name);
  if (!name) {
    invalidFields.push("name");
  }

  const email = normalize(fields.email, LIMITS.email);
  if (!email || !EMAIL_PATTERN.test(email)) {
    invalidFields.push("email");
  }

  if (fields.consent !== "on") {
    invalidFields.push("consent");
  }

  // Conditional questions are validated in declaration order: a question
  // hidden by its condition is skipped entirely, and any answer submitted
  // for it is dropped.
  const answers: Record<string, string> = {};
  for (const question of opening.questions) {
    if (!isQuestionActive(question, answers)) {
      continue;
    }
    const result = validateAnswer(
      question,
      fields.questionAnswers[question.id],
    );
    if (!result.ok) {
      invalidFields.push(`question:${question.id}`);
    } else if (result.value) {
      answers[question.id] = result.value;
    }
  }

  if (invalidFields.length > 0) {
    return { ok: false, error: "validation", fields: invalidFields };
  }

  const phone = normalize(fields.phone, LIMITS.phone);
  const link = normalize(fields.link, LIMITS.link);
  const motivation = normalize(fields.motivation, LIMITS.motivation);

  return {
    ok: true,
    opening,
    locale: fields.locale,
    name,
    email,
    phone: phone || null,
    link: link || null,
    motivation: motivation || null,
    answers,
  };
}
