"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ApplicationForm } from "@/components/ApplicationForm";
import { headingClassNames } from "@/components/headingStyles";
import { companyEmails, mailto } from "@/lib/company";
import {
  formatOpeningDate,
  formatOpeningLocation,
  formatSalary,
} from "@/lib/format";
import { getDictionary, localizePath, type Locale } from "@/lib/i18n";
import { getOpeningGroupKey, type Opening } from "@/lib/openings";
import { getPageHeroSectionClassName } from "./pageHero";

type OpeningPageViewProps = {
  locale: Locale;
  opening: Opening;
};

function scrollToApply(event: React.MouseEvent<HTMLAnchorElement>) {
  const target = document.getElementById("apply");
  if (target) {
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-5">
      <h2 className="text-headline shrink-0">{children}</h2>
      <span aria-hidden className="h-px flex-1 bg-white/[0.06]" />
    </div>
  );
}

function BulletSection({
  heading,
  items,
}: {
  heading: string;
  items: readonly string[];
}) {
  return (
    <AnimatedSection>
      <SectionHeading>{heading}</SectionHeading>
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

function GlanceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-3">
      <dt className="text-[12px] uppercase tracking-[0.15em] text-gray-600">
        {label}
      </dt>
      <dd className="text-right text-[14px] text-gray-300">{value}</dd>
    </div>
  );
}

function Chip({ children, strong = false }: { children: React.ReactNode; strong?: boolean }) {
  return (
    <span
      className={`rounded-full border px-4 py-1.5 text-[13px] ${
        strong
          ? "border-white/[0.18] bg-white/[0.04] text-white"
          : "border-white/[0.1] text-gray-400"
      }`}
    >
      {children}
    </span>
  );
}

function fillTemplate(template: string, values: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? values[key] : match,
  );
}

export function OpeningPageView({ locale, opening }: OpeningPageViewProps) {
  const dictionary = getDictionary(locale);
  const page = dictionary.pages.careers;
  const content = opening.content[locale];
  const isOpen = opening.status === "open";
  const glance = page.opening.glance;
  const location = formatOpeningLocation(locale, opening);
  const salary = opening.salary ? formatSalary(locale, opening.salary) : null;
  const deadline = opening.validThrough
    ? formatOpeningDate(locale, opening.validThrough)
    : null;
  const teamLabel = page.groups[getOpeningGroupKey(opening)].title;
  const showBenefits = opening.employmentType === "FULL_TIME";
  const applyByEmail = fillTemplate(page.opening.applyByEmail, {
    email: companyEmails.careers,
  });
  const [applyByEmailBefore, applyByEmailAfter] = applyByEmail.split(
    companyEmails.careers,
  );

  return (
    <>
      <section className={getPageHeroSectionClassName("min-h-[55vh]")}>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/[0.015] blur-[100px]" />

        <div className="relative z-10 text-center px-6 max-w-[760px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={headingClassNames.heroEyebrow}
          >
            {page.hero.eyebrow} · {teamLabel}
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
            <Chip>{page.labels.workplace[opening.workplaceType]}</Chip>
            <Chip>{location}</Chip>
            <Chip>{page.labels.employment[opening.employmentType]}</Chip>
            {salary && <Chip strong>{salary}</Chip>}
          </motion.div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10"
            >
              <a
                href="#apply"
                onClick={scrollToApply}
                className="inline-flex items-center justify-center rounded-full text-[14px] font-medium transition-all duration-300 px-7 py-3 bg-white text-black hover:bg-gray-200 hover:scale-[1.02]"
              >
                {page.opening.applyCtaLabel}
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
              </a>
              {deadline && (
                <p className="mt-4 text-[13px] text-gray-500">
                  {page.labels.applyBy} {deadline}
                </p>
              )}
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1040px] px-6">
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

          <div className="mt-14 lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
            <div className="max-w-[680px] space-y-20">
              <AnimatedSection>
                <SectionHeading>{page.opening.sections.intro}</SectionHeading>
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

              {showBenefits && (
                <AnimatedSection>
                  <SectionHeading>{page.opening.sections.benefits}</SectionHeading>
                  {salary && (
                    <p className="text-[15px] leading-relaxed text-gray-400">
                      <span className="text-[12px] uppercase tracking-[0.15em] text-gray-600">
                        {glance.salaryLabel}
                      </span>
                      <span className="ml-3 text-[17px] font-medium tabular-nums text-white">
                        {salary}
                      </span>
                    </p>
                  )}
                  <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {page.benefits.items.map((benefit) => (
                      <li
                        key={benefit.title}
                        className="flex gap-3 text-[15px] leading-relaxed text-gray-400"
                      >
                        <span className="mt-[9px] h-px w-4 shrink-0 bg-white/30" />
                        {benefit.title}
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              )}
            </div>

            <div className="hidden lg:block">
              <AnimatedSection className="sticky top-28">
                <div className="rounded-3xl glass p-7">
                  <h2 className="text-[12px] uppercase tracking-[0.15em] text-gray-500">
                    {glance.heading}
                  </h2>
                  <dl className="mt-4 divide-y divide-white/[0.06]">
                    <GlanceRow label={glance.teamLabel} value={teamLabel} />
                    <GlanceRow
                      label={glance.workplaceLabel}
                      value={page.labels.workplace[opening.workplaceType]}
                    />
                    <GlanceRow label={glance.locationLabel} value={location} />
                    <GlanceRow
                      label={glance.employmentLabel}
                      value={page.labels.employment[opening.employmentType]}
                    />
                    {salary && (
                      <GlanceRow label={glance.salaryLabel} value={salary} />
                    )}
                    <GlanceRow
                      label={page.labels.postedOn}
                      value={formatOpeningDate(locale, opening.postedAt)}
                    />
                    {deadline && (
                      <GlanceRow label={glance.deadlineLabel} value={deadline} />
                    )}
                  </dl>
                  {isOpen && (
                    <a
                      href="#apply"
                      onClick={scrollToApply}
                      className="mt-6 flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-black transition-all duration-300 hover:bg-gray-200 hover:scale-[1.01]"
                    >
                      {page.opening.applyCtaLabel}
                    </a>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="scroll-mt-24 pb-32 md:pb-40">
        <div className="mx-auto max-w-[680px] px-6">
          <AnimatedSection>
            {isOpen ? (
              <div className="relative overflow-hidden rounded-3xl glass p-6 md:p-12">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[480px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[80px]"
                />
                <div className="relative">
                  <h2 className="text-headline mb-3 text-center">
                    {page.opening.applyHeading}
                  </h2>
                  <p className="text-[15px] leading-relaxed text-gray-500 text-center">
                    {page.opening.applyDescription}
                  </p>
                  <p className="mt-2 mb-12 text-[13px] leading-relaxed text-gray-600 text-center">
                    {applyByEmailBefore}
                    <a
                      href={mailto(companyEmails.careers)}
                      className="text-gray-400 underline decoration-white/20 underline-offset-4 transition-colors duration-300 hover:text-white"
                    >
                      {companyEmails.careers}
                    </a>
                    {applyByEmailAfter}
                  </p>
                  <ApplicationForm locale={locale} opening={opening} />
                </div>
              </div>
            ) : (
              <div className="rounded-3xl glass p-10 md:p-14 text-center">
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
