import { renderLocalizedContactPage } from "@/app/_localized/renderPage";
import { buildPageMetadata } from "@/lib/seo";

const locale = "nl" as const;

export const metadata = buildPageMetadata(locale, "contact");

export default function DutchContactPage() {
  return renderLocalizedContactPage(locale);
}
