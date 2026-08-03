import { renderLocalizedHomePage } from "@/app/_localized/renderPage";
import { buildPageMetadata } from "@/lib/seo";

const locale = "en" as const;

export const metadata = buildPageMetadata(locale, "home");

export default function HomePage() {
  return renderLocalizedHomePage(locale);
}
