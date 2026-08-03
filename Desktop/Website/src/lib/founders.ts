type Founder = {
  key: string;
  name: string;
  alternateNames?: readonly string[];
  givenName: string;
  familyName: string;
  slug: string;
  sameAs: readonly string[];
  knowsAbout: readonly string[];
  affiliation?: {
    name: string;
    sameAs?: string;
  };
  photo: {
    src: string;
    alt: string;
    objectPosition: string;
    scale: number;
  };
};

export const founders = [
  {
    key: "doruk",
    name: "Doruk Yalcin",
    alternateNames: ["Doruk Yalçın"],
    givenName: "Doruk",
    familyName: "Yalcin",
    slug: "doruk-yalcin",
    sameAs: ["https://www.linkedin.com/in/doruk-yalcin/"],
    knowsAbout: [
      "Route optimization software",
      "Last-mile delivery optimization",
      "Mathematical optimization",
      "Machine learning",
      "Computer vision",
      "Logistics technology",
    ],
    affiliation: {
      name: "Koç University",
      sameAs: "https://www.ku.edu.tr/en/",
    },
    photo: {
      src: "/founders/doruk-yalcin-avernsys-co-founder.jpg",
      alt: "Doruk Yalcin, co-founder of Avernsys",
      objectPosition: "78% 55%",
      scale: 1.95,
    },
  },
  {
    key: "murat",
    name: "Murat Baki",
    givenName: "Murat",
    familyName: "Baki",
    slug: "murat-baki",
    sameAs: ["https://www.linkedin.com/in/murat-baki-mb/"],
    knowsAbout: [
      "Business strategy",
      "Operations",
      "Management consulting",
      "Enterprise software adoption",
    ],
    photo: {
      src: "/founders/murat-baki-avernsys-co-founder.jpeg",
      alt: "Murat Baki, co-founder of Avernsys",
      objectPosition: "50% 18%",
      scale: 2.1,
    },
  },
] as const satisfies readonly Founder[];

export type FounderProfile = (typeof founders)[number] &
  Pick<Founder, "alternateNames" | "affiliation">;

export function getFounderBySlug(slug: string): FounderProfile | undefined {
  return founders.find((founder) => founder.slug === slug);
}
