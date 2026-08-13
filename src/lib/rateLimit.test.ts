import test, { beforeEach } from "node:test";
import assert from "node:assert/strict";
import { isRateLimited, resetRateLimits } from "./rateLimit";

beforeEach(() => {
  resetRateLimits();
});

test("allows requests under the limit and blocks at the limit", () => {
  const options = { limit: 3, windowMs: 1000, now: 1_000_000 };
  assert.equal(isRateLimited("ip", options), false);
  assert.equal(isRateLimited("ip", options), false);
  assert.equal(isRateLimited("ip", options), false);
  assert.equal(isRateLimited("ip", options), true);
});

test("forgets hits outside the window", () => {
  assert.equal(
    isRateLimited("ip", { limit: 1, windowMs: 1000, now: 1_000_000 }),
    false,
  );
  assert.equal(
    isRateLimited("ip", { limit: 1, windowMs: 1000, now: 1_000_500 }),
    true,
  );
  assert.equal(
    isRateLimited("ip", { limit: 1, windowMs: 1000, now: 1_001_501 }),
    false,
  );
});

test("tracks keys independently", () => {
  const options = { limit: 1, windowMs: 1000, now: 1_000_000 };
  assert.equal(isRateLimited("a", options), false);
  assert.equal(isRateLimited("b", options), false);
  assert.equal(isRateLimited("a", options), true);
});
