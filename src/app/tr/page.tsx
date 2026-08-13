import { renderLocalizedHomePage } from "@/app/_localized/renderPage";
import { buildPageMetadata } from "@/lib/seo";

const locale = "tr" as const;

export const metadata = buildPageMetadata(locale, "home");

export default function TurkishHomePage() {
  return renderLocalizedHomePage(locale);
}
