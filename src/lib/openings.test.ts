import test from "node:test";
import assert from "node:assert/strict";
import { locales } from "./i18n";
import {
  getLatestApplicationDeadline,
  getOpenOpenings,
  getOpenOpeningGroups,
  getOpeningBySlug,
  getOpeningGroupKey,
  openingGroupKeys,
  openingTeams,
  openings,
} from "./openings";

test("opening slugs are unique and url-safe", () => {
  const slugs = openings.map((opening) => opening.slug);
  assert.equal(new Set(slugs).size, slugs.length);
  for (const slug of slugs) {
    assert.match(slug, /^[a-z0-9]+(-[a-z0-9]+)*$/);
  }
});

test("every opening has complete content for every locale", () => {
  for (const opening of openings) {
    for (const locale of locales) {
      const content = opening.content[locale];
      assert.ok(content, `${opening.slug} is missing ${locale} content`);
      assert.ok(content.title.length > 0);
      assert.ok(content.summary.length > 0);
      assert.ok(content.intro.length > 0);
      assert.ok(content.responsibilities.length > 0);
      assert.ok(content.requirements.length > 0);
    }
  }
});

test("custom question ids are unique with complete locale labels", () => {
  for (const opening of openings) {
    const ids = opening.questions.map((question) => question.id);
    assert.equal(new Set(ids).size, ids.length);

    for (const question of opening.questions) {
      assert.match(question.id, /^[a-z0-9]+(-[a-z0-9]+)*$/);
      for (const locale of locales) {
        assert.ok(
          question.label[locale],
          `${opening.slug}/${question.id} is missing a ${locale} label`,
        );
      }
      if (question.type === "select") {
        assert.ok(question.options && question.options.length > 0);
        for (const option of question.options ?? []) {
          for (const locale of locales) {
            assert.ok(option.label[locale]);
          }
        }
      } else {
        assert.equal(question.options, undefined);
      }
    }
  }
});

test("opening dates are ISO formatted", () => {
  for (const opening of openings) {
    assert.match(opening.postedAt, /^\d{4}-\d{2}-\d{2}$/);
    if (opening.validThrough) {
      assert.match(opening.validThrough, /^\d{4}-\d{2}-\d{2}$/);
    }
  }
});

test("lookup helpers find openings by slug and filter by status", () => {
  for (const opening of openings) {
    assert.equal(getOpeningBySlug(opening.slug), opening);
  }
  assert.equal(getOpeningBySlug("does-not-exist"), undefined);
  for (const opening of getOpenOpenings()) {
    assert.equal(opening.status, "open");
  }
});

test("every opening belongs to a known team and carries a salary", () => {
  for (const opening of openings) {
    assert.ok(
      (openingTeams as readonly string[]).includes(opening.team),
      `${opening.slug} has unknown team ${opening.team}`,
    );
    assert.ok(opening.salary, `${opening.slug} is missing a salary`);
    assert.ok(opening.salary.min > 0 && opening.salary.max >= opening.salary.min);
    if (opening.validThrough) {
      assert.ok(
        opening.validThrough > opening.postedAt,
        `${opening.slug} closes before it was posted`,
      );
    }
  }
});

test("on-site roles are placed in Palo Alto and internships are remote worldwide", () => {
  for (const opening of openings) {
    if (opening.employmentType === "INTERN") {
      assert.equal(opening.workplaceType, "REMOTE");
      assert.equal(opening.remoteEligibleRegions, "WORLDWIDE");
      assert.equal(opening.salary?.unitText, "MONTH");
      assert.equal(getOpeningGroupKey(opening), "internships");
    } else {
      assert.equal(opening.workplaceType, "ONSITE");
      assert.equal(opening.city, "Palo Alto");
      assert.equal(opening.region, "CA");
      assert.equal(opening.countryCode, "US");
      assert.equal(opening.salary?.unitText, "YEAR");
      assert.equal(getOpeningGroupKey(opening), opening.team);
    }
  }
});

test("open positions group in canonical order and cover every group", () => {
  const groups = getOpenOpeningGroups();
  const keys = groups.map((group) => group.key);
  assert.deepEqual(
    keys,
    openingGroupKeys.filter((key) => keys.includes(key)),
  );
  assert.deepEqual(keys, [...openingGroupKeys]);
  const total = groups.reduce((sum, group) => sum + group.openings.length, 0);
  assert.equal(total, getOpenOpenings().length);
});

test("localized content is translated, not mirrored from English", () => {
  for (const opening of openings) {
    for (const locale of locales) {
      if (locale === "en") {
        continue;
      }
      const content = opening.content[locale];
      assert.notEqual(
        content.summary,
        opening.content.en.summary,
        `${opening.slug} ${locale} summary is still English`,
      );
      assert.notEqual(
        content.intro.join("\n"),
        opening.content.en.intro.join("\n"),
        `${opening.slug} ${locale} intro is still English`,
      );
      assert.equal(
        content.responsibilities.length,
        opening.content.en.responsibilities.length,
        `${opening.slug} ${locale} responsibilities count differs from English`,
      );
      assert.equal(
        content.requirements.length,
        opening.content.en.requirements.length,
        `${opening.slug} ${locale} requirements count differs from English`,
      );
    }
  }
});

test("latest application deadline is the max validThrough among open positions", () => {
  const expected = getOpenOpenings()
    .map((opening) => opening.validThrough ?? "")
    .sort()
    .at(-1);
  assert.equal(getLatestApplicationDeadline(), expected || undefined);
});
