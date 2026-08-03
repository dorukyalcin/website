import { ImageResponse } from "next/og";
import { ShareImage, type ShareTone } from "@/app/_seo/share-image";
import { getDictionary, type Locale } from "@/lib/i18n";

type ShareImageKey = "homeOpenGraph" | "homeTwitter" | "primeroute";
type ShareImagePageKey = "home" | "primeroute";

export const shareImageSize = {
  width: 1200,
  height: 630,
};

export const shareImageContentType = "image/png";

export function getShareImageAlt(
  locale: Locale,
  pageKey: ShareImagePageKey,
) {
  return getDictionary(locale).seo[pageKey].socialImageAlt;
}

export function renderLocalizedShareImage(
  locale: Locale,
  imageKey: ShareImageKey,
) {
  const dictionary = getDictionary(locale);
  const copy = dictionary.shareImages[imageKey];

  return new ImageResponse(
    (
      <ShareImage
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        tone={copy.tone as ShareTone}
        highlights={copy.highlights}
        footer={dictionary.site.tagline}
      />
    ),
    shareImageSize,
  );
}
