import type { Opening } from "@/lib/openings";
import {
  companyIntro,
  hiringRound,
  internshipQuestions,
  remoteWorldwide,
} from "./shared";

// Internships are unpaid, fully remote, and open from anywhere.
const base = {
  status: "open",
  postedAt: hiringRound.postedAt,
  validThrough: hiringRound.applyBy,
  employmentType: "INTERN",
  ...remoteWorldwide,
  questions: internshipQuestions,
} as const;

export const softwareEngineeringIntern = {
  ...base,
  team: "engineering",
  slug: "software-engineering-intern",
  content: {
    en: {
      title: "Software Engineering Intern",
      summary:
        "Ship real features on Rotasal with a mentor — remote, from anywhere in the world.",
      intro: [
        companyIntro.en,
        "This is a real engineering internship: you'll own a scoped project on the web app, API, or driver app, ship it to production, and present it at the end. You'll have a mentor, a weekly plan, and the same code review as everyone else.",
      ],
      responsibilities: [
        "Build and ship a scoped feature or improvement end to end.",
        "Write tests, take part in code review, and document what you build.",
        "Present your work to the team at the end of the internship.",
      ],
      requirements: [
        "Studying computer science or a related field, or a comparable self-taught track record.",
        "Some experience with TypeScript/JavaScript, Python, or a similar language.",
        "Curiosity, reliability, and working proficiency in English.",
        "Ability to overlap a few hours a day with the team's working hours.",
      ],
      niceToHave: [
        "Personal projects, open-source contributions, or hackathon work.",
        "Interest in maps, logistics, or optimization.",
      ],
    },
    de: {
      title: "Praktikum Software Engineering",
      summary:
        "Bring mit einem Mentor an deiner Seite echte Features in Rotasal live — remote, von überall auf der Welt.",
      intro: [
        companyIntro.de,
        "Das ist ein echtes Engineering-Praktikum: Du übernimmst ein klar abgegrenztes Projekt in der Web-App, der API oder der Fahrer-App, bringst es in Produktion und stellst es am Ende vor. Du bekommst einen Mentor, einen Wochenplan und dasselbe Code-Review wie alle anderen.",
      ],
      responsibilities: [
        "Du entwickelst und lieferst ein klar abgegrenztes Feature oder eine Verbesserung — von Anfang bis Ende.",
        "Du schreibst Tests, nimmst an Code-Reviews teil und dokumentierst, was du baust.",
        "Am Ende des Praktikums stellst du deine Arbeit dem Team vor.",
      ],
      requirements: [
        "Studium der Informatik oder eines verwandten Fachs — oder ein vergleichbarer autodidaktischer Werdegang.",
        "Erste Erfahrung mit TypeScript/JavaScript, Python oder einer ähnlichen Sprache.",
        "Neugier, Zuverlässigkeit und gute Englischkenntnisse.",
        "Ein paar Stunden Überschneidung pro Tag mit den Arbeitszeiten des Teams.",
      ],
      niceToHave: [
        "Eigene Projekte, Open-Source-Beiträge oder Hackathon-Projekte.",
        "Interesse an Karten, Logistik oder Optimierung.",
      ],
    },
    nl: {
      title: "Stage Software Engineering",
      summary:
        "Zet echte features live in Rotasal, met een mentor naast je — remote, vanaf overal ter wereld.",
      intro: [
        companyIntro.nl,
        "Dit is een echte engineeringstage: je krijgt een afgebakend project in de webapp, de API of de chauffeursapp onder je hoede, brengt het naar productie en presenteert het aan het eind. Je hebt een mentor, een weekplanning en dezelfde code review als iedereen.",
      ],
      responsibilities: [
        "Je bouwt en levert een afgebakende feature of verbetering op, van begin tot eind.",
        "Je schrijft tests, doet mee aan code review en documenteert wat je bouwt.",
        "Aan het eind van je stage presenteer je je werk aan het team.",
      ],
      requirements: [
        "Je studeert informatica of een verwante richting, of hebt als autodidact een vergelijkbare staat van dienst.",
        "Enige ervaring met TypeScript/JavaScript, Python of een vergelijkbare taal.",
        "Nieuwsgierigheid, betrouwbaarheid en een goede beheersing van het Engels.",
        "Je kunt dagelijks een paar uur overlappen met de werktijden van het team.",
      ],
      niceToHave: [
        "Eigen projecten, open-sourcebijdragen of hackathonwerk.",
        "Interesse in kaarten, logistiek of optimalisatie.",
      ],
    },
    tr: {
      title: "Yazılım Mühendisliği Stajyeri",
      summary:
        "Bir mentor eşliğinde Rotasal'da gerçek özellikler geliştirip yayına al — uzaktan, dünyanın her yerinden.",
      intro: [
        companyIntro.tr,
        "Bu gerçek bir mühendislik stajı: web uygulaması, API ya da sürücü uygulamasında kapsamı belirli bir projeyi üstlenecek, üretime alacak ve sonunda sunacaksın. Bir mentorun ve haftalık bir planın olacak; kodun da herkesinki gibi aynı incelemeden geçecek.",
      ],
      responsibilities: [
        "Kapsamı belirli bir özelliği ya da iyileştirmeyi baştan sona geliştirip yayına alacaksın.",
        "Test yazacak, kod incelemelerine katılacak ve geliştirdiklerini belgeleyeceksin.",
        "Stajın sonunda çalışmanı ekibe sunacaksın.",
      ],
      requirements: [
        "Bilgisayar bilimleri ya da ilgili bir alanda öğrenim görüyor olmak — ya da buna denk, kendi kendine edinilmiş bir birikim.",
        "TypeScript/JavaScript, Python ya da benzeri bir dille biraz deneyim.",
        "Merak, güvenilirlik ve iş için yeterli düzeyde İngilizce.",
        "Günde birkaç saat ekibin çalışma saatleriyle örtüşebilmek.",
      ],
      niceToHave: [
        "Kişisel projeler, açık kaynak katkıları ya da hackathon çalışmaları.",
        "Haritalara, lojistiğe ya da optimizasyona ilgi.",
      ],
    },
  },
} as const satisfies Opening;






export const internshipOpenings = [
  softwareEngineeringIntern,
] as const satisfies readonly Opening[];
