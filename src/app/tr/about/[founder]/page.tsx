import { notFound } from "next/navigation";
import { renderLocalizedFounderProfilePage } from "@/app/_localized/renderPage";
import { founders, getFounderBySlug } from "@/lib/founders";
import { buildFounderProfileMetadata } from "@/lib/seo";

const locale = "tr";

type FounderProfilePageProps = {
  params: Promise<{ founder: string }>;
};

export function generateStaticParams() {
  return founders.map((founder) => ({ founder: founder.slug }));
}

export async function generateMetadata({ params }: FounderProfilePageProps) {
  const { founder: founderSlug } = await params;
  const founder = getFounderBySlug(founderSlug);

  if (!founder) {
    return {};
  }

  return buildFounderProfileMetadata(locale, founder);
}

export default async function TurkishFounderProfilePage({
  params,
}: FounderProfilePageProps) {
  const { founder: founderSlug } = await params;
  const founder = getFounderBySlug(founderSlug);

  if (!founder) {
    notFound();
  }

  return renderLocalizedFounderProfilePage(locale, founder);
}
