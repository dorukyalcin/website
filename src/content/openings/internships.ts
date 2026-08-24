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

export const marketingIntern = {
  ...base,
  team: "gtm",
  slug: "marketing-intern",
  content: {
    en: {
      title: "Marketing Intern",
      summary:
        "Help tell the Rotasal story: content, campaigns, and the channels delivery operators actually read.",
      intro: [
        companyIntro.en,
        "You'll work directly with the founder on how Avernsys shows up in the world: website copy, case studies, social posts, and campaigns aimed at delivery and logistics teams — and you'll see what each one actually does for the pipeline.",
      ],
      responsibilities: [
        "Write and publish content: social posts, case studies, and landing-page copy.",
        "Help plan campaigns and measure how they perform.",
        "Watch the analytics and report clearly on what works and what doesn't.",
      ],
      requirements: [
        "Studying marketing, communications, business, or a related field — or a comparable track record.",
        "Strong writing in English.",
        "Comfortable with social platforms and basic analytics tools.",
        "Ability to overlap a few hours a day with the team's working hours.",
      ],
      niceToHave: [
        "Design skills (Figma or Canva) or short-form video editing.",
        "Interest in B2B software or logistics.",
      ],
    },
    de: {
      title: "Praktikum Marketing",
      summary:
        "Hilf mit, die Rotasal-Geschichte zu erzählen: Content, Kampagnen und die Kanäle, die Lieferbetriebe wirklich lesen.",
      intro: [
        companyIntro.de,
        "Du arbeitest direkt mit dem Gründer daran, wie Avernsys nach außen auftritt: Website-Texte, Case Studies, Social Posts und Kampagnen für Liefer- und Logistikteams — und du siehst, was jede davon tatsächlich für die Pipeline bringt.",
      ],
      responsibilities: [
        "Du schreibst und veröffentlichst Content: Social Posts, Case Studies und Landingpage-Texte.",
        "Du hilfst, Kampagnen zu planen und ihre Wirkung zu messen.",
        "Du behältst die Analytics im Blick und berichtest klar, was funktioniert und was nicht.",
      ],
      requirements: [
        "Studium in Marketing, Kommunikation, BWL oder einem verwandten Fach — oder ein vergleichbarer Werdegang.",
        "Starkes schriftliches Englisch.",
        "Sicher im Umgang mit Social-Media-Plattformen und einfachen Analytics-Tools.",
        "Ein paar Stunden Überschneidung pro Tag mit den Arbeitszeiten des Teams.",
      ],
      niceToHave: [
        "Design-Skills (Figma oder Canva) oder Schnitt von Kurzvideos.",
        "Interesse an B2B-Software oder Logistik.",
      ],
    },
    nl: {
      title: "Stage Marketing",
      summary:
        "Help het verhaal van Rotasal vertellen: content, campagnes en de kanalen die bezorgbedrijven echt lezen.",
      intro: [
        companyIntro.nl,
        "Je werkt rechtstreeks met de oprichter aan hoe Avernsys zich aan de wereld laat zien: websiteteksten, casestudy's, socialposts en campagnes gericht op bezorg- en logistiekteams — en je ziet wat elke actie daadwerkelijk voor de pipeline doet.",
      ],
      responsibilities: [
        "Je schrijft en publiceert content: socialposts, casestudy's en teksten voor landingspagina's.",
        "Je helpt campagnes plannen en meet hoe ze presteren.",
        "Je houdt de analytics in de gaten en rapporteert helder wat werkt en wat niet.",
      ],
      requirements: [
        "Je studeert marketing, communicatie, bedrijfskunde of een verwante richting — of hebt een vergelijkbare staat van dienst.",
        "Sterke schrijfvaardigheid in het Engels.",
        "Vertrouwd met socialmediaplatformen en eenvoudige analysetools.",
        "Je kunt dagelijks een paar uur overlappen met de werktijden van het team.",
      ],
      niceToHave: [
        "Designvaardigheden (Figma of Canva) of het monteren van korte video's.",
        "Interesse in B2B-software of logistiek.",
      ],
    },
    tr: {
      title: "Pazarlama Stajyeri",
      summary:
        "Rotasal'ın hikâyesini anlatmaya yardım et: içerik, kampanyalar ve teslimat operatörlerinin gerçekten okuduğu kanallar.",
      intro: [
        companyIntro.tr,
        "Avernsys'in dünyaya nasıl göründüğü üzerine doğrudan kurucuyla çalışacaksın: web sitesi metinleri, vaka çalışmaları, sosyal medya paylaşımları ve teslimat-lojistik ekiplerine yönelik kampanyalar — ve her birinin satış hattına gerçekte ne kattığını göreceksin.",
      ],
      responsibilities: [
        "İçerik yazıp yayınlayacaksın: sosyal medya paylaşımları, vaka çalışmaları ve açılış sayfası metinleri.",
        "Kampanyaların planlanmasına yardım edecek ve performanslarını ölçeceksin.",
        "Analitiği takip edecek; neyin işe yarayıp neyin yaramadığını net biçimde raporlayacaksın.",
      ],
      requirements: [
        "Pazarlama, iletişim, işletme ya da ilgili bir alanda öğrenim görüyor olmak — ya da buna denk bir birikim.",
        "İngilizcede güçlü yazma becerisi.",
        "Sosyal medya platformları ve temel analitik araçlarıyla rahat çalışabilme.",
        "Günde birkaç saat ekibin çalışma saatleriyle örtüşebilmek.",
      ],
      niceToHave: [
        "Tasarım becerileri (Figma veya Canva) ya da kısa video kurgusu.",
        "B2B yazılımına veya lojistiğe ilgi.",
      ],
    },
  },
} as const satisfies Opening;

export const salesIntern = {
  ...base,
  team: "gtm",
  slug: "sales-intern",
  content: {
    en: {
      title: "Sales Intern",
      summary:
        "Learn B2B sales from first call to close: research, outreach, and demos alongside the founder.",
      intro: [
        companyIntro.en,
        "You'll support new business end to end: mapping delivery and logistics companies, researching prospects, drafting outreach, sitting in on demos, and keeping the pipeline clean — with the founder as your mentor.",
      ],
      responsibilities: [
        "Research prospects and build clean, well-qualified lists.",
        "Draft outreach and follow-ups, and keep the CRM up to date.",
        "Join demos and calls, take notes, and own the follow-through.",
      ],
      requirements: [
        "Studying business, economics, or a related field — or a comparable track record.",
        "Fluent English; additional languages welcome.",
        "Organised, persistent, and comfortable reaching out to people.",
        "Ability to overlap a few hours a day with the team's working hours.",
      ],
      niceToHave: [
        "Any customer-facing experience (sales, support, hospitality).",
        "Interest in logistics or B2B software.",
      ],
    },
    de: {
      title: "Praktikum Sales",
      summary:
        "Lerne B2B-Sales vom ersten Anruf bis zum Abschluss: Recherche, Outreach und Demos an der Seite des Gründers.",
      intro: [
        companyIntro.de,
        "Du unterstützt das Neugeschäft von Anfang bis Ende: Liefer- und Logistikunternehmen kartieren, Interessenten recherchieren, Outreach entwerfen, bei Demos dabei sein und die Pipeline sauber halten — mit dem Gründer als Mentor.",
      ],
      responsibilities: [
        "Du recherchierst Interessenten und baust saubere, gut qualifizierte Listen auf.",
        "Du entwirfst Outreach und Follow-ups und hältst das CRM aktuell.",
        "Du nimmst an Demos und Calls teil, machst Notizen und kümmerst dich ums Nachfassen.",
      ],
      requirements: [
        "Studium in BWL, VWL oder einem verwandten Fach — oder ein vergleichbarer Werdegang.",
        "Fließendes Englisch; weitere Sprachen willkommen.",
        "Organisiert, hartnäckig und ohne Scheu, auf Menschen zuzugehen.",
        "Ein paar Stunden Überschneidung pro Tag mit den Arbeitszeiten des Teams.",
      ],
      niceToHave: [
        "Erfahrung im Kundenkontakt (Sales, Support, Gastronomie).",
        "Interesse an Logistik oder B2B-Software.",
      ],
    },
    nl: {
      title: "Stage Sales",
      summary:
        "Leer B2B-sales van eerste gesprek tot deal: research, outreach en demo's naast de oprichter.",
      intro: [
        companyIntro.nl,
        "Je ondersteunt new business van begin tot eind: bezorg- en logistiekbedrijven in kaart brengen, prospects onderzoeken, outreach opstellen, meedraaien bij demo's en de pipeline schoon houden — met de oprichter als je mentor.",
      ],
      responsibilities: [
        "Je onderzoekt prospects en bouwt schone, goed gekwalificeerde lijsten.",
        "Je stelt outreach en follow-ups op en houdt het CRM bij.",
        "Je schuift aan bij demo's en calls, maakt notities en pakt de opvolging op.",
      ],
      requirements: [
        "Je studeert bedrijfskunde, economie of een verwante richting — of hebt een vergelijkbare staat van dienst.",
        "Vloeiend Engels; extra talen zijn welkom.",
        "Georganiseerd, volhardend en niet bang om mensen te benaderen.",
        "Je kunt dagelijks een paar uur overlappen met de werktijden van het team.",
      ],
      niceToHave: [
        "Ervaring met klantcontact (sales, support, horeca).",
        "Interesse in logistiek of B2B-software.",
      ],
    },
    tr: {
      title: "Satış Stajyeri",
      summary:
        "B2B satışı ilk aramadan kapanışa kadar öğren: araştırma, ulaşım ve kurucunun yanında demolar.",
      intro: [
        companyIntro.tr,
        "Yeni müşteri kazanımını uçtan uca destekleyeceksin: teslimat ve lojistik şirketlerini haritalamak, potansiyel müşterileri araştırmak, ulaşım mesajları hazırlamak, demolara katılmak ve satış hattını temiz tutmak — kurucu da mentorun olacak.",
      ],
      responsibilities: [
        "Potansiyel müşterileri araştıracak; temiz, iyi nitelendirilmiş listeler oluşturacaksın.",
        "Ulaşım mesajları ve takipleri hazırlayacak, CRM'i güncel tutacaksın.",
        "Demolara ve görüşmelere katılacak, not tutacak ve takibi sahipleneceksin.",
      ],
      requirements: [
        "İşletme, ekonomi ya da ilgili bir alanda öğrenim görüyor olmak — ya da buna denk bir birikim.",
        "Akıcı İngilizce; ek diller memnuniyetle karşılanır.",
        "Düzenli, azimli ve insanlara ulaşmaktan çekinmeyen biri olmak.",
        "Günde birkaç saat ekibin çalışma saatleriyle örtüşebilmek.",
      ],
      niceToHave: [
        "Müşteriyle temas gerektiren herhangi bir deneyim (satış, destek, hizmet sektörü).",
        "Lojistiğe veya B2B yazılımına ilgi.",
      ],
    },
  },
} as const satisfies Opening;

export const internshipOpenings = [
  softwareEngineeringIntern,
  designIntern,
  marketingIntern,
  salesIntern,
] as const satisfies readonly Opening[];
