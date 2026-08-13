import { renderLocalizedCareersPage } from "@/app/_localized/renderPage";
import { buildPageMetadata } from "@/lib/seo";

const locale = "tr" as const;

export const metadata = buildPageMetadata(locale, "careers");

export default function TurkishCareersPage() {
  return renderLocalizedCareersPage(locale);
}
