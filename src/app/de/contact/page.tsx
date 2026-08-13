import { renderLocalizedContactPage } from "@/app/_localized/renderPage";
import { buildPageMetadata } from "@/lib/seo";

const locale = "de" as const;

export const metadata = buildPageMetadata(locale, "contact");

export default function GermanContactPage() {
  return renderLocalizedContactPage(locale);
}
