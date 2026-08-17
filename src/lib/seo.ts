import type { Metadata } from "next";
import {
  defaultLocale,
  getAlternateLanguageLinks,
  getDictionary,
  getPagePath,
  localizePath,
  locales,
  pageBasePaths,
  pageKeys,
  type Locale,
  type PageKey,
} from "@/lib/i18n";
import { brandLogo } from "@/lib/brand";
import {
  companyAddress,
  companyEmails,
  companyLegalName,
  companyOffice,
  companyPhone,
} from "@/lib/company";
import { founders, type FounderProfile } from "@/lib/founders";
import { getOpenings, type Opening } from "@/lib/openings";

function parseSameAsUrls(raw: string | undefined): string[] {
  if (!raw?.trim()) {
    return [];
  }

  return raw
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

export const siteConfig = {
  name: "Avernsys",
  legalName: companyLegalName,
  alternateName: "Avernsys Software",
  domain: "avernsys.com",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    "https://avernsys.com",
  description: getDictionary(defaultLocale).site.description,
  sameAs: Array.from(
    new Set([
      "https://www.linkedin.com/company/avernsys/",
      ...parseSameAsUrls(process.env.NEXT_PUBLIC_ORGANIZATION_SAME_AS),
    ]),
  ),
};

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  lastModified?: string;
  socialImageAlt: string;
  images?: string[];
};

function buildAlternateLanguageMetadata(path: string) {
  return Object.fromEntries(
    Object.entries(getAlternateLanguageLinks(path)).map(([language, url]) => [
      language,
      absoluteUrl(url),
    ]),
  );
}

const lastModifiedByPage: Record<PageKey, string> = {
  home: "2026-08-17",
  about: "2026-08-17",
  contact: "2026-08-17",
  careers: "2026-08-17",
  primeroute: "2026-08-17",
};

export type Breadcrumb = {
  name: string;
  path: string;
};

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, `${siteConfig.url}/`).toString();
}

export function schemaOrganizationId() {
  return `${siteConfig.url}/#organization`;
}

export function schemaWebSiteId(locale: Locale = defaultLocale) {
  return `${absoluteUrl(getPagePath(locale, "home"))}#website`;
}

export function schemaWebPageId(path: string) {
  return `${absoluteUrl(path)}#webpage`;
}

export function schemaSoftwareApplicationId(path: string) {
  return `${absoluteUrl(path)}#softwareapplication`;
}

export function getFounderProfilePath(
  locale: Locale,
  founder: FounderProfile,
) {
  return localizePath(locale, `/about/${founder.slug}`);
}

export function schemaFounderPersonId(founder: FounderProfile) {
  return `${absoluteUrl(`/about/${founder.slug}`)}#person`;
}

function schemaFounderProfilePageId(locale: Locale, founder: FounderProfile) {
  return `${absoluteUrl(getFounderProfilePath(locale, founder))}#profilepage`;
}

function getOpenGraphImage(locale: Locale, pageKey: PageKey) {
  switch (pageKey) {
    case "primeroute":
      return absoluteUrl(localizePath(locale, "/rotasal/opengraph-image"));
    default:
      return absoluteUrl(localizePath(locale, "/opengraph-image"));
  }
}

function getTwitterImage(locale: Locale, pageKey: PageKey) {
  switch (pageKey) {
    case "primeroute":
      return absoluteUrl(localizePath(locale, "/rotasal/twitter-image"));
    default:
      return absoluteUrl(localizePath(locale, "/twitter-image"));
  }
}

function getPageImages(pageKey: PageKey) {
  if (pageKey !== "about") {
    return [];
  }

  return founders.map((founder) => absoluteUrl(founder.photo.src));
}

export function getPageSeo(locale: Locale, pageKey: PageKey): PageSeo {
  const dictionary = getDictionary(locale);
  const page = dictionary.seo[pageKey];

  return {
    title: page.title,
    description: page.description,
    path: getPagePath(locale, pageKey),
    keywords: [...page.keywords],
    lastModified: lastModifiedByPage[pageKey],
    socialImageAlt: page.socialImageAlt,
    images: getPageImages(pageKey),
  };
}

export function getFounderProfileSeo(
  locale: Locale,
  founder: FounderProfile,
): PageSeo {
  const dictionary = getDictionary(locale);
  const profile = dictionary.pages.about.founders.people[founder.key];

  return {
    title: `${founder.name} | Avernsys Founder`,
    description: `${founder.name}, ${profile.role} of Avernsys. ${profile.bio}`,
    path: getFounderProfilePath(locale, founder),
    keywords: [
      founder.name,
      `${founder.name} Avernsys`,
      `${founder.name} founder`,
      "Avernsys founder",
      "Rotasal founder",
    ],
    lastModified: "2026-08-17",
    socialImageAlt: founder.photo.alt,
    images: [absoluteUrl(founder.photo.src)],
  };
}

export function resolvePageTitle(page: PageSeo): string {
  if (page.path === "/") {
    return page.title;
  }

  if (page.title.includes(siteConfig.name)) {
    return page.title;
  }

  return `${page.title} | ${siteConfig.name}`;
}

export function buildPageMetadata(
  locale: Locale,
  pageKey: PageKey,
): Metadata {
  const dictionary = getDictionary(locale);
  const page = getPageSeo(locale, pageKey);
  const canonical = absoluteUrl(page.path);
  const resolvedTitle = resolvePageTitle(page);
  const basePath = pageBasePaths[pageKey];

  return {
    title: { absolute: resolvedTitle },
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical,
      languages: buildAlternateLanguageMetadata(basePath),
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: siteConfig.name,
      locale: dictionary.language.ogLocale,
      title: resolvedTitle,
      description: page.description,
      images: [
        {
          url: getOpenGraphImage(locale, pageKey),
          width: 1200,
          height: 630,
          alt: page.socialImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: page.description,
      images: [getTwitterImage(locale, pageKey)],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function buildFounderProfileMetadata(
  locale: Locale,
  founder: FounderProfile,
): Metadata {
  const dictionary = getDictionary(locale);
  const page = getFounderProfileSeo(locale, founder);
  const canonical = absoluteUrl(page.path);
  const profileBasePath = `/about/${founder.slug}`;
  const profileImage = absoluteUrl(founder.photo.src);

  return {
    title: { absolute: page.title },
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical,
      languages: buildAlternateLanguageMetadata(profileBasePath),
    },
    openGraph: {
      type: "profile",
      url: canonical,
      siteName: siteConfig.name,
      locale: dictionary.language.ogLocale,
      title: page.title,
      description: page.description,
      images: [
        {
          url: profileImage,
          alt: founder.photo.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [profileImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function getOpeningPath(locale: Locale, opening: Opening) {
  return localizePath(locale, `/careers/${opening.slug}`);
}

export function schemaJobPostingId(opening: Opening) {
  return `${absoluteUrl(`/careers/${opening.slug}`)}#jobposting`;
}

export function getOpeningSeo(locale: Locale, opening: Opening): PageSeo {
  const dictionary = getDictionary(locale);
  const content = opening.content[locale];

  return {
    title: `${content.title} | ${siteConfig.name}`,
    description: content.summary,
    path: getOpeningPath(locale, opening),
    keywords: [
      content.title,
      `${siteConfig.name} ${dictionary.navigation.links.find((link) => link.key === "careers")?.label ?? "Careers"}`,
      ...dictionary.seo.careers.keywords.slice(0, 3),
    ],
    lastModified: opening.postedAt,
    socialImageAlt: dictionary.seo.careers.socialImageAlt,
  };
}

export function buildOpeningMetadata(
  locale: Locale,
  opening: Opening,
): Metadata {
  const dictionary = getDictionary(locale);
  const page = getOpeningSeo(locale, opening);
  const canonical = absoluteUrl(page.path);
  const basePath = `/careers/${opening.slug}`;

  return {
    title: { absolute: page.title },
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical,
      languages: buildAlternateLanguageMetadata(basePath),
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: siteConfig.name,
      locale: dictionary.language.ogLocale,
      title: page.title,
      description: page.description,
      images: [
        {
          url: getOpenGraphImage(locale, "careers"),
          width: 1200,
          height: 630,
          alt: page.socialImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [getTwitterImage(locale, "careers")],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function buildJobPostingDescriptionHtml(locale: Locale, opening: Opening) {
  const dictionary = getDictionary(locale);
  const sections = dictionary.pages.careers.opening.sections;
  const content = opening.content[locale];

  const parts = content.intro.map(
    (paragraph) => `<p>${escapeHtml(paragraph)}</p>`,
  );

  const listSections: [string, readonly string[] | undefined][] = [
    [sections.responsibilities, content.responsibilities],
    [sections.requirements, content.requirements],
    [sections.niceToHave, content.niceToHave],
    [sections.offer, content.offer],
  ];

  for (const [heading, items] of listSections) {
    if (!items || items.length === 0) {
      continue;
    }
    parts.push(
      `<p><strong>${escapeHtml(heading)}</strong></p><ul>${items
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join("")}</ul>`,
    );
  }

  return parts.join("");
}

export function buildJobPostingJsonLd(locale: Locale, opening: Opening) {
  const dictionary = getDictionary(locale);
  const content = opening.content[locale];

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "@id": schemaJobPostingId(opening),
    title: content.title,
    description: buildJobPostingDescriptionHtml(locale, opening),
    datePosted: opening.postedAt,
    ...(opening.validThrough ? { validThrough: opening.validThrough } : {}),
    employmentType: opening.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      "@id": schemaOrganizationId(),
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    identifier: {
      "@type": "PropertyValue",
      name: siteConfig.name,
      value: opening.slug,
    },
    ...buildJobLocation(opening),
    ...(opening.salary
      ? {
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: opening.salary.currency,
            value: {
              "@type": "QuantitativeValue",
              ...(opening.salary.min === opening.salary.max
                ? { value: opening.salary.min }
                : {
                    minValue: opening.salary.min,
                    maxValue: opening.salary.max,
                  }),
              unitText: opening.salary.unitText,
            },
          },
        }
      : {}),
    applicationContact: {
      "@type": "ContactPoint",
      contactType: "recruiting",
      email: companyEmails.careers,
      telephone: companyPhone.e164,
    },
    directApply: true,
    inLanguage: dictionary.language.htmlLang,
  };
}

function buildJobLocation(opening: Opening) {
  const officePlace = {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      ...(opening.city ? { addressLocality: opening.city } : {}),
      ...(opening.region ? { addressRegion: opening.region } : {}),
      addressCountry: opening.countryCode,
    },
  };

  if (opening.workplaceType !== "REMOTE") {
    return { jobLocation: officePlace };
  }

  // Remote from anywhere: Google requires either applicant location
  // requirements or a job location, so anchor worldwide roles to the office.
  if (opening.remoteEligibleRegions === "WORLDWIDE") {
    return {
      jobLocationType: "TELECOMMUTE",
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: companyOffice.city,
          addressRegion: companyOffice.region,
          addressCountry: companyOffice.countryCode,
        },
      },
    };
  }

  return {
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: (
      opening.remoteEligibleRegions ?? [opening.countryCode]
    ).map((countryCode) => ({
      "@type": "Country",
      name: countryCode,
    })),
  };
}

export function buildOrganizationJsonLd(locale: Locale) {
  const dictionary = getDictionary(locale);

  const availableLanguage = locales.map(
    (supportedLocale) => getDictionary(supportedLocale).language.htmlLang,
  );
  const contactPageUrl = absoluteUrl(getPagePath(locale, "contact"));

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": schemaOrganizationId(),
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.alternateName,
    disambiguatingDescription:
      dictionary.structuredData.organizationDisambiguation,
    url: siteConfig.url,
    description: dictionary.site.description,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(brandLogo.src),
    },
    ...(siteConfig.sameAs.length > 0 ? { sameAs: siteConfig.sameAs } : {}),
    founder: founders.map((founder) => ({
      "@id": schemaFounderPersonId(founder),
    })),
    knowsAbout: [...dictionary.structuredData.organizationKnowsAbout],
    email: companyEmails.general,
    telephone: companyPhone.e164,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyAddress.streetAddress,
      addressLocality: companyAddress.addressLocality,
      addressRegion: companyAddress.addressRegion,
      postalCode: companyAddress.postalCode,
      addressCountry: companyAddress.addressCountry,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: companyEmails.sales,
        url: contactPageUrl,
        availableLanguage,
      },
      {
        "@type": "ContactPoint",
        contactType: "recruiting",
        email: companyEmails.careers,
        telephone: companyPhone.e164,
        url: absoluteUrl(getPagePath(locale, "careers")),
        availableLanguage,
      },
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: companyEmails.general,
        url: contactPageUrl,
        availableLanguage,
      },
    ],
  };
}

export function buildWebSiteJsonLd(locale: Locale) {
  const dictionary = getDictionary(locale);

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": schemaWebSiteId(locale),
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    url: absoluteUrl(getPagePath(locale, "home")),
    description: dictionary.site.description,
    inLanguage: dictionary.language.htmlLang,
    publisher: { "@id": schemaOrganizationId() },
  };
}

export function buildWebPageJsonLd(
  locale: Locale,
  pageKey: PageKey,
  options?: { mainEntityId?: string },
) {
  const dictionary = getDictionary(locale);
  const page = getPageSeo(locale, pageKey);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": schemaWebPageId(page.path),
    name: resolvePageTitle(page),
    description: page.description,
    url: absoluteUrl(page.path),
    inLanguage: dictionary.language.htmlLang,
    isPartOf: { "@id": schemaWebSiteId(locale) },
    about: { "@id": schemaOrganizationId() },
    ...(options?.mainEntityId
      ? {
          mainEntity: {
            "@id": options.mainEntityId,
          },
        }
      : {}),
  };
}

export function buildHomeItemListJsonLd(locale: Locale) {
  const dictionary = getDictionary(locale);

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${absoluteUrl(getPagePath(locale, "home"))}#product-list`,
    itemListElement: dictionary.pages.home.products.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(getPagePath(locale, item.key as PageKey)),
    })),
  };
}

export function buildBaseStructuredData(locale: Locale) {
  return [buildOrganizationJsonLd(locale), buildWebSiteJsonLd(locale)];
}

export function buildFounderPersonJsonLd(
  locale: Locale,
  founder: FounderProfile,
) {
  return {
    "@context": "https://schema.org",
    ...buildFounderPersonNode(locale, founder),
  };
}

function buildFounderPersonNode(locale: Locale, founder: FounderProfile) {
  const dictionary = getDictionary(locale);
  const profile = dictionary.pages.about.founders.people[founder.key];

  return {
    "@type": "Person",
    "@id": schemaFounderPersonId(founder),
    name: founder.name,
    ...(founder.alternateNames && founder.alternateNames.length > 0
      ? {
          alternateName:
            founder.alternateNames.length === 1
              ? founder.alternateNames[0]
              : [...founder.alternateNames],
        }
      : {}),
    givenName: founder.givenName,
    familyName: founder.familyName,
    url: absoluteUrl(getFounderProfilePath(defaultLocale, founder)),
    jobTitle: `${profile.role} of ${siteConfig.name}`,
    description: profile.bio,
    image: absoluteUrl(founder.photo.src),
    sameAs: [...founder.sameAs],
    knowsAbout: [...founder.knowsAbout],
    worksFor: { "@id": schemaOrganizationId() },
    ...(founder.affiliation
      ? {
          affiliation: {
            "@type": "Organization",
            name: founder.affiliation.name,
            ...(founder.affiliation.sameAs
              ? { sameAs: founder.affiliation.sameAs }
              : {}),
          },
        }
      : {}),
  };
}

export function buildAllFoundersPersonJsonLd(locale: Locale) {
  return founders.map((founder) => buildFounderPersonJsonLd(locale, founder));
}

export function buildFounderProfilePageJsonLd(
  locale: Locale,
  founder: FounderProfile,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": schemaFounderProfilePageId(locale, founder),
    url: absoluteUrl(getFounderProfilePath(locale, founder)),
    name: `${founder.name} | ${siteConfig.name}`,
    inLanguage: getDictionary(locale).language.htmlLang,
    mainEntity: buildFounderPersonNode(locale, founder),
  };
}

export function buildBreadcrumbJsonLd(locale: Locale, items: Breadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(localizePath(locale, item.path)),
    })),
  };
}

export function buildSoftwareApplicationJsonLd(
  locale: Locale,
  pageKey: Extract<PageKey, "primeroute">,
) {
  const dictionary = getDictionary(locale);
  const page = getPageSeo(locale, pageKey);
  const category = "LogisticsApplication";
  const structuredData = dictionary.structuredData.softwareApplications[pageKey];

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": schemaSoftwareApplicationId(page.path),
    name: "Rotasal",
    applicationCategory: category,
    applicationSubCategory: structuredData.applicationSubCategory,
    operatingSystem: "Web",
    description: page.description,
    featureList: [...structuredData.featureList],
    url: absoluteUrl(page.path),
    publisher: { "@id": schemaOrganizationId() },
  };
}

export function buildVerificationMetadata(
  env: NodeJS.ProcessEnv = process.env,
): Metadata["verification"] {
  const google = env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  const bing = env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

  return {
    google,
    other: bing
      ? {
          "msvalidate.01": bing,
        }
      : undefined,
  };
}

export function getIndexablePages() {
  const pages = locales.flatMap((locale) =>
    pageKeys.map((pageKey) => {
      const page = getPageSeo(locale, pageKey);
      return {
        ...page,
        locale,
        pageKey,
        url: absoluteUrl(page.path),
      };
    }),
  );

  const founderProfilePages = locales.flatMap((locale) =>
    founders.map((founder) => {
      const page = getFounderProfileSeo(locale, founder);
      return {
        ...page,
        locale,
        pageKey: "founderProfile" as const,
        founderKey: founder.key,
        url: absoluteUrl(page.path),
      };
    }),
  );

  const openingPages = locales.flatMap((locale) =>
    getOpenings().map((opening) => {
      const page = getOpeningSeo(locale, opening);
      return {
        ...page,
        locale,
        pageKey: "opening" as const,
        openingSlug: opening.slug,
        url: absoluteUrl(page.path),
      };
    }),
  );

  return [...pages, ...founderProfilePages, ...openingPages];
}
