import {
  getShareImageAlt,
  renderLocalizedShareImage,
  shareImageContentType,
  shareImageSize,
} from "@/app/_localized/renderShareImage";

export const runtime = "edge";

const locale = "de" as const;

export const size = shareImageSize;
export const contentType = shareImageContentType;
export const alt = getShareImageAlt(locale, "home");

export default function OpenGraphImage() {
  return renderLocalizedShareImage(locale, "homeOpenGraph");
}
