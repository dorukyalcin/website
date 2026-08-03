"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { headingClassNames } from "@/components/headingStyles";
import { TextLines } from "@/components/TextLines";
import { getDictionary, getPagePath, type Locale, type PageLinkKey } from "@/lib/i18n";

type HomePageViewProps = {
  locale: Locale;
};

export function HomePageView({ locale }: HomePageViewProps) {
  const dictionary = getDictionary(locale);
  const page = dictionary.pages.home;
  const productGridClassName =
    page.products.items.length === 1
      ? "grid max-w-[680px] mx-auto gap-6"
      : "grid md:grid-cols-2 gap-6";

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center gradient-mesh grain overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(140,130,255,0.035) 0%, rgba(255,255,255,0.015) 60%, transparent 100%)",
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-[900px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`${headingClassNames.heroDescription} max-w-[560px] mx-auto`}
          >
            {page.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`${headingClassNames.heroActionsTopMargin} flex items-center justify-center gap-4`}
          >
            <Button href="#products">{page.hero.primaryCta}</Button>
            <Button href={getPagePath(locale, "contact")} variant="secondary">
              {page.hero.secondaryCta}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </section>

      <section id="products" className="py-32 md:py-48">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className={headingClassNames.centeredSectionEyebrow}>
              {page.products.eyebrow}
            </p>
            <h2 className={headingClassNames.centeredSectionTitle}>
              <TextLines lines={page.products.titleLines} />
            </h2>
          </AnimatedSection>

          <div className={productGridClassName}>
            {page.products.items.map((product, index) => (
              <AnimatedSection key={product.name} delay={index * 0.15}>
                <Link
                  href={getPagePath(locale, product.key as PageLinkKey)}
                  className="group block h-full"
                >
                  <div className="relative rounded-3xl glass p-10 md:p-14 h-full overflow-hidden transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${product.hoverGlow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <div className="relative z-10">
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                        {product.name}
                      </span>
                      <h3 className="text-headline mt-4 mb-4">
                        {product.tagline}
                      </h3>
                      <p className="text-body-large mb-8">
                        {product.description}
                      </p>
                      <span className="inline-flex items-center text-sm text-white/70 group-hover:text-white transition-colors duration-300">
                        {page.products.learnMore}
                        <svg
                          className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
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
            ))}
          </div>
        </div>
      </section>

      <div className="divider mx-auto max-w-[400px]" />

      <section className="py-32 md:py-48">
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <AnimatedSection>
            <h2 className="text-display">
              <TextLines lines={page.vision.titleLines} />
            </h2>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
