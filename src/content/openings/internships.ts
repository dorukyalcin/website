import type { Opening } from "@/lib/openings";
import {
  companyIntro,
  hiringRound,
  internshipQuestions,
  monthlySalary,
  portfolioQuestion,
  remoteWorldwide,
} from "./shared";

// Internships are open on every team and fully remote, from anywhere.
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
  salary: monthlySalary(8750),
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

export const machineLearningIntern = {
  ...base,
  team: "data",
  slug: "machine-learning-intern",
  salary: monthlySalary(8750),
  content: {
    en: {
      title: "Machine Learning Intern",
      summary:
        "Build and evaluate prediction models on real delivery data — remote, with a mentor.",
      intro: [
        companyIntro.en,
        "You'll take on a scoped modelling problem — service-time prediction, travel-time estimation, or demand forecasting — from data exploration to a measured result, and present it at the end.",
      ],
      responsibilities: [
        "Explore real delivery data and build models for a well-defined prediction problem.",
        "Evaluate honestly, document your work, and share results with the team.",
        "Help move a promising model toward production.",
      ],
      requirements: [
        "Studying computer science, statistics, or a related field.",
        "Solid Python and familiarity with common ML libraries.",
        "Curiosity, rigour, and working proficiency in English.",
        "Ability to overlap a few hours a day with the team's working hours.",
      ],
      niceToHave: [
        "Coursework or projects involving time-series or geospatial data.",
        "Familiarity with SQL.",
      ],
    },
    de: {
      title: "Praktikum Machine Learning",
      summary:
        "Entwickle und evaluiere Vorhersagemodelle auf echten Lieferdaten — remote, mit Mentor.",
      intro: [
        companyIntro.de,
        "Du übernimmst ein klar abgegrenztes Modellierungsproblem — Servicezeit-Vorhersage, Fahrzeitschätzung oder Bedarfsprognose — von der Datenexploration bis zum messbaren Ergebnis und stellst es am Ende vor.",
      ],
      responsibilities: [
        "Du erkundest echte Lieferdaten und baust Modelle für ein klar definiertes Vorhersageproblem.",
        "Du evaluierst ehrlich, dokumentierst deine Arbeit und teilst die Ergebnisse mit dem Team.",
        "Du hilfst mit, ein vielversprechendes Modell Richtung Produktion zu bringen.",
      ],
      requirements: [
        "Studium der Informatik, Statistik oder eines verwandten Fachs.",
        "Solide Python-Kenntnisse und Vertrautheit mit gängigen ML-Bibliotheken.",
        "Neugier, Gründlichkeit und gute Englischkenntnisse.",
        "Ein paar Stunden Überschneidung pro Tag mit den Arbeitszeiten des Teams.",
      ],
      niceToHave: [
        "Kurse oder Projekte mit Zeitreihen- oder Geodaten.",
        "Vertrautheit mit SQL.",
      ],
    },
    nl: {
      title: "Stage Machine Learning",
      summary:
        "Bouw en evalueer voorspellingsmodellen op echte bezorgdata — remote, met een mentor.",
      intro: [
        companyIntro.nl,
        "Je pakt een afgebakend modelleringsprobleem op — servicetijdvoorspelling, reistijdschatting of vraagvoorspelling — van data-exploratie tot een meetbaar resultaat, en presenteert het aan het eind.",
      ],
      responsibilities: [
        "Je verkent echte bezorgdata en bouwt modellen voor een goed afgebakend voorspellingsprobleem.",
        "Je evalueert eerlijk, documenteert je werk en deelt de resultaten met het team.",
        "Je helpt een veelbelovend model richting productie te brengen.",
      ],
      requirements: [
        "Je studeert informatica, statistiek of een verwante richting.",
        "Solide Python-vaardigheden en bekendheid met gangbare ML-libraries.",
        "Nieuwsgierigheid, nauwkeurigheid en een goede beheersing van het Engels.",
        "Je kunt dagelijks een paar uur overlappen met de werktijden van het team.",
      ],
      niceToHave: [
        "Vakken of projecten met tijdreeksen of geodata.",
        "Bekendheid met SQL.",
      ],
    },
    tr: {
      title: "Makine Öğrenimi Stajyeri",
      summary:
        "Gerçek teslimat verileriyle tahmin modelleri kur ve değerlendir — uzaktan, bir mentor eşliğinde.",
      intro: [
        companyIntro.tr,
        "Kapsamı belirli bir modelleme problemini — servis süresi tahmini, seyahat süresi kestirimi ya da talep tahminlemesi — veri keşfinden ölçülebilir bir sonuca kadar üstlenecek ve sonunda sunacaksın.",
      ],
      responsibilities: [
        "Gerçek teslimat verilerini keşfedecek ve iyi tanımlanmış bir tahmin problemi için modeller kuracaksın.",
        "Dürüstçe değerlendirecek, çalışmanı belgeleyecek ve sonuçları ekiple paylaşacaksın.",
        "Umut vadeden bir modelin üretime doğru ilerlemesine yardım edeceksin.",
      ],
      requirements: [
        "Bilgisayar bilimleri, istatistik ya da ilgili bir alanda öğrenim görüyor olmak.",
        "Sağlam Python bilgisi ve yaygın ML kütüphanelerine aşinalık.",
        "Merak, titizlik ve iş için yeterli düzeyde İngilizce.",
        "Günde birkaç saat ekibin çalışma saatleriyle örtüşebilmek.",
      ],
      niceToHave: [
        "Zaman serileri ya da coğrafi verilerle ilgili dersler ya da projeler.",
        "SQL'e aşinalık.",
      ],
    },
  },
} as const satisfies Opening;

export const dataScienceIntern = {
  ...base,
  team: "data",
  slug: "data-science-intern",
  salary: monthlySalary(8750),
  content: {
    en: {
      title: "Data Science Intern",
      summary:
        "Answer real operational questions with delivery data — and shape what we build next.",
      intro: [
        companyIntro.en,
        "You'll dig into fleet data to answer concrete questions — why routes slip, where planners spend their time, what predicts a late stop — and turn your findings into metrics and recommendations the team uses.",
      ],
      responsibilities: [
        "Run analyses on real fleet data and present clear findings.",
        "Build metrics and dashboards the team keeps using after you leave.",
        "Work with product and engineering to turn insight into changes.",
      ],
      requirements: [
        "Studying a quantitative field with solid statistics.",
        "Working SQL and Python (pandas or similar).",
        "Clear communication and working proficiency in English.",
        "Ability to overlap a few hours a day with the team's working hours.",
      ],
      niceToHave: [
        "Experience with BI tools or visualisation libraries.",
        "Interest in operations or logistics.",
      ],
    },
    de: {
      title: "Praktikum Data Science",
      summary:
        "Beantworte echte operative Fragen mit Lieferdaten — und präge mit, was wir als Nächstes bauen.",
      intro: [
        companyIntro.de,
        "Du tauchst tief in Flottendaten ein, um konkrete Fragen zu beantworten — warum Routen aus dem Zeitplan rutschen, wo Disponenten ihre Zeit verbringen, was einen verspäteten Stopp vorhersagt — und machst aus deinen Erkenntnissen Kennzahlen und Empfehlungen, mit denen das Team arbeitet.",
      ],
      responsibilities: [
        "Du analysierst echte Flottendaten und präsentierst klare Ergebnisse.",
        "Du baust Kennzahlen und Dashboards, die das Team auch nach deinem Praktikum weiter nutzt.",
        "Du arbeitest mit Produkt und Engineering zusammen, um aus Erkenntnissen Veränderungen zu machen.",
      ],
      requirements: [
        "Studium in einem quantitativen Fach mit soliden Statistikkenntnissen.",
        "Praxistaugliches SQL und Python (pandas oder Ähnliches).",
        "Klare Kommunikation und gute Englischkenntnisse.",
        "Ein paar Stunden Überschneidung pro Tag mit den Arbeitszeiten des Teams.",
      ],
      niceToHave: [
        "Erfahrung mit BI-Tools oder Visualisierungsbibliotheken.",
        "Interesse an Operations oder Logistik.",
      ],
    },
    nl: {
      title: "Stage Data Science",
      summary:
        "Beantwoord echte operationele vragen met bezorgdata — en bepaal mee wat we hierna bouwen.",
      intro: [
        companyIntro.nl,
        "Je duikt in vlootdata om concrete vragen te beantwoorden — waarom routes uitlopen, waar planners hun tijd aan kwijt zijn, wat een late stop voorspelt — en vertaalt je bevindingen naar metrics en aanbevelingen waar het team mee werkt.",
      ],
      responsibilities: [
        "Je draait analyses op echte vlootdata en presenteert heldere bevindingen.",
        "Je bouwt metrics en dashboards die het team blijft gebruiken als jij weer weg bent.",
        "Je werkt samen met product en engineering om inzichten om te zetten in veranderingen.",
      ],
      requirements: [
        "Je studeert een kwantitatieve richting met een stevige basis in statistiek.",
        "Werkbare kennis van SQL en Python (pandas of vergelijkbaar).",
        "Heldere communicatie en een goede beheersing van het Engels.",
        "Je kunt dagelijks een paar uur overlappen met de werktijden van het team.",
      ],
      niceToHave: [
        "Ervaring met BI-tools of visualisatielibraries.",
        "Interesse in operations of logistiek.",
      ],
    },
    tr: {
      title: "Veri Bilimi Stajyeri",
      summary:
        "Teslimat verileriyle gerçek operasyonel sorulara yanıt ver — ve bundan sonra ne geliştireceğimizi şekillendir.",
      intro: [
        companyIntro.tr,
        "Somut soruları yanıtlamak için filo verilerine dalacaksın — rotalar neden plandan sapıyor, planlamacılar zamanlarını nereye harcıyor, geç kalan bir durağı ne öngörüyor — ve bulgularını ekibin kullandığı metriklere ve önerilere dönüştüreceksin.",
      ],
      responsibilities: [
        "Gerçek filo verileri üzerinde analizler yapacak ve net bulgular sunacaksın.",
        "Ekibin sen ayrıldıktan sonra da kullanmaya devam edeceği metrikler ve gösterge panelleri oluşturacaksın.",
        "İçgörüleri değişikliğe dönüştürmek için ürün ve mühendislik ekipleriyle birlikte çalışacaksın.",
      ],
      requirements: [
        "Sağlam bir istatistik temeliyle sayısal bir alanda öğrenim görüyor olmak.",
        "İş görür düzeyde SQL ve Python (pandas ya da benzeri).",
        "Net iletişim ve iş için yeterli düzeyde İngilizce.",
        "Günde birkaç saat ekibin çalışma saatleriyle örtüşebilmek.",
      ],
      niceToHave: [
        "BI araçları ya da görselleştirme kütüphaneleriyle deneyim.",
        "Operasyona ya da lojistiğe ilgi.",
      ],
    },
  },
} as const satisfies Opening;

export const productDesignIntern = {
  ...base,
  team: "product",
  slug: "product-design-intern",
  salary: monthlySalary(7000),
  questions: [portfolioQuestion, ...internshipQuestions],
  content: {
    en: {
      title: "Product Design Intern",
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
      title: "Praktikum Product Design",
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
      title: "Stage Product Design",
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
      title: "Ürün Tasarımı Stajyeri",
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

export const productManagementIntern = {
  ...base,
  team: "product",
  slug: "product-management-intern",
  salary: monthlySalary(7000),
  content: {
    en: {
      title: "Product Management Intern",
      summary:
        "Learn product by doing it: customer research, specs, and a shipped improvement.",
      intro: [
        companyIntro.en,
        "You'll partner with product and the founder: talk to customers, analyse usage, write a spec for a scoped improvement, and follow it through to launch.",
      ],
      responsibilities: [
        "Run customer interviews and synthesise what you hear.",
        "Write specs and prioritise with the team.",
        "Measure the outcome of what ships.",
      ],
      requirements: [
        "Studying business, engineering, or a related field.",
        "Strong writing and structured thinking.",
        "Working proficiency in English.",
        "Ability to overlap a few hours a day with the team's working hours.",
      ],
      niceToHave: [
        "Any technical background or exposure to data analysis.",
        "Interest in logistics.",
      ],
    },
    de: {
      title: "Praktikum Product Management",
      summary:
        "Lerne Produktmanagement, indem du es machst: Kundenrecherche, Specs und eine Verbesserung, die live geht.",
      intro: [
        companyIntro.de,
        "Du arbeitest eng mit Produkt und dem Gründer zusammen: Du sprichst mit Kunden, analysierst die Nutzung, schreibst eine Spec für eine klar abgegrenzte Verbesserung und begleitest sie bis zum Launch.",
      ],
      responsibilities: [
        "Du führst Kundeninterviews und verdichtest, was du hörst.",
        "Du schreibst Specs und priorisierst gemeinsam mit dem Team.",
        "Du misst das Ergebnis dessen, was live geht.",
      ],
      requirements: [
        "Studium in Wirtschaft, Ingenieurwesen oder einem verwandten Fach.",
        "Starke Schreibfähigkeiten und strukturiertes Denken.",
        "Gute Englischkenntnisse.",
        "Ein paar Stunden Überschneidung pro Tag mit den Arbeitszeiten des Teams.",
      ],
      niceToHave: [
        "Technischer Hintergrund jeder Art oder Berührungspunkte mit Datenanalyse.",
        "Interesse an Logistik.",
      ],
    },
    nl: {
      title: "Stage Product Management",
      summary:
        "Leer product door het te doen: klantonderzoek, specs en een verbetering die live gaat.",
      intro: [
        companyIntro.nl,
        "Je trekt op met product en de oprichter: je praat met klanten, analyseert het gebruik, schrijft een spec voor een afgebakende verbetering en volgt die tot aan de lancering.",
      ],
      responsibilities: [
        "Je voert klantinterviews en bundelt wat je hoort tot inzichten.",
        "Je schrijft specs en prioriteert samen met het team.",
        "Je meet het resultaat van wat live gaat.",
      ],
      requirements: [
        "Je studeert bedrijfskunde, engineering of een verwante richting.",
        "Sterk in schrijven en gestructureerd denken.",
        "Een goede beheersing van het Engels.",
        "Je kunt dagelijks een paar uur overlappen met de werktijden van het team.",
      ],
      niceToHave: [
        "Enige technische achtergrond of ervaring met data-analyse.",
        "Interesse in logistiek.",
      ],
    },
    tr: {
      title: "Ürün Yönetimi Stajyeri",
      summary:
        "Ürün yönetimini yaparak öğren: müşteri araştırması, spesifikasyonlar ve yayına alınmış bir iyileştirme.",
      intro: [
        companyIntro.tr,
        "Ürün ekibi ve kurucuyla birlikte çalışacaksın: müşterilerle konuşacak, kullanımı analiz edecek, kapsamı belirli bir iyileştirme için spesifikasyon yazacak ve lansmana kadar takip edeceksin.",
      ],
      responsibilities: [
        "Müşteri görüşmeleri yapacak ve duyduklarını sentezleyeceksin.",
        "Spesifikasyon yazacak ve ekiple birlikte önceliklendireceksin.",
        "Yayına alınanların sonucunu ölçeceksin.",
      ],
      requirements: [
        "İşletme, mühendislik ya da ilgili bir alanda öğrenim görüyor olmak.",
        "Güçlü yazma becerisi ve yapılandırılmış düşünme.",
        "İş için yeterli düzeyde İngilizce.",
        "Günde birkaç saat ekibin çalışma saatleriyle örtüşebilmek.",
      ],
      niceToHave: [
        "Herhangi bir teknik altyapı ya da veri analizi deneyimi.",
        "Lojistiğe ilgi.",
      ],
    },
  },
} as const satisfies Opening;

export const goToMarketIntern = {
  ...base,
  team: "gtm",
  slug: "go-to-market-intern",
  salary: monthlySalary(7000),
  content: {
    en: {
      title: "Go-to-Market Intern",
      summary:
        "Help bring Rotasal to delivery operators: research, outreach, and customer onboarding.",
      intro: [
        companyIntro.en,
        "You'll support sales and customer onboarding: mapping the market, researching prospects, preparing demos and materials, and helping new customers get live.",
      ],
      responsibilities: [
        "Research markets and prospects and keep our pipeline data clean.",
        "Prepare demos, decks, and onboarding materials.",
        "Support customer onboarding and collect feedback.",
      ],
      requirements: [
        "Studying business, marketing, or a related field.",
        "Organised, curious, and comfortable reaching out to people.",
        "Fluent English; additional languages welcome.",
        "Ability to overlap a few hours a day with the team's working hours.",
      ],
      niceToHave: [
        "Interest in logistics or B2B software.",
        "Experience with CRM tools.",
      ],
    },
    de: {
      title: "Praktikum Go-to-Market",
      summary:
        "Hilf mit, Rotasal zu Lieferbetrieben zu bringen: Recherche, Outreach und Kunden-Onboarding.",
      intro: [
        companyIntro.de,
        "Du unterstützt Vertrieb und Kunden-Onboarding: Du kartierst den Markt, recherchierst potenzielle Kunden, bereitest Demos und Materialien vor und hilfst neuen Kunden beim Livegang.",
      ],
      responsibilities: [
        "Du recherchierst Märkte und potenzielle Kunden und hältst unsere Pipeline-Daten sauber.",
        "Du bereitest Demos, Decks und Onboarding-Materialien vor.",
        "Du unterstützt das Kunden-Onboarding und sammelst Feedback.",
      ],
      requirements: [
        "Studium in Wirtschaft, Marketing oder einem verwandten Fach.",
        "Organisiert, neugierig und ohne Scheu, auf Menschen zuzugehen.",
        "Fließendes Englisch; weitere Sprachen willkommen.",
        "Ein paar Stunden Überschneidung pro Tag mit den Arbeitszeiten des Teams.",
      ],
      niceToHave: [
        "Interesse an Logistik oder B2B-Software.",
        "Erfahrung mit CRM-Tools.",
      ],
    },
    nl: {
      title: "Stage Go-to-Market",
      summary:
        "Help Rotasal bij bezorgbedrijven te brengen: onderzoek, outreach en klantonboarding.",
      intro: [
        companyIntro.nl,
        "Je ondersteunt sales en klantonboarding: de markt in kaart brengen, prospects onderzoeken, demo's en materialen voorbereiden en nieuwe klanten helpen live te gaan.",
      ],
      responsibilities: [
        "Je onderzoekt markten en prospects en houdt onze pipelinedata schoon.",
        "Je bereidt demo's, decks en onboardingmateriaal voor.",
        "Je ondersteunt klantonboarding en verzamelt feedback.",
      ],
      requirements: [
        "Je studeert bedrijfskunde, marketing of een verwante richting.",
        "Georganiseerd, nieuwsgierig en niet bang om mensen te benaderen.",
        "Vloeiend Engels; extra talen zijn welkom.",
        "Je kunt dagelijks een paar uur overlappen met de werktijden van het team.",
      ],
      niceToHave: [
        "Interesse in logistiek of B2B-software.",
        "Ervaring met CRM-tools.",
      ],
    },
    tr: {
      title: "Go-to-Market Stajyeri",
      summary:
        "Rotasal'ı teslimat operatörlerine ulaştırmamıza yardım et: araştırma, müşterilere ulaşma ve onboarding.",
      intro: [
        companyIntro.tr,
        "Satışa ve müşteri onboarding sürecine destek olacaksın: pazarı haritalayacak, potansiyel müşterileri araştıracak, demo ve materyaller hazırlayacak ve yeni müşterilerin canlıya geçmesine yardım edeceksin.",
      ],
      responsibilities: [
        "Pazarları ve potansiyel müşterileri araştıracak ve pipeline verilerimizi temiz tutacaksın.",
        "Demo, sunum ve onboarding materyalleri hazırlayacaksın.",
        "Müşteri onboarding sürecine destek olacak ve geri bildirim toplayacaksın.",
      ],
      requirements: [
        "İşletme, pazarlama ya da ilgili bir alanda öğrenim görüyor olmak.",
        "Düzenli ve meraklı olmak; insanlara ulaşmaktan çekinmemek.",
        "Akıcı İngilizce; ek diller memnuniyetle karşılanır.",
        "Günde birkaç saat ekibin çalışma saatleriyle örtüşebilmek.",
      ],
      niceToHave: [
        "Lojistiğe ya da B2B yazılımlara ilgi.",
        "CRM araçlarıyla deneyim.",
      ],
    },
  },
} as const satisfies Opening;

export const internshipOpenings = [
  softwareEngineeringIntern,
  machineLearningIntern,
  dataScienceIntern,
  productDesignIntern,
  productManagementIntern,
  goToMarketIntern,
] as const satisfies readonly Opening[];
