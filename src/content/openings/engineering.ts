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
  team: "engineering",
  employmentType: "FULL_TIME",
  ...onsiteLocation,
  questions: fullTimeQuestions,
} as const;

export const softwareEngineer = {
  ...base,
  slug: "software-engineer",
  salary: yearlySalary(170000),
  content: {
    en: {
      title: "Software Engineer",
      summary:
        "Ship features across the Rotasal web app and API, from the optimization core to driver-facing surfaces.",
      intro: [
        companyIntro.en,
        "You'll join a very small engineering team as a generalist: some weeks that's a new planning workflow in the web app, others it's a hot path in the routing engine or an integration with a customer's order system. You'll work directly with the founder and own what you ship.",
      ],
      responsibilities: [
        "Design, build, and ship features across the Rotasal web application, API, and background workers.",
        "Improve routing, scheduling, and optimization logic together with the team.",
        "Instrument, monitor, and iterate on what you ship — reliability is part of the job.",
        "Talk to early customers and turn their feedback into product decisions.",
      ],
      requirements: [
        "Strong TypeScript, or strong experience in a comparable language with the willingness to work in TypeScript.",
        "Experience building and operating production web applications.",
        "Comfort working autonomously in a very small team.",
        "Working proficiency in English.",
      ],
      niceToHave: [
        "Background in optimization, operations research, or logistics.",
        "Experience with PostgreSQL and modern React.",
      ],
    },
    de: {
      title: "Software Engineer",
      summary:
        "Features quer durch die Rotasal-Web-App und -API ausliefern — vom Optimierungskern bis zu den Oberflächen für Fahrer.",
      intro: [
        companyIntro.de,
        "Du steigst in ein sehr kleines Engineering-Team ein und arbeitest generalistisch: mal ist das ein neuer Planungs-Workflow in der Web-App, mal ein Hot Path in der Routing-Engine oder eine Integration mit dem Auftragssystem eines Kunden. Du arbeitest direkt mit dem Gründer zusammen und verantwortest, was du auslieferst.",
      ],
      responsibilities: [
        "Features für die Rotasal-Webanwendung, die API und die Background-Worker entwerfen, bauen und ausliefern.",
        "Routing-, Scheduling- und Optimierungslogik gemeinsam mit dem Team verbessern.",
        "Instrumentieren, überwachen und weiterentwickeln, was du auslieferst — Zuverlässigkeit gehört zum Job.",
        "Mit frühen Kunden sprechen und ihr Feedback in Produktentscheidungen übersetzen.",
      ],
      requirements: [
        "Sehr gutes TypeScript — oder viel Erfahrung in einer vergleichbaren Sprache und die Bereitschaft, in TypeScript zu arbeiten.",
        "Erfahrung darin, Webanwendungen zu bauen und in Produktion zu betreiben.",
        "Du fühlst dich wohl damit, in einem sehr kleinen Team eigenständig zu arbeiten.",
        "Gute Englischkenntnisse.",
      ],
      niceToHave: [
        "Hintergrund in Optimierung, Operations Research oder Logistik.",
        "Erfahrung mit PostgreSQL und modernem React.",
      ],
    },
    nl: {
      title: "Software Engineer",
      summary:
        "Features opleveren in de hele webapp en API van Rotasal — van de optimalisatiekern tot de schermen voor chauffeurs.",
      intro: [
        companyIntro.nl,
        "Je komt als generalist in een heel klein engineeringteam: de ene week is dat een nieuwe planningsworkflow in de webapp, de andere week een hot path in de routeringsengine of een integratie met het ordersysteem van een klant. Je werkt rechtstreeks met de oprichter en bent zelf eigenaar van wat je oplevert.",
      ],
      responsibilities: [
        "Features ontwerpen, bouwen en opleveren in de Rotasal-webapplicatie, de API en de background workers.",
        "Samen met het team de routerings-, plannings- en optimalisatielogica verbeteren.",
        "Instrumenteren, monitoren en doorontwikkelen wat je oplevert — betrouwbaarheid hoort bij het werk.",
        "Praten met vroege klanten en hun feedback vertalen naar productbeslissingen.",
      ],
      requirements: [
        "Sterk in TypeScript, of veel ervaring in een vergelijkbare taal en de bereidheid om in TypeScript te werken.",
        "Ervaring met het bouwen en in productie draaien van webapplicaties.",
        "Je vindt het prettig om zelfstandig te werken in een heel klein team.",
        "Goede beheersing van het Engels.",
      ],
      niceToHave: [
        "Achtergrond in optimalisatie, operations research of logistiek.",
        "Ervaring met PostgreSQL en modern React.",
      ],
    },
    tr: {
      title: "Yazılım Mühendisi",
      summary:
        "Optimizasyon çekirdeğinden sürücüye dönük arayüzlere kadar Rotasal web uygulaması ve API'sinde özellikler geliştirip yayına almak.",
      intro: [
        companyIntro.tr,
        "Çok küçük bir mühendislik ekibine generalist olarak katılacaksın: bazı haftalar bu, web uygulamasında yeni bir planlama akışı demek; bazı haftalar rotalama motorunda performansı kritik bir kod yolu ya da bir müşterinin sipariş sistemiyle bir entegrasyon. Doğrudan kurucuyla çalışacak ve yayına aldıklarını sahipleneceksin.",
      ],
      responsibilities: [
        "Rotasal web uygulaması, API ve arka plan servisleri genelinde özellikler tasarlamak, geliştirmek ve yayına almak.",
        "Rotalama, zamanlama ve optimizasyon mantığını ekiple birlikte geliştirmek.",
        "Yayına aldığın her şeyi ölçümlemek, izlemek ve iyileştirmeye devam etmek — güvenilirlik işin bir parçası.",
        "Erken müşterilerle konuşmak ve geri bildirimlerini ürün kararlarına dönüştürmek.",
      ],
      requirements: [
        "Güçlü TypeScript bilgisi ya da benzer bir dilde güçlü deneyim ve TypeScript ile çalışmaya isteklilik.",
        "Canlı ortamda çalışan web uygulamaları geliştirme ve işletme deneyimi.",
        "Çok küçük bir ekipte bağımsız çalışma konusunda rahat olmak.",
        "İyi düzeyde İngilizce.",
      ],
      niceToHave: [
        "Optimizasyon, yöneylem araştırması veya lojistik geçmişi.",
        "PostgreSQL ve modern React deneyimi.",
      ],
    },
  },
} as const satisfies Opening;

export const seniorSoftwareEngineer = {
  ...base,
  slug: "senior-software-engineer",
  salary: yearlySalary(210000),
  content: {
    en: {
      title: "Senior Software Engineer",
      summary:
        "Own large parts of the Rotasal platform end to end and set the engineering bar for the team.",
      intro: [
        companyIntro.en,
        "You'll own whole areas of the product — the planning API, the dispatch experience, or the optimization service — from design to production, and raise the bar for how we build. Expect a lot of autonomy, a direct line to customers, and a real say in technical direction.",
      ],
      responsibilities: [
        "Lead the design and delivery of major features and services across the Rotasal platform.",
        "Set engineering standards: architecture, code review, testing, and operational readiness.",
        "Mentor other engineers and unblock the team on the hardest problems.",
        "Partner with the founder on roadmap, technical direction, and hiring.",
      ],
      requirements: [
        "5+ years building and running production systems, ideally including a large or high-throughput one.",
        "Deep expertise in TypeScript/Node.js or a comparable stack, plus solid data-modelling and API-design skills.",
        "A track record of shipping end to end and staying accountable for the result in production.",
        "Clear written and spoken communication in English.",
      ],
      niceToHave: [
        "Experience with routing, scheduling, or other optimization-heavy products.",
        "Prior startup or founding-team experience.",
      ],
    },
    de: {
      title: "Senior Software Engineer",
      summary:
        "Große Teile der Rotasal-Plattform End-to-End verantworten und den Maßstab fürs Engineering im Team setzen.",
      intro: [
        companyIntro.de,
        "Du verantwortest ganze Bereiche des Produkts — die Planungs-API, die Dispositionsoberfläche oder den Optimierungsservice — vom Design bis zur Produktion und legst die Messlatte dafür höher, wie wir bauen. Dich erwarten viel Autonomie, ein direkter Draht zu Kunden und echtes Mitspracherecht bei der technischen Richtung.",
      ],
      responsibilities: [
        "Design und Umsetzung großer Features und Services quer durch die Rotasal-Plattform leiten.",
        "Engineering-Standards setzen: Architektur, Code-Review, Testing und Betriebsreife.",
        "Mentoring für andere Engineers übernehmen und dem Team bei den schwierigsten Problemen Blocker aus dem Weg räumen.",
        "Mit dem Gründer an Roadmap, technischer Richtung und Hiring arbeiten.",
      ],
      requirements: [
        "5+ Jahre Erfahrung im Bau und Betrieb von Produktionssystemen, idealerweise auch eines großen oder durchsatzstarken Systems.",
        "Tiefe Expertise in TypeScript/Node.js oder einem vergleichbaren Stack, dazu solide Fähigkeiten in Datenmodellierung und API-Design.",
        "Ein Track Record darin, End-to-End auszuliefern und für das Ergebnis in Produktion geradezustehen.",
        "Klare Kommunikation auf Englisch — schriftlich wie mündlich.",
      ],
      niceToHave: [
        "Erfahrung mit Routing, Scheduling oder anderen optimierungslastigen Produkten.",
        "Startup- oder Gründungsteam-Erfahrung.",
      ],
    },
    nl: {
      title: "Senior Software Engineer",
      summary:
        "Grote delen van het Rotasal-platform end-to-end onder je hoede nemen en de lat voor engineering in het team bepalen.",
      intro: [
        companyIntro.nl,
        "Je wordt eigenaar van hele onderdelen van het product — de planning-API, de dispatch-ervaring of de optimalisatieservice — van ontwerp tot productie, en je legt de lat hoger voor hoe we bouwen. Reken op veel autonomie, een directe lijn met klanten en echte inspraak in de technische richting.",
      ],
      responsibilities: [
        "Het ontwerp en de oplevering van grote features en services in het hele Rotasal-platform leiden.",
        "Engineeringstandaarden neerzetten: architectuur, codereview, testen en operationele gereedheid.",
        "Andere engineers mentoren en het team vlottrekken bij de lastigste problemen.",
        "Samen met de oprichter werken aan roadmap, technische richting en werving.",
      ],
      requirements: [
        "5+ jaar ervaring met het bouwen en draaien van productiesystemen, idealiter inclusief een groot systeem of een systeem met hoge doorvoer.",
        "Diepe expertise in TypeScript/Node.js of een vergelijkbare stack, plus stevige vaardigheden in datamodellering en API-ontwerp.",
        "Een trackrecord van end-to-end opleveren en verantwoordelijk blijven voor het resultaat in productie.",
        "Heldere schriftelijke en mondelinge communicatie in het Engels.",
      ],
      niceToHave: [
        "Ervaring met routering, planning of andere optimalisatie-intensieve producten.",
        "Eerdere ervaring bij een startup of in een founding team.",
      ],
    },
    tr: {
      title: "Kıdemli Yazılım Mühendisi",
      summary:
        "Rotasal platformunun büyük bölümlerini uçtan uca sahiplenmek ve ekibin mühendislik çıtasını belirlemek.",
      intro: [
        companyIntro.tr,
        "Ürünün planlama API'si, planlamacı arayüzü ya da optimizasyon servisi gibi alanlarını tasarımdan canlıya kadar bütünüyle sahiplenecek ve nasıl geliştirdiğimizin çıtasını yükselteceksin. Seni bolca özerklik, müşterilerle doğrudan bir hat ve teknik yön konusunda gerçek bir söz hakkı bekliyor.",
      ],
      responsibilities: [
        "Rotasal platformu genelinde büyük özelliklerin ve servislerin tasarımına ve teslimatına liderlik etmek.",
        "Mühendislik standartlarını belirlemek: mimari, kod incelemesi, test ve operasyonel hazırlık.",
        "Diğer mühendislere mentorluk yapmak ve en zor problemlerde ekibin önünü açmak.",
        "Yol haritası, teknik yön ve işe alım konularında kurucuyla birlikte çalışmak.",
      ],
      requirements: [
        "Canlı sistemler geliştirme ve işletmede 5+ yıl deneyim; ideal olarak büyük ya da yüksek işlem hacimli bir sistem de dahil.",
        "TypeScript/Node.js veya benzer bir stack'te derin uzmanlık; ayrıca sağlam veri modelleme ve API tasarımı becerileri.",
        "Uçtan uca yayına alma ve canlıdaki sonucun sorumluluğunu üstlenmeye devam etme konusunda kanıtlanmış bir geçmiş.",
        "Yazılı ve sözlü İngilizcede net iletişim.",
      ],
      niceToHave: [
        "Rotalama, zamanlama veya optimizasyon ağırlıklı başka ürünlerde deneyim.",
        "Daha önce startup ya da kurucu ekip deneyimi.",
      ],
    },
  },
} as const satisfies Opening;

export const staffSoftwareEngineer = {
  ...base,
  slug: "staff-software-engineer",
  salary: yearlySalary(260000),
  content: {
    en: {
      title: "Staff Software Engineer",
      summary:
        "Define the technical architecture of Rotasal as it scales from early customers to thousands of daily routes.",
      intro: [
        companyIntro.en,
        "As our first staff-level engineer you'll shape the architecture of the whole platform: how the optimization service, the planning API, and customer integrations fit together — and how they keep working as volume grows by orders of magnitude. You'll spend most of your time building, and the rest making the team faster.",
      ],
      responsibilities: [
        "Own platform architecture: service boundaries, data model, performance, and reliability.",
        "Solve the hardest technical problems yourself — solver performance, multi-tenant scale, integrations.",
        "Set the technical strategy with the founder and turn it into a roadmap the team can execute.",
        "Raise the engineering bar through design reviews, mentoring, and hands-on pairing.",
      ],
      requirements: [
        "8+ years of software engineering, several of them designing systems that other teams build on.",
        "Deep systems knowledge: distributed systems, databases, performance profiling.",
        "Proven ability to drive ambiguous, cross-cutting projects to completion.",
        "Clear written and spoken communication in English.",
      ],
      niceToHave: [
        "Background in optimization or high-throughput compute (solvers, simulation, ML infrastructure).",
        "Experience scaling a B2B SaaS platform.",
      ],
    },
    de: {
      title: "Staff Software Engineer",
      summary:
        "Die technische Architektur von Rotasal definieren, während es von ersten Kunden auf Tausende Routen pro Tag skaliert.",
      intro: [
        companyIntro.de,
        "Als unser erster Engineer auf Staff-Level prägst du die Architektur der gesamten Plattform: wie Optimierungsservice, Planungs-API und Kundenintegrationen zusammenspielen — und wie sie weiterlaufen, wenn das Volumen um Größenordnungen wächst. Die meiste Zeit baust du selbst, mit dem Rest machst du das Team schneller.",
      ],
      responsibilities: [
        "Die Plattformarchitektur verantworten: Service-Grenzen, Datenmodell, Performance und Zuverlässigkeit.",
        "Die schwierigsten technischen Probleme selbst lösen — Solver-Performance, Multi-Tenant-Skalierung, Integrationen.",
        "Mit dem Gründer die technische Strategie festlegen und in eine Roadmap übersetzen, die das Team umsetzen kann.",
        "Die Messlatte im Engineering durch Design-Reviews, Mentoring und Pair Programming höher legen.",
      ],
      requirements: [
        "8+ Jahre Software-Engineering, davon mehrere im Design von Systemen, auf denen andere Teams aufbauen.",
        "Tiefes Systemwissen: verteilte Systeme, Datenbanken, Performance-Profiling.",
        "Nachweislich in der Lage, unscharf umrissene, übergreifende Projekte zum Abschluss zu bringen.",
        "Klare Kommunikation auf Englisch — schriftlich wie mündlich.",
      ],
      niceToHave: [
        "Hintergrund in Optimierung oder durchsatzstarkem Computing (Solver, Simulation, ML-Infrastruktur).",
        "Erfahrung mit dem Skalieren einer B2B-SaaS-Plattform.",
      ],
    },
    nl: {
      title: "Staff Software Engineer",
      summary:
        "De technische architectuur van Rotasal bepalen terwijl het opschaalt van de eerste klanten naar duizenden routes per dag.",
      intro: [
        companyIntro.nl,
        "Als onze eerste engineer op staff-niveau geef je vorm aan de architectuur van het hele platform: hoe de optimalisatieservice, de planning-API en klantintegraties in elkaar passen — en hoe ze blijven werken als het volume met ordes van grootte groeit. Het grootste deel van je tijd bouw je zelf, de rest van de tijd maak je het team sneller.",
      ],
      responsibilities: [
        "Eigenaar zijn van de platformarchitectuur: servicegrenzen, datamodel, performance en betrouwbaarheid.",
        "De moeilijkste technische problemen zelf oplossen — solverperformance, multi-tenant schaal, integraties.",
        "Samen met de oprichter de technische strategie bepalen en vertalen naar een roadmap die het team kan uitvoeren.",
        "De lat voor engineering hoger leggen via designreviews, mentoring en hands-on pair programming.",
      ],
      requirements: [
        "8+ jaar software-engineering, waarvan meerdere jaren met het ontwerpen van systemen waar andere teams op bouwen.",
        "Diepe systeemkennis: gedistribueerde systemen, databases, performance-profiling.",
        "Aantoonbaar in staat om onduidelijk afgebakende, teamoverstijgende projecten tot een goed einde te brengen.",
        "Heldere schriftelijke en mondelinge communicatie in het Engels.",
      ],
      niceToHave: [
        "Achtergrond in optimalisatie of high-throughput compute (solvers, simulatie, ML-infrastructuur).",
        "Ervaring met het opschalen van een B2B SaaS-platform.",
      ],
    },
    tr: {
      title: "Staff Yazılım Mühendisi",
      summary:
        "Rotasal ilk müşterilerden günde binlerce rotaya ölçeklenirken teknik mimarisini tanımlamak.",
      intro: [
        companyIntro.tr,
        "Staff seviyesindeki ilk mühendisimiz olarak tüm platformun mimarisini şekillendireceksin: optimizasyon servisi, planlama API'si ve müşteri entegrasyonlarının nasıl bir araya geldiğini — ve hacim kat kat büyürken nasıl çalışmaya devam ettiğini. Zamanının çoğunu inşa ederek, geri kalanını ekibi hızlandırarak geçireceksin.",
      ],
      responsibilities: [
        "Platform mimarisini sahiplenmek: servis sınırları, veri modeli, performans ve güvenilirlik.",
        "En zor teknik problemleri bizzat çözmek — solver performansı, çok kiracılı ölçek, entegrasyonlar.",
        "Kurucuyla birlikte teknik stratejiyi belirlemek ve onu ekibin uygulayabileceği bir yol haritasına dönüştürmek.",
        "Tasarım incelemeleri, mentorluk ve birebir pair programming ile mühendislik çıtasını yükseltmek.",
      ],
      requirements: [
        "8+ yıl yazılım mühendisliği deneyimi; bunun birkaç yılı, başka ekiplerin üzerine inşa ettiği sistemleri tasarlamakla geçmiş.",
        "Derin sistem bilgisi: dağıtık sistemler, veritabanları, performans profilleme.",
        "Belirsiz, birden çok alanı kesen projeleri sonuca ulaştırma konusunda kanıtlanmış yetkinlik.",
        "Yazılı ve sözlü İngilizcede net iletişim.",
      ],
      niceToHave: [
        "Optimizasyon veya yüksek hacimli hesaplama (solver'lar, simülasyon, ML altyapısı) geçmişi.",
        "Bir B2B SaaS platformunu ölçeklendirme deneyimi.",
      ],
    },
  },
} as const satisfies Opening;

export const frontendEngineer = {
  ...base,
  slug: "frontend-engineer",
  salary: yearlySalary(170000),
  content: {
    en: {
      title: "Frontend Engineer",
      summary:
        "Build the planning, dispatch, and tracking interfaces dispatchers rely on every morning.",
      intro: [
        companyIntro.en,
        "Rotasal's web app is where dispatchers plan a day of deliveries — maps, drag-and-drop route editing, live tracking, exceptions. You'll own that experience: fast, precise, and clear even at 5 a.m. with 400 stops on screen.",
      ],
      responsibilities: [
        "Build and refine the Rotasal web application in React and TypeScript, including map-heavy and data-dense views.",
        "Own frontend performance, accessibility, and cross-browser quality.",
        "Work with design to turn workflows into simple, fast interfaces.",
        "Shape the frontend architecture, component library, and tooling.",
      ],
      requirements: [
        "Strong React and TypeScript, with a solid grasp of the browser platform.",
        "Experience shipping complex, data-heavy interfaces in production.",
        "An eye for detail — and for the difference between working and delightful.",
        "Working proficiency in English.",
      ],
      niceToHave: [
        "Experience with map libraries (Mapbox GL, MapLibre, deck.gl) or real-time UIs.",
        "Familiarity with Next.js and Tailwind CSS.",
      ],
    },
    de: {
      title: "Frontend Engineer",
      summary:
        "Die Planungs-, Dispositions- und Tracking-Oberflächen bauen, auf die sich Disponenten jeden Morgen verlassen.",
      intro: [
        companyIntro.de,
        "In der Rotasal-Web-App planen Disponenten ihren Liefertag — Karten, Routen per Drag-and-drop bearbeiten, Live-Tracking, Ausnahmen. Du verantwortest dieses Erlebnis: schnell, präzise und klar, auch um 5 Uhr morgens mit 400 Stopps auf dem Bildschirm.",
      ],
      responsibilities: [
        "Die Rotasal-Webanwendung in React und TypeScript bauen und verfeinern, inklusive kartenlastiger und datendichter Ansichten.",
        "Frontend-Performance, Barrierefreiheit und Cross-Browser-Qualität verantworten.",
        "Mit Design zusammenarbeiten, um Workflows in einfache, schnelle Oberflächen zu übersetzen.",
        "Frontend-Architektur, Komponentenbibliothek und Tooling prägen.",
      ],
      requirements: [
        "Sehr gutes React und TypeScript sowie ein solides Verständnis der Browser-Plattform.",
        "Erfahrung darin, komplexe, datenlastige Oberflächen in Produktion zu bringen.",
        "Ein Auge fürs Detail — und für den Unterschied zwischen etwas, das funktioniert, und etwas, das begeistert.",
        "Gute Englischkenntnisse.",
      ],
      niceToHave: [
        "Erfahrung mit Kartenbibliotheken (Mapbox GL, MapLibre, deck.gl) oder Echtzeit-UIs.",
        "Vertrautheit mit Next.js und Tailwind CSS.",
      ],
    },
    nl: {
      title: "Frontend Engineer",
      summary:
        "De plannings-, dispatch- en trackinginterfaces bouwen waar planners elke ochtend op vertrouwen.",
      intro: [
        companyIntro.nl,
        "De webapp van Rotasal is waar planners een dag aan bezorgingen plannen — kaarten, routes bewerken met drag-and-drop, live tracking, uitzonderingen. Jij wordt eigenaar van die ervaring: snel, precies en helder, ook om 5 uur 's ochtends met 400 stops op het scherm.",
      ],
      responsibilities: [
        "De Rotasal-webapplicatie bouwen en verfijnen in React en TypeScript, inclusief kaartintensieve en datadichte views.",
        "Eigenaar zijn van frontend-performance, toegankelijkheid en cross-browser kwaliteit.",
        "Samen met design workflows vertalen naar eenvoudige, snelle interfaces.",
        "De frontend-architectuur, componentbibliotheek en tooling vormgeven.",
      ],
      requirements: [
        "Sterk in React en TypeScript, met een stevige kennis van het browserplatform.",
        "Ervaring met het in productie brengen van complexe, data-intensieve interfaces.",
        "Oog voor detail — en voor het verschil tussen iets dat werkt en iets dat een genot is om te gebruiken.",
        "Goede beheersing van het Engels.",
      ],
      niceToHave: [
        "Ervaring met kaartbibliotheken (Mapbox GL, MapLibre, deck.gl) of realtime UI's.",
        "Bekend met Next.js en Tailwind CSS.",
      ],
    },
    tr: {
      title: "Frontend Mühendisi",
      summary:
        "Planlamacıların her sabah güvendiği planlama, sevk ve takip arayüzlerini geliştirmek.",
      intro: [
        companyIntro.tr,
        "Rotasal'ın web uygulaması, planlamacıların bir günlük teslimatı planladığı yer — haritalar, sürükle-bırak ile rota düzenleme, canlı takip, istisnalar. O deneyimin sahibi sen olacaksın: sabahın 5'inde ekranda 400 durak varken bile hızlı, hassas ve net.",
      ],
      responsibilities: [
        "Harita ağırlıklı ve veri yoğun görünümler dahil, Rotasal web uygulamasını React ve TypeScript ile geliştirmek ve iyileştirmek.",
        "Frontend performansını, erişilebilirliği ve tarayıcılar arası kaliteyi sahiplenmek.",
        "İş akışlarını sade ve hızlı arayüzlere dönüştürmek için tasarım ekibiyle çalışmak.",
        "Frontend mimarisini, bileşen kütüphanesini ve araçları şekillendirmek.",
      ],
      requirements: [
        "Güçlü React ve TypeScript bilgisi ve tarayıcı platformuna sağlam hakimiyet.",
        "Karmaşık, veri yoğun arayüzleri canlıya alma deneyimi.",
        "Detaylara dikkat — ve çalışan bir şeyle kullanması keyifli bir şey arasındaki farkı görebilmek.",
        "İyi düzeyde İngilizce.",
      ],
      niceToHave: [
        "Harita kütüphaneleri (Mapbox GL, MapLibre, deck.gl) veya gerçek zamanlı arayüzler deneyimi.",
        "Next.js ve Tailwind CSS aşinalığı.",
      ],
    },
  },
} as const satisfies Opening;

export const backendEngineer = {
  ...base,
  slug: "backend-engineer",
  salary: yearlySalary(170000),
  content: {
    en: {
      title: "Backend Engineer",
      summary:
        "Design the APIs, data model, and services that turn orders into optimized routes at scale.",
      intro: [
        companyIntro.en,
        "Every day Rotasal ingests orders, geocodes them, runs optimization, and streams routes to drivers. You'll build the services and APIs behind that pipeline — reliable, observable, and fast — and the integrations that plug it into customers' systems.",
      ],
      responsibilities: [
        "Design and build APIs, background jobs, and services in TypeScript/Node.js on PostgreSQL.",
        "Own data modelling, performance, and reliability of the core pipeline.",
        "Build and maintain integrations with order management, WMS, and e-commerce platforms.",
        "Instrument everything: metrics, tracing, alerts, and the runbooks that go with them.",
      ],
      requirements: [
        "Solid experience building production backend systems and APIs.",
        "Strong SQL and data-modelling skills; comfort with PostgreSQL.",
        "A pragmatic approach to reliability, testing, and observability.",
        "Working proficiency in English.",
      ],
      niceToHave: [
        "Experience with geospatial data, queues, or event-driven systems.",
        "Exposure to optimization or scheduling workloads.",
      ],
    },
    de: {
      title: "Backend Engineer",
      summary:
        "Die APIs, das Datenmodell und die Services entwerfen, die Aufträge in großem Maßstab in optimierte Routen verwandeln.",
      intro: [
        companyIntro.de,
        "Jeden Tag nimmt Rotasal Aufträge entgegen, geokodiert sie, lässt die Optimierung laufen und streamt Routen an die Fahrer. Du baust die Services und APIs hinter dieser Pipeline — zuverlässig, beobachtbar und schnell — und die Integrationen, die sie an die Systeme der Kunden anbinden.",
      ],
      responsibilities: [
        "APIs, Background-Jobs und Services in TypeScript/Node.js auf PostgreSQL entwerfen und bauen.",
        "Datenmodellierung, Performance und Zuverlässigkeit der Kern-Pipeline verantworten.",
        "Integrationen mit Auftragsmanagement-, WMS- und E-Commerce-Plattformen bauen und pflegen.",
        "Alles instrumentieren: Metriken, Tracing, Alerts und die dazugehörigen Runbooks.",
      ],
      requirements: [
        "Solide Erfahrung im Bau von Backend-Systemen und APIs für die Produktion.",
        "Starke SQL- und Datenmodellierungs-Skills; sicherer Umgang mit PostgreSQL.",
        "Ein pragmatischer Ansatz bei Zuverlässigkeit, Testing und Observability.",
        "Gute Englischkenntnisse.",
      ],
      niceToHave: [
        "Erfahrung mit Geodaten, Queues oder ereignisgesteuerten Systemen.",
        "Berührungspunkte mit Optimierungs- oder Scheduling-Workloads.",
      ],
    },
    nl: {
      title: "Backend Engineer",
      summary:
        "De API's, het datamodel en de services ontwerpen die orders op schaal omzetten in geoptimaliseerde routes.",
      intro: [
        companyIntro.nl,
        "Elke dag neemt Rotasal orders in, geocodeert ze, draait de optimalisatie en streamt routes naar chauffeurs. Jij bouwt de services en API's achter die pipeline — betrouwbaar, observeerbaar en snel — en de integraties die hem aan de systemen van klanten koppelen.",
      ],
      responsibilities: [
        "API's, achtergrondtaken en services ontwerpen en bouwen in TypeScript/Node.js op PostgreSQL.",
        "Eigenaar zijn van datamodellering, performance en betrouwbaarheid van de kernpipeline.",
        "Integraties bouwen en onderhouden met ordermanagement-, WMS- en e-commerceplatforms.",
        "Alles instrumenteren: metrics, tracing, alerts en de bijbehorende runbooks.",
      ],
      requirements: [
        "Stevige ervaring met het bouwen van backendsystemen en API's voor productie.",
        "Sterke SQL- en datamodelleringsvaardigheden; vertrouwd met PostgreSQL.",
        "Een pragmatische aanpak van betrouwbaarheid, testen en observability.",
        "Goede beheersing van het Engels.",
      ],
      niceToHave: [
        "Ervaring met geodata, queues of event-driven systemen.",
        "Bekendheid met optimalisatie- of planningsworkloads.",
      ],
    },
    tr: {
      title: "Backend Mühendisi",
      summary:
        "Siparişleri ölçekli biçimde optimize edilmiş rotalara dönüştüren API'leri, veri modelini ve servisleri tasarlamak.",
      intro: [
        companyIntro.tr,
        "Rotasal her gün siparişleri alıyor, coğrafi kodluyor, optimizasyonu çalıştırıyor ve rotaları sürücülere aktarıyor. Bu akışın arkasındaki servisleri ve API'leri — güvenilir, gözlemlenebilir ve hızlı — ve onu müşterilerin sistemlerine bağlayan entegrasyonları sen geliştireceksin.",
      ],
      responsibilities: [
        "PostgreSQL üzerinde TypeScript/Node.js ile API'ler, arka plan işleri ve servisler tasarlamak ve geliştirmek.",
        "Çekirdek akışın veri modellemesini, performansını ve güvenilirliğini sahiplenmek.",
        "Sipariş yönetimi, WMS ve e-ticaret platformlarıyla entegrasyonlar geliştirmek ve sürdürmek.",
        "Her şeyi ölçümlemek: metrikler, izleme (tracing), uyarılar ve bunlara eşlik eden runbook'lar.",
      ],
      requirements: [
        "Canlı ortam için backend sistemleri ve API'ler geliştirmede sağlam deneyim.",
        "Güçlü SQL ve veri modelleme becerileri; PostgreSQL ile rahat çalışabilmek.",
        "Güvenilirlik, test ve gözlemlenebilirlik konularında pragmatik bir yaklaşım.",
        "İyi düzeyde İngilizce.",
      ],
      niceToHave: [
        "Coğrafi veri, kuyruklar veya olay güdümlü sistemler deneyimi.",
        "Optimizasyon veya zamanlama iş yükleriyle temas.",
      ],
    },
  },
} as const satisfies Opening;

export const mobileEngineer = {
  ...base,
  slug: "mobile-engineer",
  salary: yearlySalary(170000),
  content: {
    en: {
      title: "Mobile Engineer",
      summary:
        "Build the driver app: turn-by-turn routes, proof of delivery, and offline-first reliability.",
      intro: [
        companyIntro.en,
        "Drivers experience Rotasal through their phones. You'll build and own the driver app — routes, navigation hand-off, proof of delivery, live status — and make it work on flaky networks, cheap Android devices, and long shifts.",
      ],
      responsibilities: [
        "Build and ship the Rotasal driver app for iOS and Android.",
        "Own offline-first sync, background location, and battery-conscious tracking.",
        "Design the app architecture, release process, and monitoring.",
        "Ride along with drivers and turn what you learn into product improvements.",
      ],
      requirements: [
        "Experience shipping production mobile apps (React Native, Swift, or Kotlin).",
        "Solid understanding of offline sync, background tasks, and mobile performance.",
        "Care for reliability and clarity over feature count.",
        "Working proficiency in English.",
      ],
      niceToHave: [
        "Experience with maps, navigation SDKs, or fleet/logistics apps.",
        "Familiarity with TypeScript and our web stack.",
      ],
    },
    de: {
      title: "Mobile Engineer",
      summary:
        "Die Fahrer-App bauen: Turn-by-Turn-Routen, Zustellnachweis und Offline-first-Zuverlässigkeit.",
      intro: [
        companyIntro.de,
        "Fahrer erleben Rotasal über ihr Handy. Du baust und verantwortest die Fahrer-App — Routen, Übergabe an die Navigation, Zustellnachweis, Live-Status — und bringst sie dazu, auch bei wackligem Netz, auf günstigen Android-Geräten und in langen Schichten zu funktionieren.",
      ],
      responsibilities: [
        "Die Rotasal-Fahrer-App für iOS und Android bauen und ausliefern.",
        "Offline-first-Sync, Standort im Hintergrund und akkuschonendes Tracking verantworten.",
        "App-Architektur, Release-Prozess und Monitoring gestalten.",
        "Mit Fahrern mitfahren und das Gelernte in Produktverbesserungen übersetzen.",
      ],
      requirements: [
        "Erfahrung darin, mobile Apps in Produktion zu bringen (React Native, Swift oder Kotlin).",
        "Solides Verständnis von Offline-Sync, Hintergrund-Tasks und mobiler Performance.",
        "Zuverlässigkeit und Klarheit sind dir wichtiger als die Zahl der Features.",
        "Gute Englischkenntnisse.",
      ],
      niceToHave: [
        "Erfahrung mit Karten, Navigations-SDKs oder Flotten-/Logistik-Apps.",
        "Vertrautheit mit TypeScript und unserem Web-Stack.",
      ],
    },
    nl: {
      title: "Mobile Engineer",
      summary:
        "De chauffeursapp bouwen: turn-by-turn routes, afleverbewijs en offline-first betrouwbaarheid.",
      intro: [
        companyIntro.nl,
        "Chauffeurs ervaren Rotasal via hun telefoon. Jij bouwt de chauffeursapp en bent er eigenaar van — routes, overdracht aan de navigatie, afleverbewijs, live status — en je zorgt dat die werkt op haperende netwerken, op goedkope Android-toestellen en tijdens lange diensten.",
      ],
      responsibilities: [
        "De Rotasal-chauffeursapp voor iOS en Android bouwen en uitbrengen.",
        "Eigenaar zijn van offline-first synchronisatie, locatie op de achtergrond en batterijzuinige tracking.",
        "De app-architectuur, het releaseproces en de monitoring ontwerpen.",
        "Meerijden met chauffeurs en wat je leert vertalen naar productverbeteringen.",
      ],
      requirements: [
        "Ervaring met het uitbrengen van mobiele apps in productie (React Native, Swift of Kotlin).",
        "Goed begrip van offline synchronisatie, achtergrondtaken en mobiele performance.",
        "Betrouwbaarheid en helderheid gaan bij jou boven het aantal features.",
        "Goede beheersing van het Engels.",
      ],
      niceToHave: [
        "Ervaring met kaarten, navigatie-SDK's of fleet-/logistiekapps.",
        "Bekend met TypeScript en onze webstack.",
      ],
    },
    tr: {
      title: "Mobil Uygulama Mühendisi",
      summary:
        "Sürücü uygulamasını geliştirmek: adım adım rotalar, teslimat kanıtı ve çevrimdışı öncelikli güvenilirlik.",
      intro: [
        companyIntro.tr,
        "Sürücüler Rotasal'ı telefonlarından deneyimliyor. Sürücü uygulamasını — rotalar, navigasyona aktarım, teslimat kanıtı, canlı durum — sen geliştirecek ve sahipleneceksin; kesintili ağlarda, ucuz Android cihazlarda ve uzun vardiyalarda da çalışmasını sağlayacaksın.",
      ],
      responsibilities: [
        "iOS ve Android için Rotasal sürücü uygulamasını geliştirmek ve yayına almak.",
        "Çevrimdışı öncelikli senkronizasyon, arka planda konum ve pil dostu takibi sahiplenmek.",
        "Uygulama mimarisini, sürüm sürecini ve izlemeyi tasarlamak.",
        "Sürücülerle birlikte sahaya çıkmak ve öğrendiklerini ürün iyileştirmelerine dönüştürmek.",
      ],
      requirements: [
        "Canlıya alınmış mobil uygulama geliştirme deneyimi (React Native, Swift veya Kotlin).",
        "Çevrimdışı senkronizasyon, arka plan görevleri ve mobil performans konularında sağlam bir kavrayış.",
        "Özellik sayısından çok güvenilirliği ve netliği önemsemek.",
        "İyi düzeyde İngilizce.",
      ],
      niceToHave: [
        "Haritalar, navigasyon SDK'ları veya filo/lojistik uygulamaları deneyimi.",
        "TypeScript ve web stack'imize aşinalık.",
      ],
    },
  },
} as const satisfies Opening;

export const seniorDevopsEngineer = {
  ...base,
  slug: "senior-devops-engineer",
  salary: yearlySalary(205000),
  content: {
    en: {
      title: "Senior DevOps Engineer",
      summary:
        "Own the infrastructure, delivery pipeline, and reliability of the Rotasal platform.",
      intro: [
        companyIntro.en,
        "You'll own how Rotasal is built, deployed, and run: infrastructure as code, CI/CD, observability, security, and cost. The optimization workloads are bursty and compute-heavy; the customer-facing API must never blink. You'll design the setup that makes both true — and keep it boring.",
      ],
      responsibilities: [
        "Design and run our cloud infrastructure with infrastructure as code.",
        "Own CI/CD, environments, and the path from merge to production.",
        "Build observability, alerting, and on-call practices that scale with the team.",
        "Harden our security and compliance posture, and keep cloud spend in check.",
      ],
      requirements: [
        "5+ years of DevOps, SRE, or platform work running production systems.",
        "Deep experience with a major cloud provider, containers, and Kubernetes or an equivalent orchestrator.",
        "Strong scripting and infrastructure-as-code skills (Terraform or similar), plus a healthy paranoia about security.",
        "Clear written and spoken communication in English.",
      ],
      niceToHave: [
        "Experience with bursty compute workloads (batch, solvers, ML training).",
        "Experience operating PostgreSQL at scale.",
      ],
    },
    de: {
      title: "Senior DevOps Engineer",
      summary:
        "Infrastruktur, Delivery-Pipeline und Zuverlässigkeit der Rotasal-Plattform verantworten.",
      intro: [
        companyIntro.de,
        "Du verantwortest, wie Rotasal gebaut, deployt und betrieben wird: Infrastructure as Code, CI/CD, Observability, Sicherheit und Kosten. Die Optimierungs-Workloads kommen in Schüben und sind rechenintensiv; die kundenseitige API darf sich keinen Aussetzer erlauben. Du entwirfst das Setup, das beides möglich macht — und hältst es angenehm langweilig.",
      ],
      responsibilities: [
        "Unsere Cloud-Infrastruktur mit Infrastructure as Code entwerfen und betreiben.",
        "CI/CD, Umgebungen und den Weg vom Merge bis in die Produktion verantworten.",
        "Observability, Alerting und On-Call-Praktiken aufbauen, die mit dem Team mitwachsen.",
        "Unsere Sicherheits- und Compliance-Aufstellung härten und die Cloud-Kosten im Griff behalten.",
      ],
      requirements: [
        "5+ Jahre DevOps-, SRE- oder Plattform-Arbeit mit Verantwortung für Produktionssysteme.",
        "Tiefe Erfahrung mit einem großen Cloud-Anbieter, Containern und Kubernetes oder einem vergleichbaren Orchestrator.",
        "Starke Skripting- und Infrastructure-as-Code-Skills (Terraform oder Ähnliches), dazu eine gesunde Paranoia in Sachen Sicherheit.",
        "Klare Kommunikation auf Englisch — schriftlich wie mündlich.",
      ],
      niceToHave: [
        "Erfahrung mit schubweisen Compute-Workloads (Batch, Solver, ML-Training).",
        "Erfahrung im Betrieb von PostgreSQL im großen Maßstab.",
      ],
    },
    nl: {
      title: "Senior DevOps Engineer",
      summary:
        "Eigenaar zijn van de infrastructuur, de deliverypipeline en de betrouwbaarheid van het Rotasal-platform.",
      intro: [
        companyIntro.nl,
        "Jij bepaalt hoe Rotasal wordt gebouwd, uitgerold en gedraaid: infrastructure as code, CI/CD, observability, security en kosten. De optimalisatieworkloads komen in pieken en zijn rekenintensief; de klantgerichte API mag nooit haperen. Jij ontwerpt de opzet die beide waarmaakt — en houdt het lekker saai.",
      ],
      responsibilities: [
        "Onze cloudinfrastructuur ontwerpen en draaien met infrastructure as code.",
        "Eigenaar zijn van CI/CD, omgevingen en het pad van merge naar productie.",
        "Observability, alerting en on-call-praktijken opbouwen die meegroeien met het team.",
        "Onze security- en compliancehouding aanscherpen en de cloudkosten in toom houden.",
      ],
      requirements: [
        "5+ jaar DevOps-, SRE- of platformwerk met productiesystemen in beheer.",
        "Diepe ervaring met een grote cloudprovider, containers en Kubernetes of een vergelijkbare orchestrator.",
        "Sterke scripting- en infrastructure-as-code-vaardigheden (Terraform of vergelijkbaar), plus een gezonde paranoia over security.",
        "Heldere schriftelijke en mondelinge communicatie in het Engels.",
      ],
      niceToHave: [
        "Ervaring met piekende computeworkloads (batch, solvers, ML-training).",
        "Ervaring met het draaien van PostgreSQL op schaal.",
      ],
    },
    tr: {
      title: "Kıdemli DevOps Mühendisi",
      summary:
        "Rotasal platformunun altyapısını, dağıtım hattını ve güvenilirliğini sahiplenmek.",
      intro: [
        companyIntro.tr,
        "Rotasal'ın nasıl inşa edildiğini, dağıtıldığını ve işletildiğini sen sahipleneceksin: kod olarak altyapı, CI/CD, gözlemlenebilirlik, güvenlik ve maliyet. Optimizasyon iş yükleri dalgalı ve hesaplama ağırlıklı; müşteriye dönük API ise asla aksamamalı. İkisini de mümkün kılan kurulumu sen tasarlayacak — ve onu sıkıcı olacak kadar sorunsuz tutacaksın.",
      ],
      responsibilities: [
        "Bulut altyapımızı kod olarak altyapı yaklaşımıyla tasarlamak ve işletmek.",
        "CI/CD'yi, ortamları ve merge'den canlıya giden yolu sahiplenmek.",
        "Ekiple birlikte ölçeklenen gözlemlenebilirlik, uyarı ve nöbet (on-call) pratikleri kurmak.",
        "Güvenlik ve uyumluluk duruşumuzu sıkılaştırmak ve bulut harcamalarını kontrol altında tutmak.",
      ],
      requirements: [
        "Canlı sistemler işleten DevOps, SRE veya platform rollerinde 5+ yıl deneyim.",
        "Büyük bir bulut sağlayıcısı, konteynerler ve Kubernetes ya da eşdeğer bir orkestratörle derin deneyim.",
        "Güçlü betik yazma ve kod olarak altyapı becerileri (Terraform veya benzeri), artı güvenlik konusunda sağlıklı bir paranoya.",
        "Yazılı ve sözlü İngilizcede net iletişim.",
      ],
      niceToHave: [
        "Dalgalı hesaplama iş yükleriyle (batch, solver'lar, ML eğitimi) deneyim.",
        "PostgreSQL'i ölçekli biçimde işletme deneyimi.",
      ],
    },
  },
} as const satisfies Opening;

export const siteReliabilityEngineer = {
  ...base,
  slug: "site-reliability-engineer",
  salary: yearlySalary(170000),
  content: {
    en: {
      title: "Site Reliability Engineer",
      summary:
        "Keep the routing platform fast and available while the volume behind it multiplies.",
      intro: [
        companyIntro.en,
        "As Rotasal takes on more fleets, reliability becomes a product feature. You'll define SLOs, build the monitoring and incident practices to hit them, and remove the toil that would otherwise eat the team's week.",
      ],
      responsibilities: [
        "Define and track SLOs for the API, the optimization service, and driver sync.",
        "Build monitoring, alerting, and incident response — and run the postmortems.",
        "Automate away operational toil: deployments, capacity, backups, failover.",
        "Work with engineers on the performance and resilience of new services.",
      ],
      requirements: [
        "Experience running production services with an SRE or platform mindset.",
        "Strong Linux, networking, and observability fundamentals.",
        "Comfortable writing code (TypeScript, Python, or Go) to solve operational problems.",
        "Working proficiency in English.",
      ],
      niceToHave: [
        "Kubernetes and Terraform experience.",
        "Experience with PostgreSQL reliability and performance.",
      ],
    },
    de: {
      title: "Site Reliability Engineer",
      summary:
        "Die Routing-Plattform schnell und verfügbar halten, während sich das Volumen dahinter vervielfacht.",
      intro: [
        companyIntro.de,
        "Je mehr Flotten Rotasal übernimmt, desto mehr wird Zuverlässigkeit zum Produktfeature. Du definierst SLOs, baust das Monitoring und die Incident-Praktiken, um sie einzuhalten, und räumst die Routinearbeit weg, die dem Team sonst die Woche auffrisst.",
      ],
      responsibilities: [
        "SLOs für die API, den Optimierungsservice und den Fahrer-Sync definieren und nachhalten.",
        "Monitoring, Alerting und Incident Response aufbauen — und die Postmortems leiten.",
        "Operative Routinearbeit wegautomatisieren: Deployments, Kapazität, Backups, Failover.",
        "Mit Engineers an Performance und Resilienz neuer Services arbeiten.",
      ],
      requirements: [
        "Erfahrung im Betrieb von Produktionsservices mit SRE- oder Plattform-Denke.",
        "Starke Grundlagen in Linux, Netzwerken und Observability.",
        "Du schreibst selbstverständlich Code (TypeScript, Python oder Go), um operative Probleme zu lösen.",
        "Gute Englischkenntnisse.",
      ],
      niceToHave: [
        "Erfahrung mit Kubernetes und Terraform.",
        "Erfahrung mit Zuverlässigkeit und Performance von PostgreSQL.",
      ],
    },
    nl: {
      title: "Site Reliability Engineer",
      summary:
        "Het routeringsplatform snel en beschikbaar houden terwijl het volume erachter zich vermenigvuldigt.",
      intro: [
        companyIntro.nl,
        "Naarmate Rotasal meer vloten bedient, wordt betrouwbaarheid een productfeature. Jij definieert SLO's, bouwt de monitoring en incidentpraktijken om ze te halen, en ruimt het handwerk op dat anders de week van het team opslokt.",
      ],
      responsibilities: [
        "SLO's definiëren en bijhouden voor de API, de optimalisatieservice en de chauffeurssynchronisatie.",
        "Monitoring, alerting en incidentrespons opbouwen — en de postmortems leiden.",
        "Operationeel handwerk wegautomatiseren: deployments, capaciteit, back-ups, failover.",
        "Met engineers werken aan de performance en veerkracht van nieuwe services.",
      ],
      requirements: [
        "Ervaring met het draaien van productieservices vanuit een SRE- of platformmindset.",
        "Sterke basis in Linux, netwerken en observability.",
        "Je schrijft met gemak code (TypeScript, Python of Go) om operationele problemen op te lossen.",
        "Goede beheersing van het Engels.",
      ],
      niceToHave: [
        "Ervaring met Kubernetes en Terraform.",
        "Ervaring met de betrouwbaarheid en performance van PostgreSQL.",
      ],
    },
    tr: {
      title: "Site Güvenilirlik Mühendisi (SRE)",
      summary:
        "Arkasındaki hacim katlanırken rotalama platformunu hızlı ve erişilebilir tutmak.",
      intro: [
        companyIntro.tr,
        "Rotasal daha fazla filoya hizmet verdikçe güvenilirlik bir ürün özelliğine dönüşüyor. SLO'ları tanımlayacak, bunları tutturmak için izleme ve olay müdahale pratiklerini kuracak ve aksi takdirde ekibin haftasını yiyip bitirecek angaryayı ortadan kaldıracaksın.",
      ],
      responsibilities: [
        "API, optimizasyon servisi ve sürücü senkronizasyonu için SLO'lar tanımlamak ve takip etmek.",
        "İzleme, uyarı ve olay müdahalesini kurmak — ve postmortem'leri yürütmek.",
        "Operasyonel angaryayı otomasyonla ortadan kaldırmak: dağıtımlar, kapasite, yedekler, yük devretme (failover).",
        "Yeni servislerin performansı ve dayanıklılığı üzerinde mühendislerle çalışmak.",
      ],
      requirements: [
        "SRE veya platform bakış açısıyla canlı servisler işletme deneyimi.",
        "Güçlü Linux, ağ ve gözlemlenebilirlik temelleri.",
        "Operasyonel problemleri çözmek için kod yazmakta (TypeScript, Python veya Go) rahat olmak.",
        "İyi düzeyde İngilizce.",
      ],
      niceToHave: [
        "Kubernetes ve Terraform deneyimi.",
        "PostgreSQL güvenilirliği ve performansı deneyimi.",
      ],
    },
  },
} as const satisfies Opening;

export const securityEngineer = {
  ...base,
  slug: "security-engineer",
  salary: yearlySalary(170000),
  content: {
    en: {
      title: "Security Engineer",
      summary:
        "Protect customer data across the platform, from application code to cloud configuration.",
      intro: [
        companyIntro.en,
        "Rotasal handles delivery data for many companies at once. You'll build security in from the start: threat models, secure defaults, cloud hardening, and the reviews and tooling that keep it that way as the team grows.",
      ],
      responsibilities: [
        "Own application and cloud security: threat modelling, secure design reviews, hardening.",
        "Build tooling for secrets, access control, and dependency and vulnerability management.",
        "Lead security incident response and the practices around it.",
        "Prepare us for customer security reviews and compliance frameworks such as SOC 2.",
      ],
      requirements: [
        "Experience in application or cloud security in a product engineering environment.",
        "Solid understanding of web security, identity and access, and cloud IAM.",
        "Ability to write code and work alongside engineers, not just audit them.",
        "Working proficiency in English.",
      ],
      niceToHave: [
        "Experience achieving SOC 2 or ISO 27001 at a startup.",
        "Background in offensive security or bug bounty work.",
      ],
    },
    de: {
      title: "Security Engineer",
      summary:
        "Kundendaten über die gesamte Plattform schützen — vom Anwendungscode bis zur Cloud-Konfiguration.",
      intro: [
        companyIntro.de,
        "Rotasal verarbeitet Lieferdaten vieler Unternehmen gleichzeitig. Du baust Sicherheit von Anfang an ein: Threat Models, sichere Defaults, Cloud-Härtung sowie die Reviews und das Tooling, die das auch dann sicherstellen, wenn das Team wächst.",
      ],
      responsibilities: [
        "Anwendungs- und Cloud-Sicherheit verantworten: Threat Modelling, sichere Design-Reviews, Härtung.",
        "Tooling für Secrets, Zugriffskontrolle sowie Dependency- und Schwachstellenmanagement bauen.",
        "Security Incident Response und die zugehörigen Praktiken leiten.",
        "Uns auf Sicherheitsprüfungen durch Kunden und Compliance-Frameworks wie SOC 2 vorbereiten.",
      ],
      requirements: [
        "Erfahrung in Anwendungs- oder Cloud-Sicherheit in einem Produkt-Engineering-Umfeld.",
        "Solides Verständnis von Web-Sicherheit, Identity & Access und Cloud-IAM.",
        "Du kannst selbst Code schreiben und arbeitest mit Engineers zusammen, statt sie nur zu auditieren.",
        "Gute Englischkenntnisse.",
      ],
      niceToHave: [
        "Erfahrung damit, SOC 2 oder ISO 27001 in einem Startup zu erreichen.",
        "Hintergrund in Offensive Security oder Bug-Bounty-Arbeit.",
      ],
    },
    nl: {
      title: "Security Engineer",
      summary:
        "Klantdata beschermen over het hele platform — van applicatiecode tot cloudconfiguratie.",
      intro: [
        companyIntro.nl,
        "Rotasal verwerkt bezorgdata van veel bedrijven tegelijk. Jij bouwt security vanaf het begin in: threat models, veilige defaults, cloudhardening en de reviews en tooling die dat zo houden terwijl het team groeit.",
      ],
      responsibilities: [
        "Eigenaar zijn van applicatie- en cloudsecurity: threat modelling, veilige designreviews, hardening.",
        "Tooling bouwen voor secrets, toegangsbeheer en dependency- en kwetsbaarhedenbeheer.",
        "Security-incidentrespons en de bijbehorende praktijken leiden.",
        "Ons voorbereiden op securityreviews van klanten en compliancekaders zoals SOC 2.",
      ],
      requirements: [
        "Ervaring met applicatie- of cloudsecurity in een product-engineeringomgeving.",
        "Goed begrip van websecurity, identity en access, en cloud-IAM.",
        "Je kunt zelf code schrijven en met engineers samenwerken, in plaats van ze alleen te auditen.",
        "Goede beheersing van het Engels.",
      ],
      niceToHave: [
        "Ervaring met het behalen van SOC 2 of ISO 27001 bij een startup.",
        "Achtergrond in offensive security of bugbountywerk.",
      ],
    },
    tr: {
      title: "Güvenlik Mühendisi",
      summary:
        "Uygulama kodundan bulut yapılandırmasına kadar platform genelinde müşteri verilerini korumak.",
      intro: [
        companyIntro.tr,
        "Rotasal aynı anda pek çok şirketin teslimat verisini işliyor. Güvenliği en baştan inşa edeceksin: tehdit modelleri, güvenli varsayılanlar, bulut sıkılaştırma ve ekip büyürken bunu böyle tutan incelemeler ve araçlar.",
      ],
      responsibilities: [
        "Uygulama ve bulut güvenliğini sahiplenmek: tehdit modelleme, güvenli tasarım incelemeleri, sıkılaştırma.",
        "Gizli anahtarlar (secrets), erişim kontrolü ile bağımlılık ve zafiyet yönetimi için araçlar geliştirmek.",
        "Güvenlik olaylarına müdahaleye ve etrafındaki pratiklere liderlik etmek.",
        "Bizi müşteri güvenlik denetimlerine ve SOC 2 gibi uyumluluk çerçevelerine hazırlamak.",
      ],
      requirements: [
        "Ürün mühendisliği ortamında uygulama veya bulut güvenliği deneyimi.",
        "Web güvenliği, kimlik ve erişim ile bulut IAM konularında sağlam bir kavrayış.",
        "Mühendisleri yalnızca denetlemek yerine kod yazabilmek ve onlarla yan yana çalışabilmek.",
        "İyi düzeyde İngilizce.",
      ],
      niceToHave: [
        "Bir startup'ta SOC 2 veya ISO 27001 sertifikasyonu alma deneyimi.",
        "Ofansif güvenlik veya bug bounty geçmişi.",
      ],
    },
  },
} as const satisfies Opening;

export const qaAutomationEngineer = {
  ...base,
  slug: "qa-automation-engineer",
  salary: yearlySalary(140000),
  content: {
    en: {
      title: "QA Automation Engineer",
      summary:
        "Build the automated testing that lets a small team ship a logistics platform daily with confidence.",
      intro: [
        companyIntro.en,
        "Routing mistakes are expensive for our customers, so quality is not optional. You'll design the test strategy and build the automation — from solver regression suites to end-to-end flows across the web app and the driver app.",
      ],
      responsibilities: [
        "Design and build automated test suites: unit, integration, end-to-end, and solver regression.",
        "Own the test infrastructure and make CI fast and trustworthy.",
        "Work with engineers to make features testable by design.",
        "Track quality metrics and drive the fixes they point to.",
      ],
      requirements: [
        "Experience building test automation for web and/or mobile products.",
        "Solid programming skills (TypeScript preferred) and familiarity with modern test tooling such as Playwright.",
        "A systematic, curious approach to finding what breaks.",
        "Working proficiency in English.",
      ],
      niceToHave: [
        "Experience testing data-heavy or algorithmic systems.",
        "Performance or load-testing experience.",
      ],
    },
    de: {
      title: "QA Automation Engineer",
      summary:
        "Die Testautomatisierung bauen, mit der ein kleines Team eine Logistikplattform täglich und mit gutem Gewissen ausliefern kann.",
      intro: [
        companyIntro.de,
        "Routing-Fehler sind für unsere Kunden teuer, Qualität ist deshalb nicht verhandelbar. Du entwirfst die Teststrategie und baust die Automatisierung — von Solver-Regressionssuiten bis zu End-to-End-Flows über Web-App und Fahrer-App hinweg.",
      ],
      responsibilities: [
        "Automatisierte Testsuiten entwerfen und bauen: Unit, Integration, End-to-End und Solver-Regression.",
        "Die Testinfrastruktur verantworten und CI schnell und vertrauenswürdig machen.",
        "Mit Engineers daran arbeiten, dass Features von Anfang an testbar sind.",
        "Qualitätsmetriken verfolgen und die Fixes vorantreiben, auf die sie zeigen.",
      ],
      requirements: [
        "Erfahrung im Aufbau von Testautomatisierung für Web- und/oder Mobile-Produkte.",
        "Solide Programmierkenntnisse (bevorzugt TypeScript) und Vertrautheit mit modernem Test-Tooling wie Playwright.",
        "Ein systematischer, neugieriger Ansatz, um herauszufinden, was kaputtgeht.",
        "Gute Englischkenntnisse.",
      ],
      niceToHave: [
        "Erfahrung im Testen datenlastiger oder algorithmischer Systeme.",
        "Erfahrung mit Performance- oder Lasttests.",
      ],
    },
    nl: {
      title: "QA Automation Engineer",
      summary:
        "De testautomatisering bouwen waarmee een klein team dagelijks met vertrouwen een logistiek platform kan uitrollen.",
      intro: [
        companyIntro.nl,
        "Routeringsfouten zijn duur voor onze klanten, dus kwaliteit is niet optioneel. Jij ontwerpt de teststrategie en bouwt de automatisering — van solver-regressiesuites tot end-to-end flows door de webapp en de chauffeursapp.",
      ],
      responsibilities: [
        "Geautomatiseerde testsuites ontwerpen en bouwen: unit, integratie, end-to-end en solver-regressie.",
        "Eigenaar zijn van de testinfrastructuur en CI snel en betrouwbaar maken.",
        "Met engineers samenwerken zodat features by design testbaar zijn.",
        "Kwaliteitsmetrics bijhouden en de fixes aanjagen waar ze naar wijzen.",
      ],
      requirements: [
        "Ervaring met het bouwen van testautomatisering voor web- en/of mobiele producten.",
        "Stevige programmeervaardigheden (bij voorkeur TypeScript) en bekendheid met moderne testtooling zoals Playwright.",
        "Een systematische, nieuwsgierige aanpak om te vinden wat kapotgaat.",
        "Goede beheersing van het Engels.",
      ],
      niceToHave: [
        "Ervaring met het testen van data-intensieve of algoritmische systemen.",
        "Ervaring met performance- of loadtesting.",
      ],
    },
    tr: {
      title: "QA Otomasyon Mühendisi",
      summary:
        "Küçük bir ekibin bir lojistik platformunu her gün güvenle yayına almasını sağlayan test otomasyonunu kurmak.",
      intro: [
        companyIntro.tr,
        "Rotalama hataları müşterilerimiz için pahalıya patlar; dolayısıyla kalite tercihe bağlı değil. Test stratejisini sen tasarlayacak ve otomasyonu sen kuracaksın — solver regresyon paketlerinden web uygulaması ve sürücü uygulaması boyunca uçtan uca akışlara kadar.",
      ],
      responsibilities: [
        "Otomatik test paketleri tasarlamak ve kurmak: birim, entegrasyon, uçtan uca ve solver regresyonu.",
        "Test altyapısını sahiplenmek ve CI'ı hızlı ve güvenilir hale getirmek.",
        "Özelliklerin tasarım gereği test edilebilir olması için mühendislerle çalışmak.",
        "Kalite metriklerini takip etmek ve işaret ettikleri düzeltmeleri hayata geçirmek.",
      ],
      requirements: [
        "Web ve/veya mobil ürünler için test otomasyonu kurma deneyimi.",
        "Sağlam programlama becerileri (tercihen TypeScript) ve Playwright gibi modern test araçlarına aşinalık.",
        "Neyin bozulduğunu bulmaya sistematik ve meraklı bir yaklaşım.",
        "İyi düzeyde İngilizce.",
      ],
      niceToHave: [
        "Veri yoğun veya algoritmik sistemleri test etme deneyimi.",
        "Performans veya yük testi deneyimi.",
      ],
    },
  },
} as const satisfies Opening;

export const engineeringManager = {
  ...base,
  slug: "engineering-manager",
  salary: yearlySalary(240000),
  content: {
    en: {
      title: "Engineering Manager",
      summary:
        "Build and lead the engineering team as Rotasal grows from a handful of engineers to a real organisation.",
      intro: [
        companyIntro.en,
        "You'll be the first engineering manager at Avernsys: hiring the team, setting how we plan and ship, and keeping engineers focused and growing — while staying close enough to the code to make good calls.",
      ],
      responsibilities: [
        "Hire, onboard, and grow a team of engineers across the platform.",
        "Own planning, delivery, and engineering process together with the founder.",
        "Coach engineers, give clear feedback, and build a healthy team culture.",
        "Stay technical: design reviews, the occasional pull request, and sound architectural judgment.",
      ],
      requirements: [
        "Experience managing software engineers, ideally including hiring a team from scratch.",
        "A strong engineering background — you've shipped and operated production systems yourself.",
        "Clear, direct communication and a bias for shipping.",
        "Fluent English.",
      ],
      niceToHave: [
        "Startup experience during a growth phase.",
        "Familiarity with logistics, mapping, or optimization products.",
      ],
    },
    de: {
      title: "Engineering Manager",
      summary:
        "Das Engineering-Team aufbauen und führen, während Rotasal von einer Handvoll Engineers zu einer echten Organisation wächst.",
      intro: [
        companyIntro.de,
        "Du bist die erste Führungskraft im Engineering bei Avernsys: Du stellst das Team ein, legst fest, wie wir planen und ausliefern, und sorgst dafür, dass die Engineers fokussiert bleiben und wachsen — während du nah genug am Code bleibst, um gute Entscheidungen zu treffen.",
      ],
      responsibilities: [
        "Ein Team von Engineers für die gesamte Plattform einstellen, onboarden und weiterentwickeln.",
        "Planung, Delivery und Engineering-Prozess gemeinsam mit dem Gründer verantworten.",
        "Engineers coachen, klares Feedback geben und eine gesunde Teamkultur aufbauen.",
        "Technisch bleiben: Design-Reviews, gelegentlich ein Pull Request und ein solides Urteil in Architekturfragen.",
      ],
      requirements: [
        "Erfahrung in der Führung von Software-Engineers, idealerweise inklusive dem Aufbau eines Teams von Grund auf.",
        "Ein starker Engineering-Hintergrund — du hast selbst Produktionssysteme gebaut und betrieben.",
        "Klare, direkte Kommunikation und eine Vorliebe fürs Ausliefern.",
        "Fließendes Englisch.",
      ],
      niceToHave: [
        "Startup-Erfahrung in einer Wachstumsphase.",
        "Vertrautheit mit Logistik-, Karten- oder Optimierungsprodukten.",
      ],
    },
    nl: {
      title: "Engineering Manager",
      summary:
        "Het engineeringteam opbouwen en leiden terwijl Rotasal groeit van een handvol engineers naar een echte organisatie.",
      intro: [
        companyIntro.nl,
        "Jij wordt de eerste engineering manager bij Avernsys: je werft het team, bepaalt hoe we plannen en opleveren, en houdt engineers gefocust en in ontwikkeling — terwijl je dicht genoeg bij de code blijft om goede beslissingen te nemen.",
      ],
      responsibilities: [
        "Een team van engineers voor het hele platform werven, inwerken en laten groeien.",
        "Samen met de oprichter eigenaar zijn van planning, oplevering en het engineeringproces.",
        "Engineers coachen, heldere feedback geven en een gezonde teamcultuur bouwen.",
        "Technisch blijven: designreviews, af en toe een pull request en een goed oordeel over architectuur.",
      ],
      requirements: [
        "Ervaring met het aansturen van software engineers, idealiter inclusief het van de grond af opbouwen van een team.",
        "Een sterke engineeringachtergrond — je hebt zelf productiesystemen opgeleverd en gedraaid.",
        "Heldere, directe communicatie en een sterke drang om op te leveren.",
        "Vloeiend Engels.",
      ],
      niceToHave: [
        "Startup-ervaring in een groeifase.",
        "Bekend met logistiek-, kaart- of optimalisatieproducten.",
      ],
    },
    tr: {
      title: "Mühendislik Müdürü",
      summary:
        "Rotasal bir avuç mühendisten gerçek bir organizasyona büyürken mühendislik ekibini kurmak ve yönetmek.",
      intro: [
        companyIntro.tr,
        "Avernsys'in ilk mühendislik müdürü sen olacaksın: ekibi işe alacak, nasıl planlayıp yayına aldığımızı belirleyecek ve mühendislerin odaklı kalıp gelişmesini sağlayacaksın — bunu yaparken de doğru kararlar verecek kadar koda yakın kalacaksın.",
      ],
      responsibilities: [
        "Platform genelinde bir mühendis ekibi işe almak, oryantasyonunu yapmak ve büyütmek.",
        "Planlama, teslimat ve mühendislik sürecini kurucuyla birlikte sahiplenmek.",
        "Mühendislere koçluk yapmak, net geri bildirim vermek ve sağlıklı bir ekip kültürü kurmak.",
        "Teknik kalmak: tasarım incelemeleri, ara sıra bir pull request ve sağlam mimari muhakeme.",
      ],
      requirements: [
        "Yazılım mühendislerini yönetme deneyimi; ideal olarak sıfırdan ekip kurmuş olmak.",
        "Güçlü bir mühendislik geçmişi — canlı sistemleri bizzat yayına almış ve işletmiş olmak.",
        "Net, doğrudan iletişim ve konuşmaktan çok yayına almaya eğilim.",
        "Akıcı İngilizce.",
      ],
      niceToHave: [
        "Büyüme evresindeki bir startup'ta deneyim.",
        "Lojistik, harita veya optimizasyon ürünlerine aşinalık.",
      ],
    },
  },
} as const satisfies Opening;

// Listed as a ladder: product engineering, then infrastructure, then leadership.
export const engineeringOpenings = [
  softwareEngineer,
  frontendEngineer,
  backendEngineer,
  mobileEngineer,
  seniorSoftwareEngineer,
  staffSoftwareEngineer,
  siteReliabilityEngineer,
  seniorDevopsEngineer,
  securityEngineer,
  qaAutomationEngineer,
  engineeringManager,
] as const satisfies readonly Opening[];
