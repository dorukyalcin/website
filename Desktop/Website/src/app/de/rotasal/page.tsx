import { renderLocalizedPrimeRoutePage } from "@/app/_localized/renderPage";
import { buildPageMetadata } from "@/lib/seo";

const locale = "de" as const;

export const metadata = buildPageMetadata(locale, "primeroute");

export default function GermanRotasalPage() {
  return renderLocalizedPrimeRoutePage(locale);
}
