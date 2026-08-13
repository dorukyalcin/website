import test from "node:test";
import assert from "node:assert/strict";
import { locales } from "./i18n";
import { getOpenOpenings, getOpeningBySlug, openings } from "./openings";

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
