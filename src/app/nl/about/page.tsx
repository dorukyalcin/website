import { renderLocalizedAboutPage } from "@/app/_localized/renderPage";
import { buildPageMetadata } from "@/lib/seo";

const locale = "nl" as const;

export const metadata = buildPageMetadata(locale, "about");

export default function DutchAboutPage() {
  return renderLocalizedAboutPage(locale);
}
