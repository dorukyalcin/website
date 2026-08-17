"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { headingClassNames } from "@/components/headingStyles";
import { TextLines } from "@/components/TextLines";
import { founders } from "@/lib/founders";
import { getDictionary, getPagePath, localizePath, type Locale } from "@/lib/i18n";
import { getPageHeroSectionClassName } from "./pageHero";

type AboutPageViewProps = {
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

export function AboutPageView({ locale }: AboutPageViewProps) {
  const dictionary = getDictionary(locale);
  const page = dictionary.pages.about;

  return (
    <>
      <section className={getPageHeroSectionClassName("min-h-[70vh]")}>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/[0.015] blur-[100px]" />

        <div className="relative z-10 text-center px-6 max-w-[760px]">
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
            className={`${headingClassNames.heroDescription} max-w-[560px] mx-auto`}
          >
            {page.hero.description}
          </motion.p>
        </div>
      </section>

      <section className="py-32 md:py-40">
        <div className="mx-auto max-w-[720px] px-6">
          <AnimatedSection>
            <h2 className={headingClassNames.sectionTitle}>{page.story.title}</h2>
            <div className="space-y-6 text-body-large">
              {page.story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-32 md:pb-40">
        <div className="mx-auto max-w-[1100px] px-6">
          <AnimatedSection>
            <dl className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
              {page.metrics.items.map((metric) => (
                <div key={metric.label} className="bg-black px-8 py-10">
                  <dd className="whitespace-nowrap text-[clamp(2rem,3vw,2.75rem)] font-semibold leading-none tracking-tight tabular-nums text-white">
                    {metric.value}
                  </dd>
                  <dt className="mt-3 text-[14px] leading-relaxed text-gray-500">
                    {metric.label}
                  </dt>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-center text-[13px] leading-relaxed text-gray-600">
              {page.metrics.note}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="divider mx-auto max-w-[400px]" />

      <section className="py-32 md:py-40">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className={headingClassNames.centeredSectionEyebrow}>
              {page.values.eyebrow}
            </p>
            <h2 className={headingClassNames.centeredSectionTitle}>
              {page.values.title}
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {page.values.items.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="rounded-3xl glass p-10 h-full">
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider mx-auto max-w-[400px]" />

      <section className="py-32 md:py-40">
        <div className="mx-auto max-w-[760px] px-6">
          <AnimatedSection>
            <h2 className={headingClassNames.centeredSectionEyebrow}>
              {page.founders.title}
            </h2>
          </AnimatedSection>

          <div className="mt-12 space-y-6">
            {founders.map((founder, index) => {
              const profile = page.founders.people[founder.key];
              const profilePath = localizePath(
                locale,
                `/about/${founder.slug}`,
              );

              return (
                <AnimatedSection key={founder.name} delay={index * 0.15}>
                  <Link
                    href={profilePath}
                    className="group flex flex-col gap-6 rounded-3xl glass p-7 transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04] sm:flex-row sm:items-start sm:gap-8"
                    aria-label={founder.name}
                  >
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-white/[0.14] bg-white/[0.04]">
                      <img
                        src={founder.photo.src}
                        alt={founder.photo.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                        style={{
                          objectPosition: founder.photo.objectPosition,
                          transform: `scale(${founder.photo.scale})`,
                          transformOrigin: "center",
                        }}
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-white">
                          {founder.name}
                        </h3>
                        <span className="text-sm text-gray-500">{profile.role}</span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-gray-400">
                        {profile.bio}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-[13px] text-gray-500 transition-colors duration-300 group-hover:text-white">
                        {page.founders.profileCta}
                        <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
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
                <p className={headingClassNames.centeredSectionEyebrow}>
                  {page.hiring.eyebrow}
                </p>
                <h2 className="text-headline">{page.hiring.title}</h2>
                <p className="mx-auto mt-3 max-w-[460px] text-[15px] leading-relaxed text-gray-500">
                  {page.hiring.description}
                </p>
                <Link
                  href={getPagePath(locale, "careers")}
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-[14px] font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:bg-gray-200"
                >
                  {page.hiring.cta}
                  <ArrowIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
