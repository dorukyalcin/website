import { renderLocalizedAboutPage } from "@/app/_localized/renderPage";
import { buildPageMetadata } from "@/lib/seo";

const locale = "tr" as const;

export const metadata = buildPageMetadata(locale, "about");

export default function TurkishAboutPage() {
  return renderLocalizedAboutPage(locale);
}
