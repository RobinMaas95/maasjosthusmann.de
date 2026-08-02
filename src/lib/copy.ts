import type { Language } from './locale';

export type Copy = {
	nav: { services: string; proof: string; approach: string; contact: string };
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
		nav: { services: 'Services', proof: 'Proof', approach: 'Approach', contact: 'Contact' },
		eyebrow: 'Independent Consultant · Remote · Germany / EU',
		title: 'Platform & AI Engineer',
		introduction: 'I’m Robin Maasjosthusmann. For ten years I’ve helped teams build and ship software they can actually run. I specialize in dependable delivery, developer platforms, and infrastructure that survives contact with reality, AI included.',
		cta: 'Start a Conversation',
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
			{ id: '01', focus: 'Platform operation · Consulting', title: 'Business Automation on Kubernetes', body: 'Maintain a Kubernetes environment and the automation applications running on it, written in Python. Calls range across Salesforce, Microsoft 365, and GCP, from classic workflow automation to AI-backed use cases.' },
			{ id: '02', focus: 'Observability · Consulting', title: 'Cross-Cloud Log Streaming', body: 'Built log streaming from a DigitalOcean Kubernetes cluster into GCP Cloud Logging, authenticated via Workload Identity Federation (WIF) instead of long-lived tokens. Dashboards and log-based alerts on top.' },
			{ id: '03', focus: 'AI platform · In-house', title: 'LLM Gateway for AI Coding Tools', body: 'Part of the team building and running an LLM gateway as a central hub for AI coding tools. One API server for multiple model backends, with cost management, allocation, and access control built in. Currently in beta with 50–60 engineers.' },
			{ id: '04', focus: 'Developer experience · In-house', title: 'Remote Developer Platform', body: 'Part of the team maintaining a remote developer platform based on EC2 instances, used by around 300 engineers and data scientists for their day-to-day development work.' },
			{ id: '05', focus: 'CI platform · In-house', title: 'GitHub Actions Runner Infrastructure', body: 'Part of the team operating a self-hosted runner infrastructure connected to the company’s GitHub Enterprise Server, serving several hundred users. A custom-written management server on managed OpenShift spins the runner pods up and down on demand.' },
			{ id: '06', focus: 'Delivery · In-house', title: 'Kubernetes Delivery at Pace', body: 'As lead architect for everything outside Salesforce at a legal-tech firm, built CI/CD with GitHub Actions and Argo CD. Multiple production releases a day, guarded by several hundred automated tests.' }
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
		nav: { services: 'Leistungen', proof: 'Erfahrung', approach: 'Arbeitsweise', contact: 'Kontakt' },
		eyebrow: 'Freiberuflicher Consultant · Remote · Deutschland / EU',
		title: 'Plattform- & AI-Engineer',
		introduction: 'Ich bin Robin Maasjosthusmann. Seit zehn Jahren helfe ich Teams, Software zu bauen und auszuliefern, die sie wirklich betreiben können. Ich bin spezialisiert auf verlässliche Delivery, Entwicklerplattformen und Infrastruktur, die in der Realität besteht, AI eingeschlossen.',
		cta: 'Gespräch Starten',
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
			{ id: '01', focus: 'Plattform-Betrieb · Consulting', title: 'Geschäftsautomatisierung auf Kubernetes', body: 'Ich betreue eine Kubernetes-Umgebung und die darauf laufenden Automatisierungsanwendungen, geschrieben in Python. Die Aufrufe reichen von Salesforce über Microsoft 365 bis GCP, von klassischer Workflow-Automatisierung bis zu AI-gestützten Anwendungsfällen.' },
			{ id: '02', focus: 'Observability · Consulting', title: 'Cross-Cloud-Log-Streaming', body: 'Ich habe Log-Streaming von einem DigitalOcean-Kubernetes-Cluster nach GCP Cloud Logging gebaut, authentifiziert über Workload Identity Federation (WIF) statt langlebiger Tokens. Dashboards und logbasierte Alerts inklusive.' },
			{ id: '03', focus: 'AI-Plattform · Festanstellung', title: 'LLM-Gateway für AI-Coding-Tools', body: 'Ich bin Teil des Teams, das ein LLM-Gateway als zentrale Anlaufstelle für AI-Coding-Tools baut und betreibt. Ein API-Server für mehrere Modell-Backends mit integriertem Kostenmanagement, Kostenzuordnung und Zugriffskontrolle. Aktuell in der Beta mit 50–60 Entwicklern.' },
			{ id: '04', focus: 'Developer Experience · Festanstellung', title: 'Remote-Entwicklerplattform', body: 'Ich bin Teil des Teams, das eine Remote-Entwicklerplattform auf EC2-Instanzen betreut, genutzt von rund 300 Entwicklern und Data Scientists für ihre tägliche Entwicklungsarbeit.' },
			{ id: '05', focus: 'CI-Plattform · Festanstellung', title: 'GitHub-Actions-Runner-Infrastruktur', body: 'Ich bin Teil des Teams, das eine selbst gehostete Runner-Infrastruktur betreibt, angebunden an den GitHub Enterprise Server des Unternehmens, mit mehreren hundert Nutzern. Ein selbst geschriebener Management-Server auf managed OpenShift fährt die Runner-Pods bei Bedarf hoch und runter.' },
			{ id: '06', focus: 'Delivery · Festanstellung', title: 'Kubernetes-Delivery in hohem Tempo', body: 'Als Lead-Architekt für alles außerhalb von Salesforce bei einem Legal-Tech-Unternehmen habe ich CI/CD mit GitHub Actions und Argo CD aufgebaut. Mehrere Produktiv-Releases pro Tag, abgesichert durch mehrere hundert automatisierte Tests.' }
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
