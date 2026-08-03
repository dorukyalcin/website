import {
  getShareImageAlt,
  renderLocalizedShareImage,
  shareImageContentType,
  shareImageSize,
} from "@/app/_localized/renderShareImage";

export const runtime = "edge";

const locale = "tr" as const;

export const size = shareImageSize;
export const contentType = shareImageContentType;
export const alt = getShareImageAlt(locale, "primeroute");

export default function TwitterImage() {
  return renderLocalizedShareImage(locale, "primeroute");
}
