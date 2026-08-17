import type { Opening } from "@/lib/openings";
import {
  companyIntro,
  fullTimeQuestions,
  hiringRound,
  onsiteLocation,
  portfolioQuestion,
  yearlySalary,
} from "./shared";

const base = {
  status: "open",
  postedAt: hiringRound.postedAt,
  validThrough: hiringRound.applyBy,
  team: "product",
  employmentType: "FULL_TIME",
  ...onsiteLocation,
  questions: fullTimeQuestions,
} as const;

export const productManager = {
  ...base,
  slug: "product-manager",
  salary: yearlySalary(165000),
  content: {
    en: {
      title: "Product Manager",
      summary:
        "Own the roadmap for dispatchers and drivers: from customer conversations to shipped features.",
      intro: [
        companyIntro.en,
        "You'll be the voice of the dispatcher and the driver inside the team. You'll spend time with customers, turn their operational pain into crisp priorities, and work with engineering and design to ship — then check that it moved the numbers.",
      ],
      responsibilities: [
        "Own discovery: customer interviews, ride-alongs, usage data, and competitive context.",
        "Define and prioritise the roadmap for planning, dispatch, and driver workflows.",
        "Write clear specs and work daily with engineering and design to ship them.",
        "Measure outcomes and feed what you learn back into the roadmap.",
      ],
      requirements: [
        "Experience as a product manager on a B2B or operations-heavy product.",
        "Comfort with data, APIs, and technical trade-offs.",
        "Strong writing and a habit of clarifying before building.",
        "Fluent English.",
      ],
      niceToHave: [
        "Background in logistics, delivery, or fleet operations.",
        "Experience with map-based or workflow-heavy products.",
      ],
    },
    de: {
      title: "Product Manager",
      summary:
        "Verantworte die Roadmap für Disponenten und Fahrer: von Kundengesprächen bis zu ausgelieferten Features.",
      intro: [
        companyIntro.de,
        "Du bist im Team die Stimme der Disponenten und Fahrer. Du verbringst Zeit mit Kunden, übersetzt ihre operativen Schmerzpunkte in klare Prioritäten und lieferst gemeinsam mit Engineering und Design aus — und prüfst danach, ob es die Zahlen bewegt hat.",
      ],
      responsibilities: [
        "Du verantwortest die Discovery: Kundeninterviews, Mitfahrten bei Fahrern, Nutzungsdaten und Wettbewerbskontext.",
        "Du definierst und priorisierst die Roadmap für Planungs-, Dispositions- und Fahrer-Workflows.",
        "Du schreibst klare Specs und arbeitest täglich mit Engineering und Design daran, sie umzusetzen.",
        "Du misst die Ergebnisse und lässt das Gelernte zurück in die Roadmap fließen.",
      ],
      requirements: [
        "Erfahrung als Product Manager für ein B2B-Produkt oder ein Produkt mit starkem Operations-Fokus.",
        "Sicherer Umgang mit Daten, APIs und technischen Abwägungen.",
        "Starke schriftliche Kommunikation und die Gewohnheit, erst zu klären und dann zu bauen.",
        "Fließendes Englisch.",
      ],
      niceToHave: [
        "Hintergrund in Logistik, Zustellung oder Flottenbetrieb.",
        "Erfahrung mit kartenbasierten oder workflow-lastigen Produkten.",
      ],
    },
    nl: {
      title: "Product Manager",
      summary:
        "Neem de roadmap voor planners en chauffeurs in eigen hand: van klantgesprekken tot opgeleverde features.",
      intro: [
        companyIntro.nl,
        "Jij bent binnen het team de stem van de planner en de chauffeur. Je brengt tijd door met klanten, vertaalt hun operationele pijn naar scherpe prioriteiten en levert samen met engineering en design op — en checkt daarna of het de cijfers heeft bewogen.",
      ],
      responsibilities: [
        "Je bent verantwoordelijk voor discovery: klantinterviews, meerijden met chauffeurs, gebruiksdata en de concurrentiecontext.",
        "Je bepaalt en prioriteert de roadmap voor planning, dispatch en chauffeursworkflows.",
        "Je schrijft heldere specs en werkt dagelijks met engineering en design om ze op te leveren.",
        "Je meet de uitkomsten en laat wat je leert terugvloeien in de roadmap.",
      ],
      requirements: [
        "Ervaring als product manager op een B2B-product of een product met een sterke operationele kant.",
        "Vertrouwd met data, API's en technische afwegingen.",
        "Sterke schrijfvaardigheid en de gewoonte om eerst te verhelderen en dan pas te bouwen.",
        "Vloeiend Engels.",
      ],
      niceToHave: [
        "Achtergrond in logistiek, bezorging of fleetmanagement.",
        "Ervaring met kaartgebaseerde of workflow-intensieve producten.",
      ],
    },
    tr: {
      title: "Ürün Yöneticisi",
      summary:
        "Planlamacılar ve sürücüler için yol haritasının sahibi sen olacaksın: müşteri görüşmelerinden canlıya alınan özelliklere kadar.",
      intro: [
        companyIntro.tr,
        "Ekip içinde planlamacının ve sürücünün sesi sen olacaksın. Müşterilerle vakit geçirecek, operasyonel sıkıntılarını net önceliklere dönüştürecek, mühendislik ve tasarımla birlikte ürünü canlıya alacak — sonra da rakamları gerçekten oynatıp oynatmadığına bakacaksın.",
      ],
      responsibilities: [
        "Keşif sürecini sen yöneteceksin: müşteri görüşmeleri, sürücülerle sahaya çıkma, kullanım verileri ve rekabet bağlamı.",
        "Planlama, sevkiyat ve sürücü iş akışları için yol haritasını tanımlayıp önceliklendireceksin.",
        "Net spesifikasyonlar yazacak, bunları hayata geçirmek için mühendislik ve tasarımla her gün birlikte çalışacaksın.",
        "Sonuçları ölçecek ve öğrendiklerini yol haritasına geri besleyeceksin.",
      ],
      requirements: [
        "B2B ya da operasyon ağırlıklı bir üründe ürün yöneticisi deneyimi.",
        "Veri, API'ler ve teknik ödünleşimlerle rahat çalışabilme.",
        "Güçlü yazılı iletişim ve inşa etmeden önce netleştirme alışkanlığı.",
        "Akıcı İngilizce.",
      ],
      niceToHave: [
        "Lojistik, teslimat veya filo operasyonları geçmişi.",
        "Harita tabanlı ya da iş akışı yoğun ürünlerle deneyim.",
      ],
    },
  },
} as const satisfies Opening;

export const seniorProductManager = {
  ...base,
  slug: "senior-product-manager",
  salary: yearlySalary(195000),
  content: {
    en: {
      title: "Senior Product Manager",
      summary:
        "Lead product strategy for Rotasal and shape how it wins in last-mile delivery.",
      intro: [
        companyIntro.en,
        "You'll own product strategy end to end: which segments to serve first, what the platform must do to win them, and how the roadmap gets there. You'll work directly with the founder and lead product for the team.",
      ],
      responsibilities: [
        "Define product strategy and positioning together with the founder.",
        "Own the roadmap across planning, dispatch, driver, and integrations.",
        "Lead discovery with customers and partners and turn it into decisions.",
        "Set the product practice: how we write, prioritise, and measure.",
      ],
      requirements: [
        "5+ years in product management with ownership of a B2B product's strategy.",
        "A record of shipping products that customers pay for and keep using.",
        "Deep comfort with technical products, data, and integrations.",
        "Fluent English.",
      ],
      niceToHave: [
        "Logistics, mobility, or supply-chain experience.",
        "Prior startup experience.",
      ],
    },
    de: {
      title: "Senior Product Manager",
      summary:
        "Leite die Produktstrategie für Rotasal und gestalte, wie es sich in der Last-Mile-Zustellung durchsetzt.",
      intro: [
        companyIntro.de,
        "Du verantwortest die Produktstrategie von Anfang bis Ende: welche Segmente wir zuerst bedienen, was die Plattform können muss, um sie zu gewinnen, und wie die Roadmap dorthin führt. Du arbeitest direkt mit dem Gründer zusammen und übernimmst die Produktführung für das Team.",
      ],
      responsibilities: [
        "Du definierst Produktstrategie und Positionierung gemeinsam mit dem Gründer.",
        "Du verantwortest die Roadmap über Planung, Disposition, Fahrer und Integrationen hinweg.",
        "Du leitest die Discovery mit Kunden und Partnern und machst daraus Entscheidungen.",
        "Du prägst die Produktpraxis: wie wir schreiben, priorisieren und messen.",
      ],
      requirements: [
        "5+ Jahre im Produktmanagement, mit Verantwortung für die Strategie eines B2B-Produkts.",
        "Nachweisliche Erfolge mit Produkten, für die Kunden zahlen und die sie weiter nutzen.",
        "Große Sicherheit im Umgang mit technischen Produkten, Daten und Integrationen.",
        "Fließendes Englisch.",
      ],
      niceToHave: [
        "Erfahrung in Logistik, Mobilität oder Supply Chain.",
        "Frühere Startup-Erfahrung.",
      ],
    },
    nl: {
      title: "Senior Product Manager",
      summary:
        "Leid de productstrategie voor Rotasal en bepaal hoe het wint in last-mile bezorging.",
      intro: [
        companyIntro.nl,
        "Je bent van begin tot eind eigenaar van de productstrategie: welke segmenten we als eerste bedienen, wat het platform moet kunnen om ze te winnen en hoe de roadmap daar komt. Je werkt rechtstreeks met de oprichter en leidt product voor het team.",
      ],
      responsibilities: [
        "Je bepaalt samen met de oprichter de productstrategie en positionering.",
        "Je bent eigenaar van de roadmap over planning, dispatch, chauffeurs en integraties heen.",
        "Je leidt discovery met klanten en partners en zet het om in beslissingen.",
        "Je zet de productpraktijk neer: hoe we schrijven, prioriteren en meten.",
      ],
      requirements: [
        "5+ jaar productmanagement, inclusief eigenaarschap van de strategie van een B2B-product.",
        "Een trackrecord van producten waar klanten voor betalen en die ze blijven gebruiken.",
        "Zeer vertrouwd met technische producten, data en integraties.",
        "Vloeiend Engels.",
      ],
      niceToHave: [
        "Ervaring in logistiek, mobiliteit of supply chain.",
        "Eerdere startup-ervaring.",
      ],
    },
    tr: {
      title: "Kıdemli Ürün Yöneticisi",
      summary:
        "Rotasal'ın ürün stratejisine liderlik edecek ve son kilometre teslimatta nasıl kazanacağını şekillendireceksin.",
      intro: [
        companyIntro.tr,
        "Ürün stratejisi uçtan uca senin sorumluluğunda olacak: önce hangi segmentlere hizmet edeceğimiz, onları kazanmak için platformun neler yapması gerektiği ve yol haritasının oraya nasıl ulaşacağı. Doğrudan kurucuyla çalışacak ve ekipte ürünün liderliğini üstleneceksin.",
      ],
      responsibilities: [
        "Kurucuyla birlikte ürün stratejisini ve konumlandırmayı tanımlayacaksın.",
        "Planlama, sevkiyat, sürücü ve entegrasyonlar genelinde yol haritasının sahibi olacaksın.",
        "Müşteriler ve iş ortaklarıyla keşif sürecine liderlik edecek, çıkanları kararlara dönüştüreceksin.",
        "Ürün pratiğini sen kuracaksın: nasıl yazdığımız, önceliklendirdiğimiz ve ölçtüğümüz.",
      ],
      requirements: [
        "Bir B2B ürünün stratejisini sahiplenmiş olarak 5+ yıl ürün yönetimi deneyimi.",
        "Müşterilerin para ödediği ve kullanmaya devam ettiği ürünler çıkarmış olmak.",
        "Teknik ürünler, veri ve entegrasyonlara derinlemesine hâkimiyet.",
        "Akıcı İngilizce.",
      ],
      niceToHave: [
        "Lojistik, mobilite veya tedarik zinciri deneyimi.",
        "Önceden startup deneyimi.",
      ],
    },
  },
} as const satisfies Opening;

export const productDesigner = {
  ...base,
  slug: "product-designer",
  salary: yearlySalary(155000),
  questions: [portfolioQuestion, ...fullTimeQuestions],
  content: {
    en: {
      title: "Product Designer",
      summary:
        "Design the dispatch and driver experiences — dense information, made calm and fast.",
      intro: [
        companyIntro.en,
        "Dispatchers juggle hundreds of stops; drivers juggle traffic and parcels. You'll design the interfaces that make both feel easy — from map interactions and route editing to the driver app — and build the design system underneath.",
      ],
      responsibilities: [
        "Own product design for the web app and the driver app, from research to pixel-perfect delivery.",
        "Run lightweight research with dispatchers and drivers and translate it into flows.",
        "Build and maintain the design system together with engineering.",
        "Prototype quickly and validate with real users.",
      ],
      requirements: [
        "A portfolio of shipped, complex product work (dashboards, tools, or maps).",
        "Strong interaction and visual design skills; fluency in Figma.",
        "Comfort working directly with engineers in a small team.",
        "Working proficiency in English.",
      ],
      niceToHave: [
        "Experience with data-dense or map-based interfaces.",
        "Front-end skills (HTML/CSS/React) for prototyping.",
      ],
    },
    de: {
      title: "Product Designer",
      summary:
        "Gestalte die Erlebnisse für Disposition und Fahrer — dichte Informationen, ruhig und schnell aufbereitet.",
      intro: [
        companyIntro.de,
        "Disponenten jonglieren mit Hunderten von Stopps, Fahrer mit Verkehr und Paketen. Du gestaltest die Oberflächen, die beides leicht wirken lassen — von Karteninteraktionen und Routenbearbeitung bis zur Fahrer-App — und baust das Designsystem darunter.",
      ],
      responsibilities: [
        "Du verantwortest das Produktdesign für die Web-App und die Fahrer-App, von der User Research bis zur pixelgenauen Umsetzung.",
        "Du machst leichtgewichtige User Research mit Disponenten und Fahrern und übersetzt sie in Flows.",
        "Du baust und pflegst das Designsystem gemeinsam mit Engineering.",
        "Du baust schnell Prototypen und validierst sie mit echten Nutzern.",
      ],
      requirements: [
        "Ein Portfolio mit ausgelieferter, komplexer Produktarbeit (Dashboards, Tools oder Karten).",
        "Starke Interaction- und Visual-Design-Skills; sicherer Umgang mit Figma.",
        "Freude an der direkten Zusammenarbeit mit Engineers in einem kleinen Team.",
        "Gute Englischkenntnisse.",
      ],
      niceToHave: [
        "Erfahrung mit datendichten oder kartenbasierten Oberflächen.",
        "Frontend-Kenntnisse (HTML/CSS/React) fürs Prototyping.",
      ],
    },
    nl: {
      title: "Product Designer",
      summary:
        "Ontwerp de ervaring voor dispatch en chauffeurs — dichte informatie, rustig en snel gemaakt.",
      intro: [
        companyIntro.nl,
        "Planners jongleren met honderden stops; chauffeurs met verkeer en pakketten. Jij ontwerpt de interfaces die beide makkelijk laten voelen — van kaartinteracties en routebewerking tot de chauffeursapp — en bouwt het design system eronder.",
      ],
      responsibilities: [
        "Je bent eigenaar van het productontwerp voor de webapp en de chauffeursapp, van onderzoek tot pixel-perfecte oplevering.",
        "Je doet lichtgewicht onderzoek met planners en chauffeurs en vertaalt dat naar flows.",
        "Je bouwt en onderhoudt het design system samen met engineering.",
        "Je prototypet snel en valideert met echte gebruikers.",
      ],
      requirements: [
        "Een portfolio met opgeleverd, complex productwerk (dashboards, tools of kaarten).",
        "Sterke interactie- en visuele ontwerpvaardigheden; vloeiend in Figma.",
        "Comfortabel in directe samenwerking met engineers in een klein team.",
        "Goede beheersing van het Engels.",
      ],
      niceToHave: [
        "Ervaring met datadichte of kaartgebaseerde interfaces.",
        "Front-endvaardigheden (HTML/CSS/React) voor prototyping.",
      ],
    },
    tr: {
      title: "Ürün Tasarımcısı",
      summary:
        "Sevkiyat ve sürücü deneyimlerini tasarlayacaksın — yoğun bilgiyi sakin ve hızlı hale getirerek.",
      intro: [
        companyIntro.tr,
        "Planlamacılar aynı anda yüzlerce durağı, sürücüler ise trafiği ve paketleri idare eder. Her ikisini de kolay hissettiren arayüzleri sen tasarlayacaksın — harita etkileşimleri ve rota düzenlemeden sürücü uygulamasına kadar — ve altındaki tasarım sistemini kuracaksın.",
      ],
      responsibilities: [
        "Web uygulaması ve sürücü uygulamasının ürün tasarımını, araştırmadan piksel hassasiyetinde teslimata kadar sen sahipleneceksin.",
        "Planlamacılar ve sürücülerle hafif kullanıcı araştırmaları yapacak, çıkanları akışlara dönüştüreceksin.",
        "Mühendislikle birlikte tasarım sistemini kuracak ve sürdüreceksin.",
        "Hızla prototip yapacak ve gerçek kullanıcılarla doğrulayacaksın.",
      ],
      requirements: [
        "Yayına alınmış, karmaşık ürün işlerinden oluşan bir portfolyo (dashboard'lar, araçlar veya haritalar).",
        "Güçlü etkileşim ve görsel tasarım becerileri; Figma'ya hâkimiyet.",
        "Küçük bir ekipte mühendislerle doğrudan çalışmaktan keyif alma.",
        "İş yürütebilecek düzeyde İngilizce.",
      ],
      niceToHave: [
        "Veri yoğun veya harita tabanlı arayüzlerle deneyim.",
        "Prototipleme için front-end becerileri (HTML/CSS/React).",
      ],
    },
  },
} as const satisfies Opening;

export const technicalProgramManager = {
  ...base,
  slug: "technical-program-manager",
  salary: yearlySalary(170000),
  content: {
    en: {
      title: "Technical Program Manager",
      summary:
        "Run the cross-team programs — customer launches, integrations, platform migrations — that keep Rotasal shipping.",
      intro: [
        companyIntro.en,
        "As customers and integrations multiply, someone has to hold the whole picture: launch plans, dependencies, risks, and dates. You'll run those programs, remove blockers early, and keep engineering, product, and customers aligned.",
      ],
      responsibilities: [
        "Plan and drive customer onboarding programs and platform-wide initiatives.",
        "Track dependencies and risks across engineering, product, and go-to-market.",
        "Set up the lightweight rituals and tools that keep delivery predictable.",
        "Communicate status clearly to the team, the founder, and customers.",
      ],
      requirements: [
        "Experience running technical programs in a software organisation.",
        "Enough technical depth to reason about APIs, data flows, and infrastructure.",
        "Organised, calm, and direct.",
        "Fluent English.",
      ],
      niceToHave: [
        "Experience with enterprise customer onboarding or integrations.",
        "Logistics or operations background.",
      ],
    },
    de: {
      title: "Technical Program Manager",
      summary:
        "Steuere die teamübergreifenden Programme — Kunden-Launches, Integrationen, Plattform-Migrationen —, die dafür sorgen, dass Rotasal weiter liefert.",
      intro: [
        companyIntro.de,
        "Mit jedem neuen Kunden und jeder neuen Integration muss jemand das Gesamtbild im Blick behalten: Launch-Pläne, Abhängigkeiten, Risiken und Termine. Du steuerst diese Programme, räumst Blocker früh aus dem Weg und hältst Engineering, Produkt und Kunden auf einer Linie.",
      ],
      responsibilities: [
        "Du planst Kunden-Onboarding-Programme und plattformweite Initiativen und treibst sie voran.",
        "Du verfolgst Abhängigkeiten und Risiken über Engineering, Produkt und Go-to-Market hinweg.",
        "Du etablierst die schlanken Rituale und Tools, die die Auslieferung planbar halten.",
        "Du kommunizierst den Status klar an das Team, den Gründer und die Kunden.",
      ],
      requirements: [
        "Erfahrung in der Steuerung technischer Programme in einer Softwareorganisation.",
        "Genug technische Tiefe, um über APIs, Datenflüsse und Infrastruktur mitzudenken.",
        "Organisiert, ruhig und direkt.",
        "Fließendes Englisch.",
      ],
      niceToHave: [
        "Erfahrung mit dem Onboarding von Enterprise-Kunden oder mit Integrationen.",
        "Hintergrund in Logistik oder Operations.",
      ],
    },
    nl: {
      title: "Technical Program Manager",
      summary:
        "Leid de teamoverstijgende programma's — klantlanceringen, integraties, platformmigraties — die zorgen dat Rotasal blijft leveren.",
      intro: [
        companyIntro.nl,
        "Naarmate klanten en integraties zich vermenigvuldigen, moet iemand het hele plaatje vasthouden: lanceringsplannen, afhankelijkheden, risico's en deadlines. Jij leidt die programma's, haalt blokkades vroeg weg en houdt engineering, product en klanten op één lijn.",
      ],
      responsibilities: [
        "Je plant klantonboardingprogramma's en platformbrede initiatieven en stuurt ze aan.",
        "Je bewaakt afhankelijkheden en risico's over engineering, product en go-to-market heen.",
        "Je zet de lichtgewicht rituelen en tools op die de oplevering voorspelbaar houden.",
        "Je communiceert de status helder naar het team, de oprichter en klanten.",
      ],
      requirements: [
        "Ervaring met het leiden van technische programma's in een softwareorganisatie.",
        "Genoeg technische diepgang om te redeneren over API's, datastromen en infrastructuur.",
        "Georganiseerd, kalm en direct.",
        "Vloeiend Engels.",
      ],
      niceToHave: [
        "Ervaring met onboarding van enterprise-klanten of met integraties.",
        "Achtergrond in logistiek of operations.",
      ],
    },
    tr: {
      title: "Teknik Program Yöneticisi",
      summary:
        "Rotasal'ın hız kesmeden ürün çıkarmasını sağlayan ekipler arası programları — müşteri lansmanları, entegrasyonlar, platform geçişleri — yöneteceksin.",
      intro: [
        companyIntro.tr,
        "Müşteriler ve entegrasyonlar çoğaldıkça birinin büyük resmi elinde tutması gerekir: lansman planları, bağımlılıklar, riskler ve tarihler. Bu programları sen yönetecek, engelleri erkenden kaldıracak; mühendislik, ürün ve müşterileri aynı hizada tutacaksın.",
      ],
      responsibilities: [
        "Müşteri onboarding programlarını ve platform genelindeki girişimleri planlayıp yürüteceksin.",
        "Mühendislik, ürün ve go-to-market genelinde bağımlılıkları ve riskleri takip edeceksin.",
        "İşlerin öngörülebilir biçimde çıkmasını sağlayan hafif ritüelleri ve araçları kuracaksın.",
        "Durumu ekibe, kurucuya ve müşterilere net biçimde aktaracaksın.",
      ],
      requirements: [
        "Bir yazılım organizasyonunda teknik programlar yürütme deneyimi.",
        "API'ler, veri akışları ve altyapı hakkında akıl yürütebilecek kadar teknik derinlik.",
        "Düzenli, sakin ve açık sözlü.",
        "Akıcı İngilizce.",
      ],
      niceToHave: [
        "Kurumsal müşterilerin onboarding'i veya entegrasyonları konusunda deneyim.",
        "Lojistik veya operasyon geçmişi.",
      ],
    },
  },
} as const satisfies Opening;

export const productOpenings = [
  productManager,
  seniorProductManager,
  productDesigner,
  technicalProgramManager,
] as const satisfies readonly Opening[];
