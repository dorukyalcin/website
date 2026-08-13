import test from "node:test";
import assert from "node:assert/strict";
import { founders } from "@/lib/founders";
import { locales, pageKeys } from "@/lib/i18n";
import { openings } from "@/lib/openings";
import robots from "./robots";
import sitemap from "./sitemap";

test("publishes a crawlable robots policy with sitemap", () => {
  const result = robots();
  const rules = Array.isArray(result.rules) ? result.rules : [result.rules];

  assert.equal(result.host, "https://avernsys.com");
  assert.equal(result.sitemap, "https://avernsys.com/sitemap.xml");
  assert.equal(rules[0]?.allow, "/");
});

test("publishes sitemap entries for every localized indexable page", () => {
  const entries = sitemap();

  assert.equal(
    entries.length,
    locales.length * (pageKeys.length + founders.length + openings.length),
  );
  assert.ok(
    entries.some((entry) => entry.url === "https://avernsys.com/careers"),
  );
  assert.ok(
    entries.some(
      (entry) =>
        entry.url === `https://avernsys.com/nl/careers/${openings[0].slug}`,
    ),
  );
  assert.ok(entries.some((entry) => entry.url === "https://avernsys.com/"));
  assert.ok(
    entries.some((entry) => entry.url === "https://avernsys.com/rotasal"),
  );
  assert.ok(entries.some((entry) => entry.url === "https://avernsys.com/tr"));
  assert.ok(
    entries.some((entry) => entry.url === "https://avernsys.com/tr/rotasal"),
  );
  assert.ok(entries.some((entry) => entry.url === "https://avernsys.com/de"));
  assert.ok(
    entries.some((entry) => entry.url === "https://avernsys.com/de/rotasal"),
  );
  assert.ok(entries.some((entry) => entry.url === "https://avernsys.com/nl"));
  assert.ok(
    entries.some((entry) => entry.url === "https://avernsys.com/nl/rotasal"),
  );
  assert.ok(
    entries.some(
      (entry) =>
        entry.url === "https://avernsys.com/about/doruk-yalcin" &&
        entry.images?.includes(
          "https://avernsys.com/founders/doruk-yalcin-avernsys-co-founder.jpg",
        ),
    ),
  );
  assert.equal(
    entries.some((entry) => entry.url.includes("chaptersys")),
    false,
  );
  assert.ok(
    entries.every((entry) => entry.lastModified instanceof Date),
  );
});
