import { renderLocalizedHomePage } from "@/app/_localized/renderPage";
import { buildPageMetadata } from "@/lib/seo";

const locale = "nl" as const;

export const metadata = buildPageMetadata(locale, "home");

export default function DutchHomePage() {
  return renderLocalizedHomePage(locale);
}
