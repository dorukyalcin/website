import { StructuredData } from "@/components/StructuredData";
import { AboutPageView } from "@/components/pages/AboutPageView";
import { CareersPageView } from "@/components/pages/CareersPageView";
import { ContactPageView } from "@/components/pages/ContactPageView";
import { FounderProfilePageView } from "@/components/pages/FounderProfilePageView";
import { HomePageView } from "@/components/pages/HomePageView";
import { OpeningPageView } from "@/components/pages/OpeningPageView";
import { PrimeRoutePageView } from "@/components/pages/PrimeRoutePageView";
import type { FounderProfile } from "@/lib/founders";
import { getPageLabel, getPagePath, type Locale } from "@/lib/i18n";
import type { Opening } from "@/lib/openings";
import {
  buildAllFoundersPersonJsonLd,
  buildBaseStructuredData,
  buildBreadcrumbJsonLd,
  buildFounderProfilePageJsonLd,
  buildHomeItemListJsonLd,
  buildJobPostingJsonLd,
  buildSoftwareApplicationJsonLd,
  buildWebPageJsonLd,
  schemaOrganizationId,
  schemaSoftwareApplicationId,
} from "@/lib/seo";

export function renderLocalizedHomePage(locale: Locale) {
  return (
    <>
      <StructuredData
        data={[
          ...buildBaseStructuredData(locale),
          buildWebPageJsonLd(locale, "home", {
            mainEntityId: schemaOrganizationId(),
          }),
          ...buildAllFoundersPersonJsonLd(locale),
          buildHomeItemListJsonLd(locale),
        ]}
      />
      <HomePageView locale={locale} />
    </>
  );
}

export function renderLocalizedAboutPage(locale: Locale) {
  const homeLabel = getPageLabel(locale, "home");
  const currentLabel = getPageLabel(locale, "about");

  return (
    <>
      <StructuredData
        data={[
          ...buildBaseStructuredData(locale),
          buildWebPageJsonLd(locale, "about", {
            mainEntityId: schemaOrganizationId(),
          }),
          ...buildAllFoundersPersonJsonLd(locale),
          buildBreadcrumbJsonLd(locale, [
            { name: homeLabel, path: "/" },
            { name: currentLabel, path: "/about" },
          ]),
        ]}
      />
      <AboutPageView locale={locale} />
    </>
  );
}

export function renderLocalizedFounderProfilePage(
  locale: Locale,
  founder: FounderProfile,
) {
  const homeLabel = getPageLabel(locale, "home");
  const aboutLabel = getPageLabel(locale, "about");

  return (
    <>
      <StructuredData
        data={[
          ...buildBaseStructuredData(locale),
          buildFounderProfilePageJsonLd(locale, founder),
          buildBreadcrumbJsonLd(locale, [
            { name: homeLabel, path: "/" },
            { name: aboutLabel, path: "/about" },
            { name: founder.name, path: `/about/${founder.slug}` },
          ]),
        ]}
      />
      <FounderProfilePageView locale={locale} founder={founder} />
    </>
  );
}

export function renderLocalizedContactPage(locale: Locale) {
  const homeLabel = getPageLabel(locale, "home");
  const currentLabel = getPageLabel(locale, "contact");

  return (
    <>
      <StructuredData
        data={[
          ...buildBaseStructuredData(locale),
          buildWebPageJsonLd(locale, "contact"),
          buildBreadcrumbJsonLd(locale, [
            { name: homeLabel, path: "/" },
            { name: currentLabel, path: "/contact" },
          ]),
        ]}
      />
      <ContactPageView locale={locale} />
    </>
  );
}

export function renderLocalizedCareersPage(locale: Locale) {
  const homeLabel = getPageLabel(locale, "home");
  const currentLabel = getPageLabel(locale, "careers");

  return (
    <>
      <StructuredData
        data={[
          ...buildBaseStructuredData(locale),
          buildWebPageJsonLd(locale, "careers"),
          buildBreadcrumbJsonLd(locale, [
            { name: homeLabel, path: "/" },
            { name: currentLabel, path: "/careers" },
          ]),
        ]}
      />
      <CareersPageView locale={locale} />
    </>
  );
}

export function renderLocalizedOpeningPage(locale: Locale, opening: Opening) {
  const homeLabel = getPageLabel(locale, "home");
  const careersLabel = getPageLabel(locale, "careers");
  const structuredData = [
    ...buildBaseStructuredData(locale),
    ...(opening.status === "open"
      ? [buildJobPostingJsonLd(locale, opening)]
      : []),
    buildBreadcrumbJsonLd(locale, [
      { name: homeLabel, path: "/" },
      { name: careersLabel, path: "/careers" },
      {
        name: opening.content[locale].title,
        path: `/careers/${opening.slug}`,
      },
    ]),
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <OpeningPageView locale={locale} opening={opening} />
    </>
  );
}

export function renderLocalizedPrimeRoutePage(locale: Locale) {
  const homeLabel = getPageLabel(locale, "home");
  const currentLabel = getPageLabel(locale, "primeroute");
  const applicationId = schemaSoftwareApplicationId(
    getPagePath(locale, "primeroute"),
  );

  return (
    <>
      <StructuredData
        data={[
          ...buildBaseStructuredData(locale),
          buildWebPageJsonLd(locale, "primeroute", {
            mainEntityId: applicationId,
          }),
          buildSoftwareApplicationJsonLd(locale, "primeroute"),
          buildBreadcrumbJsonLd(locale, [
            { name: homeLabel, path: "/" },
            { name: currentLabel, path: "/rotasal" },
          ]),
        ]}
      />
      <PrimeRoutePageView locale={locale} />
    </>
  );
}
