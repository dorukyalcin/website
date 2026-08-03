import { renderLocalizedPrimeRoutePage } from "@/app/_localized/renderPage";
import { buildPageMetadata } from "@/lib/seo";

const locale = "en" as const;

export const metadata = buildPageMetadata(locale, "primeroute");

export default function RotasalPage() {
  return renderLocalizedPrimeRoutePage(locale);
}
