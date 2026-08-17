"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { headingClassNames } from "@/components/headingStyles";
import { TextLines } from "@/components/TextLines";
import { useTurnstile } from "@/components/useTurnstile";
import { trackEvent } from "@/lib/analytics";
import {
  companyAddress,
  companyAddressLines,
  companyEmails,
  mailto,
  type CompanyEmailKey,
} from "@/lib/company";
import { formatRegionName } from "@/lib/format";
import { getDictionary, type Locale } from "@/lib/i18n";
import { getPageHeroSectionClassName } from "./pageHero";

type ContactPageViewProps = {
  locale: Locale;
};

type ContactErrorCode = "generic" | "rateLimited" | "turnstile";

const contactCardClassName =
  "group relative flex h-full flex-col rounded-3xl glass p-7 transition-all duration-500 hover:border-white/[0.14] hover:bg-white/[0.05]";

function ChannelIcon({ channel }: { channel: CompanyEmailKey }) {
  const common = {
    className: "h-5 w-5 text-gray-500 transition-colors duration-300 group-hover:text-white",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": true,
  } as const;

  switch (channel) {
    case "sales":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
          />
        </svg>
      );
    case "careers":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      );
  }
}

function PinIcon() {
  return (
    <svg
      className="h-5 w-5 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );
}

export function ContactPageView({ locale }: ContactPageViewProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorCode, setErrorCode] = useState<ContactErrorCode | null>(null);
  const turnstile = useTurnstile();
  const dictionary = getDictionary(locale);
  const page = dictionary.pages.contact;
  const country = formatRegionName(locale, companyAddress.addressCountry);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) {
      return;
    }
    setErrorCode(null);
    setSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          turnstileToken: turnstile.token,
        }),
      });

      if (response.ok) {
        trackEvent("contact_submitted", { locale });
        setSubmitted(true);
        return;
      }

      const body = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;
      if (response.status === 429) {
        setErrorCode("rateLimited");
      } else if (body?.error === "turnstile") {
        setErrorCode("turnstile");
      } else {
        setErrorCode("generic");
      }
    } catch {
      setErrorCode("generic");
    } finally {
      setSubmitting(false);
    }
  }

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

      <section className="pt-24 md:pt-32">
        <div className="mx-auto max-w-[1100px] px-6">
          <AnimatedSection>
            <p className={headingClassNames.centeredSectionEyebrow}>
              {page.direct.eyebrow}
            </p>
            <h2 className={headingClassNames.centeredSectionTitleTight}>
              {page.direct.heading}
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {page.direct.channels.map((channel, index) => {
              const key = channel.key as CompanyEmailKey;
              const email = companyEmails[key];
              return (
                <AnimatedSection key={channel.key} delay={index * 0.08}>
                  <a href={mailto(email)} className={contactCardClassName}>
                    <ChannelIcon channel={key} />
                    <h3 className="mt-6 text-[17px] font-semibold text-white">
                      {channel.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[14px] leading-relaxed text-gray-500">
                      {channel.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[14px] text-gray-300 transition-colors duration-300 group-hover:text-white">
                      <span className="break-all">{email}</span>
                      <svg
                        className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
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
                    </span>
                  </a>
                </AnimatedSection>
              );
            })}

            <AnimatedSection delay={page.direct.channels.length * 0.08}>
              <div className="flex h-full flex-col rounded-3xl glass p-7">
                <PinIcon />
                <h3 className="mt-6 text-[17px] font-semibold text-white">
                  {page.direct.address.title}
                </h3>
                <address className="mt-2 text-[14px] not-italic leading-relaxed text-gray-500">
                  <span className="block text-gray-300">
                    {page.direct.address.companyName}
                  </span>
                  {companyAddressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <span className="block">{country}</span>
                </address>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40">
        <div className="mx-auto max-w-[560px] px-6">
          {!submitted && (
            <AnimatedSection>
              <h2 className="text-headline text-center mb-12">
                {page.formHeading}
              </h2>
            </AnimatedSection>
          )}
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
              <form onSubmit={handleSubmit} className="space-y-6">
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

                {turnstile.enabled && (
                  <div ref={turnstile.containerRef} className="min-h-[65px]" />
                )}

                {errorCode && (
                  <p className="text-[14px] text-red-400" role="alert">
                    {page.errors[errorCode]}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-white text-black rounded-full py-4 text-[14px] font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-[1.01] mt-4 disabled:opacity-60 disabled:hover:scale-100"
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
