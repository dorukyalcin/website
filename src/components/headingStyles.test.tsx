import test from "node:test";
import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";
import { FeatureSection } from "./FeatureSection";
import { headingClassNames } from "./headingStyles";
import { AboutPageView } from "./pages/AboutPageView";
import { HomePageView } from "./pages/HomePageView";
import { NotFoundPageView } from "./pages/NotFoundPageView";

function escapeForRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

test("heading spacing tokens stay standardized", () => {
  assert.deepEqual(headingClassNames, {
    heroEyebrow:
      "text-xs font-medium uppercase tracking-[0.3em] text-gray-500 mb-6",
    heroDescription: "text-body-large mt-8",
    heroActionsTopMargin: "mt-10",
    centeredSectionEyebrow:
      "text-xs font-medium uppercase tracking-[0.3em] text-gray-500 mb-4 text-center",
    centeredSectionTitle: "text-display text-center mb-20",
    sectionTitle: "text-display mb-6",
    centeredSectionTitleTight: "text-display text-center mb-6",
    sectionBody: "text-body-large",
    sectionBodyWithActions: "text-body-large mb-10",
    featureLabel:
      "text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-4 block",
  });
});

test("shared heading spacing is used by key page layouts", () => {
  const homeMarkup = renderToStaticMarkup(<HomePageView locale="en" />);
  const aboutMarkup = renderToStaticMarkup(<AboutPageView locale="en" />);
  const notFoundMarkup = renderToStaticMarkup(<NotFoundPageView locale="en" />);

  assert.match(
    homeMarkup,
    new RegExp(escapeForRegex(headingClassNames.centeredSectionEyebrow)),
  );
  assert.match(
    homeMarkup,
    new RegExp(escapeForRegex(headingClassNames.centeredSectionTitle)),
  );
  assert.match(
    aboutMarkup,
    new RegExp(escapeForRegex(headingClassNames.sectionTitle)),
  );
  assert.match(
    notFoundMarkup,
    new RegExp(escapeForRegex(headingClassNames.heroDescription)),
  );
});

test("feature sections use the standardized label and title spacing", () => {
  const markup = renderToStaticMarkup(
    <FeatureSection
      label="Routing"
      title="Move faster"
      description="Plan better routes."
      icon={<span>icon</span>}
    />,
  );

  assert.match(
    markup,
    new RegExp(escapeForRegex(headingClassNames.featureLabel)),
  );
  assert.match(
    markup,
    new RegExp(escapeForRegex(headingClassNames.sectionTitle)),
  );
});

