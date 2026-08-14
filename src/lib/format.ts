import { getDictionary, type Locale } from "@/lib/i18n";

// "2026-08-13" -> "Aug 13, 2026" / "13. Aug. 2026" / ... in the page language.
export function formatOpeningDate(locale: Locale, isoDate: string): string {
  const htmlLang = getDictionary(locale).language.htmlLang;
  try {
    return new Intl.DateTimeFormat(htmlLang, {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(`${isoDate}T12:00:00.000Z`));
  } catch {
    return isoDate;
  }
}

// "TR" -> "Turkey" / "Türkei" / "Turkije" / "Türkiye"; falls back to the code.
export function formatRegionName(locale: Locale, countryCode: string): string {
  const htmlLang = getDictionary(locale).language.htmlLang;
  try {
    return (
      new Intl.DisplayNames([htmlLang], { type: "region" }).of(countryCode) ??
      countryCode
    );
  } catch {
    return countryCode;
  }
}
