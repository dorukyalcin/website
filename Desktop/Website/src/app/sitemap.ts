import type { MetadataRoute } from "next";
import { getIndexablePages } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return getIndexablePages().map((page) => ({
    url: page.url,
    ...(page.lastModified
      ? { lastModified: new Date(`${page.lastModified}T12:00:00.000Z`) }
      : {}),
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : 0.8,
    ...(page.images && page.images.length > 0 ? { images: page.images } : {}),
  }));
}
