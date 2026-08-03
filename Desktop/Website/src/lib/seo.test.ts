import test from "node:test";
import assert from "node:assert/strict";
import { brandLogo } from "./brand";
import { founders } from "./founders";
import { getDictionary } from "./i18n";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildFounderPersonJsonLd,
  buildFounderProfileMetadata,
  buildFounderProfilePageJsonLd,
  buildHomeItemListJsonLd,
  buildOrganizationJsonLd,
  buildPageMetadata,
  buildSoftwareApplicationJsonLd,
  buildVerificationMetadata,
  buildWebPageJsonLd,
  buildWebSiteJsonLd,
  getIndexablePages,
  getPageSeo,
  resolvePageTitle,
  schemaFounderPersonId,
  schemaOrganizationId,
  schemaSoftwareApplicationId,
  schemaWebSiteId,
  siteConfig,
} from "./seo";

function createEnv(values: Record<string, string>): NodeJS.ProcessEnv {
  return values as unknown as NodeJS.ProcessEnv;
}

function getOpenGraphImageUrl(pageMetadata: ReturnType<typeof buildPageMetadata>) {
  const images = pageMetadata.openGraph?.images;

  if (!images) {
    return undefined;
  }

  const imageList = Array.isArray(images) ? images : [images];
  const image = imageList[0];

  if (typeof image === "string") {
    return image;
  }

  if (image instanceof URL) {
    return image.toString();
  }

  return image?.url?.toString();
}

function getMetadataAbsoluteTitle(
  pageMetadata: ReturnType<typeof buildPageMetadata>,
) {
  const title = pageMetadata.title;

  if (title && typeof title === "object" && "absolute" in title) {
    return (title as { absolute?: string }).absolute;
  }

  return undefined;
}

function getTwitterImageUrl(pageMetadata: ReturnType<typeof buildPageMetadata>) {
  const images = pageMetadata.twitter?.images;

  if (!images) {
    return undefined;
  }

  const imageList = Array.isArray(images) ? images : [images];
  const image = imageList[0];

  if (typeof image === "string") {
    return image;
  }

  if (image instanceof URL) {
    return image.toString();
  }

  return image?.url?.toString();
}

test("builds absolute URLs from relative paths", () => {
  assert.equal(absoluteUrl("/rotasal"), "https://avernsys.com/rotasal");
  assert.equal(absoluteUrl("contact"), "https://avernsys.com/contact");
});

test("resolvePageTitle appends brand only when not already in title", () => {
  assert.equal(
    resolvePageTitle(getPageSeo("en", "home")),
    getPageSeo("en", "home").title,
  );
  assert.equal(resolvePageTitle(getPageSeo("en", "about")), "About Avernsys");
  assert.equal(
    resolvePageTitle(getPageSeo("en", "primeroute")),
    "Rotasal | Last-Mile Route Optimization Software | Avernsys",
  );
});

test("builds English route metadata with localized alternates", () => {
  const metadata = buildPageMetadata("en", "primeroute");

  assert.equal(
    getMetadataAbsoluteTitle(metadata),
    "Rotasal | Last-Mile Route Optimization Software | Avernsys",
  );
  assert.equal(
    metadata.alternates?.canonical,
    "https://avernsys.com/rotasal",
  );
  assert.equal(
    metadata.alternates?.languages?.tr,
    "https://avernsys.com/tr/rotasal",
  );
  assert.equal(
    metadata.alternates?.languages?.de,
    "https://avernsys.com/de/rotasal",
  );
  assert.equal(
    metadata.alternates?.languages?.nl,
    "https://avernsys.com/nl/rotasal",
  );
  assert.equal(
    getOpenGraphImageUrl(metadata),
    "https://avernsys.com/rotasal/opengraph-image",
  );
  assert.equal(
    getTwitterImageUrl(metadata),
    "https://avernsys.com/rotasal/twitter-image",
  );
});

test("builds German route metadata with German locale and assets", () => {
  const metadata = buildPageMetadata("de", "primeroute");

  assert.equal(
    getMetadataAbsoluteTitle(metadata),
    "Rotasal | Software zur Last-Mile-Routenoptimierung | Avernsys",
  );
  assert.equal(
    metadata.alternates?.canonical,
    "https://avernsys.com/de/rotasal",
  );
  assert.equal(metadata.openGraph?.locale, "de_DE");
  assert.equal(
    getOpenGraphImageUrl(metadata),
    "https://avernsys.com/de/rotasal/opengraph-image",
  );
  assert.equal(
    getTwitterImageUrl(metadata),
    "https://avernsys.com/de/rotasal/twitter-image",
  );
});

test("builds Turkish route metadata with Turkish locale and assets", () => {
  const metadata = buildPageMetadata("tr", "primeroute");

  assert.equal(
    getMetadataAbsoluteTitle(metadata),
    "Rotasal | Son Kilometre Rota Optimizasyon Yazılımı | Avernsys",
  );
  assert.equal(
    metadata.alternates?.canonical,
    "https://avernsys.com/tr/rotasal",
  );
  assert.equal(metadata.openGraph?.locale, "tr_TR");
  assert.equal(
    getOpenGraphImageUrl(metadata),
    "https://avernsys.com/tr/rotasal/opengraph-image",
  );
  assert.equal(
    getTwitterImageUrl(metadata),
    "https://avernsys.com/tr/rotasal/twitter-image",
  );
});

test("builds breadcrumb schema with locale-aware URLs", () => {
  const breadcrumb = buildBreadcrumbJsonLd("tr", [
    { name: "Ana sayfa", path: "/" },
    { name: "Rotasal", path: "/rotasal" },
  ]);

  assert.equal(breadcrumb.itemListElement.length, 2);
  assert.equal(breadcrumb.itemListElement[1].position, 2);
  assert.equal(
    breadcrumb.itemListElement[1].item,
    "https://avernsys.com/tr/rotasal",
  );
});

test("organization JSON-LD includes the company LinkedIn profile", () => {
  const org = buildOrganizationJsonLd("en") as Record<string, unknown>;

  assert.deepEqual(org.sameAs, [
    "https://www.linkedin.com/company/avernsys/",
  ]);
});

test("organization JSON-LD lists all supported languages in the contact point", () => {
  const org = buildOrganizationJsonLd("en") as {
    contactPoint?: Array<{ availableLanguage?: string[] }>;
  };

  assert.deepEqual(org.contactPoint?.[0]?.availableLanguage, [
    "en",
    "tr",
    "de",
    "nl",
  ]);
});

test("organization and WebSite JSON-LD use stable ids and localized descriptions", () => {
  const englishOrg = buildOrganizationJsonLd("en") as Record<string, unknown>;
  const turkishSite = buildWebSiteJsonLd("tr") as Record<string, unknown>;

  assert.equal(englishOrg["@id"], schemaOrganizationId());
  assert.equal(englishOrg.description, siteConfig.description);
  assert.deepEqual(englishOrg.logo, {
    "@type": "ImageObject",
    url: absoluteUrl(brandLogo.src),
  });
  assert.deepEqual(turkishSite.publisher, { "@id": schemaOrganizationId() });
  assert.equal(turkishSite["@id"], schemaWebSiteId("tr"));
  assert.equal(
    turkishSite.description,
    getDictionary("tr").site.description,
  );
});

test("WebPage JSON-LD references localized WebSite and main entity ids", () => {
  const page = buildWebPageJsonLd("tr", "primeroute", {
    mainEntityId: schemaSoftwareApplicationId("/tr/rotasal"),
  }) as Record<string, unknown>;

  assert.deepEqual(page.isPartOf, { "@id": schemaWebSiteId("tr") });
  assert.deepEqual(page.about, { "@id": schemaOrganizationId() });
  assert.deepEqual(page.mainEntity, {
    "@id": schemaSoftwareApplicationId("/tr/rotasal"),
  });
});

test("SoftwareApplication JSON-LD includes localized featureList and publisher", () => {
  const app = buildSoftwareApplicationJsonLd("tr", "primeroute") as Record<
    string,
    unknown
  >;

  assert.ok(Array.isArray(app.featureList));
  assert.equal((app.featureList as string[]).length >= 3, true);
  assert.deepEqual(app.publisher, { "@id": schemaOrganizationId() });
  assert.equal(app.url, "https://avernsys.com/tr/rotasal");
});

test("home ItemList JSON-LD lists localized product URLs", () => {
  const list = buildHomeItemListJsonLd("tr") as {
    itemListElement: Array<{ item?: string }>;
  };

  assert.equal(list.itemListElement.length, 1);
  assert.equal(list.itemListElement[0]?.item, absoluteUrl("/tr/rotasal"));
});

test("founder Person JSON-LD uses localized bios", () => {
  const person = buildFounderPersonJsonLd("tr", founders[0]) as Record<
    string,
    unknown
  >;

  assert.equal(person["@id"], schemaFounderPersonId(founders[0]));
  assert.deepEqual(person.worksFor, { "@id": schemaOrganizationId() });
  assert.equal(person.image, absoluteUrl(founders[0].photo.src));
  assert.deepEqual(person.sameAs, [
    "https://www.linkedin.com/in/doruk-yalcin/",
  ]);
  assert.match(String(person.description), /Amazon/);
});

test("founder profile metadata uses portrait images and localized alternates", () => {
  const metadata = buildFounderProfileMetadata("tr", founders[0]);

  assert.equal(
    getMetadataAbsoluteTitle(metadata),
    "Doruk Yalcin | Avernsys Co-Founder",
  );
  assert.equal(
    metadata.alternates?.canonical,
    "https://avernsys.com/tr/about/doruk-yalcin",
  );
  assert.equal(
    metadata.alternates?.languages?.en,
    "https://avernsys.com/about/doruk-yalcin",
  );
  assert.equal(
    getOpenGraphImageUrl(metadata),
    "https://avernsys.com/founders/doruk-yalcin-avernsys-co-founder.jpg",
  );
});

test("founder profile JSON-LD marks the founder as the main entity", () => {
  const profilePage = buildFounderProfilePageJsonLd("en", founders[1]) as {
    mainEntity?: Record<string, unknown>;
  };

  assert.equal(
    profilePage.mainEntity?.["@id"],
    schemaFounderPersonId(founders[1]),
  );
  assert.equal(profilePage.mainEntity?.name, "Murat Baki");
  assert.deepEqual(profilePage.mainEntity?.sameAs, [
    "https://www.linkedin.com/in/murat-baki-mb/",
  ]);
});

test("JSON-LD builders round-trip through JSON.stringify", () => {
  const nodes = [
    buildOrganizationJsonLd("en"),
    buildWebSiteJsonLd("en"),
    buildWebPageJsonLd("en", "contact"),
    buildHomeItemListJsonLd("tr"),
    buildSoftwareApplicationJsonLd("en", "primeroute"),
    buildFounderPersonJsonLd("en", founders[1]),
    buildFounderProfilePageJsonLd("en", founders[0]),
    buildBreadcrumbJsonLd("en", [{ name: "Home", path: "/" }]),
  ];

  for (const node of nodes) {
    JSON.parse(JSON.stringify(node));
  }
});

test("builds verification metadata from env values", () => {
  const verification = buildVerificationMetadata(
    createEnv({
      NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: "google-token",
      NEXT_PUBLIC_BING_SITE_VERIFICATION: "bing-token",
    }),
  );

  assert.equal(verification?.google, "google-token");
  assert.equal(verification?.other?.["msvalidate.01"], "bing-token");
});

test("returns all indexable pages across all locales", () => {
  const pages = getIndexablePages();

  assert.equal(pages.length, 24);
  assert.ok(
    pages.some((page) => page.locale === "en" && page.path === "/contact"),
  );
  assert.ok(
    pages.some((page) => page.locale === "tr" && page.path === "/tr/contact"),
  );
  assert.ok(
    pages.some((page) => page.locale === "de" && page.path === "/de/contact"),
  );
  assert.ok(
    pages.some((page) => page.locale === "nl" && page.path === "/nl/contact"),
  );
  assert.equal(
    pages.some((page) => page.path.includes("chaptersys")),
    false,
  );
  assert.ok(
    pages.some(
      (page) =>
        page.path === "/about/doruk-yalcin" &&
        page.images?.includes(absoluteUrl(founders[0].photo.src)),
    ),
  );
});
