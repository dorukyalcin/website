import { renderLocalizedCareersPage } from "@/app/_localized/renderPage";
import { buildPageMetadata } from "@/lib/seo";

const locale = "de" as const;

export const metadata = buildPageMetadata(locale, "careers");

export default function GermanCareersPage() {
  return renderLocalizedCareersPage(locale);
}
