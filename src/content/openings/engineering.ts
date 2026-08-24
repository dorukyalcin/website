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





export const engineeringOpenings = [
  softwareEngineer,
  seniorSoftwareEngineer,
  seniorDevopsEngineer,
] as const satisfies readonly Opening[];
