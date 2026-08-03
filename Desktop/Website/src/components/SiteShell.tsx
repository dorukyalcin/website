"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getDictionary, getPathnameLocale } from "@/lib/i18n";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const locale = getPathnameLocale(pathname);

  useEffect(() => {
    document.documentElement.lang = getDictionary(locale).language.htmlLang;
  }, [locale]);

  return (
    <>
      <Navbar locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  );
}
