import { renderLocalizedPrimeRoutePage } from "@/app/_localized/renderPage";
import { buildPageMetadata } from "@/lib/seo";

const locale = "nl" as const;

export const metadata = buildPageMetadata(locale, "primeroute");

export default function DutchRotasalPage() {
  return renderLocalizedPrimeRoutePage(locale);
}
