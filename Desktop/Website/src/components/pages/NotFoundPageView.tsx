import Link from "next/link";
import { Button } from "@/components/Button";
import { headingClassNames } from "@/components/headingStyles";
import { getDictionary, getPagePath, type Locale, type PageLinkKey } from "@/lib/i18n";
import { getPageHeroSectionClassName } from "./pageHero";

type NotFoundPageViewProps = {
  locale: Locale;
};

export function NotFoundPageView({ locale }: NotFoundPageViewProps) {
  const dictionary = getDictionary(locale);
  const page = dictionary.pages.notFound;

  return (
    <section className={getPageHeroSectionClassName("min-h-[70vh]", "px-6")}>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/[0.015] blur-[100px]" />

      <div className="relative z-10 text-center max-w-lg">
        <p className={headingClassNames.heroEyebrow}>
          404
        </p>
        <h1 className="text-hero">{page.title}</h1>
        <p className={`${headingClassNames.heroDescription} text-gray-400`}>
          {page.description}
        </p>

        <div
          className={`${headingClassNames.heroActionsTopMargin} flex flex-col sm:flex-row items-center justify-center gap-4`}
        >
          <Button href={getPagePath(locale, "home")}>{page.primaryCta}</Button>
          <Button href={getPagePath(locale, "contact")} variant="secondary">
            {page.secondaryCta}
          </Button>
        </div>

        <nav
          className="mt-14 pt-10 border-t border-white/[0.06]"
          aria-label={page.navigationLabel}
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-500">
            {page.links.map((item) => (
              <li key={item.key}>
                <Link
                  href={getPagePath(locale, item.key as PageLinkKey)}
                  className="hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
