import { buildBrandedIconImageResponse } from "./_seo/brandedIcon";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return buildBrandedIconImageResponse({
    size,
    background: "#050505",
    logoInset: 12,
  });
}
