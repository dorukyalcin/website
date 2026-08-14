"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { headingClassNames } from "@/components/headingStyles";
import { TextLines } from "@/components/TextLines";
import { formatOpeningDate } from "@/lib/format";
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
  const countLabel =
    openings.length === 1
      ? page.hero.openCountOne
      : page.hero.openCountMany.replace("{count}", String(openings.length));

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

          {openings.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="mt-10"
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.1] bg-white/[0.02] px-5 py-2 text-[13px] text-gray-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {countLabel}
              </span>
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-32 md:py-40">
        <div className="mx-auto max-w-[760px] px-6">
          <AnimatedSection>
            <h2 className={headingClassNames.centeredSectionEyebrow}>
              {page.list.heading}
            </h2>
          </AnimatedSection>

          {openings.length === 0 ? (
            <AnimatedSection delay={0.1}>
              <div className="mt-12 rounded-3xl glass p-10 md:p-14 text-center">
                <p className="text-body-large max-w-[440px] mx-auto">
                  {page.list.empty}
                </p>
                <Link
                  href={localizePath(locale, "/contact")}
                  className="mt-8 inline-flex items-center justify-center rounded-full text-[14px] font-medium transition-all duration-300 px-7 py-3 bg-transparent text-white border border-white/20 hover:border-white/40 hover:scale-[1.02]"
                >
                  {page.list.emptyCta}
                </Link>
              </div>
            </AnimatedSection>
          ) : (
            <div className="mt-12 space-y-5">
              {openings.map((opening, index) => {
                const content = opening.content[locale];
                return (
                  <AnimatedSection key={opening.slug} delay={index * 0.08}>
                    <Link
                      href={localizePath(locale, `/careers/${opening.slug}`)}
                      className="group relative block overflow-hidden rounded-3xl glass p-8 md:p-10 transition-all duration-500 hover:border-white/[0.14] hover:bg-white/[0.05]"
                    >
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -top-3 right-6 select-none text-[92px] font-semibold leading-none tracking-tight text-white/[0.04] transition-colors duration-500 group-hover:text-white/[0.07]"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="relative">
                        <h3 className="text-headline pr-20 transition-colors duration-300">
                          {content.title}
                        </h3>
                        <p className="mt-3 max-w-[480px] text-[15px] leading-relaxed text-gray-500">
                          {content.summary}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                          <div className="flex flex-wrap gap-2">
                            <span className="rounded-full border border-white/[0.1] px-3 py-1 text-xs text-gray-400">
                              {page.labels.workplace[opening.workplaceType]}
                            </span>
                            <span className="rounded-full border border-white/[0.1] px-3 py-1 text-xs text-gray-400">
                              {page.labels.employment[opening.employmentType]}
                            </span>
                          </div>
                          <span className="text-xs text-gray-600">
                            {page.labels.postedOn}{" "}
                            {formatOpeningDate(locale, opening.postedAt)}
                          </span>

                          <span className="ml-auto inline-flex items-center gap-2 text-[14px] text-gray-500 transition-colors duration-300 group-hover:text-white">
                            {page.list.viewLabel}
                            <svg
                              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="pb-32 md:pb-48">
        <div className="mx-auto max-w-[1000px] px-6">
          <AnimatedSection>
            <h2 className={headingClassNames.centeredSectionEyebrow}>
              {page.hiring.heading}
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
            {page.hiring.steps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 0.1}>
                <div className="relative md:text-center">
                  {index < page.hiring.steps.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-[calc(50%+28px)] top-5 hidden h-px w-[calc(100%-32px)] bg-white/[0.08] md:block"
                    />
                  )}
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.03] text-[13px] font-medium text-gray-300 md:mx-auto">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-[16px] font-medium text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-gray-500">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
