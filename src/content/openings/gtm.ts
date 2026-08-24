import type { Opening } from "@/lib/openings";
import {
  companyIntro,
  fullTimeQuestions,
  hiringRound,
  onsiteLocation,
  yearlySalary,
} from "./shared";

const base = {
  status: "open",
  postedAt: hiringRound.postedAt,
  validThrough: hiringRound.applyBy,
  team: "gtm",
  employmentType: "FULL_TIME",
  ...onsiteLocation,
  questions: fullTimeQuestions,
} as const;

export const solutionsEngineer = {
  ...base,
  slug: "solutions-engineer",
  salary: yearlySalary(175000),
  content: {
    en: {
      title: "Solutions Engineer",
      summary:
        "Be the technical partner for prospects and customers: demos, integrations, and successful rollouts.",
      intro: [
        companyIntro.en,
        "You'll sit between customers and the product: run technical demos, scope integrations with their order and warehouse systems, get pilots live, and bring what you learn back to engineering.",
      ],
      responsibilities: [
        "Run technical discovery and demos with delivery operators.",
        "Scope and deliver integrations and pilots, hands-on with APIs and data.",
        "Onboard customers and be their technical point of contact through rollout.",
        "Feed customer needs and field learnings into the roadmap.",
      ],
      requirements: [
        "Experience as a solutions or sales engineer, integration engineer, or a similar customer-facing technical role.",
        "Comfortable with APIs, data formats, and scripting.",
        "Excellent communication and a genuine liking for customers.",
        "Fluent English.",
      ],
      niceToHave: [
        "Logistics or supply-chain software experience.",
        "Additional languages (German, Dutch, or Turkish).",
      ],
    },
    de: {
      title: "Solutions Engineer",
      summary:
        "Sei der technische Partner für Interessenten und Kunden: Demos, Integrationen und erfolgreiche Rollouts.",
      intro: [
        companyIntro.de,
        "Du stehst zwischen Kunden und Produkt: Du hältst technische Demos, steckst Integrationen mit ihren Auftrags- und Lagersystemen ab, bringst Pilotprojekte live und trägst, was du lernst, zurück ins Engineering.",
      ],
      responsibilities: [
        "Du führst technische Discovery und Demos mit Lieferbetrieben durch.",
        "Du steckst Integrationen und Pilotprojekte ab und lieferst sie — hands-on mit APIs und Daten.",
        "Du begleitest Kunden beim Onboarding und bist während des gesamten Rollouts ihre technische Ansprechperson.",
        "Du bringst Kundenbedürfnisse und Erkenntnisse aus dem Feld in die Roadmap ein.",
      ],
      requirements: [
        "Erfahrung als Solutions oder Sales Engineer, Integration Engineer oder in einer ähnlichen kundennahen technischen Rolle.",
        "Sicher im Umgang mit APIs, Datenformaten und Scripting.",
        "Exzellente Kommunikation und echte Freude am Umgang mit Kunden.",
        "Fließendes Englisch.",
      ],
      niceToHave: [
        "Erfahrung mit Logistik- oder Supply-Chain-Software.",
        "Weitere Sprachen (Deutsch, Niederländisch oder Türkisch).",
      ],
    },
    nl: {
      title: "Solutions Engineer",
      summary:
        "Wees de technische partner voor prospects en klanten: demo's, integraties en succesvolle uitrol.",
      intro: [
        companyIntro.nl,
        "Je zit tussen klanten en het product in: je geeft technische demo's, bepaalt de scope van integraties met hun order- en magazijnsystemen, krijgt pilots live en brengt wat je leert terug naar engineering.",
      ],
      responsibilities: [
        "Je doet technische discovery en geeft demo's aan bezorgbedrijven.",
        "Je bepaalt de scope van integraties en pilots en levert ze op, hands-on met API's en data.",
        "Je onboardt klanten en bent tijdens de hele uitrol hun technische aanspreekpunt.",
        "Je brengt klantbehoeften en lessen uit het veld in de roadmap in.",
      ],
      requirements: [
        "Ervaring als solutions of sales engineer, integratie-engineer of in een vergelijkbare klantgerichte technische rol.",
        "Vertrouwd met API's, dataformaten en scripting.",
        "Uitstekende communicatie en oprecht plezier in het werken met klanten.",
        "Vloeiend Engels.",
      ],
      niceToHave: [
        "Ervaring met logistieke of supply-chainsoftware.",
        "Extra talen (Duits, Nederlands of Turks).",
      ],
    },
    tr: {
      title: "Çözüm Mühendisi",
      summary:
        "Potansiyel ve mevcut müşterilerin teknik partneri olacaksın: demolar, entegrasyonlar ve başarılı devreye alımlar.",
      intro: [
        companyIntro.tr,
        "Müşterilerle ürün arasında duracaksın: teknik demolar yapacak, sipariş ve depo sistemleriyle entegrasyonların kapsamını belirleyecek, pilotları canlıya alacak ve öğrendiklerini mühendisliğe geri taşıyacaksın.",
      ],
      responsibilities: [
        "Teslimat operatörleriyle teknik keşif görüşmeleri ve demolar yapacaksın.",
        "Entegrasyonların ve pilotların kapsamını belirleyip teslim edeceksin — API'ler ve veriyle bizzat çalışarak.",
        "Müşterilerin onboarding sürecini yürütecek ve devreye alma boyunca teknik iletişim noktaları olacaksın.",
        "Müşteri ihtiyaçlarını ve sahadan öğrendiklerini yol haritasına aktaracaksın.",
      ],
      requirements: [
        "Çözüm mühendisi, satış mühendisi, entegrasyon mühendisi ya da benzeri, müşteriyle doğrudan temas eden teknik bir rolde deneyim.",
        "API'ler, veri formatları ve scripting ile rahat çalışabilme.",
        "Mükemmel iletişim ve müşterilerle çalışmaktan gerçekten keyif alma.",
        "Akıcı İngilizce.",
      ],
      niceToHave: [
        "Lojistik veya tedarik zinciri yazılımı deneyimi.",
        "Ek diller (Almanca, Hollandaca veya Türkçe).",
      ],
    },
  },
} as const satisfies Opening;


export const gtmOpenings = [
  solutionsEngineer,
] as const satisfies readonly Opening[];
