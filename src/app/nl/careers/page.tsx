import { renderLocalizedCareersPage } from "@/app/_localized/renderPage";
import { buildPageMetadata } from "@/lib/seo";

const locale = "nl" as const;

export const metadata = buildPageMetadata(locale, "careers");

export default function DutchCareersPage() {
  return renderLocalizedCareersPage(locale);
}
