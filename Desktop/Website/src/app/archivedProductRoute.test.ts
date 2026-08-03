import test from "node:test";
import assert from "node:assert/strict";
import { buildArchivedChapterSysResponse } from "./_localized/archivedProductRoute";

test("archived ChapterSys responses are gone and noindexed", async () => {
  const response = buildArchivedChapterSysResponse("en");
  const body = await response.text();

  assert.equal(response.status, 410);
  assert.equal(response.headers.get("X-Robots-Tag"), "noindex, noarchive");
  assert.match(body, /ChapterSys has been archived/);
  assert.match(body, /href="\/rotasal"/);
});

test("archived ChapterSys HEAD responses omit the body", async () => {
  const response = buildArchivedChapterSysResponse("tr", {
    includeBody: false,
  });

  assert.equal(response.status, 410);
  assert.equal(await response.text(), "");
});
