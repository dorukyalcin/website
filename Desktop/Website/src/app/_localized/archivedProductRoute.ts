import { getPagePath, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/seo";

const copyByLocale: Record<
  Locale,
  {
    title: string;
    description: string;
    rotasalLink: string;
    contactLink: string;
  }
> = {
  en: {
    title: "ChapterSys has been archived",
    description:
      "ChapterSys is no longer offered as an Avernsys product. Avernsys now focuses on Rotasal, our last-mile route optimization software.",
    rotasalLink: "Visit Rotasal",
    contactLink: "Contact Avernsys",
  },
  tr: {
    title: "ChapterSys arşivlendi",
    description:
      "ChapterSys artık Avernsys ürünü olarak sunulmuyor. Avernsys artık son kilometre rota optimizasyon yazılımımız Rotasal'a odaklanıyor.",
    rotasalLink: "Rotasal'ı inceleyin",
    contactLink: "Avernsys ile iletişime geçin",
  },
  de: {
    title: "ChapterSys wurde archiviert",
    description:
      "ChapterSys wird nicht mehr als Avernsys-Produkt angeboten. Avernsys konzentriert sich jetzt auf Rotasal, unsere Software zur Last-Mile-Routenoptimierung.",
    rotasalLink: "Rotasal ansehen",
    contactLink: "Avernsys kontaktieren",
  },
  nl: {
    title: "ChapterSys is gearchiveerd",
    description:
      "ChapterSys wordt niet langer aangeboden als Avernsys-product. Avernsys richt zich nu op Rotasal, onze software voor last-mile routeoptimalisatie.",
    rotasalLink: "Bekijk Rotasal",
    contactLink: "Neem contact op",
  },
};

function buildArchivedChapterSysHtml(locale: Locale) {
  const copy = copyByLocale[locale];
  const rotasalUrl = getPagePath(locale, "primeroute");
  const contactUrl = getPagePath(locale, "contact");

  return `<!doctype html>
<html lang="${locale}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, noarchive">
    <title>${copy.title} | ${siteConfig.name}</title>
    <style>
      :root { color-scheme: dark; }
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background: #050505;
        color: #f5f5f5;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      main {
        width: min(680px, calc(100vw - 48px));
      }
      p {
        color: rgba(245, 245, 245, 0.68);
        font-size: 18px;
        line-height: 1.6;
      }
      h1 {
        margin: 0 0 16px;
        font-size: clamp(40px, 8vw, 72px);
        line-height: 0.96;
        letter-spacing: -0.04em;
      }
      nav {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 32px;
      }
      a {
        border: 1px solid rgba(255, 255, 255, 0.18);
        border-radius: 999px;
        color: #f5f5f5;
        padding: 12px 18px;
        text-decoration: none;
      }
      a:first-child {
        background: #f5f5f5;
        color: #050505;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>${copy.title}</h1>
      <p>${copy.description}</p>
      <nav aria-label="Archived product links">
        <a href="${rotasalUrl}">${copy.rotasalLink}</a>
        <a href="${contactUrl}">${copy.contactLink}</a>
      </nav>
    </main>
  </body>
</html>`;
}

export function buildArchivedChapterSysResponse(
  locale: Locale,
  options: { includeBody?: boolean } = {},
) {
  const includeBody = options.includeBody ?? true;

  return new Response(includeBody ? buildArchivedChapterSysHtml(locale) : null, {
    status: 410,
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, noarchive",
    },
  });
}
