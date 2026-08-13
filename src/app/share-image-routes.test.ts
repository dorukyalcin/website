import test from "node:test";
import assert from "node:assert/strict";
import { renderLocalizedShareImage } from "./_localized/renderShareImage";

test("localized share image routes render valid PNG responses", async () => {
  const responses = [
    renderLocalizedShareImage("en", "homeOpenGraph"),
    renderLocalizedShareImage("en", "homeTwitter"),
    renderLocalizedShareImage("tr", "primeroute"),
  ];

  for (const response of responses) {
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("content-type"), "image/png");

    const body = await response.arrayBuffer();
    assert.equal(body.byteLength > 0, true);
  }
});
