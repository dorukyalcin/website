"use client";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Fire-and-forget event for GTM (dataLayer) and GA4 (gtag); no-op when
// neither integration is configured.
export function trackEvent(
  event: string,
  params: Record<string, string> = {},
): void {
  try {
    window.dataLayer?.push({ event, ...params });
    window.gtag?.("event", event, params);
  } catch {
    // Analytics must never break the page.
  }
}
