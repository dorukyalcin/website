import { absoluteUrl, getIndexablePages, siteConfig } from "@/lib/seo";

export type IndexNowConfig = {
  endpoint: string;
  host: string;
  key?: string;
  keyLocation?: string;
};

export type IndexNowPayload = {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
};

export function getIndexNowConfig(
  env: NodeJS.ProcessEnv = process.env,
): IndexNowConfig {
  const key = env.INDEXNOW_KEY?.trim() || undefined;

  return {
    endpoint: env.INDEXNOW_ENDPOINT?.trim() || "https://api.indexnow.org/indexnow",
    host: siteConfig.domain,
    key,
    keyLocation: key ? absoluteUrl("/indexnow-key.txt") : undefined,
  };
}

export function buildIndexNowPayload(
  urls: string[],
  env: NodeJS.ProcessEnv = process.env,
): IndexNowPayload | undefined {
  const config = getIndexNowConfig(env);

  if (!config.key || !config.keyLocation) {
    return undefined;
  }

  const urlList = Array.from(
    new Set(
      urls
        .map((url) => url.trim())
        .filter(Boolean)
        .map((url) => (url.startsWith("http") ? url : absoluteUrl(url))),
    ),
  );

  if (urlList.length === 0) {
    return undefined;
  }

  return {
    host: config.host,
    key: config.key,
    keyLocation: config.keyLocation,
    urlList,
  };
}

export function getDefaultIndexNowUrls() {
  return getIndexablePages().map((page) => page.url);
}
