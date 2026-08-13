import { renderLocalizedHomePage } from "@/app/_localized/renderPage";
import { buildPageMetadata } from "@/lib/seo";

const locale = "de" as const;

export const metadata = buildPageMetadata(locale, "home");

export default function GermanHomePage() {
  return renderLocalizedHomePage(locale);
}
