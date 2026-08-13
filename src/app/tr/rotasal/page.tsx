import { renderLocalizedPrimeRoutePage } from "@/app/_localized/renderPage";
import { buildPageMetadata } from "@/lib/seo";

const locale = "tr" as const;

export const metadata = buildPageMetadata(locale, "primeroute");

export default function TurkishRotasalPage() {
  return renderLocalizedPrimeRoutePage(locale);
}
