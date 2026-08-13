"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { headingClassNames } from "@/components/headingStyles";
import { TextLines } from "@/components/TextLines";
import { getDictionary, type Locale } from "@/lib/i18n";
import { getPageHeroSectionClassName } from "./pageHero";

type ContactPageViewProps = {
  locale: Locale;
};

export function ContactPageView({ locale }: ContactPageViewProps) {
  const [submitted, setSubmitted] = useState(false);
  const dictionary = getDictionary(locale);
  const page = dictionary.pages.contact;

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
        <div className="mx-auto max-w-[560px] px-6">
          <AnimatedSection>
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 rounded-full bg-white/[0.06] mx-auto mb-6 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white/60"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="text-headline mb-3">{page.success.title}</h3>
                <p className="text-body-large">{page.success.description}</p>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium uppercase tracking-[0.15em] text-gray-500 mb-2"
                  >
                    {page.form.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-white/[0.1] py-3 text-white placeholder-gray-600 focus:border-white/30 focus:outline-none transition-colors duration-300"
                    placeholder={page.form.namePlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium uppercase tracking-[0.15em] text-gray-500 mb-2"
                  >
                    {page.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-white/[0.1] py-3 text-white placeholder-gray-600 focus:border-white/30 focus:outline-none transition-colors duration-300"
                    placeholder={page.form.emailPlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-medium uppercase tracking-[0.15em] text-gray-500 mb-2"
                  >
                    {page.form.subjectLabel}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full bg-transparent border-b border-white/[0.1] py-3 text-white focus:border-white/30 focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled className="bg-black">
                      {page.form.subjectPlaceholder}
                    </option>
                    {page.form.subjectOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="bg-black"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium uppercase tracking-[0.15em] text-gray-500 mb-2"
                  >
                    {page.form.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-transparent border-b border-white/[0.1] py-3 text-white placeholder-gray-600 focus:border-white/30 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder={page.form.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black rounded-full py-4 text-[14px] font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-[1.01] mt-4"
                >
                  {page.form.submitLabel}
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
