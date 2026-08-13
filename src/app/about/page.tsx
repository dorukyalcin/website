import { renderLocalizedAboutPage } from "@/app/_localized/renderPage";
import { buildPageMetadata } from "@/lib/seo";

const locale = "en" as const;

export const metadata = buildPageMetadata(locale, "about");

export default function AboutPage() {
  return renderLocalizedAboutPage(locale);
}
