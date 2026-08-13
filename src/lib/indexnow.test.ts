import test from "node:test";
import assert from "node:assert/strict";
import { founders } from "./founders";
import { locales, pageKeys } from "./i18n";
import { openings } from "./openings";
import {
  buildIndexNowPayload,
  getDefaultIndexNowUrls,
  getIndexNowConfig,
} from "./indexnow";

function createEnv(values: Record<string, string>): NodeJS.ProcessEnv {
  return values as unknown as NodeJS.ProcessEnv;
}

test("builds IndexNow config from env", () => {
  const config = getIndexNowConfig(
    createEnv({
      INDEXNOW_KEY: "indexnow-key",
      INDEXNOW_ENDPOINT: "https://example.com/indexnow",
    }),
  );

  assert.equal(config.endpoint, "https://example.com/indexnow");
  assert.equal(config.key, "indexnow-key");
  assert.equal(config.keyLocation, "https://avernsys.com/indexnow-key.txt");
});

test("builds an IndexNow payload with deduplicated absolute URLs", () => {
  const payload = buildIndexNowPayload(
    ["/rotasal", "https://avernsys.com/rotasal", "/tr/rotasal"],
    createEnv({
      INDEXNOW_KEY: "indexnow-key",
    }),
  );

  assert.ok(payload);
  assert.equal(payload?.key, "indexnow-key");
  assert.deepEqual(payload?.urlList, [
    "https://avernsys.com/rotasal",
    "https://avernsys.com/tr/rotasal",
  ]);
});

test("returns undefined when IndexNow is not configured", () => {
  const payload = buildIndexNowPayload(["/"], createEnv({}));

  assert.equal(payload, undefined);
});

test("provides default IndexNow URLs for every supported locale", () => {
  const urls = getDefaultIndexNowUrls();

  assert.equal(
    urls.length,
    locales.length * (pageKeys.length + founders.length + openings.length),
  );
  assert.ok(urls.includes("https://avernsys.com/careers"));
  assert.ok(urls.includes("https://avernsys.com/rotasal"));
  assert.ok(urls.includes("https://avernsys.com/about/doruk-yalcin"));
  assert.ok(urls.includes("https://avernsys.com/tr/rotasal"));
  assert.ok(urls.includes("https://avernsys.com/de/rotasal"));
  assert.ok(urls.includes("https://avernsys.com/nl/rotasal"));
  assert.equal(urls.some((url) => url.includes("chaptersys")), false);
});
