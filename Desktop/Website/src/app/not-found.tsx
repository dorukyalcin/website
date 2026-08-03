import type { Metadata } from "next";
import { NotFoundPageView } from "@/components/pages/NotFoundPageView";
import { getDictionary } from "@/lib/i18n";
import { siteConfig } from "@/lib/seo";

const dictionary = getDictionary("en");

export const metadata: Metadata = {
  title: { absolute: `${dictionary.pages.notFound.title} | ${siteConfig.name}` },
  description: dictionary.pages.notFound.description,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundPageView locale="en" />;
}
