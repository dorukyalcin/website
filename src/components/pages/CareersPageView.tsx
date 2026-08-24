"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { headingClassNames } from "@/components/headingStyles";
import { TextLines } from "@/components/TextLines";
import { companyEmails, companyPhone, mailto } from "@/lib/company";
import {
  formatOpeningDate,
  formatOpeningLocation,
  formatSalary,
} from "@/lib/format";
import { getDictionary, localizePath, type Locale } from "@/lib/i18n";
import {
  getLatestApplicationDeadline,
  getOpenOpeningGroups,
  getOpenOpenings,
  type Opening,
} from "@/lib/openings";
import { getPageHeroSectionClassName } from "./pageHero";

type CareersPageViewProps = {
  locale: Locale;
};

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

function OpeningRow({
  locale,
  opening,
}: {
  locale: Locale;
  opening: Opening;
}) {
  const page = getDictionary(locale).pages.careers;
  const content = opening.content[locale];
  const meta = [
    page.labels.workplace[opening.workplaceType],
    formatOpeningLocation(locale, opening),
    page.labels.employment[opening.employmentType],
  ];

  return (
    <Link
      href={localizePath(locale, `/careers/${opening.slug}`)}
      className="group relative block rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-6 transition-all duration-500 hover:border-white/[0.14] hover:bg-white/[0.05] md:px-8"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="min-w-0">
          <h4 className="text-[19px] font-semibold tracking-tight text-white transition-colors duration-300">
            {content.title}
          </h4>
          <p className="mt-1.5 max-w-[560px] text-[14px] leading-relaxed text-gray-500">
            {content.summary}
          </p>
          <p className="mt-3 flex flex-wrap items-center gap-x-2 text-[12px] uppercase tracking-[0.12em] text-gray-600">
            {meta.map((item, index) => (
              <span key={`${item}-${index}`} className="inline-flex items-center gap-2">
                {index > 0 && (
                  <span aria-hidden className="h-0.5 w-0.5 rounded-full bg-gray-700" />
                )}
                {item}
              </span>
            ))}
          </p>
        </div>

        <div className="flex shrink-0 items-center justify-between gap-6 md:flex-col md:items-end md:justify-center md:gap-2">
          {opening.salary && (
            <span className="text-[17px] font-medium tabular-nums text-white">
              {formatSalary(locale, opening.salary)}
            </span>
          )}
          <span className="inline-flex items-center gap-2 text-[13px] text-gray-500 transition-colors duration-300 group-hover:text-white">
            {page.list.viewLabel}
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function CareersPageView({ locale }: CareersPageViewProps) {
  const dictionary = getDictionary(locale);
  const page = dictionary.pages.careers;
  const openings = getOpenOpenings();
  const groups = getOpenOpeningGroups();
  const deadline = getLatestApplicationDeadline();
  const countLabel =
    openings.length === 1
      ? page.hero.openCountOne
      : page.hero.openCountMany.replace("{count}", String(openings.length));

  const facts = [
    page.hero.facts.internships,
    page.hero.facts.fullTime,
    ...(deadline
      ? [
          {
            label: page.hero.facts.deadline.label,
            value: formatOpeningDate(locale, deadline),
          },
        ]
      : []),
  ];

  return (
    <>
      <section className={getPageHeroSectionClassName("min-h-[60vh]")}>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/[0.015] blur-[100px]" />

        <div className="relative z-10 w-full text-center px-6 max-w-[760px]">
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
            className={`${headingClassNames.heroDescription} max-w-[460px] mx-auto`}
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

          {openings.length > 0 && (
            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-12 flex flex-col items-center gap-6 border-t border-white/[0.06] pt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-12 sm:gap-y-6"
            >
              {facts.map((fact) => (
                <div key={fact.label} className="text-center">
                  <dt className="text-[11px] uppercase tracking-[0.2em] text-gray-600">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 whitespace-nowrap text-[14px] text-gray-300">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          )}
        </div>
      </section>

      <section className="py-32 md:py-40">
        <div className="mx-auto max-w-[900px] px-6">
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
            <div className="mt-16 space-y-24">
              {groups.map((group) => {
                const groupCopy = page.groups[group.key];
                const groupCount =
                  group.openings.length === 1
                    ? page.list.positionCountOne
                    : page.list.positionCountMany.replace(
                        "{count}",
                        String(group.openings.length),
                      );
                return (
                  <div key={group.key} id={group.key} className="scroll-mt-28">
                    <AnimatedSection>
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <h3 className="text-headline">{groupCopy.title}</h3>
                        <span className="text-[13px] text-gray-500">
                          {groupCount}
                        </span>
                      </div>
                      <p className="mt-3 max-w-[560px] text-[15px] leading-relaxed text-gray-500">
                        {groupCopy.description}
                      </p>
                    </AnimatedSection>

                    <div className="mt-8 space-y-3">
                      {group.openings.map((opening, index) => (
                        <AnimatedSection
                          key={opening.slug}
                          delay={Math.min(index, 4) * 0.06}
                        >
                          <OpeningRow locale={locale} opening={opening} />
                        </AnimatedSection>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <div className="divider mx-auto max-w-[400px]" />

      <section className="py-32 md:py-40">
        <div className="mx-auto max-w-[1000px] px-6">
          <AnimatedSection>
            <p className={headingClassNames.centeredSectionEyebrow}>
              {page.benefits.eyebrow}
            </p>
            <h2 className={headingClassNames.centeredSectionTitleTight}>
              {page.benefits.heading}
            </h2>
            <p className="mx-auto max-w-[520px] text-center text-[15px] leading-relaxed text-gray-500">
              {page.benefits.description}
            </p>
          </AnimatedSection>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.benefits.items.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.06}>
                <div className="h-full rounded-3xl glass p-7">
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[17px] font-semibold text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-gray-500">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider mx-auto max-w-[400px]" />

      <section className="py-32 md:py-40">
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

      <section className="pb-32 md:pb-48">
        <div className="mx-auto max-w-[760px] px-6">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl glass p-10 text-center md:p-14">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[480px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[80px]"
              />
              <div className="relative">
                <h2 className="text-headline">{page.contact.heading}</h2>
                <p className="mx-auto mt-3 max-w-[440px] text-[15px] leading-relaxed text-gray-500">
                  {page.contact.description}
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
                  <a
                    href={mailto(companyEmails.careers)}
                    className="group inline-flex flex-col items-center"
                  >
                    <span className="text-[11px] uppercase tracking-[0.2em] text-gray-600">
                      {page.contact.emailLabel}
                    </span>
                    <span className="mt-1 text-[16px] text-white transition-colors duration-300 group-hover:text-gray-300">
                      {companyEmails.careers}
                    </span>
                  </a>
                  <a
                    href={`tel:${companyPhone.e164}`}
                    className="group inline-flex flex-col items-center"
                  >
                    <span className="text-[11px] uppercase tracking-[0.2em] text-gray-600">
                      {page.contact.phoneLabel}
                    </span>
                    <span className="mt-1 text-[16px] tabular-nums text-white transition-colors duration-300 group-hover:text-gray-300">
                      {companyPhone.display}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
