"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary, locales, switchLocalePathname, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  mobile?: boolean;
  onNavigate?: () => void;
};

export function LanguageSwitcher({
  locale,
  mobile = false,
  onNavigate,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const dictionary = getDictionary(locale);

  return (
    <div
      className={`inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] p-1 ${
        mobile ? "w-full justify-between" : ""
      }`}
      aria-label={dictionary.navigation.languageLabel}
    >
      {locales.map((targetLocale) => {
        const targetDictionary = getDictionary(targetLocale);
        const active = targetLocale === locale;

        return (
          <Link
            key={targetLocale}
            href={switchLocalePathname(pathname, targetLocale)}
            onClick={onNavigate}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-300 ${
              active
                ? "bg-white text-black"
                : "text-gray-400 hover:text-white"
            } ${mobile ? "flex-1 text-center" : ""}`}
          >
            {targetDictionary.language.shortLabel}
          </Link>
        );
      })}
    </div>
  );
}
