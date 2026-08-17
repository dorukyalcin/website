import { companyOffice } from "@/lib/company";
import type { Locale } from "@/lib/i18n";
import type { OpeningQuestion, OpeningSalary } from "@/lib/openings";

// Opening paragraph shared by every role description.
export const companyIntro: Record<Locale, string> = {
  en: "Avernsys builds Rotasal, a route optimization platform for last-mile delivery teams: dispatchers enter their orders and get optimized, driver-ready routes in seconds. We're a small, founder-led team in Palo Alto, and every hire shapes both the product and how we work.",
  de: "Avernsys entwickelt Rotasal, eine Plattform zur Routenoptimierung für Lieferteams auf der letzten Meile: Disponenten geben ihre Aufträge ein und erhalten in Sekunden optimierte, fahrerfertige Routen. Wir sind ein kleines, gründergeführtes Team in Palo Alto — jede Neueinstellung prägt sowohl das Produkt als auch unsere Arbeitsweise.",
  nl: "Avernsys bouwt Rotasal, een platform voor routeoptimalisatie voor last-mile bezorgteams: planners voeren hun orders in en krijgen binnen seconden geoptimaliseerde routes waar chauffeurs direct mee op pad kunnen. We zijn een klein team onder leiding van de oprichter in Palo Alto, en elke nieuwe collega bepaalt mee hoe het product én de manier van werken eruitzien.",
  tr: "Avernsys, son kilometre teslimat ekipleri için rota optimizasyonu platformu Rotasal'ı geliştiriyor: planlamacılar siparişlerini giriyor ve saniyeler içinde optimize edilmiş, sürücüye hazır rotalar alıyor. Palo Alto'da kurucunun liderliğinde küçük bir ekibiz ve her yeni katılan hem ürünü hem de çalışma biçimimizi şekillendiriyor.",
};

// Dates shared by the current hiring round (see the "Join Avernsys" flier).
export const hiringRound = {
  postedAt: "2026-08-17",
  applyBy: "2026-09-01",
} as const;

// Full-time roles are on-site at the Palo Alto office.
export const onsiteLocation = {
  workplaceType: "ONSITE",
  city: companyOffice.city,
  region: companyOffice.region,
  countryCode: companyOffice.countryCode,
} as const;

// Internships are remote from anywhere in the world.
export const remoteWorldwide = {
  workplaceType: "REMOTE",
  countryCode: companyOffice.countryCode,
  remoteEligibleRegions: "WORLDWIDE",
} as const;

export function yearlySalary(amountUsd: number): OpeningSalary {
  return { currency: "USD", min: amountUsd, max: amountUsd, unitText: "YEAR" };
}

export function monthlySalary(amountUsd: number): OpeningSalary {
  return { currency: "USD", min: amountUsd, max: amountUsd, unitText: "MONTH" };
}

// --- Shared application questions -----------------------------------------

export const visaQuestion = {
  id: "visa-sponsorship",
  type: "select",
  required: true,
  label: {
    en: "Will you need US visa sponsorship for this role?",
    de: "Benötigst du für diese Stelle ein US-Visum-Sponsoring?",
    nl: "Heb je voor deze rol sponsoring van een Amerikaans visum nodig?",
    tr: "Bu rol için ABD vize sponsorluğuna ihtiyacın olacak mı?",
  },
  options: [
    {
      value: "no",
      label: {
        en: "No — I'm authorized to work in the US",
        de: "Nein — ich habe eine Arbeitserlaubnis für die USA",
        nl: "Nee — ik mag in de VS werken",
        tr: "Hayır — ABD'de çalışma iznim var",
      },
    },
    {
      value: "yes",
      label: {
        en: "Yes — I'll need sponsorship (we sponsor)",
        de: "Ja — ich brauche Sponsoring (wir sponsern)",
        nl: "Ja — ik heb sponsoring nodig (wij sponsoren)",
        tr: "Evet — sponsorluk gerekecek (sponsor oluyoruz)",
      },
    },
  ],
} as const satisfies OpeningQuestion;

export const startDateQuestion = {
  id: "start-date",
  type: "text",
  required: false,
  label: {
    en: "When could you start?",
    de: "Wann könntest du anfangen?",
    nl: "Wanneer zou je kunnen beginnen?",
    tr: "Ne zaman başlayabilirsin?",
  },
} as const satisfies OpeningQuestion;

export const relocationQuestion = {
  id: "relocation",
  type: "select",
  required: true,
  label: {
    en: "Are you able to work on-site in Palo Alto, CA?",
    de: "Kannst du vor Ort in Palo Alto, Kalifornien arbeiten?",
    nl: "Kun je op locatie in Palo Alto, Californië werken?",
    tr: "Palo Alto, Kaliforniya'da ofiste çalışabilir misin?",
  },
  options: [
    {
      value: "local",
      label: {
        en: "Yes — I'm already in the Bay Area",
        de: "Ja — ich bin bereits in der Bay Area",
        nl: "Ja — ik woon al in de Bay Area",
        tr: "Evet — zaten Bay Area'dayım",
      },
    },
    {
      value: "relocate",
      label: {
        en: "Yes — I'm willing to relocate",
        de: "Ja — ich bin bereit umzuziehen",
        nl: "Ja — ik ben bereid te verhuizen",
        tr: "Evet — taşınmaya hazırım",
      },
    },
    {
      value: "no",
      label: {
        en: "No",
        de: "Nein",
        nl: "Nee",
        tr: "Hayır",
      },
    },
  ],
} as const satisfies OpeningQuestion;

export const timezoneQuestion = {
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
      value: "americas",
      label: {
        en: "Americas (UTC-8 to UTC-3)",
        de: "Amerika (UTC-8 bis UTC-3)",
        nl: "Amerika (UTC-8 tot UTC-3)",
        tr: "Amerika (UTC-8 ile UTC-3 arası)",
      },
    },
    {
      value: "europe-africa",
      label: {
        en: "Europe / Africa (UTC-1 to UTC+3)",
        de: "Europa / Afrika (UTC-1 bis UTC+3)",
        nl: "Europa / Afrika (UTC-1 tot UTC+3)",
        tr: "Avrupa / Afrika (UTC-1 ile UTC+3 arası)",
      },
    },
    {
      value: "asia-pacific",
      label: {
        en: "Asia / Pacific (UTC+4 to UTC+12)",
        de: "Asien / Pazifik (UTC+4 bis UTC+12)",
        nl: "Azië / Pacific (UTC+4 tot UTC+12)",
        tr: "Asya / Pasifik (UTC+4 ile UTC+12 arası)",
      },
    },
  ],
} as const satisfies OpeningQuestion;

export const internshipDatesQuestion = {
  id: "internship-dates",
  type: "text",
  required: true,
  label: {
    en: "Which dates are you available for the internship, and how many hours a week?",
    de: "In welchem Zeitraum bist du für das Praktikum verfügbar, und wie viele Stunden pro Woche?",
    nl: "In welke periode ben je beschikbaar voor de stage, en hoeveel uur per week?",
    tr: "Staj için hangi tarihlerde ve haftada kaç saat müsaitsin?",
  },
} as const satisfies OpeningQuestion;

export const portfolioQuestion = {
  id: "portfolio",
  type: "text",
  required: true,
  label: {
    en: "Link to your portfolio or case studies",
    de: "Link zu deinem Portfolio oder deinen Case Studies",
    nl: "Link naar je portfolio of casestudy's",
    tr: "Portfolyonun veya vaka çalışmalarının bağlantısı",
  },
} as const satisfies OpeningQuestion;

export const fullTimeQuestions = [
  relocationQuestion,
  visaQuestion,
  startDateQuestion,
] as const;

export const internshipQuestions = [
  timezoneQuestion,
  internshipDatesQuestion,
] as const;
