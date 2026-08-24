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

export const workModeQuestion = {
  id: "work-mode",
  type: "select",
  required: true,
  label: {
    en: "How would you prefer to work?",
    de: "Wie möchtest du am liebsten arbeiten?",
    nl: "Hoe werk je het liefst?",
    tr: "Nasıl çalışmayı tercih edersin?",
  },
  options: [
    {
      value: "onsite",
      label: {
        en: "In person — Palo Alto, CA",
        de: "Vor Ort — Palo Alto, Kalifornien",
        nl: "Op locatie — Palo Alto, Californië",
        tr: "Ofiste — Palo Alto, Kaliforniya",
      },
    },
    {
      value: "remote",
      label: {
        en: "Remote",
        de: "Remote",
        nl: "Remote",
        tr: "Uzaktan",
      },
    },
    {
      value: "flexible",
      label: {
        en: "Either works for me",
        de: "Beides ist für mich in Ordnung",
        nl: "Beide zijn prima",
        tr: "İkisi de olur",
      },
    },
  ],
} as const satisfies OpeningQuestion;

// Only relevant when the candidate wants to work in person in the US.
export const visaQuestion = {
  id: "visa-sponsorship",
  type: "select",
  required: true,
  showIf: { questionId: "work-mode", anyOf: ["onsite", "flexible"] },
  label: {
    en: "Would you need US visa sponsorship to work in Palo Alto?",
    de: "Bräuchtest du ein US-Visum-Sponsoring, um in Palo Alto zu arbeiten?",
    nl: "Heb je sponsoring van een Amerikaans visum nodig om in Palo Alto te werken?",
    tr: "Palo Alto'da çalışmak için ABD vize sponsorluğuna ihtiyacın olur mu?",
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

export const currentLocationQuestion = {
  id: "current-location",
  type: "text",
  required: true,
  label: {
    en: "Where are you currently based? (city, country)",
    de: "Wo lebst du derzeit? (Stadt, Land)",
    nl: "Waar woon je op dit moment? (stad, land)",
    tr: "Şu anda nerede yaşıyorsun? (şehir, ülke)",
  },
} as const satisfies OpeningQuestion;

export const experienceQuestion = {
  id: "experience",
  type: "select",
  required: true,
  label: {
    en: "How many years of relevant experience do you have?",
    de: "Wie viele Jahre relevante Erfahrung hast du?",
    nl: "Hoeveel jaar relevante ervaring heb je?",
    tr: "Kaç yıllık ilgili deneyimin var?",
  },
  options: [
    {
      value: "0-2",
      label: { en: "0–2 years", de: "0–2 Jahre", nl: "0–2 jaar", tr: "0–2 yıl" },
    },
    {
      value: "3-5",
      label: { en: "3–5 years", de: "3–5 Jahre", nl: "3–5 jaar", tr: "3–5 yıl" },
    },
    {
      value: "6-10",
      label: { en: "6–10 years", de: "6–10 Jahre", nl: "6–10 jaar", tr: "6–10 yıl" },
    },
    {
      value: "10+",
      label: {
        en: "More than 10 years",
        de: "Mehr als 10 Jahre",
        nl: "Meer dan 10 jaar",
        tr: "10 yıldan fazla",
      },
    },
  ],
} as const satisfies OpeningQuestion;

export const noticePeriodQuestion = {
  id: "start-date",
  type: "text",
  required: false,
  label: {
    en: "When could you start? (notice period, if any)",
    de: "Wann könntest du anfangen? (ggf. Kündigungsfrist)",
    nl: "Wanneer zou je kunnen beginnen? (eventuele opzegtermijn)",
    tr: "Ne zaman başlayabilirsin? (varsa ihbar süren)",
  },
} as const satisfies OpeningQuestion;

export const hearAboutQuestion = {
  id: "hear-about-us",
  type: "select",
  required: false,
  label: {
    en: "How did you hear about us?",
    de: "Wie bist du auf uns aufmerksam geworden?",
    nl: "Hoe heb je over ons gehoord?",
    tr: "Bizi nereden duydun?",
  },
  options: [
    {
      value: "linkedin",
      label: { en: "LinkedIn", de: "LinkedIn", nl: "LinkedIn", tr: "LinkedIn" },
    },
    {
      value: "instagram",
      label: { en: "Instagram", de: "Instagram", nl: "Instagram", tr: "Instagram" },
    },
    {
      value: "referral",
      label: {
        en: "A friend or colleague",
        de: "Über Freunde oder Kollegen",
        nl: "Via een vriend of collega",
        tr: "Bir arkadaş ya da meslektaş",
      },
    },
    {
      value: "job-board",
      label: {
        en: "A job board",
        de: "Über eine Jobbörse",
        nl: "Via een vacaturesite",
        tr: "Bir iş ilanı sitesi",
      },
    },
    {
      value: "other",
      label: { en: "Other", de: "Anders", nl: "Anders", tr: "Diğer" },
    },
  ],
} as const satisfies OpeningQuestion;

export const educationQuestion = {
  id: "education",
  type: "text",
  required: true,
  label: {
    en: "Where do you study, and in which program and year?",
    de: "Wo studierst du, und in welchem Studiengang und Jahr?",
    nl: "Waar studeer je, en in welke opleiding en welk jaar?",
    tr: "Nerede, hangi bölümde ve kaçıncı sınıfta okuyorsun?",
  },
} as const satisfies OpeningQuestion;

// Only relevant when the candidate wants to work remotely.
export const timezoneQuestion = {
  id: "timezone",
  type: "select",
  required: true,
  showIf: { questionId: "work-mode", anyOf: ["remote", "flexible"] },
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
  workModeQuestion,
  visaQuestion,
  timezoneQuestion,
  currentLocationQuestion,
  experienceQuestion,
  noticePeriodQuestion,
  hearAboutQuestion,
] as const;

export const internshipQuestions = [
  workModeQuestion,
  visaQuestion,
  timezoneQuestion,
  currentLocationQuestion,
  educationQuestion,
  internshipDatesQuestion,
  hearAboutQuestion,
] as const;
