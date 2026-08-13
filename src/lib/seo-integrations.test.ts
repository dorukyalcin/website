import test from "node:test";
import assert from "node:assert/strict";
import {
  getSeoIntegrationConfig,
  getSeoNoScriptSrc,
  getSeoScriptDescriptors,
} from "./seo-integrations";

function createEnv(values: Record<string, string>): NodeJS.ProcessEnv {
  return values as unknown as NodeJS.ProcessEnv;
}

test("normalizes integration env vars", () => {
  const config = getSeoIntegrationConfig(createEnv({
    NEXT_PUBLIC_GTM_ID: "  GTM-123  ",
    NEXT_PUBLIC_GA4_ID: "",
    NEXT_PUBLIC_CLARITY_PROJECT_ID: "   ",
  }));

  assert.equal(config.gtmId, "GTM-123");
  assert.equal(config.ga4Id, undefined);
  assert.equal(config.clarityProjectId, undefined);
});

test("builds script descriptors for each enabled integration", () => {
  const scripts = getSeoScriptDescriptors({
    gtmId: "GTM-123",
    ga4Id: "G-456",
    clarityProjectId: "CLARITY-789",
  });

  assert.equal(scripts.length, 4);
  assert.deepEqual(scripts.map((item) => item.id), [
    "seo-gtm",
    "seo-ga4-src",
    "seo-ga4-init",
    "seo-clarity",
  ]);
});

test("omits GTM noscript when GTM is disabled", () => {
  assert.equal(getSeoNoScriptSrc(undefined), undefined);
  assert.equal(getSeoNoScriptSrc("GTM-123"), "https://www.googletagmanager.com/ns.html?id=GTM-123");
});
