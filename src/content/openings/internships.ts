import type { Opening } from "@/lib/openings";
import {
  companyIntro,
  hiringRound,
  internshipQuestions,
  portfolioQuestion,
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

export const designIntern = {
  ...base,
  team: "product",
  slug: "design-intern",
  questions: [portfolioQuestion, ...internshipQuestions],
  content: {
    en: {
      title: "Design Intern",
      summary:
        "Design real dispatcher and driver workflows with a mentor — remote, from anywhere.",
      intro: [
        companyIntro.en,
        "You'll own a scoped design project — a piece of the dispatch experience or the driver app — from research through prototype, working with our design lead and engineers to get it shipped.",
      ],
      responsibilities: [
        "Design flows and interfaces for a scoped part of the product.",
        "Run lightweight user research and iterate on feedback.",
        "Prototype in Figma and hand off together with engineering.",
      ],
      requirements: [
        "Studying design, HCI, or a related field, or a comparable portfolio.",
        "A portfolio showing interaction and visual design thinking.",
        "Working proficiency in English.",
        "Ability to overlap a few hours a day with the team's working hours.",
      ],
      niceToHave: [
        "Interest in maps, tools, or data-dense interfaces.",
        "Basic HTML/CSS for prototyping.",
      ],
    },
    de: {
      title: "Praktikum Design",
      summary:
        "Gestalte mit einem Mentor an deiner Seite echte Workflows für Disponenten und Fahrer — remote, von überall.",
      intro: [
        companyIntro.de,
        "Du übernimmst ein klar abgegrenztes Designprojekt — einen Teil der Dispositionsoberfläche oder der Fahrer-App — von der Recherche bis zum Prototyp und arbeitest mit unserem Design Lead und den Engineers daran, es live zu bringen.",
      ],
      responsibilities: [
        "Du gestaltest Flows und Interfaces für einen klar abgegrenzten Teil des Produkts.",
        "Du machst schlanke User Research und iterierst auf Basis von Feedback.",
        "Du baust Prototypen in Figma und übergibst sie gemeinsam mit dem Engineering.",
      ],
      requirements: [
        "Studium in Design, HCI oder einem verwandten Fach — oder ein vergleichbares Portfolio.",
        "Ein Portfolio, das dein Gespür für Interaktions- und visuelles Design zeigt.",
        "Gute Englischkenntnisse.",
        "Ein paar Stunden Überschneidung pro Tag mit den Arbeitszeiten des Teams.",
      ],
      niceToHave: [
        "Interesse an Karten, Tools oder datenintensiven Oberflächen.",
        "Grundkenntnisse in HTML/CSS fürs Prototyping.",
      ],
    },
    nl: {
      title: "Stage Design",
      summary:
        "Ontwerp echte workflows voor planners en chauffeurs, met een mentor naast je — remote, vanaf overal.",
      intro: [
        companyIntro.nl,
        "Je krijgt een afgebakend designproject onder je hoede — een deel van de planningsomgeving of de chauffeursapp — van onderzoek tot prototype, en werkt met onze design lead en engineers om het live te krijgen.",
      ],
      responsibilities: [
        "Je ontwerpt flows en interfaces voor een afgebakend deel van het product.",
        "Je doet kleinschalig gebruikersonderzoek en itereert op feedback.",
        "Je maakt prototypes in Figma en draagt samen met engineering over.",
      ],
      requirements: [
        "Je studeert design, HCI of een verwante richting, of hebt een vergelijkbaar portfolio.",
        "Een portfolio dat laat zien hoe je denkt over interactie- en visueel ontwerp.",
        "Een goede beheersing van het Engels.",
        "Je kunt dagelijks een paar uur overlappen met de werktijden van het team.",
      ],
      niceToHave: [
        "Interesse in kaarten, tools of datarijke interfaces.",
        "Basiskennis HTML/CSS om te prototypen.",
      ],
    },
    tr: {
      title: "Tasarım Stajyeri",
      summary:
        "Bir mentor eşliğinde planlamacılar ve sürücüler için gerçek iş akışları tasarla — uzaktan, her yerden.",
      intro: [
        companyIntro.tr,
        "Kapsamı belirli bir tasarım projesini — planlama deneyiminin bir parçasını ya da sürücü uygulamasını — araştırmadan prototipe kadar üstlenecek; tasarım liderimiz ve mühendislerimizle birlikte çalışarak yayına alınmasını sağlayacaksın.",
      ],
      responsibilities: [
        "Ürünün kapsamı belirli bir bölümü için akışlar ve arayüzler tasarlayacaksın.",
        "Küçük çaplı kullanıcı araştırmaları yapacak ve geri bildirime göre tasarımı yineleyerek geliştireceksin.",
        "Figma'da prototip hazırlayacak ve mühendislik ekibiyle birlikte geliştirmeye devredeceksin.",
      ],
      requirements: [
        "Tasarım, HCI ya da ilgili bir alanda öğrenim görüyor olmak — ya da buna denk bir portfolyo.",
        "Etkileşim ve görsel tasarım düşünceni gösteren bir portfolyo.",
        "İş için yeterli düzeyde İngilizce.",
        "Günde birkaç saat ekibin çalışma saatleriyle örtüşebilmek.",
      ],
      niceToHave: [
        "Haritalara, araçlara ya da veri yoğun arayüzlere ilgi.",
        "Prototipleme için temel HTML/CSS.",
      ],
    },
  },
} as const satisfies Opening;



export const marketingAndSalesIntern = {
  ...base,
  team: "gtm",
  slug: "marketing-and-sales-intern",
  content: {
    en: {
      title: "Marketing & Sales Intern",
      summary:
        "Help bring Rotasal to delivery operators: content and campaigns on one side, outreach and demos on the other.",
      intro: [
        companyIntro.en,
        "You'll work directly with the founder across the whole go-to-market: telling the Rotasal story through content and campaigns, and turning it into pipeline through research, outreach, and demos. You'll see what each piece actually does for the business.",
      ],
      responsibilities: [
        "Write and publish content: social posts, case studies, and landing-page copy.",
        "Help plan campaigns, watch the analytics, and report clearly on what works.",
        "Research prospects, draft outreach and follow-ups, and keep the CRM clean.",
        "Join demos and calls, take notes, and own the follow-through.",
      ],
      requirements: [
        "Studying marketing, business, communications, or a related field — or a comparable track record.",
        "Strong writing and fluent English; additional languages welcome.",
        "Organised, persistent, and comfortable reaching out to people.",
        "Ability to overlap a few hours a day with the team's working hours.",
      ],
      niceToHave: [
        "Design skills (Figma or Canva), short-form video, or any customer-facing experience.",
        "Interest in B2B software or logistics.",
      ],
    },
    de: {
      title: "Praktikum Marketing & Sales",
      summary:
        "Hilf mit, Rotasal zu Lieferbetrieben zu bringen: Content und Kampagnen auf der einen Seite, Outreach und Demos auf der anderen.",
      intro: [
        companyIntro.de,
        "Du arbeitest direkt mit dem Gründer am gesamten Go-to-Market: Du erzählst die Rotasal-Geschichte über Content und Kampagnen und machst daraus Pipeline — durch Recherche, Outreach und Demos. Du siehst, was jeder Baustein tatsächlich fürs Geschäft bringt.",
      ],
      responsibilities: [
        "Du schreibst und veröffentlichst Content: Social Posts, Case Studies und Landingpage-Texte.",
        "Du hilfst bei der Kampagnenplanung, behältst die Analytics im Blick und berichtest klar, was funktioniert.",
        "Du recherchierst Interessenten, entwirfst Outreach und Follow-ups und hältst das CRM sauber.",
        "Du nimmst an Demos und Calls teil, machst Notizen und kümmerst dich ums Nachfassen.",
      ],
      requirements: [
        "Studium in Marketing, BWL, Kommunikation oder einem verwandten Fach — oder ein vergleichbarer Werdegang.",
        "Starkes Schreiben und fließendes Englisch; weitere Sprachen willkommen.",
        "Organisiert, hartnäckig und ohne Scheu, auf Menschen zuzugehen.",
        "Ein paar Stunden Überschneidung pro Tag mit den Arbeitszeiten des Teams.",
      ],
      niceToHave: [
        "Design-Skills (Figma oder Canva), Kurzvideos oder Erfahrung im Kundenkontakt.",
        "Interesse an B2B-Software oder Logistik.",
      ],
    },
    nl: {
      title: "Stage Marketing & Sales",
      summary:
        "Help Rotasal naar bezorgbedrijven te brengen: content en campagnes aan de ene kant, outreach en demo's aan de andere.",
      intro: [
        companyIntro.nl,
        "Je werkt rechtstreeks met de oprichter aan de hele go-to-market: je vertelt het verhaal van Rotasal via content en campagnes, en zet dat om in pipeline via research, outreach en demo's. Je ziet wat elk onderdeel daadwerkelijk voor het bedrijf doet.",
      ],
      responsibilities: [
        "Je schrijft en publiceert content: socialposts, casestudy's en teksten voor landingspagina's.",
        "Je helpt campagnes plannen, houdt de analytics in de gaten en rapporteert helder wat werkt.",
        "Je onderzoekt prospects, stelt outreach en follow-ups op en houdt het CRM schoon.",
        "Je schuift aan bij demo's en calls, maakt notities en pakt de opvolging op.",
      ],
      requirements: [
        "Je studeert marketing, bedrijfskunde, communicatie of een verwante richting — of hebt een vergelijkbare staat van dienst.",
        "Sterke schrijfvaardigheid en vloeiend Engels; extra talen zijn welkom.",
        "Georganiseerd, volhardend en niet bang om mensen te benaderen.",
        "Je kunt dagelijks een paar uur overlappen met de werktijden van het team.",
      ],
      niceToHave: [
        "Designvaardigheden (Figma of Canva), korte video's of ervaring met klantcontact.",
        "Interesse in B2B-software of logistiek.",
      ],
    },
    tr: {
      title: "Pazarlama ve Satış Stajyeri",
      summary:
        "Rotasal'ı teslimat operatörlerine ulaştırmaya yardım et: bir yanda içerik ve kampanyalar, diğer yanda müşteri araştırması ve demolar.",
      intro: [
        companyIntro.tr,
        "Go-to-market'ın tamamında doğrudan kurucuyla çalışacaksın: Rotasal'ın hikâyesini içerik ve kampanyalarla anlatacak; araştırma, ulaşım ve demolarla bunu satış hattına dönüştüreceksin. Her parçanın işe gerçekte ne kattığını göreceksin.",
      ],
      responsibilities: [
        "İçerik yazıp yayınlayacaksın: sosyal medya paylaşımları, vaka çalışmaları ve açılış sayfası metinleri.",
        "Kampanyaların planlanmasına yardım edecek, analitiği takip edecek ve neyin işe yaradığını net raporlayacaksın.",
        "Potansiyel müşterileri araştıracak, ulaşım mesajları ve takipleri hazırlayacak, CRM'i temiz tutacaksın.",
        "Demolara ve görüşmelere katılacak, not tutacak ve takibi sahipleneceksin.",
      ],
      requirements: [
        "Pazarlama, işletme, iletişim ya da ilgili bir alanda öğrenim görüyor olmak — ya da buna denk bir birikim.",
        "Güçlü yazma becerisi ve akıcı İngilizce; ek diller memnuniyetle karşılanır.",
        "Düzenli, azimli ve insanlara ulaşmaktan çekinmeyen biri olmak.",
        "Günde birkaç saat ekibin çalışma saatleriyle örtüşebilmek.",
      ],
      niceToHave: [
        "Tasarım becerileri (Figma veya Canva), kısa video ya da müşteriyle temas deneyimi.",
        "B2B yazılımına veya lojistiğe ilgi.",
      ],
    },
  },
} as const satisfies Opening;

export const internshipOpenings = [
  softwareEngineeringIntern,
  designIntern,
  marketingAndSalesIntern,
] as const satisfies readonly Opening[];
