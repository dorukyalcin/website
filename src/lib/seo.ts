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
import { founders, type FounderProfile } from "@/lib/founders";

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
  legalName: "Avernsys",
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
  home: "2026-04-21",
  about: "2026-04-21",
  contact: "2026-04-21",
  primeroute: "2026-04-21",
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
    title: `${founder.name} | Avernsys Co-Founder`,
    description: `${founder.name} is a ${profile.role.toLowerCase()} of Avernsys. ${profile.bio}`,
    path: getFounderProfilePath(locale, founder),
    keywords: [
      founder.name,
      `${founder.name} Avernsys`,
      `${founder.name} co-founder`,
      "Avernsys founder",
      "Rotasal founder",
    ],
    lastModified: "2026-04-21",
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

export function buildOrganizationJsonLd(locale: Locale) {
  const dictionary = getDictionary(locale);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": schemaOrganizationId(),
    name: siteConfig.legalName,
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
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        url: absoluteUrl(getPagePath(locale, "contact")),
        availableLanguage: locales.map(
          (supportedLocale) => getDictionary(supportedLocale).language.htmlLang,
        ),
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

  return [...pages, ...founderProfilePages];
}
