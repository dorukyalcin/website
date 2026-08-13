# SEO Operations

This repo now supports site-wide SEO and analytics wiring in code, but a few steps still need to happen in external tools.

## What code should handle

- `robots.txt`
- `sitemap.xml`
- Canonical URLs
- Page titles and descriptions
- Open Graph and Twitter metadata
- JSON-LD structured data (linked with stable `@id` values; Organization, WebSite, WebPage, SoftwareApplication, ItemList on home, Person on About — validate after changes in Rich Results Test)
- Sitemap `lastmod` from per-page `lastModified` in [`src/lib/seo.ts`](../src/lib/seo.ts) (bump the date when page content changes meaningfully)
- GTM, GA4, and Microsoft Clarity injection via env vars

## External setup checklist

### Google Search Console

- Verify the `avernsys.com` domain property.
- Submit `https://avernsys.com/sitemap.xml`.
- Inspect `/`, `/rotasal`, `/about`, and the founder profile pages after deploy.
- Confirm `/chaptersys` returns `410 Gone` with `X-Robots-Tag: noindex, noarchive`.
- Confirm `/primeroute` and `/flowsys` permanently redirect to `/rotasal`.
- Request indexing for any new or updated page.

### Bing Webmaster Tools

- Add the domain property for `avernsys.com`.
- Verify ownership.
- Submit the sitemap.
- Enable IndexNow if Bing recommends it for this property.

### Ahrefs Webmaster Tools

- Verify the domain.
- Use the site audit and backlink monitoring features.
- Re-run the audit after major releases.

### Semrush

- Add the domain to a project.
- Run site audits and position tracking only after the site has indexed cleanly.

### Looker Studio

- Connect Google Search Console.
- Connect GA4.
- Build one dashboard for organic landing pages, impressions, clicks, and conversions.

### Screaming Frog

- Crawl the live site after each SEO release.
- Check for duplicate titles, missing descriptions, broken canonicals, and 4xx pages.
- Export crawl data when you ship new pages.

### PageSpeed Insights

- Test the homepage and each product page on mobile first.
- Use it to watch Core Web Vitals regressions after code changes.

### CI (GitHub Actions)

- The SEO workflow runs **Lighthouse SEO** (score ≥ 0.9) and **Lighthouse Performance** (score ≥ 0.65) against the production build, home page only. Adjust thresholds in [`.github/workflows/seo-checks.yml`](../.github/workflows/seo-checks.yml) if the runner environment is too noisy.

### Rich Results Test

- Validate any JSON-LD before shipping.
- Re-test after schema changes.

### Schema Markup Validator

- Use it for syntax validation when Rich Results Test is too narrow.

### IndexNow

- Submit URLs when pages are created or materially updated.
- Keep the submission list focused on indexable pages only.

## Env vars

- `NEXT_PUBLIC_SITE_URL` — canonical origin for metadata, JSON-LD, and sitemap URLs. Use the real public URL per environment (if a preview deployment is publicly crawlable, set this to that preview origin or block crawlers at the host).
- `NEXT_PUBLIC_ORGANIZATION_SAME_AS` — optional comma-separated profile URLs (e.g. LinkedIn, X) included in Organization JSON-LD `sameAs`.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- `NEXT_PUBLIC_BING_SITE_VERIFICATION`
- `NEXT_PUBLIC_GTM_ID`
- `NEXT_PUBLIC_GA4_ID`
- `NEXT_PUBLIC_CLARITY_PROJECT_ID`
- `INDEXNOW_KEY`

## IndexNow from this repo

- The site now exposes `https://avernsys.com/indexnow-key.txt` when `INDEXNOW_KEY` is set.
- Submit all core pages with `npm run seo:indexnow`.
- Submit specific pages with `npm run seo:indexnow -- https://avernsys.com/rotasal`.
