import test from "node:test";
import assert from "node:assert/strict";
import {
  formatOpeningDate,
  formatOpeningLocation,
  formatRegionName,
  formatSalary,
} from "./format";
import { openings } from "./openings";

test("formatSalary renders fixed yearly and monthly amounts per locale", () => {
  const yearly = { currency: "USD", min: 180000, max: 180000, unitText: "YEAR" } as const;
  const monthly = { currency: "USD", min: 8750, max: 8750, unitText: "MONTH" } as const;

  assert.equal(formatSalary("en", yearly), "$180,000 / yr");
  assert.equal(formatSalary("en", monthly), "$8,750 / mo");
  assert.match(formatSalary("de", yearly), /180\.000/);
  assert.match(formatSalary("de", yearly), /\/ Jahr$/);
  assert.match(formatSalary("nl", yearly), /\/ jaar$/);
  assert.match(formatSalary("tr", monthly), /\/ ay$/);
});

test("formatSalary renders ranges with an en dash", () => {
  const range = { currency: "USD", min: 180000, max: 200000, unitText: "YEAR" } as const;
  assert.equal(formatSalary("en", range), "$180,000 – $200,000 / yr");
});

test("formatOpeningLocation distinguishes on-site cities from worldwide remote", () => {
  const onsite = openings.find((opening) => opening.workplaceType === "ONSITE");
  const worldwide = openings.find(
    (opening) => opening.remoteEligibleRegions === "WORLDWIDE",
  );
  assert.ok(onsite && worldwide);

  assert.equal(formatOpeningLocation("en", onsite), "Palo Alto, CA");
  assert.equal(formatOpeningLocation("en", worldwide), "Anywhere in the world");
  assert.equal(formatOpeningLocation("de", worldwide), "Überall auf der Welt");
  assert.equal(formatOpeningLocation("tr", worldwide), "Dünyanın her yerinden");
});

test("formatOpeningLocation lists remote regions by localized country name", () => {
  const remoteEurope = {
    ...openings[0],
    workplaceType: "REMOTE",
    remoteEligibleRegions: ["TR", "NL"],
  } as const;
  assert.match(formatOpeningLocation("en", remoteEurope), /^T(u|ü)rk(ey|iye) · Netherlands$/);
  assert.equal(formatOpeningLocation("nl", remoteEurope), "Turkije · Nederland");
});

test("date and region helpers localize", () => {
  assert.equal(formatOpeningDate("en", "2026-09-01"), "Sep 1, 2026");
  assert.equal(formatRegionName("de", "US"), "Vereinigte Staaten");
});
