"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { headingClassNames } from "@/components/headingStyles";
import { TextLines } from "@/components/TextLines";
import { getDictionary, localizePath, type Locale } from "@/lib/i18n";
import { getOpenOpenings } from "@/lib/openings";
import { getPageHeroSectionClassName } from "./pageHero";

type CareersPageViewProps = {
  locale: Locale;
};

export function CareersPageView({ locale }: CareersPageViewProps) {
  const dictionary = getDictionary(locale);
  const page = dictionary.pages.careers;
  const openings = getOpenOpenings();

  return (
    <>
      <section className={getPageHeroSectionClassName("min-h-[60vh]")}>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/[0.015] blur-[100px]" />

        <div className="relative z-10 text-center px-6 max-w-[600px]">
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
            <TextLines lines={page.hero.titleLines} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`${headingClassNames.heroDescription} max-w-[420px] mx-auto`}
          >
            {page.hero.description}
          </motion.p>
        </div>
      </section>

      <section className="py-32 md:py-48">
        <div className="mx-auto max-w-[720px] px-6">
          <AnimatedSection>
            <h2 className={headingClassNames.centeredSectionEyebrow}>
              {page.list.heading}
            </h2>

            {openings.length === 0 ? (
              <p className="text-body-large text-center mt-12">
                {page.list.empty}
              </p>
            ) : (
              <div className="mt-12 divide-y divide-white/[0.06] border-y border-white/[0.06]">
                {openings.map((opening) => {
                  const content = opening.content[locale];
                  return (
                    <Link
                      key={opening.slug}
                      href={localizePath(locale, `/careers/${opening.slug}`)}
                      className="group flex flex-col gap-3 py-8 transition-colors duration-300 md:flex-row md:items-center md:justify-between"
                    >
                      <div>
                        <h3 className="text-headline group-hover:text-gray-300 transition-colors duration-300">
                          {content.title}
                        </h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-gray-500 max-w-[440px]">
                          {content.summary}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="rounded-full border border-white/[0.1] px-3 py-1 text-xs text-gray-400">
                            {page.labels.workplace[opening.workplaceType]}
                          </span>
                          <span className="rounded-full border border-white/[0.1] px-3 py-1 text-xs text-gray-400">
                            {page.labels.employment[opening.employmentType]}
                          </span>
                        </div>
                      </div>
                      <span className="shrink-0 text-[14px] text-gray-500 group-hover:text-white transition-colors duration-300">
                        {page.list.viewLabel}
                        <svg
                          className="ml-2 inline w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
