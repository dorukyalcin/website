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
] as const satisfies readonly Opening[];
