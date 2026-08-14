import test from "node:test";
import assert from "node:assert/strict";
import { validateContactIntake, type ContactFields } from "./contactIntake";

function baseFields(overrides: Partial<ContactFields> = {}): ContactFields {
  return {
    locale: "en",
    name: "Grace Hopper",
    email: "grace@example.com",
    subject: "general",
    message: "Hello there.",
    ...overrides,
  };
}

test("accepts a valid contact message", () => {
  const result = validateContactIntake(baseFields());
  assert.ok(result.ok);
  assert.equal(result.subject, "general");
});

test("falls back to the default locale for unknown locales", () => {
  const result = validateContactIntake(baseFields({ locale: "xx" }));
  assert.ok(result.ok);
  assert.equal(result.locale, "en");
});

test("rejects missing fields, bad emails, and unknown subjects", () => {
  assert.equal(validateContactIntake(baseFields({ name: " " })).ok, false);
  assert.equal(
    validateContactIntake(baseFields({ email: "nope" })).ok,
    false,
  );
  assert.equal(validateContactIntake(baseFields({ message: "" })).ok, false);
  assert.equal(
    validateContactIntake(baseFields({ subject: "not-a-topic" })).ok,
    false,
  );
});
