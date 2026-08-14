import test from "node:test";
import assert from "node:assert/strict";
import { validateApplicationIntake, type IntakeFields } from "./applicationIntake";
import { openings } from "./openings";

const openOpening = openings.find((opening) => opening.status === "open");

function baseFields(overrides: Partial<IntakeFields> = {}): IntakeFields {
  assert.ok(openOpening, "test data requires at least one open opening");
  const selectQuestion = openOpening.questions.find(
    (question) => question.type === "select",
  );
  return {
    openingSlug: openOpening.slug,
    locale: "en",
    name: "Ada Lovelace",
    email: "ada@example.com",
    phone: "",
    link: "",
    motivation: "",
    consent: "on",
    questionAnswers: selectQuestion
      ? { [selectQuestion.id]: selectQuestion.options![0].value }
      : {},
    ...overrides,
  };
}

test("accepts a complete valid application", () => {
  const result = validateApplicationIntake(baseFields());
  assert.ok(result.ok);
  assert.equal(result.name, "Ada Lovelace");
  assert.equal(result.phone, null);
});

test("rejects unknown opening, bad locale, and missing consent", () => {
  assert.deepEqual(
    validateApplicationIntake(baseFields({ openingSlug: "nope" })),
    { ok: false, error: "validation", fields: [] },
  );
  assert.deepEqual(
    validateApplicationIntake(baseFields({ locale: "fr" })),
    { ok: false, error: "validation", fields: [] },
  );
  assert.deepEqual(validateApplicationIntake(baseFields({ consent: "" })), {
    ok: false,
    error: "validation",
    fields: ["consent"],
  });
});

test("reports every invalid field at once", () => {
  const result = validateApplicationIntake(
    baseFields({ name: "", email: "bad", consent: "" }),
  );
  assert.equal(result.ok, false);
  if (!result.ok) {
    assert.deepEqual(result.fields, ["name", "email", "consent"]);
  }
});

test("rejects missing or malformed identity fields", () => {
  assert.equal(validateApplicationIntake(baseFields({ name: "  " })).ok, false);
  assert.equal(
    validateApplicationIntake(baseFields({ email: "not-an-email" })).ok,
    false,
  );
});

test("enforces required custom questions and select option values", () => {
  assert.ok(openOpening);
  const requiredQuestion = openOpening.questions.find(
    (question) => question.required,
  );
  if (requiredQuestion) {
    assert.equal(
      validateApplicationIntake(baseFields({ questionAnswers: {} })).ok,
      false,
    );
  }

  const selectQuestion = openOpening.questions.find(
    (question) => question.type === "select",
  );
  if (selectQuestion) {
    assert.equal(
      validateApplicationIntake(
        baseFields({
          questionAnswers: { [selectQuestion.id]: "not-a-real-option" },
        }),
      ).ok,
      false,
    );
  }
});

test("ignores answers for unknown question ids", () => {
  const result = validateApplicationIntake(
    baseFields({
      questionAnswers: {
        ...baseFields().questionAnswers,
        "unknown-question": "whatever",
      },
    }),
  );
  assert.ok(result.ok);
  assert.equal("unknown-question" in result.answers, false);
});

test("trims and nullifies empty optional fields", () => {
  const result = validateApplicationIntake(
    baseFields({ phone: "  +49 151 000  ", motivation: "   " }),
  );
  assert.ok(result.ok);
  assert.equal(result.phone, "+49 151 000");
  assert.equal(result.motivation, null);
});
