"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ApplicationForm } from "@/components/ApplicationForm";
import { headingClassNames } from "@/components/headingStyles";
import { getDictionary, localizePath, type Locale } from "@/lib/i18n";
import type { Opening } from "@/lib/openings";
import { getPageHeroSectionClassName } from "./pageHero";

type OpeningPageViewProps = {
  locale: Locale;
  opening: Opening;
};

function BulletSection({
  heading,
  items,
  delay = 0,
}: {
  heading: string;
  items: readonly string[];
  delay?: number;
}) {
  return (
    <AnimatedSection delay={delay}>
      <h2 className="text-headline mb-6">{heading}</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-[15px] leading-relaxed text-gray-400"
          >
            <span className="mt-[9px] h-px w-4 shrink-0 bg-white/30" />
            {item}
          </li>
        ))}
      </ul>
    </AnimatedSection>
  );
}

export function OpeningPageView({ locale, opening }: OpeningPageViewProps) {
  const dictionary = getDictionary(locale);
  const page = dictionary.pages.careers;
  const content = opening.content[locale];
  const isOpen = opening.status === "open";

  return (
    <>
      <section className={getPageHeroSectionClassName("min-h-[55vh]")}>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/[0.015] blur-[100px]" />

        <div className="relative z-10 text-center px-6 max-w-[720px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={headingClassNames.heroEyebrow}
          >
            {page.hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-hero"
          >
            {content.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-2"
          >
            <span className="rounded-full border border-white/[0.1] px-4 py-1.5 text-[13px] text-gray-400">
              {page.labels.workplace[opening.workplaceType]}
            </span>
            <span className="rounded-full border border-white/[0.1] px-4 py-1.5 text-[13px] text-gray-400">
              {page.labels.employment[opening.employmentType]}
            </span>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[720px] px-6">
          <AnimatedSection>
            <Link
              href={localizePath(locale, "/careers")}
              className="text-[14px] text-gray-500 hover:text-white transition-colors duration-300"
            >
              <svg
                className="mr-2 inline w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              {page.opening.backLabel}
            </Link>
          </AnimatedSection>

          <div className="mt-16 space-y-20">
            <AnimatedSection>
              <h2 className="text-headline mb-6">
                {page.opening.sections.intro}
              </h2>
              <div className="space-y-4">
                {content.intro.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[15px] leading-relaxed text-gray-400"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimatedSection>

            <BulletSection
              heading={page.opening.sections.responsibilities}
              items={content.responsibilities}
            />
            <BulletSection
              heading={page.opening.sections.requirements}
              items={content.requirements}
            />
            {content.niceToHave && content.niceToHave.length > 0 && (
              <BulletSection
                heading={page.opening.sections.niceToHave}
                items={content.niceToHave}
              />
            )}
            {content.offer && content.offer.length > 0 && (
              <BulletSection
                heading={page.opening.sections.offer}
                items={content.offer}
              />
            )}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-white/[0.06]">
        <div className="mx-auto max-w-[560px] px-6">
          <AnimatedSection>
            {isOpen ? (
              <>
                <h2 className="text-headline mb-3 text-center">
                  {page.opening.applyHeading}
                </h2>
                <p className="text-[15px] leading-relaxed text-gray-500 text-center mb-12">
                  {page.opening.applyDescription}
                </p>
                <ApplicationForm locale={locale} opening={opening} />
              </>
            ) : (
              <div className="text-center py-10">
                <h2 className="text-headline mb-3">
                  {page.opening.closed.title}
                </h2>
                <p className="text-body-large mb-10">
                  {page.opening.closed.description}
                </p>
                <Link
                  href={localizePath(locale, "/careers")}
                  className="inline-flex items-center justify-center rounded-full text-[14px] font-medium transition-all duration-300 px-7 py-3 bg-white text-black hover:bg-gray-200 hover:scale-[1.02]"
                >
                  {page.opening.backLabel}
                </Link>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
