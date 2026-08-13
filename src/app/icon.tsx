import { buildBrandedIconImageResponse } from "./_seo/brandedIcon";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return buildBrandedIconImageResponse({
    size,
    background: "#050505",
    logoInset: 40,
  });
}
