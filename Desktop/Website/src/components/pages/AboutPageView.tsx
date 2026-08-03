"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { headingClassNames } from "@/components/headingStyles";
import { TextLines } from "@/components/TextLines";
import { founders } from "@/lib/founders";
import { getDictionary, localizePath, type Locale } from "@/lib/i18n";
import { getPageHeroSectionClassName } from "./pageHero";

type AboutPageViewProps = {
  locale: Locale;
};

export function AboutPageView({ locale }: AboutPageViewProps) {
  const dictionary = getDictionary(locale);
  const page = dictionary.pages.about;

  return (
    <>
      <section className={getPageHeroSectionClassName("min-h-[70vh]")}>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/[0.015] blur-[100px]" />

        <div className="relative z-10 text-center px-6 max-w-[700px]">
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
            className={`${headingClassNames.heroDescription} max-w-[480px] mx-auto`}
          >
            {page.hero.description}
          </motion.p>
        </div>
      </section>

      <section className="py-32 md:py-48">
        <div className="mx-auto max-w-[700px] px-6">
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

      <div className="divider mx-auto max-w-[400px]" />

      <section className="py-32 md:py-48">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className={headingClassNames.centeredSectionEyebrow}>
              {page.founders.eyebrow}
            </p>
            <h2 className={headingClassNames.centeredSectionTitle}>
              {page.founders.title}
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
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
                    className="group block h-full rounded-3xl glass p-6 transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04] sm:p-8"
                    aria-label={founder.name}
                  >
                    <div className="mb-6 flex justify-center md:justify-start">
                      <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.02] p-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:h-40 sm:w-40">
                        <div className="absolute inset-[5px] rounded-full border border-white/[0.08]" />
                        <div className="relative h-full w-full overflow-hidden rounded-full bg-white/[0.04]">
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
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-1 transition-colors duration-300 group-hover:text-white">
                      {founder.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">{profile.role}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {profile.bio}
                    </p>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <div className="divider mx-auto max-w-[400px]" />

      <section className="py-32 md:py-48">
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
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {value.description}
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
