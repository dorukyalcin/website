import test from "node:test";
import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";
import { AboutPageView } from "./AboutPageView";
import { ContactPageView } from "./ContactPageView";
import { NotFoundPageView } from "./NotFoundPageView";
import { PrimeRoutePageView } from "./PrimeRoutePageView";
import { getPageHeroSectionClassName } from "./pageHero";

test("getPageHeroSectionClassName keeps the shared navbar offset and extra classes", () => {
  assert.equal(
    getPageHeroSectionClassName("min-h-[70vh]", "px-6"),
    "relative flex items-center justify-center gradient-mesh grain overflow-hidden pt-24 md:pt-28 pb-12 min-h-[70vh] px-6",
  );
});

test("non-home page heroes include spacing below the fixed navbar", () => {
  const pages = [
    renderToStaticMarkup(<AboutPageView locale="en" />),
    renderToStaticMarkup(<PrimeRoutePageView locale="en" />),
    renderToStaticMarkup(<ContactPageView locale="en" />),
    renderToStaticMarkup(<NotFoundPageView locale="en" />),
  ];

  for (const markup of pages) {
    assert.match(
      markup,
      /<section class="[^"]*pt-24 md:pt-28 pb-12[^"]*"/,
    );
  }
});
