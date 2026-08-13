"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLink } from "@/components/BrandLink";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getDictionary, getPagePath, type Locale, type PageLinkKey } from "@/lib/i18n";

type NavbarProps = {
  locale: Locale;
};

export function Navbar({ locale }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dictionary = getDictionary(locale);
  const links = dictionary.navigation.links;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-2xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-[60px]">
          {/* Logo */}
          <BrandLink
            href={getPagePath(locale, "home")}
            name={dictionary.navigation.brand}
          />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.key}
                href={getPagePath(locale, link.key as PageLinkKey)}
                className="text-[13px] text-gray-400 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher locale={locale} />
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-6 h-6 flex items-center justify-center"
            aria-label={dictionary.navigation.menuLabel}
          >
            <span
              className={`absolute h-[1px] w-4 bg-white transition-all duration-300 ${
                mobileOpen ? "rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`absolute h-[1px] w-4 bg-white transition-all duration-300 ${
                mobileOpen ? "-rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl pt-[80px] px-6 md:hidden"
          >
            <div className="flex flex-col gap-1">
              <div className="mb-6">
                <LanguageSwitcher
                  locale={locale}
                  mobile
                  onNavigate={() => setMobileOpen(false)}
                />
              </div>
              {links.map((link, i) => (
                <motion.div
                  key={link.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={getPagePath(locale, link.key as PageLinkKey)}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 text-2xl font-semibold text-white/90 hover:text-white transition-colors border-b border-white/[0.06]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
