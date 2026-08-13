import type { Opening } from "@/lib/openings";

// Placeholder first opening — edit or replace before posting for real.
export const softwareEngineerRotasal = {
  slug: "software-engineer-rotasal",
  status: "open",
  postedAt: "2026-08-13",
  employmentType: "FULL_TIME",
  workplaceType: "REMOTE",
  countryCode: "TR",
  remoteEligibleRegions: ["TR", "DE", "NL"],
  content: {
    en: {
      title: "Software Engineer — Rotasal",
      summary:
        "Build the route optimization engine and product surface of Rotasal, working directly with the founder.",
      intro: [
        "Avernsys builds Rotasal, a route optimization platform for last-mile delivery teams. You would be one of the first engineers on the product, shaping both the optimization core and the web application around it.",
      ],
      responsibilities: [
        "Design and implement features across the Rotasal web application and API.",
        "Work on routing, scheduling, and optimization logic together with the founder.",
        "Own what you ship: instrument it, monitor it, improve it.",
        "Talk to early customers and turn their feedback into product decisions.",
      ],
      requirements: [
        "Strong TypeScript or strong experience in a comparable language with willingness to work in TypeScript.",
        "Experience building and operating production web applications.",
        "Comfort working autonomously in a very small team.",
        "Working proficiency in English.",
      ],
      niceToHave: [
        "Background in optimization, operations research, or logistics.",
        "Experience with PostgreSQL and modern React.",
      ],
      offer: [
        "Meaningful early-stage equity.",
        "Remote-first work with flexible hours.",
        "Direct influence on product and technical direction.",
      ],
    },
    de: {
      title: "Software Engineer — Rotasal",
      summary:
        "Entwickle die Routenoptimierung und das Produkt von Rotasal, in direkter Zusammenarbeit mit dem Gründer.",
      intro: [
        "Avernsys entwickelt Rotasal, eine Plattform zur Routenoptimierung für Lieferteams auf der letzten Meile. Du wärst einer der ersten Engineers im Produkt und gestaltest sowohl den Optimierungskern als auch die Webanwendung darum herum.",
      ],
      responsibilities: [
        "Entwirf und implementiere Features in der Rotasal-Webanwendung und -API.",
        "Arbeite gemeinsam mit dem Gründer an Routing-, Planungs- und Optimierungslogik.",
        "Übernimm Verantwortung für das, was du auslieferst: instrumentieren, beobachten, verbessern.",
        "Sprich mit frühen Kunden und übersetze ihr Feedback in Produktentscheidungen.",
      ],
      requirements: [
        "Sehr gutes TypeScript oder fundierte Erfahrung in einer vergleichbaren Sprache mit Bereitschaft, in TypeScript zu arbeiten.",
        "Erfahrung im Aufbau und Betrieb produktiver Webanwendungen.",
        "Selbstständiges Arbeiten in einem sehr kleinen Team.",
        "Gute Englischkenntnisse.",
      ],
      niceToHave: [
        "Hintergrund in Optimierung, Operations Research oder Logistik.",
        "Erfahrung mit PostgreSQL und modernem React.",
      ],
      offer: [
        "Substanzielle Early-Stage-Beteiligung.",
        "Remote-first mit flexiblen Arbeitszeiten.",
        "Direkter Einfluss auf Produkt und technische Ausrichtung.",
      ],
    },
    nl: {
      title: "Software Engineer — Rotasal",
      summary:
        "Bouw de routeoptimalisatie-engine en het product van Rotasal, in directe samenwerking met de oprichter.",
      intro: [
        "Avernsys bouwt Rotasal, een platform voor routeoptimalisatie voor last-mile bezorgteams. Je zou een van de eerste engineers op het product zijn en geeft zowel de optimalisatiekern als de webapplicatie eromheen vorm.",
      ],
      responsibilities: [
        "Ontwerp en implementeer features in de Rotasal-webapplicatie en -API.",
        "Werk samen met de oprichter aan routering-, plannings- en optimalisatielogica.",
        "Neem eigenaarschap over wat je oplevert: instrumenteren, monitoren, verbeteren.",
        "Praat met vroege klanten en vertaal hun feedback naar productbeslissingen.",
      ],
      requirements: [
        "Sterk in TypeScript, of ruime ervaring in een vergelijkbare taal en bereid in TypeScript te werken.",
        "Ervaring met het bouwen en draaien van productie-webapplicaties.",
        "Comfortabel met zelfstandig werken in een heel klein team.",
        "Goede beheersing van het Engels.",
      ],
      niceToHave: [
        "Achtergrond in optimalisatie, operations research of logistiek.",
        "Ervaring met PostgreSQL en modern React.",
      ],
      offer: [
        "Betekenisvolle early-stage equity.",
        "Remote-first werken met flexibele uren.",
        "Directe invloed op product en technische richting.",
      ],
    },
    tr: {
      title: "Yazılım Mühendisi — Rotasal",
      summary:
        "Rotasal'ın rota optimizasyonu motorunu ve ürününü, kurucuyla doğrudan çalışarak geliştir.",
      intro: [
        "Avernsys, son kilometre teslimat ekipleri için rota optimizasyonu platformu olan Rotasal'ı geliştiriyor. Üründeki ilk mühendislerden biri olarak hem optimizasyon çekirdeğini hem de etrafındaki web uygulamasını şekillendireceksin.",
      ],
      responsibilities: [
        "Rotasal web uygulaması ve API'sinde özellikler tasarla ve geliştir.",
        "Kurucuyla birlikte rotalama, planlama ve optimizasyon mantığı üzerinde çalış.",
        "Yayınladığın her şeyin sahibi ol: ölç, izle, iyileştir.",
        "Erken müşterilerle konuş ve geri bildirimlerini ürün kararlarına dönüştür.",
      ],
      requirements: [
        "Güçlü TypeScript bilgisi veya benzer bir dilde güçlü deneyim ve TypeScript ile çalışma isteği.",
        "Üretim ortamında web uygulaması geliştirme ve işletme deneyimi.",
        "Çok küçük bir ekipte özerk çalışabilme.",
        "İyi düzeyde İngilizce.",
      ],
      niceToHave: [
        "Optimizasyon, yöneylem araştırması veya lojistik geçmişi.",
        "PostgreSQL ve modern React deneyimi.",
      ],
      offer: [
        "Anlamlı erken aşama hisse opsiyonu.",
        "Esnek saatlerle uzaktan öncelikli çalışma.",
        "Ürün ve teknik yönde doğrudan söz hakkı.",
      ],
    },
  },
  questions: [
    {
      id: "timezone",
      type: "select",
      required: true,
      label: {
        en: "Which time zone are you based in?",
        de: "In welcher Zeitzone arbeitest du?",
        nl: "In welke tijdzone werk je?",
        tr: "Hangi saat diliminde çalışıyorsun?",
      },
      options: [
        {
          value: "europe",
          label: {
            en: "Europe (UTC-1 to UTC+3)",
            de: "Europa (UTC-1 bis UTC+3)",
            nl: "Europa (UTC-1 tot UTC+3)",
            tr: "Avrupa (UTC-1 ile UTC+3 arası)",
          },
        },
        {
          value: "other",
          label: {
            en: "Other",
            de: "Andere",
            nl: "Anders",
            tr: "Diğer",
          },
        },
      ],
    },
    {
      id: "start-date",
      type: "text",
      required: false,
      label: {
        en: "When could you start?",
        de: "Wann könntest du anfangen?",
        nl: "Wanneer zou je kunnen beginnen?",
        tr: "Ne zaman başlayabilirsin?",
      },
    },
  ],
} as const satisfies Opening;
