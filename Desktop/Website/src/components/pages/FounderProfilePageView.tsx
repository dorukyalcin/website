"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { headingClassNames } from "@/components/headingStyles";
import type { FounderProfile } from "@/lib/founders";
import { getDictionary, getPagePath, type Locale } from "@/lib/i18n";
import { getPageHeroSectionClassName } from "./pageHero";

type FounderProfilePageViewProps = {
  locale: Locale;
  founder: FounderProfile;
};

export function FounderProfilePageView({
  locale,
  founder,
}: FounderProfilePageViewProps) {
  const dictionary = getDictionary(locale);
  const aboutPage = dictionary.pages.about;
  const profile = aboutPage.founders.people[founder.key];

  return (
    <>
      <section className={getPageHeroSectionClassName("min-h-[76vh]")}>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/[0.015] blur-[100px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1000px] items-center gap-12 px-6 md:grid-cols-[320px_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto w-full max-w-[300px] md:max-w-none"
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/[0.12] bg-white/[0.03] p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white/[0.04]">
                <img
                  src={founder.photo.src}
                  alt={founder.photo.alt}
                  className="h-full w-full object-cover"
                  style={{
                    objectPosition: founder.photo.objectPosition,
                    transform: `scale(${founder.photo.scale})`,
                    transformOrigin: "center",
                  }}
                />
              </div>
            </div>
          </motion.div>

          <div className="text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={headingClassNames.heroEyebrow}
            >
              {profile.role}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-hero"
            >
              {founder.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`${headingClassNames.heroDescription} mx-auto max-w-[620px] md:mx-0`}
            >
              {profile.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className={`${headingClassNames.heroActionsTopMargin} flex flex-col items-center gap-4 sm:flex-row md:justify-start`}
            >
              <a
                href={founder.sameAs[0]}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-[14px] font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:bg-gray-200"
              >
                LinkedIn
                <svg
                  className="ml-2 h-4 w-4"
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
              </a>
              <Button href={getPagePath(locale, "contact")} variant="secondary">
                {dictionary.navigation.links.find(
                  (link) => link.key === "contact",
                )?.label || "Contact"}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <Link
            href={getPagePath(locale, "about")}
            className="text-sm text-gray-500 transition-colors duration-300 hover:text-white"
          >
            {aboutPage.hero.eyebrow}
          </Link>
        </div>
      </section>
    </>
  );
}
