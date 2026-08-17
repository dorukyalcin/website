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
  team: "data",
  employmentType: "FULL_TIME",
  ...onsiteLocation,
  questions: fullTimeQuestions,
} as const;

export const machineLearningEngineer = {
  ...base,
  slug: "machine-learning-engineer",
  salary: yearlySalary(175000),
  content: {
    en: {
      title: "Machine Learning Engineer",
      summary:
        "Build the models that predict travel times, service durations, and demand — and put them in production.",
      intro: [
        companyIntro.en,
        "Good routes depend on good predictions: how long a stop takes, how traffic behaves at 8 a.m., which orders will show up tomorrow. You'll build those models and the pipelines that train, evaluate, and serve them inside the optimization loop.",
      ],
      responsibilities: [
        "Build and productionise models for travel-time, service-time, and demand prediction.",
        "Design feature pipelines, training jobs, evaluation, and monitoring.",
        "Work with the optimization team to feed predictions into the routing engine.",
        "Measure real-world impact and iterate with customer data.",
      ],
      requirements: [
        "Experience taking ML models from notebook to production.",
        "Strong Python and solid software engineering habits; comfort with SQL.",
        "Grounding in statistics and evaluation — you know when a model is actually better.",
        "Working proficiency in English.",
      ],
      niceToHave: [
        "Experience with geospatial or time-series data.",
        "Familiarity with optimization or logistics.",
      ],
    },
    de: {
      title: "Machine Learning Engineer",
      summary:
        "Bau die Modelle, die Fahrzeiten, Servicezeiten und Nachfrage vorhersagen — und bring sie in Produktion.",
      intro: [
        companyIntro.de,
        "Gute Routen hängen von guten Vorhersagen ab: wie lange ein Stopp dauert, wie sich der Verkehr um 8 Uhr morgens verhält, welche Aufträge morgen reinkommen. Du baust diese Modelle und die Pipelines, die sie trainieren, evaluieren und direkt in der Optimierungsschleife bereitstellen.",
      ],
      responsibilities: [
        "Du entwickelst Modelle für Fahrzeit-, Servicezeit- und Nachfrageprognosen und bringst sie in Produktion.",
        "Du konzipierst Feature-Pipelines, Trainingsjobs, Evaluation und Monitoring.",
        "Du arbeitest mit dem Optimierungsteam zusammen, um Vorhersagen in die Routing-Engine einzuspeisen.",
        "Du misst die Wirkung in der Praxis und iterierst mit Kundendaten.",
      ],
      requirements: [
        "Erfahrung darin, ML-Modelle vom Notebook in die Produktion zu bringen.",
        "Sehr gutes Python und solide Software-Engineering-Gewohnheiten; sicherer Umgang mit SQL.",
        "Fundierte Kenntnisse in Statistik und Evaluation — du weißt, wann ein Modell wirklich besser ist.",
        "Gute Englischkenntnisse in Wort und Schrift.",
      ],
      niceToHave: [
        "Erfahrung mit Geo- oder Zeitreihendaten.",
        "Vertrautheit mit Optimierung oder Logistik.",
      ],
    },
    nl: {
      title: "Machine Learning Engineer",
      summary:
        "Bouw de modellen die reistijden, servicetijden en vraag voorspellen — en breng ze naar productie.",
      intro: [
        companyIntro.nl,
        "Goede routes staan of vallen met goede voorspellingen: hoe lang een stop duurt, hoe het verkeer zich om 8 uur 's ochtends gedraagt, welke orders er morgen binnenkomen. Jij bouwt die modellen en de pipelines die ze trainen, evalueren en binnen de optimalisatielus beschikbaar stellen.",
      ],
      responsibilities: [
        "Je bouwt modellen voor reistijd-, servicetijd- en vraagvoorspelling en brengt ze naar productie.",
        "Je ontwerpt feature-pipelines, trainingsjobs, evaluatie en monitoring.",
        "Je werkt samen met het optimalisatieteam om voorspellingen in de routeringsengine te integreren.",
        "Je meet de impact in de praktijk en itereert met klantdata.",
      ],
      requirements: [
        "Ervaring met het brengen van ML-modellen van notebook naar productie.",
        "Sterke Python-skills en solide software-engineeringgewoonten; vertrouwd met SQL.",
        "Een stevige basis in statistiek en evaluatie — je weet wanneer een model écht beter is.",
        "Goede beheersing van het Engels.",
      ],
      niceToHave: [
        "Ervaring met geospatiale data of tijdreeksen.",
        "Bekend met optimalisatie of logistiek.",
      ],
    },
    tr: {
      title: "Makine Öğrenimi Mühendisi",
      summary:
        "Seyahat sürelerini, servis sürelerini ve talebi tahmin eden modelleri geliştirecek — ve üretime alacaksın.",
      intro: [
        companyIntro.tr,
        "İyi rotalar iyi tahminlere dayanır: bir durak ne kadar sürer, sabah 8'de trafik nasıl davranır, yarın hangi siparişler gelir. Bu modelleri ve onları eğiten, değerlendiren ve optimizasyon döngüsü içinde çalıştıran pipeline'ları sen geliştireceksin.",
      ],
      responsibilities: [
        "Seyahat süresi, servis süresi ve talep tahmini için modeller geliştirecek ve üretime alacaksın.",
        "Özellik pipeline'larını, eğitim işlerini, değerlendirme ve izleme süreçlerini tasarlayacaksın.",
        "Tahminleri rotalama motoruna beslemek için optimizasyon ekibiyle birlikte çalışacaksın.",
        "Gerçek dünyadaki etkiyi ölçecek ve müşteri verisiyle adım adım iyileştireceksin.",
      ],
      requirements: [
        "ML modellerini notebook'tan üretime taşıma deneyimi.",
        "Güçlü Python bilgisi ve sağlam yazılım mühendisliği alışkanlıkları; SQL ile rahat çalışabilme.",
        "İstatistik ve değerlendirme temeli — bir modelin ne zaman gerçekten daha iyi olduğunu bilirsin.",
        "İyi derecede İngilizce.",
      ],
      niceToHave: [
        "Coğrafi veri veya zaman serileriyle deneyim.",
        "Optimizasyon veya lojistik alanına aşinalık.",
      ],
    },
  },
} as const satisfies Opening;

export const seniorMachineLearningEngineer = {
  ...base,
  slug: "senior-machine-learning-engineer",
  salary: yearlySalary(215000),
  content: {
    en: {
      title: "Senior Machine Learning Engineer",
      summary:
        "Lead the ML roadmap behind Rotasal's predictions, from research to reliable production systems.",
      intro: [
        companyIntro.en,
        "You'll own our ML direction: which problems to model, how to model them, and how to run them reliably at scale. Expect to be hands-on across the stack — from data pipelines to serving — and to mentor the engineers around you.",
      ],
      responsibilities: [
        "Set the ML roadmap with the founder and lead its execution end to end.",
        "Design and build production ML systems: pipelines, training, serving, monitoring.",
        "Establish evaluation and experimentation practices that keep us honest.",
        "Mentor ML and data engineers and review their work.",
      ],
      requirements: [
        "5+ years of applied ML with several models running in production at meaningful scale.",
        "Strong Python, data engineering, and systems skills.",
        "A track record of translating messy real-world problems into measurable model wins.",
        "Clear written and spoken communication in English.",
      ],
      niceToHave: [
        "Experience in logistics, mobility, or maps.",
        "Publications or open-source work in forecasting or spatio-temporal ML.",
      ],
    },
    de: {
      title: "Senior Machine Learning Engineer",
      summary:
        "Leite die ML-Roadmap hinter den Vorhersagen von Rotasal, von der Forschung bis zu verlässlichen Produktionssystemen.",
      intro: [
        companyIntro.de,
        "Du verantwortest unsere ML-Ausrichtung: welche Probleme wir modellieren, wie wir sie modellieren und wie wir sie zuverlässig im großen Maßstab betreiben. Rechne damit, im gesamten Stack hands-on zu sein — von Datenpipelines bis zum Serving — und die Engineers um dich herum weiterzubringen.",
      ],
      responsibilities: [
        "Du legst die ML-Roadmap gemeinsam mit dem Gründer fest und leitest ihre Umsetzung von Anfang bis Ende.",
        "Du konzipierst und baust ML-Systeme für den Produktivbetrieb: Pipelines, Training, Serving, Monitoring.",
        "Du etablierst Evaluations- und Experimentierpraktiken, die dafür sorgen, dass wir uns nichts vormachen.",
        "Du übernimmst das Mentoring für ML- und Data-Engineers und reviewst ihre Arbeit.",
      ],
      requirements: [
        "5+ Jahre angewandtes ML mit mehreren Modellen, die in nennenswertem Maßstab in Produktion laufen.",
        "Sehr gute Python-, Data-Engineering- und Systemkenntnisse.",
        "Eine Erfolgsbilanz darin, chaotische Probleme aus der Praxis in messbare Modellverbesserungen zu übersetzen.",
        "Klare schriftliche und mündliche Kommunikation auf Englisch.",
      ],
      niceToHave: [
        "Erfahrung in Logistik, Mobilität oder Kartendiensten.",
        "Publikationen oder Open-Source-Arbeit im Bereich Forecasting oder raum-zeitliches ML.",
      ],
    },
    nl: {
      title: "Senior Machine Learning Engineer",
      summary:
        "Leid de ML-roadmap achter de voorspellingen van Rotasal, van onderzoek tot betrouwbare productiesystemen.",
      intro: [
        companyIntro.nl,
        "Jij bepaalt onze ML-koers: welke problemen we modelleren, hoe we ze modelleren en hoe we ze betrouwbaar op schaal draaien. Verwacht dat je hands-on bent over de hele stack — van datapipelines tot serving — en dat je de engineers om je heen begeleidt.",
      ],
      responsibilities: [
        "Je zet samen met de oprichter de ML-roadmap uit en leidt de uitvoering van begin tot eind.",
        "Je ontwerpt en bouwt ML-systemen voor productie: pipelines, training, serving, monitoring.",
        "Je zet evaluatie- en experimenteerpraktijken op die ervoor zorgen dat we onszelf niets wijsmaken.",
        "Je begeleidt ML- en data-engineers en reviewt hun werk.",
      ],
      requirements: [
        "5+ jaar toegepaste ML, met meerdere modellen die op serieuze schaal in productie draaien.",
        "Sterke Python-, data-engineering- en systeemvaardigheden.",
        "Een trackrecord in het vertalen van weerbarstige praktijkproblemen naar meetbare modelverbeteringen.",
        "Heldere schriftelijke en mondelinge communicatie in het Engels.",
      ],
      niceToHave: [
        "Ervaring in logistiek, mobiliteit of kaartdiensten.",
        "Publicaties of open-sourcewerk op het gebied van forecasting of ruimtelijk-temporele ML.",
      ],
    },
    tr: {
      title: "Kıdemli Makine Öğrenimi Mühendisi",
      summary:
        "Rotasal'ın tahminlerinin arkasındaki ML yol haritasına, araştırmadan güvenilir üretim sistemlerine kadar liderlik edeceksin.",
      intro: [
        companyIntro.tr,
        "ML alanında yönümüzü sen belirleyeceksin: hangi problemleri modelleyeceğimizi, nasıl modelleyeceğimizi ve bunları büyük ölçekte nasıl güvenilir biçimde çalıştıracağımızı. Veri pipeline'larından model servisine kadar her katmanda bizzat işin içinde olmanı — ve çevrendeki mühendislere mentorluk etmeni bekliyoruz.",
      ],
      responsibilities: [
        "Kurucuyla birlikte ML yol haritasını belirleyecek ve uçtan uca hayata geçirilmesine liderlik edeceksin.",
        "Üretim ML sistemlerini tasarlayıp geliştireceksin: pipeline'lar, eğitim, servise alma, izleme.",
        "Kendimizi kandırmamıza izin vermeyen değerlendirme ve deney pratikleri kuracaksın.",
        "ML ve veri mühendislerine mentorluk yapacak ve çalışmalarını gözden geçireceksin.",
      ],
      requirements: [
        "5+ yıl uygulamalı ML deneyimi ve ciddi ölçekte üretimde çalışan birden fazla model.",
        "Güçlü Python, veri mühendisliği ve sistem becerileri.",
        "Karmaşık gerçek dünya problemlerini ölçülebilir model kazanımlarına dönüştürmüş bir geçmiş.",
        "Yazılı ve sözlü İngilizcede net iletişim.",
      ],
      niceToHave: [
        "Lojistik, mobilite veya harita alanında deneyim.",
        "Tahminleme veya mekânsal-zamansal ML alanında yayınlar ya da açık kaynak çalışmaları.",
      ],
    },
  },
} as const satisfies Opening;

export const dataScientist = {
  ...base,
  slug: "data-scientist",
  salary: yearlySalary(160000),
  content: {
    en: {
      title: "Data Scientist",
      summary:
        "Turn delivery data into insight: what makes routes fail, where the savings are, and what to build next.",
      intro: [
        companyIntro.en,
        "Every fleet on Rotasal generates a story — in stops, delays, reroutes, and outcomes. You'll read it: analyses that shape product decisions, metrics customers trust, and experiments that prove what actually improves delivery.",
      ],
      responsibilities: [
        "Analyse operational data to find levers for on-time rate, cost per stop, and planner effort.",
        "Define and build the metrics and dashboards the team and customers rely on.",
        "Design and evaluate experiments and A/B tests on routing and product changes.",
        "Communicate findings clearly to engineers, the founder, and customers.",
      ],
      requirements: [
        "Strong SQL and Python (pandas or similar) and solid statistical grounding.",
        "Experience turning ambiguous questions into rigorous analyses.",
        "Ability to explain results to non-specialists.",
        "Working proficiency in English.",
      ],
      niceToHave: [
        "Experience with logistics, operations, or marketplace data.",
        "Familiarity with dbt, BI tools, or experimentation platforms.",
      ],
    },
    de: {
      title: "Data Scientist",
      summary:
        "Mach aus Lieferdaten Erkenntnisse: woran Routen scheitern, wo die Einsparungen liegen und was wir als Nächstes bauen sollten.",
      intro: [
        companyIntro.de,
        "Jede Flotte auf Rotasal erzählt eine Geschichte — in Stopps, Verspätungen, Umplanungen und Ergebnissen. Du liest sie: Analysen, die Produktentscheidungen prägen, Kennzahlen, denen Kunden vertrauen, und Experimente, die belegen, was die Zustellung wirklich verbessert.",
      ],
      responsibilities: [
        "Du analysierst Betriebsdaten, um Hebel für die Pünktlichkeitsquote, die Kosten pro Stopp und den Aufwand der Disponenten zu finden.",
        "Du definierst und baust die Kennzahlen und Dashboards, auf die sich Team und Kunden verlassen.",
        "Du konzipierst und wertest Experimente und A/B-Tests zu Routing- und Produktänderungen aus.",
        "Du kommunizierst Ergebnisse klar an Engineers, den Gründer und Kunden.",
      ],
      requirements: [
        "Sehr gutes SQL und Python (pandas oder Ähnliches) sowie ein solides statistisches Fundament.",
        "Erfahrung darin, vage Fragestellungen in belastbare Analysen zu übersetzen.",
        "Die Fähigkeit, Ergebnisse auch Nicht-Fachleuten zu erklären.",
        "Gute Englischkenntnisse in Wort und Schrift.",
      ],
      niceToHave: [
        "Erfahrung mit Logistik-, Operations- oder Marktplatzdaten.",
        "Vertrautheit mit dbt, BI-Tools oder Experimentierplattformen.",
      ],
    },
    nl: {
      title: "Data Scientist",
      summary:
        "Zet bezorgdata om in inzicht: waardoor routes mislukken, waar de besparingen zitten en wat we hierna moeten bouwen.",
      intro: [
        companyIntro.nl,
        "Elke vloot op Rotasal vertelt een verhaal — in stops, vertragingen, herrouteringen en resultaten. Jij leest het: analyses die productbeslissingen sturen, metrics waar klanten op vertrouwen en experimenten die aantonen wat de bezorging écht beter maakt.",
      ],
      responsibilities: [
        "Je analyseert operationele data om hefbomen te vinden voor het aandeel leveringen op tijd, de kosten per stop en de werklast van planners.",
        "Je definieert en bouwt de metrics en dashboards waar het team en klanten op vertrouwen.",
        "Je ontwerpt en evalueert experimenten en A/B-tests op routerings- en productwijzigingen.",
        "Je communiceert bevindingen helder naar engineers, de oprichter en klanten.",
      ],
      requirements: [
        "Sterk in SQL en Python (pandas of vergelijkbaar), met een solide statistische basis.",
        "Ervaring met het vertalen van vage vragen naar degelijke analyses.",
        "Het vermogen om resultaten uit te leggen aan niet-specialisten.",
        "Goede beheersing van het Engels.",
      ],
      niceToHave: [
        "Ervaring met logistieke, operationele of marketplace-data.",
        "Bekend met dbt, BI-tools of experimenteerplatforms.",
      ],
    },
    tr: {
      title: "Veri Bilimci",
      summary:
        "Teslimat verisini içgörüye dönüştüreceksin: rotalar neden bozuluyor, tasarruf nerede ve sırada ne inşa etmeliyiz.",
      intro: [
        companyIntro.tr,
        "Rotasal'daki her filo bir hikâye üretir — duraklarda, gecikmelerde, yeniden rotalamalarda ve sonuçlarda. Sen bu hikâyeyi okuyacaksın: ürün kararlarını şekillendiren analizler, müşterilerin güvendiği metrikler ve teslimatı gerçekten neyin iyileştirdiğini kanıtlayan deneyler.",
      ],
      responsibilities: [
        "Operasyonel veriyi analiz ederek zamanında teslimat oranını, durak başına maliyeti ve planlamacı iş yükünü iyileştirecek noktaları bulacaksın.",
        "Ekibin ve müşterilerin güvendiği metrikleri ve dashboard'ları tanımlayıp oluşturacaksın.",
        "Rotalama ve ürün değişiklikleri üzerine deneyler ve A/B testleri tasarlayıp değerlendireceksin.",
        "Bulgularını mühendislere, kurucuya ve müşterilere net biçimde aktaracaksın.",
      ],
      requirements: [
        "Güçlü SQL ve Python (pandas veya benzeri) bilgisi ve sağlam bir istatistik temeli.",
        "Belirsiz soruları titiz analizlere dönüştürme deneyimi.",
        "Sonuçları uzman olmayanlara anlatabilme becerisi.",
        "İyi derecede İngilizce.",
      ],
      niceToHave: [
        "Lojistik, operasyon veya pazar yeri verisiyle deneyim.",
        "dbt, BI araçları veya deney platformlarına aşinalık.",
      ],
    },
  },
} as const satisfies Opening;

export const dataEngineer = {
  ...base,
  slug: "data-engineer",
  salary: yearlySalary(155000),
  content: {
    en: {
      title: "Data Engineer",
      summary:
        "Build the pipelines and warehouse that make delivery data reliable, fast, and usable.",
      intro: [
        companyIntro.en,
        "Orders, GPS traces, route plans, outcomes: Rotasal produces a lot of data, and every team needs it clean and quick. You'll build the ingestion pipelines, the warehouse, and the models that ML, analytics, and customer reporting sit on.",
      ],
      responsibilities: [
        "Design and run batch and streaming pipelines from product systems into the warehouse.",
        "Model data for analytics, ML features, and customer-facing reporting.",
        "Own data quality, lineage, and the cost of the data platform.",
        "Support data scientists and ML engineers with fast, well-documented datasets.",
      ],
      requirements: [
        "Experience building production data pipelines and warehouses.",
        "Strong SQL, Python, and data-modelling skills.",
        "Familiarity with orchestration and transformation tools (Airflow, dbt, or similar).",
        "Working proficiency in English.",
      ],
      niceToHave: [
        "Experience with geospatial or high-volume telemetry data.",
        "Streaming experience (Kafka or similar).",
      ],
    },
    de: {
      title: "Data Engineer",
      summary:
        "Bau die Pipelines und das Warehouse, die Lieferdaten zuverlässig, schnell und nutzbar machen.",
      intro: [
        companyIntro.de,
        "Aufträge, GPS-Tracks, Routenpläne, Ergebnisse: Rotasal erzeugt eine Menge Daten, und jedes Team braucht sie sauber und schnell. Du baust die Ingestion-Pipelines, das Warehouse und die Datenmodelle, auf denen ML, Analytics und Kunden-Reporting aufsetzen.",
      ],
      responsibilities: [
        "Du konzipierst und betreibst Batch- und Streaming-Pipelines von den Produktsystemen ins Warehouse.",
        "Du modellierst Daten für Analytics, ML-Features und kundenseitiges Reporting.",
        "Du verantwortest Datenqualität, Lineage und die Kosten der Datenplattform.",
        "Du unterstützt Data Scientists und ML-Engineers mit schnellen, gut dokumentierten Datensätzen.",
      ],
      requirements: [
        "Erfahrung im Aufbau von Datenpipelines und Warehouses für den Produktivbetrieb.",
        "Sehr gute Kenntnisse in SQL, Python und Datenmodellierung.",
        "Vertrautheit mit Orchestrierungs- und Transformationstools (Airflow, dbt oder Ähnliches).",
        "Gute Englischkenntnisse in Wort und Schrift.",
      ],
      niceToHave: [
        "Erfahrung mit Geodaten oder Telemetriedaten in großem Volumen.",
        "Streaming-Erfahrung (Kafka oder Ähnliches).",
      ],
    },
    nl: {
      title: "Data Engineer",
      summary:
        "Bouw de pipelines en het warehouse die bezorgdata betrouwbaar, snel en bruikbaar maken.",
      intro: [
        companyIntro.nl,
        "Orders, gps-tracks, routeplannen, resultaten: Rotasal produceert veel data, en elk team heeft die schoon en snel nodig. Jij bouwt de ingestion-pipelines, het warehouse en de modellen waar ML, analytics en klantrapportages op rusten.",
      ],
      responsibilities: [
        "Je ontwerpt en beheert batch- en streamingpipelines van de productsystemen naar het warehouse.",
        "Je modelleert data voor analytics, ML-features en klantgerichte rapportages.",
        "Je bent eigenaar van datakwaliteit, lineage en de kosten van het dataplatform.",
        "Je ondersteunt data scientists en ML-engineers met snelle, goed gedocumenteerde datasets.",
      ],
      requirements: [
        "Ervaring met het bouwen van datapipelines en warehouses voor productie.",
        "Sterke vaardigheden in SQL, Python en datamodellering.",
        "Bekend met orkestratie- en transformatietools (Airflow, dbt of vergelijkbaar).",
        "Goede beheersing van het Engels.",
      ],
      niceToHave: [
        "Ervaring met geospatiale data of grote volumes telemetriedata.",
        "Streamingervaring (Kafka of vergelijkbaar).",
      ],
    },
    tr: {
      title: "Veri Mühendisi",
      summary:
        "Teslimat verisini güvenilir, hızlı ve kullanılabilir kılan pipeline'ları ve veri ambarını inşa edeceksin.",
      intro: [
        companyIntro.tr,
        "Siparişler, GPS izleri, rota planları, sonuçlar: Rotasal çok fazla veri üretiyor ve her ekip bu veriyi temiz ve hızlı istiyor. ML, analitik ve müşteri raporlamasının üzerine oturduğu veri alım pipeline'larını, veri ambarını ve modelleri sen inşa edeceksin.",
      ],
      responsibilities: [
        "Ürün sistemlerinden veri ambarına giden batch ve streaming pipeline'larını tasarlayıp işleteceksin.",
        "Analitik, ML özellikleri ve müşteriye dönük raporlama için veri modelleyeceksin.",
        "Veri kalitesi, veri kökeni (lineage) ve veri platformunun maliyeti senin sorumluluğunda olacak.",
        "Veri bilimcilere ve ML mühendislerine hızlı, iyi belgelenmiş veri setleriyle destek olacaksın.",
      ],
      requirements: [
        "Üretim veri pipeline'ları ve veri ambarları kurma deneyimi.",
        "Güçlü SQL, Python ve veri modelleme becerileri.",
        "Orkestrasyon ve dönüşüm araçlarına aşinalık (Airflow, dbt veya benzeri).",
        "İyi derecede İngilizce.",
      ],
      niceToHave: [
        "Coğrafi veri veya yüksek hacimli telemetri verisiyle deneyim.",
        "Streaming deneyimi (Kafka veya benzeri).",
      ],
    },
  },
} as const satisfies Opening;

export const operationsResearchScientist = {
  ...base,
  slug: "operations-research-scientist",
  salary: yearlySalary(170000),
  content: {
    en: {
      title: "Operations Research Scientist",
      summary:
        "Advance the optimization core: vehicle routing with time windows, capacities, and real-world constraints, solved fast.",
      intro: [
        companyIntro.en,
        "The heart of Rotasal is a vehicle routing engine that has to be both fast and faithful to how delivery really works. You'll push it forward — better heuristics, smarter constraint handling, tighter runtimes — and validate it against real fleets.",
      ],
      responsibilities: [
        "Design and implement algorithms for rich vehicle routing problems (time windows, capacities, breaks, priorities).",
        "Benchmark and improve solution quality and runtime on real customer instances.",
        "Model new operational constraints as they show up in the field.",
        "Work with engineers to ship optimization improvements safely into production.",
      ],
      requirements: [
        "Graduate-level background in operations research, optimization, or a related field.",
        "Hands-on experience with metaheuristics, MIP, or constraint programming — and shipping the results.",
        "Strong programming skills (C++, Rust, or Python with a performant core).",
        "Working proficiency in English.",
      ],
      niceToHave: [
        "Experience with VRP libraries or solvers (OR-Tools, Gurobi, Hexaly, or custom).",
        "Prior work in logistics, transportation, or scheduling.",
      ],
    },
    de: {
      title: "Operations Research Scientist",
      summary:
        "Bring den Optimierungskern voran: Tourenplanung mit Zeitfenstern, Kapazitäten und Nebenbedingungen aus der Praxis — schnell gelöst.",
      intro: [
        companyIntro.de,
        "Das Herz von Rotasal ist eine Tourenplanungs-Engine, die schnell sein und zugleich die Realität der Zustellung treu abbilden muss. Du bringst sie voran — bessere Heuristiken, klügere Behandlung von Nebenbedingungen, kürzere Laufzeiten — und validierst sie an echten Flotten.",
      ],
      responsibilities: [
        "Du entwirfst und implementierst Algorithmen für komplexe Tourenplanungsprobleme (Zeitfenster, Kapazitäten, Pausen, Prioritäten).",
        "Du benchmarkst und verbesserst Lösungsqualität und Laufzeit auf echten Kundeninstanzen.",
        "Du modellierst neue operative Nebenbedingungen, sobald sie in der Praxis auftauchen.",
        "Du arbeitest mit Engineers zusammen, um Optimierungsverbesserungen sicher in Produktion zu bringen.",
      ],
      requirements: [
        "Ein Abschluss auf Master- oder Promotionsniveau in Operations Research, Optimierung oder einem verwandten Fach.",
        "Praktische Erfahrung mit Metaheuristiken, MIP oder Constraint Programming — und damit, die Ergebnisse auch in Produktion zu bringen.",
        "Sehr gute Programmierkenntnisse (C++, Rust oder Python mit performantem Kern).",
        "Gute Englischkenntnisse in Wort und Schrift.",
      ],
      niceToHave: [
        "Erfahrung mit VRP-Bibliotheken oder -Solvern (OR-Tools, Gurobi, Hexaly oder Eigenentwicklungen).",
        "Vorerfahrung in Logistik, Transport oder Scheduling.",
      ],
    },
    nl: {
      title: "Operations Research Scientist",
      summary:
        "Breng de optimalisatiekern verder: voertuigroutering met tijdvensters, capaciteiten en beperkingen uit de praktijk — snel opgelost.",
      intro: [
        companyIntro.nl,
        "Het hart van Rotasal is een voertuigrouteringsengine die snel moet zijn én trouw aan hoe bezorging echt werkt. Jij brengt die engine verder — betere heuristieken, slimmere afhandeling van beperkingen, kortere rekentijden — en valideert hem op echte vloten.",
      ],
      responsibilities: [
        "Je ontwerpt en implementeert algoritmen voor complexe voertuigrouteringsproblemen (tijdvensters, capaciteiten, pauzes, prioriteiten).",
        "Je benchmarkt en verbetert oplossingskwaliteit en rekentijd op echte klantinstanties.",
        "Je modelleert nieuwe operationele beperkingen zodra ze in de praktijk opduiken.",
        "Je werkt met engineers samen om optimalisatieverbeteringen veilig naar productie te brengen.",
      ],
      requirements: [
        "Een master- of PhD-achtergrond in operations research, optimalisatie of een verwant vakgebied.",
        "Hands-on ervaring met metaheuristieken, MIP of constraint programming — en met het daadwerkelijk in productie brengen van de resultaten.",
        "Sterke programmeervaardigheden (C++, Rust of Python met een performante kern).",
        "Goede beheersing van het Engels.",
      ],
      niceToHave: [
        "Ervaring met VRP-libraries of solvers (OR-Tools, Gurobi, Hexaly of zelfgebouwd).",
        "Eerdere ervaring in logistiek, transport of scheduling.",
      ],
    },
    tr: {
      title: "Yöneylem Araştırması Bilimcisi",
      summary:
        "Optimizasyon çekirdeğini ileri taşıyacaksın: zaman pencereleri, kapasiteler ve gerçek dünya kısıtlarıyla araç rotalama — hem de hızlı.",
      intro: [
        companyIntro.tr,
        "Rotasal'ın kalbi, hem hızlı olması hem de teslimatın gerçekte nasıl işlediğine sadık kalması gereken bir araç rotalama motoru. Onu ileri taşıyacaksın — daha iyi sezgisel yöntemler, daha akıllı kısıt yönetimi, daha kısa çalışma süreleri — ve gerçek filolar üzerinde doğrulayacaksın.",
      ],
      responsibilities: [
        "Karmaşık araç rotalama problemleri (zaman pencereleri, kapasiteler, molalar, öncelikler) için algoritmalar tasarlayıp uygulayacaksın.",
        "Gerçek müşteri problemleri üzerinde çözüm kalitesini ve çalışma süresini kıyaslayıp iyileştireceksin.",
        "Sahada ortaya çıkan yeni operasyonel kısıtları modelleyeceksin.",
        "Optimizasyon iyileştirmelerini güvenli biçimde üretime almak için mühendislerle birlikte çalışacaksın.",
      ],
      requirements: [
        "Yöneylem araştırması, optimizasyon veya ilgili bir alanda lisansüstü eğitim.",
        "Metasezgiseller, MIP veya kısıt programlama ile uygulamalı deneyim — ve sonuçları gerçekten üretime taşımış olmak.",
        "Güçlü programlama becerileri (C++, Rust veya performanslı bir çekirdeğe sahip Python).",
        "İyi derecede İngilizce.",
      ],
      niceToHave: [
        "VRP kütüphaneleri veya çözücülerle deneyim (OR-Tools, Gurobi, Hexaly veya özel geliştirilmiş).",
        "Lojistik, ulaştırma veya çizelgeleme alanında önceki çalışmalar.",
      ],
    },
  },
} as const satisfies Opening;

export const dataOpenings = [
  operationsResearchScientist,
  machineLearningEngineer,
  seniorMachineLearningEngineer,
  dataScientist,
  dataEngineer,
] as const satisfies readonly Opening[];
