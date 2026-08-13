import { renderLocalizedCareersPage } from "@/app/_localized/renderPage";
import { buildPageMetadata } from "@/lib/seo";

const locale = "en" as const;

export const metadata = buildPageMetadata(locale, "careers");

export default function CareersPage() {
  return renderLocalizedCareersPage(locale);
}
