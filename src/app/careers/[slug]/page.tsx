import { notFound } from "next/navigation";
import { renderLocalizedOpeningPage } from "@/app/_localized/renderPage";
import { getOpeningBySlug, openings } from "@/lib/openings";
import { buildOpeningMetadata } from "@/lib/seo";

const locale = "en";

type OpeningPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return openings.map((opening) => ({ slug: opening.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: OpeningPageProps) {
  const { slug } = await params;
  const opening = getOpeningBySlug(slug);

  if (!opening) {
    return {};
  }

  return buildOpeningMetadata(locale, opening);
}

export default async function OpeningPage({
  params,
}: OpeningPageProps) {
  const { slug } = await params;
  const opening = getOpeningBySlug(slug);

  if (!opening) {
    notFound();
  }

  return renderLocalizedOpeningPage(locale, opening);
}
