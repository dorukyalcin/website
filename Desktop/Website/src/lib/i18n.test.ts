import test from "node:test";
import assert from "node:assert/strict";
import {
  getAlternateLanguageLinks,
  getPagePath,
  getPathnameLocale,
  localizePath,
  stripLocaleFromPathname,
  switchLocalePathname,
} from "./i18n";

test("localizePath keeps English unprefixed and prefixes localized paths", () => {
  assert.equal(localizePath("en", "/contact"), "/contact");
  assert.equal(localizePath("tr", "/contact"), "/tr/contact");
  assert.equal(localizePath("de", "/contact"), "/de/contact");
  assert.equal(localizePath("nl", "/contact"), "/nl/contact");
  assert.equal(localizePath("tr", "/"), "/tr");
});

test("getPagePath maps page keys to locale-aware routes", () => {
  assert.equal(getPagePath("en", "home"), "/");
  assert.equal(getPagePath("tr", "about"), "/tr/about");
  assert.equal(getPagePath("de", "about"), "/de/about");
  assert.equal(getPagePath("nl", "contact"), "/nl/contact");
});

test("pathname locale helpers detect and switch locale paths", () => {
  assert.equal(getPathnameLocale("/tr/contact"), "tr");
  assert.equal(getPathnameLocale("/de/contact"), "de");
  assert.equal(getPathnameLocale("/nl"), "nl");
  assert.equal(getPathnameLocale("/contact"), "en");
  assert.equal(stripLocaleFromPathname("/tr/contact"), "/contact");
  assert.equal(stripLocaleFromPathname("/de/contact"), "/contact");
  assert.equal(stripLocaleFromPathname("/nl"), "/");
  assert.equal(switchLocalePathname("/tr/contact", "en"), "/contact");
  assert.equal(switchLocalePathname("/about", "tr"), "/tr/about");
  assert.equal(switchLocalePathname("/de/contact", "nl"), "/nl/contact");
});

test("alternate language links include all supported locales", () => {
  const links = getAlternateLanguageLinks("/about");

  assert.deepEqual(links, {
    en: "/about",
    tr: "/tr/about",
    de: "/de/about",
    nl: "/nl/about",
    "x-default": "/about",
  });
});
