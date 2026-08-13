import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { brandLogo } from "./brand";

let cachedBrandLogoDataUrl: string | undefined;

export async function getBrandLogoDataUrl() {
  if (cachedBrandLogoDataUrl) {
    return cachedBrandLogoDataUrl;
  }

  const logoPath = join(process.cwd(), "public", brandLogo.src.slice(1));
  const logoBuffer = await readFile(logoPath);

  cachedBrandLogoDataUrl =
    `data:image/jpeg;base64,${logoBuffer.toString("base64")}`;

  return cachedBrandLogoDataUrl;
}
