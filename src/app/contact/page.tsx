import { renderLocalizedContactPage } from "@/app/_localized/renderPage";
import { buildPageMetadata } from "@/lib/seo";

const locale = "en" as const;

export const metadata = buildPageMetadata(locale, "contact");

export default function ContactPage() {
  return renderLocalizedContactPage(locale);
}
