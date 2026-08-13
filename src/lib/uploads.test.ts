import test from "node:test";
import assert from "node:assert/strict";
import { isPdf, sanitizeOriginalFilename, storedCvFilename } from "./uploads";

test("isPdf checks the PDF magic bytes", () => {
  assert.equal(isPdf(Buffer.from("%PDF-1.7\n...")), true);
  assert.equal(isPdf(Buffer.from("<html></html>")), false);
  assert.equal(isPdf(Buffer.from("%PD")), false);
  assert.equal(isPdf(Buffer.alloc(0)), false);
});

test("sanitizeOriginalFilename strips paths and unsafe characters", () => {
  assert.equal(sanitizeOriginalFilename("../../etc/passwd"), "passwd.pdf");
  assert.equal(sanitizeOriginalFilename("My CV (2026).pdf"), "My CV _2026_.pdf");
  assert.equal(sanitizeOriginalFilename("résumé.pdf"), "r_sum_.pdf");
  assert.equal(sanitizeOriginalFilename(""), "cv.pdf");
  assert.ok(sanitizeOriginalFilename(`${"a".repeat(300)}.pdf`).length <= 124);
});

test("stored CV filenames are derived from the application id", () => {
  assert.equal(
    storedCvFilename("6f5a2c9e-0000-4000-8000-000000000000"),
    "6f5a2c9e-0000-4000-8000-000000000000.pdf",
  );
});
