import type { Language } from './locale';

export type Copy = {
	nav: { services: string; proof: string; approach: string; capability: string; contact: string };
	eyebrow: string;
	title: string;
	introduction: string;
	cta: string;
	portrait: { alt: string; caption: string };
	about: { label: string; title: string; body: string };
	servicesTitle: string;
	services: { id: string; title: string; body: string }[];
	proofTitle: string;
	proof: { id: string; focus: string; title: string; body: string }[];
	approachTitle: string;
	approach: string;
	capabilityTitle: string;
	capabilityGroups: { title: string; items: string[] }[];
	contactTitle: string;
	contactBody: string;
	legal: { imprint: string; privacy: string };
};

export const copy: Record<Language, Copy> = {
	en: {
		nav: { services: 'Services', proof: 'Proof', approach: 'Approach', capability: 'Capability', contact: 'Contact' },
		eyebrow: 'Independent Consultant · Remote · Germany / EU',
		title: 'Platform & AI Engineer',
		introduction: 'I’m Robin Maasjosthusmann. For ten years I’ve helped teams build and ship software they can actually run. I specialize in dependable delivery, developer platforms, and infrastructure that survives contact with reality, AI included.',
		cta: 'Email Me',
		portrait: {
			alt: 'Robin Maasjosthusmann smiling in a bright office',
			caption: 'Software is ultimately about people and outcomes. I work directly with product and platform owners to solve real business problems.'
		},
		about: {
			label: 'About',
			title: 'A practical partner in the work.',
			body: 'I’m Robin, an independent Platform & AI Engineer working remotely from Germany. Over the past ten years I’ve worked with teams across the EU as a software engineer, data scientist, and platform architect, in industries from telecom to insurance. Today I’m part of a team running developer platforms and AI infrastructure for hundreds of engineers as my day job; through my own consultancy I take on a small number of selected engagements alongside. I stay close to the code and the operating reality: clarify the decision, make the change, and leave the team able to run it.'
		},
		servicesTitle: 'Infrastructure & Developer Experience',
		services: [
			{ id: '01', title: 'Platform Reliability & Delivery', body: 'Secure, repeatable delivery from commit to production: reviewable infrastructure, observable systems, and a clear operating model.' },
			{ id: '02', title: 'Developer Experience', body: 'Development platforms, remote development environments and PR previews, automation, and documentation that let engineers and data scientists do their best work.' },
			{ id: '03', title: 'AI Platform Engineering', body: 'Practical AI foundations: provider integration, access control, cost visibility, and delivery practices where responsibility stays clear.' }
		],
		proofTitle: 'Selected Work',
		proof: [
			{ id: '01', focus: 'Platform operation · Consulting', title: 'Business Automation on Kubernetes', body: 'The client’s employees were spending too much time on repetitive casework, so multiple automated processes were implemented. After the platform’s original maintainers left, I took over its Kubernetes and GCP infrastructure and inherited Python codebase. I now run and progressively modernize the platform. Around 30 services handle routine steps such as classifying requests and preparing replies, freeing capacity equivalent to several full-time roles while leaving final decisions with employees.' },
			{ id: '02', focus: 'Observability · Consulting', title: 'Cross-Cloud Log Streaming', body: 'Logs disappeared whenever a pod restarted, leaving the client without a reliable way to investigate failures across DigitalOcean and GCP. I planned, built, and maintain a pipeline that sends around 5 GiB per month from a 4-node Kubernetes cluster to GCP Cloud Logging. Workload Identity Federation avoids static credentials. Retained logs, alerts, and dashboards now surface problems earlier without adding infrastructure cost.' },
			{ id: '03', focus: 'AI platform · In-house', title: 'LLM Gateway for AI Coding Tools', body: 'Engineers and data scientists needed AI coding assistants, but direct provider subscriptions did not meet company data rules. As part of the platform team, I helped build the delivery pipeline, added EC2-based authentication, and led the design of usage accounting and spending limits. The gateway handles approved model access and provider routing behind one setup script. It currently serves 50–60 beta users.' },
			{ id: '04', focus: 'Developer experience · In-house', title: 'Remote Developer Platform', body: 'Managed laptops lacked the power, permissions, and tooling needed for software and data work. Our self-service platform gives around 300 active users ready-to-use EC2 machines through a CLI and web interface, with containers, approved data access, GPUs, and access via familiar IDEs. As part of the team, I keep the platform running and up to date, including its images, dependencies, and Terraform state, and support its users. New users can usually start working on it on their first day.' },
			{ id: '05', focus: 'CI platform · In-house', title: 'GitHub Actions Runner Infrastructure', body: 'GitHub Enterprise Server provided no hosted runners, and external runner services could not meet company data requirements. As part of the platform team, I helped build and now maintain the infrastructure around a service that validates requests and creates short-lived, scoped runner pods on OpenShift. I also designed the reviewed process for importing external Actions. Dozens of teams now get flexible build and release automation without sending company code to an outside runner service.' },
			{ id: '06', focus: 'Delivery · In-house', title: 'Kubernetes Delivery at Pace', body: 'A legal-tech firm needed to ship its non-Salesforce applications pure manually including manual testing. As primary engineer and lead architect, I built around 10 services includign the Kubernetes platform beneath them. GitHub Actions, Helm, and Argo CD moved releases through integration tests, end-to-end tests, optional stakeholder QA, and production. This enabled several production releases per day with greater confidence, while keeping configuration and secrets reproducibly in code as the basis for recovery: a rerun, not a rebuild.' }
		],
		approachTitle: 'Understand Deeply. Choose Deliberately. Deliver in Steps.',
		approach: 'Every engagement starts with understanding: the subject, the constraints, the technology options. I choose the best fit, and I break even the biggest problem into steps a team can deliver and run. AI coding agents are part of that work and make it considerably faster. What they don’t do is take responsibility. Every change that reaches your repository has been read, understood, and defended by me. You get the speed; the accountability stays mine.',
		capabilityTitle: 'Toolbox',
		capabilityGroups: [
			{ title: 'Delivery Automation', items: ['GitHub Actions', 'GitHub Enterprise Server', 'Docker', 'Terraform (Enterprise & S3 backend)', 'Argo CD', 'Helm'] },
			{ title: 'AI Platforms', items: ['AWS Bedrock', 'Google Vertex AI', 'Custom LLM Gateways', 'Custom Token Accounting'] },
			{ title: 'Platform Operation', items: ['AWS EC2', 'Google Cloud Operations', 'DigitalOcean Kubernetes', 'Azure Kubernetes Service (AKS)', 'OpenShift', 'OpenTelemetry', 'Prometheus / Grafana / Loki'] },
			{ title: 'Developer Experience', items: ['Remote Development Environments', 'VS Code Remote & Web IDEs', 'PR Preview Environments', 'Custom CLI & Automation Tooling', 'Docs as Code (mkdocs)'] },
			{ title: 'Platform Security', items: ['Cloudflare DNS', 'Cloudflare Zero Trust', 'Cloudflare Tunnels', 'Cloudflare Workers / WAF', 'Workload Identity Federation (WIF)'] },
			{ title: 'Languages & Frameworks', items: ['Python (Primary)', 'Go', 'Svelte / SvelteKit'] },
			{ title: 'Daily Drivers', items: ['Neovim', 'Zed', 'lazygit', 'herdr', 'AI Coding Agents (Pi, Claude Code, OpenCode)', 'hunk'] }
		],
		contactTitle: 'A Product Decision Should Not Become a Platform Emergency.',
		contactBody: 'Working through a product, platform, AI, or delivery decision? I take on a small number of consulting engagements alongside my day job: advisory, architecture reviews, and focused build projects. Let’s make the next step concrete.',
		legal: { imprint: 'Imprint', privacy: 'Privacy' }
	},
	de: {
		nav: { services: 'Leistungen', proof: 'Erfahrung', approach: 'Arbeitsweise', capability: 'Toolbox', contact: 'Kontakt' },
		eyebrow: 'Freiberuflicher Consultant · Remote · Deutschland / EU',
		title: 'Plattform- & AI-Engineer',
		introduction: 'Ich bin Robin Maasjosthusmann. Seit zehn Jahren helfe ich Teams, Software zu bauen und auszuliefern, die sie wirklich betreiben können. Ich bin spezialisiert auf verlässliche Delivery, Entwicklerplattformen und Infrastruktur, die im Alltag besteht, AI eingeschlossen.',
		cta: 'Schreiben Sie mir',
		portrait: {
			alt: 'Robin Maasjosthusmann lächelt in einem hellen Büro',
			caption: 'Bei Software geht es am Ende um Menschen und Ergebnisse. Ich arbeite direkt mit Produkt- und Plattformverantwortlichen an echten Geschäftsproblemen.'
		},
		about: {
			label: 'Über mich',
			title: 'Ein pragmatischer Partner im Prozess.',
			body: 'Ich bin Robin, unabhängiger Plattform- & AI-Engineer und arbeite remote von Deutschland aus. In den letzten zehn Jahren habe ich als Softwareentwickler, Data Scientist und Plattform-Architekt mit Teams in der EU gearbeitet, in Branchen von Telekommunikation bis Versicherung. Heute bin ich in meinem Hauptjob Teil eines Teams, das Entwicklerplattformen und AI-Infrastruktur für mehrere hundert Entwickler betreibt; über meine eigene Beratung übernehme ich daneben eine kleine Zahl ausgewählter Mandate. Ich bleibe nah am Code und an der betrieblichen Realität: Entscheidung klären, Änderung umsetzen und das Team befähigen, eigenständig weiter zu arbeiten.'
		},
		servicesTitle: 'Infrastruktur & Developer Experience',
		services: [
			{ id: '01', title: 'Plattform-Zuverlässigkeit & Delivery', body: 'Sichere, wiederholbare Delivery vom Commit bis in die Produktion: reviewbare Infrastruktur, überwachbare Systeme und ein klares Betriebsmodell.' },
			{ id: '02', title: 'Developer Experience', body: 'Entwicklungsplattformen, Remote-Entwicklungsumgebungen und PR-Previews, Automatisierung und Dokumentation, die Entwickler und Data Scientists zu ihrer besten Arbeit verhelfen.' },
			{ id: '03', title: 'AI-Plattform-Engineering', body: 'Pragmatische Grundlagen für AI: Provider-Integration, Zugriffskontrolle, Kostentransparenz und Delivery-Praktiken mit klarer Verantwortung.' }
		],
		proofTitle: 'Ausgewählte Projekte',
		proof: [
			{ id: '01', focus: 'Plattform-Betrieb · Consulting', title: 'Geschäftsautomatisierung auf Kubernetes', body: 'Die Mitarbeiter des Kunden verbrachten zu viel Zeit mit repetitiver Fallbearbeitung, daher wurden mehrere Automatisierungsskripte geschrieben. Nachdem die ursprünglichen Betreuer das Unternehmen verlassen hatten, übernahm ich ihre Kubernetes- und GCP-Infrastruktur und den geerbten Python-Code. Ich betreibe die Plattform und modernisiere sie schrittweise. Rund 30 Services übernehmen Routineaufgaben wie das Klassifizieren von Anfragen und das Vorbereiten von Antworten und schaffen Kapazität im Umfang mehrerer Vollzeitstellen, während die finalen Entscheidungen bei den Mitarbeitern bleiben.' },
			{ id: '02', focus: 'Observability · Consulting', title: 'Cross-Cloud-Log-Streaming', body: 'Logs verschwanden bei jedem Pod-Neustart; der Kunde hatte keine verlässliche Möglichkeit, Fehler über DigitalOcean und GCP hinweg zu untersuchen. Ich habe eine Pipeline Architektur geplant, implementiert und betreue sie nun. Aktuell überträgt sie rund 5 GiB pro Monat von einem 4-Node-Kubernetes-Cluster nach GCP Cloud Logging. Workload Identity Federation vermeidet statische Credentials. Aufbewahrte Logs und zusätzlich erstellte Alerts und Dashboards machen Probleme heute früher sichtbar, ohne zusätzliche Infrastrukturkosten.' },
			{ id: '03', focus: 'AI-Plattform · Festanstellung', title: 'LLM-Gateway für AI-Coding-Tools', body: 'Entwickler und Data Scientists brauchten AI-Coding-Assistenten, doch direkte Provider-Abos erfüllten die Datenschutzvorgaben des Unternehmens nicht. Als Teil des Plattform-Teams habe ich die Delivery-Pipeline des Gateways mitaufgebaut, EC2-basierte Authentifizierung ergänzt und das Design sowie die Implementierung der Nutzungsabrechnung und Ausgabenlimits geleitet. Das Gateway regelt Zugriff auf freigegebene Modelle und Provider-Routing hinter einem einzigen Setup-Skript. Aktuell nutzen es 50–60 Beta-User.' },
			{ id: '04', focus: 'Developer Experience · Festanstellung', title: 'Remote-Entwicklerplattform', body: 'Die normalen Rechner boten nicht die Leistung, Berechtigungen und Werkzeuge, die Softwareentwickler und Data Scientists brauchen. Unsere Self-Service-Plattform gibt rund 300 aktiven Nutzern fertige AWS-Umgebungen über CLI und Web-Oberfläche, mit Containern, freigegebenem Datenzugriff, GPUs und Zugriff via vertrauter IDEs. Als Teil des Teams halte ich die Plattform am Laufen und aktuell, inklusive Images, Abhängigkeiten, Terraform-State und Kundenbetreuung. Neue Nutzer können in der Regel schon am ersten Tag damit auf der Platform arbeiten.' },
			{ id: '05', focus: 'CI-Plattform · Festanstellung', title: 'GitHub-Actions-Runner-Infrastruktur', body: 'GitHub Enterprise Server stellt keine gehosteten Runner bereit, und externe Runner-Dienste erfüllten die Datenvorgaben des Unternehmens nicht. Als Teil des Plattform-Teams habe ich die Infrastruktur um einen Service mitgebaut und betreue sie jetzt: Er validiert Anfragen und erstellt kurzlebige, begrenzte Runner-Pods auf OpenShift. Außerdem habe ich den Prozess zum Import externer Actions entworfen, durch die Security Reviews begleitet und implementiert. Dutzende Teams bekommen so flexible Build- und Release-Automatisierung, ohne Unternehmens-Code an einen externen Runner-Dienst zu geben.' },
			{ id: '06', focus: 'Delivery · Festanstellung', title: 'Kubernetes-Delivery in hohem Tempo', body: 'Ein Legal-Tech-Unternehmen musste seine Nicht-Salesforce-Anwendungen komplett manuell releasen und testen. Als leitender Engineer und Lead-Architekt habe ich rund 10 Services inklusive der darunterliegenden Kubernetes-Plattform (auf-)gebaut. GitHub Actions, Helm und Argo CD führten Releases durch Integrationstests, End-to-End-Tests, optionales Stakeholder-QA und Produktion. Das ermöglichte mehrere Produktiv-Releases pro Tag mit mehr Vertrauen, während Konfiguration und Secrets reproduzierbar im Code liegen als Basis für Recovery: ein erneuter Lauf, kein Neuaufbau.' }
		],
		approachTitle: 'Tief verstehen. Bewusst entscheiden. In Schritten liefern.',
		approach: 'Jedes Mandat beginnt mit Verstehen: dem Thema, den Rahmenbedingungen, den Technologieoptionen. Ich wähle die am besten passende und zerlege selbst das größte Problem in Schritte, die ein Team liefern und betreiben kann. AI-Coding-Agents sind Teil dieser Arbeit und machen sie deutlich schneller. Was sie nicht tun, ist Verantwortung zu übernehmen. Jede Änderung, die Ihr Repository erreicht, ist von mir gelesen, verstanden und vertreten. Sie bekommen das Tempo; die Verantwortung bleibt meine.',
		capabilityTitle: 'Toolbox',
		capabilityGroups: [
			{ title: 'Delivery-Automatisierung', items: ['GitHub Actions', 'GitHub Enterprise Server', 'Docker', 'Terraform (Enterprise & S3-Backend)', 'Argo CD', 'Helm'] },
			{ title: 'AI-Plattformen', items: ['AWS Bedrock', 'Google Vertex AI', 'Eigene LLM-Gateways', 'Eigene Token-Abrechnung'] },
			{ title: 'Plattform-Betrieb', items: ['AWS EC2', 'Google Cloud Operations', 'DigitalOcean Kubernetes', 'Azure Kubernetes Service (AKS)', 'OpenShift', 'OpenTelemetry', 'Prometheus / Grafana / Loki'] },
			{ title: 'Developer Experience', items: ['Remote-Entwicklungsumgebungen', 'VS Code Remote & Web-IDEs', 'PR-Preview-Umgebungen', 'Eigene CLI- & Automatisierungs-Tools', 'Docs as Code (mkdocs)'] },
			{ title: 'Plattform-Sicherheit', items: ['Cloudflare DNS', 'Cloudflare Zero Trust', 'Cloudflare Tunnels', 'Cloudflare Workers / WAF', 'Workload Identity Federation (WIF)'] },
			{ title: 'Sprachen & Frameworks', items: ['Python (primär)', 'Go', 'Svelte / SvelteKit'] },
			{ title: 'Daily Driver', items: ['Neovim', 'Zed', 'lazygit', 'herdr', 'AI Coding Agents (Pi, Claude Code, OpenCode)', 'hunk'] }
		],
		contactTitle: 'Eine Produktentscheidung darf nicht zum Plattform-Notfall werden.',
		contactBody: 'Sie arbeiten an einer Produkt-, Plattform-, AI- oder Delivery-Entscheidung? Ich übernehme neben meinem Hauptjob eine kleine Zahl ausgewählter Mandate: Advisory, Architektur-Reviews und fokussierte Umsetzungsprojekte. Machen wir den nächsten Schritt konkret.',
		legal: { imprint: 'Impressum', privacy: 'Datenschutz' }
	}
};
