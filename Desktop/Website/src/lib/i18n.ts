import en from "@/dictionaries/en.json";
import de from "@/dictionaries/de.json";
import nl from "@/dictionaries/nl.json";
import tr from "@/dictionaries/tr.json";

export const locales = ["en", "tr", "de", "nl"] as const;

export type Locale = (typeof locales)[number];
export type Dictionary = typeof en;

export const defaultLocale: Locale = "en";
export const prefixedLocales = locales.filter(
  (locale) => locale !== defaultLocale,
) as Exclude<Locale, typeof defaultLocale>[];

const dictionaries = {
  en,
  de,
  nl,
  tr,
} as const satisfies Record<Locale, Dictionary>;

export const pageKeys = [
  "home",
  "about",
  "contact",
  "primeroute",
] as const;

export type PageKey = (typeof pageKeys)[number];
export type PageLinkKey = PageKey;

export const pageBasePaths: Record<PageKey, string> = {
  home: "/",
  about: "/about",
  contact: "/contact",
  primeroute: "/rotasal",
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizePath(locale: Locale, path: string): string {
  const normalized = path === "/" ? "/" : path.replace(/\/+$/, "");
  if (locale === defaultLocale) {
    return normalized;
  }
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

export function getPagePath(locale: Locale, pageKey: PageKey): string {
  return localizePath(locale, pageBasePaths[pageKey]);
}

export function getPageLabel(locale: Locale, pageKey: PageKey): string {
  const dictionary = getDictionary(locale);

  if (pageKey === "home") {
    return dictionary.pages.notFound.links.find((item) => item.key === "home")
      ?.label || dictionary.site.name;
  }

  if (pageKey === "primeroute") {
    return dictionary.pages.home.products.items[0]?.name || "Rotasal";
  }

  return (
    dictionary.navigation.links.find((item) => item.key === pageKey)?.label ||
    pageKey
  );
}

function getLocalePrefixFromPathname(pathname: string) {
  const [firstSegment] = pathname.split("/").filter(Boolean);

  if (
    firstSegment &&
    isLocale(firstSegment) &&
    firstSegment !== defaultLocale
  ) {
    return firstSegment;
  }

  return undefined;
}

export function getPathnameLocale(pathname: string): Locale {
  return getLocalePrefixFromPathname(pathname) ?? defaultLocale;
}

export function stripLocaleFromPathname(pathname: string): string {
  const normalizedPathname = pathname || "/";
  const localePrefix = getLocalePrefixFromPathname(normalizedPathname);

  if (!localePrefix) {
    return normalizedPathname;
  }

  return normalizedPathname.slice(localePrefix.length + 1) || "/";
}

export function switchLocalePathname(
  pathname: string,
  targetLocale: Locale,
): string {
  return localizePath(targetLocale, stripLocaleFromPathname(pathname));
}

export function getAlternateLanguageLinks(path: string) {
  return {
    ...Object.fromEntries(
      locales.map((locale) => [locale, localizePath(locale, path)]),
    ),
    "x-default": localizePath(defaultLocale, path),
  };
}
