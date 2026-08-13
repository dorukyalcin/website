"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FeatureSection } from "@/components/FeatureSection";
import { Button } from "@/components/Button";
import { headingClassNames } from "@/components/headingStyles";
import { RouteHeroAnimation } from "@/components/RouteHeroAnimation";
import {
  OrderDotsVisual,
  OptimizeVisual,
  DeliverVisual,
} from "@/components/StepVisuals";
import {
  SpeedVisual,
  OptimizationVisual,
  IntegrationVisual,
} from "@/components/PrimeRouteFeatureVisuals";
import { TextLines } from "@/components/TextLines";
import { getDictionary, getPagePath, type Locale } from "@/lib/i18n";
import { getPageHeroSectionClassName } from "./pageHero";

const BoltIcon = (
  <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>
);

const RouteIcon = (
  <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
  </svg>
);

const PuzzleIcon = (
  <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .657-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58Z" />
  </svg>
);

const stepVisuals = [
  <OrderDotsVisual key="orders" />,
  <OptimizeVisual key="optimize" />,
  <DeliverVisual key="deliver" />,
];

const featureVisuals = [
  <SpeedVisual key="speed" />,
  <OptimizationVisual key="optimization" />,
  <IntegrationVisual key="integration" />,
];

const featureIcons = [BoltIcon, RouteIcon, PuzzleIcon];

type PrimeRoutePageViewProps = {
  locale: Locale;
};

export function PrimeRoutePageView({ locale }: PrimeRoutePageViewProps) {
  const dictionary = getDictionary(locale);
  const page = dictionary.pages.primeroute;

  return (
    <>
      <section className={getPageHeroSectionClassName("min-h-[85vh]")}>
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(80,140,255,0.03) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)",
          }}
        />

        <RouteHeroAnimation />

        <div className="relative z-10 text-center px-6 max-w-[800px]">
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
            className={`${headingClassNames.heroDescription} max-w-[520px] mx-auto`}
          >
            {page.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={headingClassNames.heroActionsTopMargin}
          >
            <Button href={getPagePath(locale, "contact")}>
              {page.hero.primaryCta}
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-32 md:py-48">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className={headingClassNames.centeredSectionEyebrow}>
              {page.steps.eyebrow}
            </p>
            <h2 className={headingClassNames.centeredSectionTitle}>
              <TextLines lines={page.steps.titleLines} />
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {page.steps.items.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <div className="rounded-3xl glass p-10 h-full">
                  {stepVisuals[index]}
                  <span className="text-4xl font-bold text-blue-400/40 block mb-4">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider mx-auto max-w-[400px]" />

      {page.features.map((feature, index) => (
        <div key={feature.title}>
          <FeatureSection
            label={feature.label}
            title={feature.title}
            description={feature.description}
            icon={featureIcons[index]}
            tint="from-blue-500/[0.04]"
            visual={featureVisuals[index]}
            reverse={index % 2 === 1}
          />
          {index < page.features.length - 1 ? (
            <div className="divider mx-auto max-w-[400px]" />
          ) : null}
        </div>
      ))}

      <section className="py-32 md:py-48">
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <AnimatedSection>
            <h2 className={headingClassNames.centeredSectionTitleTight}>
              <TextLines lines={page.cta.titleLines} />
            </h2>
            <p
              className={`${headingClassNames.sectionBodyWithActions} max-w-[480px] mx-auto`}
            >
              {page.cta.description}
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button href={getPagePath(locale, "contact")}>
                {page.cta.primaryCta}
              </Button>
              <Button href={getPagePath(locale, "contact")} variant="secondary">
                {page.cta.secondaryCta}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
