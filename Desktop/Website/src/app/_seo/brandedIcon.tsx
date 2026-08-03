import { ImageResponse } from "next/og";
import { getBrandLogoDataUrl } from "@/lib/brand.server";

type BrandedIconOptions = {
  size: {
    width: number;
    height: number;
  };
  background: string;
  logoInset: number;
};

export async function buildBrandedIconImageResponse({
  size,
  background,
  logoInset,
}: BrandedIconOptions) {
  const logoDataUrl = await getBrandLogoDataUrl();
  const logoSize = Math.min(size.width, size.height) - logoInset * 2;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background,
        }}
      >
        <img
          src={logoDataUrl}
          alt=""
          style={{
            width: `${logoSize}px`,
            height: `${logoSize}px`,
            objectFit: "contain",
          }}
        />
      </div>
    ),
    size,
  );
}
