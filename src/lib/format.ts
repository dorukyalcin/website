import { getDictionary, type Locale } from "@/lib/i18n";
import type { Opening, OpeningSalary } from "@/lib/openings";

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

function formatMoney(locale: Locale, currency: string, amount: number): string {
  const htmlLang = getDictionary(locale).language.htmlLang;
  try {
    return new Intl.NumberFormat(htmlLang, {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `${currency} ${amount}`;
  }
}

// { USD, 180000, YEAR } -> "$180,000 / yr" / "180.000 $ / Jahr" / ...
// A range renders as "$180,000 – $200,000 / yr".
export function formatSalary(locale: Locale, salary: OpeningSalary): string {
  const unit = getDictionary(locale).pages.careers.labels.salaryUnit[
    salary.unitText
  ];
  const amount =
    salary.min === salary.max
      ? formatMoney(locale, salary.currency, salary.min)
      : `${formatMoney(locale, salary.currency, salary.min)} – ${formatMoney(
          locale,
          salary.currency,
          salary.max,
        )}`;
  return `${amount} ${unit}`;
}

// Where the role is based: "Palo Alto, CA" for on-site/hybrid roles, the
// eligible regions (or "anywhere in the world") for remote ones.
export function formatOpeningLocation(locale: Locale, opening: Opening): string {
  const labels = getDictionary(locale).pages.careers.labels;

  if (opening.workplaceType === "REMOTE") {
    if (opening.remoteEligibleRegions === "WORLDWIDE") {
      return labels.worldwide;
    }
    const regions = opening.remoteEligibleRegions ?? [opening.countryCode];
    return regions.map((code) => formatRegionName(locale, code)).join(" · ");
  }

  const parts = [opening.city, opening.region].filter(
    (part): part is string => Boolean(part),
  );
  return parts.length > 0
    ? parts.join(", ")
    : formatRegionName(locale, opening.countryCode);
}
