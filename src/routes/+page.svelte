<script lang="ts">
	import { onMount } from 'svelte';
	import { initialLanguage, type Language } from '$lib/locale';

	type Copy = {
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

	const copy: Record<Language, Copy> = {
		en: {
			nav: { services: 'Services', proof: 'Proof', approach: 'Approach', contact: 'Contact' },
			eyebrow: 'Independent Consultant · Remote · Germany / EU',
			title: 'Platform & AI Engineer',
			introduction: 'I’m Robin Maasjosthusmann. For ten years I’ve helped teams build and ship software they can actually run. Dependable delivery, developer platforms, and infrastructure that survives contact with reality, AI included.',
			cta: 'Start a Conversation',
			portrait: {
				alt: 'Robin Maasjosthusmann smiling in a bright office',
				caption: 'I work directly with the people who own the product and the platform.'
			},
			about: {
				label: 'About',
				title: 'A practical partner in the work.',
				body: 'I’m Robin, an independent Platform & AI Engineer working remotely from Germany. Over the past ten years I’ve worked with teams across the EU as a software engineer, data scientist, and platform architect, in industries from telecom to insurance. Today I’m part of the team running developer platforms and AI infrastructure for hundreds of engineers as my day job; through my own consultancy I take on a small number of selected engagements alongside. I stay close to the code and the operating reality: clarify the decision, make the change, and leave the team able to run it.'
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
			approach: 'Every engagement starts with understanding: the subject, the constraints, the technology options. I choose the best fit, and I break even the biggest problem into steps a team can deliver and run. AI coding agents are part of that work. They write a lot of the code, and they make it considerably faster. What they don’t do is take responsibility. Every change that reaches your repository has been read, understood, and defended by me. You get the speed; the accountability stays mine.',
			capabilityTitle: 'Toolbox',
			capabilityGroups: [
				{ title: 'Delivery Automation', items: ['GitHub Actions', 'GitHub Enterprise Server', 'Docker', 'Terraform (Enterprise & S3 backend)', 'Argo CD', 'Helm'] },
				{ title: 'AI Platforms', items: ['AWS Bedrock', 'Custom LLM Gateways', 'Pi (Coding Agent)', 'Claude Code', 'OpenCode'] },
				{ title: 'Platform Operation', items: ['AWS EC2', 'Google Cloud Operations', 'DigitalOcean Kubernetes', 'Azure Kubernetes Service (AKS)', 'OpenShift', 'OpenTelemetry', 'Prometheus / Grafana / Loki'] },
				{ title: 'Developer Experience', items: ['Remote Development Environments', 'VS Code Remote & Web IDEs', 'PR Preview Environments', 'Custom CLI & Automation Tooling', 'Docs as Code (mkdocs)'] },
				{ title: 'Platform Security', items: ['Cloudflare DNS', 'Cloudflare Zero Trust', 'Cloudflare Tunnels', 'Cloudflare Workers / WAF', 'Workload Identity Federation (WIF)'] },
				{ title: 'Languages & Frameworks', items: ['Python (Primary)', 'Go', 'Svelte / SvelteKit'] }
			],
			contactTitle: 'A Product Decision Should Not Become a Platform Emergency.',
			contactBody: 'Working through a product, platform, AI, or delivery decision? I take on a small number of consulting engagements alongside my day job: advisory, architecture reviews, and focused build projects. Let’s make the next step concrete.',
			legal: { imprint: 'Imprint', privacy: 'Privacy' }
		},
		de: {
			nav: { services: 'Leistungen', proof: 'Erfahrung', approach: 'Arbeitsweise', contact: 'Kontakt' },
			eyebrow: 'Freiberuflicher Consultant · Remote · Deutschland / EU',
			title: 'Plattform- & AI-Engineer',
			introduction: 'Ich bin Robin Maasjosthusmann, freiberuflicher Consultant für Teams, die Produktideen in betreibbare Software verwandeln wollen—mit belastbaren Delivery-Wegen, kontrollierter AI-Funktionalität und technischen Entscheidungen, die in der Realität bestehen.',
			cta: 'Gespräch Starten',
			portrait: {
				alt: 'Robin Maasjosthusmann smiling in a bright office',
				caption: 'Ich arbeite direkt mit den Menschen, die Verantwortung für Produkt und Plattform tragen—nicht aus einem Foliensatz heraus.'
			},
			about: {
				label: 'Über mich',
				title: 'Ein pragmatischer Partner in der Umsetzung.',
				body: 'Ich bin Robin, unabhängiger Plattform- & AI-Engineer und arbeite remote mit Teams in Deutschland und der EU. Ich arbeite nah am Code und an der betrieblichen Realität: Entscheidung klären, Änderung umsetzen und das Team befähigen, sie selbst zu betreiben.'
			},
			servicesTitle: 'Infrastruktur & Developer Experience',
			services: [
				{ id: '01', title: 'Plattform-Zuverlässigkeit & Delivery', body: 'Sichere, wiederholbare Delivery vom Repository bis in die Produktion—mit reviewbarer Infrastruktur, beobachtbaren Systemen und einem klaren Betriebsmodell.' },
				{ id: '02', title: 'Developer Experience', body: 'Plattformen, lokale und Per-PR-Umgebungen, Automatisierung und Dokumentation, die Entwicklern und Data Scientists bessere Arbeitsbedingungen geben.' },
				{ id: '03', title: 'AI-Plattform-Engineering', body: 'Pragmatische Grundlagen für AI: Provider-Integration, Zugriffskontrollen, Kostentransparenz und eine Delivery-Praxis mit klarer Verantwortung.' }
			],
			proofTitle: 'Ausgewählte Mandate',
			proof: [
				{ id: '01', focus: 'Developer Experience', title: 'Developer-Plattform als Produkt', body: 'Entwickelt Plattform-Services, Entwicklungs- und Per-PR-Umgebungen, Tools und Dokumentation für Entwickler und Data Scientists.' },
				{ id: '02', focus: 'Delivery', title: 'Managed-Kubernetes-Delivery', body: 'Betreibt DigitalOceans Managed Kubernetes und OpenShift-Workloads, einschließlich Argo-CD-Setup und täglicher GitOps-Delivery.' },
				{ id: '03', focus: 'Engineering-Governance', title: 'Kontrollierte Delivery-Infrastruktur', body: 'Betreut interne GitHub-Actions-Runner sowie einen sicherheitsgeprüften Katalog intern bereitgestellter Actions für unternehmensweite Engineering-Workflows.' },
				{ id: '04', focus: 'Plattform-Sicherheit', title: 'Sicherer Plattform-Zugang', body: 'Konfiguriert Cloudflare DNS, Zero Trust, Tunnels und Sicherheitsregeln für geschützten Zugriff auf VPS-Services ohne öffentliche Exponierung.' }
			],
			approachTitle: 'Agent-Unterstützt. Nie Ohne Verantwortung.',
			approach: 'Claude Code, Pi und OpenCode beschleunigen die Arbeit—nicht die Verantwortung. Agents erzeugen reviewbare Änderungen; bevor ein Pull Request für andere Menschen entsteht, verstehe ich die Architektur und jede geänderte Zeile.',
			capabilityTitle: 'Arbeitsfelder',
			capabilityGroups: [
				{ title: 'Delivery-Automatisierung', items: ['GitHub Actions', 'Docker', 'Terraform Enterprise / Cloud', 'Argo CD'] },
				{ title: 'Plattform-Betrieb', items: ['DigitalOcean Kubernetes', 'OpenShift', 'OpenTelemetry', 'Grafana Cloud', 'Prometheus', 'Loki'] },
				{ title: 'Developer Experience', items: ['Plattform-Services', 'Lokale & Per-PR-Umgebungen', 'Interne CLI & Automatisierung', 'Betriebsdokumentation'] },
				{ title: 'Plattform-Sicherheit', items: ['Cloudflare DNS', 'Cloudflare Zero Trust', 'Cloudflare Tunnels', 'Cloudflare Workers / WAF'] }
			],
			contactTitle: 'Eine Produktentscheidung Darf Nicht Zum Plattform-Notfall Werden.',
			contactBody: 'Ihr arbeitet an einer Produkt-, Plattform-, AI- oder Delivery-Entscheidung? Wenn der nächste Schritt klare Verantwortung verdient, machen wir ihn konkret.',
			legal: { imprint: 'Impressum', privacy: 'Datenschutz' }
		}
	};

	let language = $state<Language>('en');
	let content = $derived(copy[language]);

	onMount(() => {
		language = initialLanguage(window.localStorage.getItem('preferred-language'), navigator.languages);
	});

	function selectLanguage(next: Language) {
		language = next;
		window.localStorage.setItem('preferred-language', next);
	}
</script>

<svelte:head>
	<title>Robin Maasjosthusmann · Platform & AI Engineer</title>
	<meta name="description" content="Robin Maasjosthusmann is an independent Platform & AI Engineer: dependable delivery, developer platforms, and AI infrastructure with guardrails for teams in Germany and the EU." />
</svelte:head>

<a class="skip-link" href="#content">Skip to content</a>
<header>
	<nav aria-label="Primary navigation">
		<a class="wordmark" href="/">Robin Maasjosthusmann</a>
		<ul class="navigation-links">
			<li><a href="#services">{content.nav.services}</a></li>
			<li><a href="#proof">{content.nav.proof}</a></li>
			<li><a href="#approach">{content.nav.approach}</a></li>
		</ul>
		<ul class="social-links" aria-label="Social links">
			<li>
				<a aria-label="GitHub profile (opens in new tab)" href="https://github.com/RobinMaas95/" rel="noreferrer" target="_blank">
					<img alt="" height="288" src="/images/github-invertocat-black.png" width="294" />
				</a>
			</li>
			<li>
				<a aria-label="LinkedIn profile (opens in new tab)" href="https://www.linkedin.com/in/robin-maasjosthusmann/" rel="noreferrer" target="_blank">
					<img alt="" height="779" src="/images/linkedin-inbug-black.png" width="840" />
				</a>
			</li>
		</ul>
		<fieldset class="language-switcher">
			<legend class="sr-only">Language</legend>
			<button aria-pressed={language === 'de'} onclick={() => selectLanguage('de')}>DE</button>
			<button aria-pressed={language === 'en'} onclick={() => selectLanguage('en')}>EN</button>
		</fieldset>
	</nav>
</header>

<main id="content">
	<section class="hero content-frame" aria-labelledby="page-title">
		<section class="hero-copy">
			<p class="eyebrow">{content.eyebrow}</p>
			<h1 id="page-title">{content.title}</h1>
			<p class="lead">{content.introduction}</p>
			<a class="text-link" href="mailto:hello@maasjosthusmann.de">{content.cta}<span aria-hidden="true"> ↗</span></a>
		</section>
		<figure class="portrait">
			<img
				alt={content.portrait.alt}
				fetchpriority="high"
				height="4032"
				src="/images/robin-maasjosthusmann.jpg"
				width="3024"
			/>
			<figcaption>{content.portrait.caption}</figcaption>
		</figure>
	</section>

	<section class="about content-frame" aria-labelledby="about-title">
		<p class="section-label">{content.about.label}</p>
		<h2 id="about-title">{content.about.title}</h2>
		<p>{content.about.body}</p>
	</section>

	<section class="band" id="services" aria-labelledby="services-title">
		<section class="content-frame section-content">
			<p class="section-label">01 / {content.nav.services}</p>
			<h2 id="services-title">{content.servicesTitle}</h2>
			<section class="services-grid">
				{#each content.services as service (service.id)}
					<article>
						<p class="index">{service.id}</p>
						<h3>{service.title}</h3>
						<p>{service.body}</p>
					</article>
				{/each}
			</section>
		</section>
	</section>

	<section class="content-frame section-content" id="proof" aria-labelledby="proof-title">
		<p class="section-label">02 / {content.nav.proof}</p>
		<h2 id="proof-title">{content.proofTitle}</h2>
		<section class="proof-grid">
			{#each content.proof as item (item.id)}
				<article>
					<p class="proof-index">{item.id}</p>
					<p class="proof-focus">{item.focus}</p>
					<h3>{item.title}</h3>
					<p>{item.body}</p>
				</article>
			{/each}
		</section>
	</section>

	<section class="band" id="approach" aria-labelledby="approach-title">
		<section class="content-frame approach-grid">
			<section>
				<p class="section-label">03 / {content.nav.approach}</p>
				<h2 id="approach-title">{content.approachTitle}</h2>
			</section>
			<p class="approach-copy">{content.approach}</p>
		</section>
	</section>

	<section class="content-frame section-content" aria-labelledby="capability-title">
		<p class="section-label">04 / Capability</p>
		<h2 id="capability-title">{content.capabilityTitle}</h2>
		<section class="capability-grid">
			{#each content.capabilityGroups as group (group.title)}
				<article>
					<h3>{group.title}</h3>
					<ul>{#each group.items as item (item)}<li>{item}</li>{/each}</ul>
				</article>
			{/each}
		</section>
	</section>

	<section class="contact-band" id="contact" aria-labelledby="contact-title">
		<section class="content-frame contact-panel">
			<p class="section-label">05 / {content.nav.contact}</p>
			<h2 id="contact-title">{content.contactTitle}</h2>
			<p>{content.contactBody}</p>
			<a class="text-link" href="mailto:hello@maasjosthusmann.de">{content.cta}<span aria-hidden="true"> ↗</span></a>
			<footer>
				<a href="/impressum/index.html">{content.legal.imprint}</a>
				<a href="/privacy/index.html">{content.legal.privacy}</a>
			</footer>
		</section>
	</section>
</main>

<style>
	:global(*) { box-sizing: border-box; }
	:global(html) { scroll-behavior: smooth; }
	:global(body) { margin: 0; background: var(--canvas); color: var(--ink); font-family: Inter, ui-sans-serif, system-ui, sans-serif; }
	:global(:root) { --canvas: #f4f1ea; --surface: #fffdfa; --band: #e7e2d8; --ink: #1d211f; --muted: #59605b; --line: #cec8bd; --accent: #315c8a; --accent-soft: #c7dcf4; --shadow: 0 1.5rem 3rem rgb(29 33 31 / 0.12); }
	:global(a) { color: inherit; }
	:global(button) { font: inherit; }

	.skip-link { left: 1rem; position: fixed; top: -4rem; z-index: 2; background: var(--ink); color: var(--surface); padding: 0.75rem 1rem; }
	.skip-link:focus { top: 1rem; }
	header { border-bottom: 1px solid var(--line); }
	nav, .content-frame { margin: 0 auto; max-width: 68rem; padding-left: 1.5rem; padding-right: 1.5rem; }
	nav { align-items: center; display: flex; gap: 1.25rem; min-height: 4rem; }
	.wordmark { font-size: 0.75rem; font-weight: 750; letter-spacing: -0.02em; line-height: 1; text-decoration: none; transform: translateY(0.1rem); white-space: nowrap; }
	.navigation-links, .social-links { display: flex; gap: 0.75rem; list-style: none; margin: 0; padding: 0; }
	.social-links { margin-left: auto; }
	.navigation-links a, .social-links a, footer a { color: var(--muted); font-size: 0.75rem; line-height: 1; text-decoration: none; }
	.social-links a { align-items: center; display: flex; height: 1rem; }
	.social-links img { display: block; height: 0.9rem; width: auto; }
	.navigation-links a:hover, .social-links a:hover, footer a:hover, .text-link:hover { text-decoration: underline; text-underline-offset: 0.25em; }
	.language-switcher { border: 0; display: flex; gap: 0.25rem; margin: 0; padding: 0; }
	.language-switcher button { background: transparent; border: 0; border-radius: 0.35rem; color: var(--muted); cursor: pointer; font-size: 0.68rem; font-weight: 750; padding: 0.38rem 0.45rem; }
	.language-switcher button[aria-pressed='true'] { background: var(--ink); color: var(--surface); }
	.hero { align-items: center; display: grid; gap: 3rem; grid-template-columns: minmax(0, 1fr) minmax(16rem, 0.72fr); min-height: 30rem; padding-bottom: 6rem; padding-top: 6rem; }
	.hero-copy { max-width: 34rem; }
	.eyebrow, .section-label, .index { color: var(--accent); font-size: 0.69rem; font-weight: 700; letter-spacing: 0.07em; margin: 0 0 1.25rem; text-transform: uppercase; }
	h1, h2, h3, p { margin-top: 0; }
	h1, h2 { font-family: Georgia, serif; letter-spacing: -0.055em; line-height: 0.98; }
	h1 { font-size: clamp(2.8rem, 6vw, 5.3rem); margin-bottom: 1.5rem; }
	h2 { font-size: clamp(2rem, 3.8vw, 3.35rem); margin-bottom: 2.5rem; max-width: 18ch; }
	h3 { font-size: 1rem; letter-spacing: -0.025em; margin-bottom: 0.65rem; }
	.lead, .approach-copy { color: var(--muted); font-size: 1rem; line-height: 1.6; margin-bottom: 1.6rem; max-width: 37rem; }
	.text-link { color: var(--ink); font-size: 0.85rem; font-weight: 750; text-decoration: underline; text-underline-offset: 0.25em; }
	.portrait { margin: 0; }
	.portrait img { display: block; height: min(32rem, 54vw); object-fit: cover; object-position: center 18%; width: 100%; }
	.portrait figcaption { border-left: 2px solid var(--accent); color: var(--muted); font-size: 0.78rem; line-height: 1.55; margin: 1.25rem 0 0 1rem; max-width: 26rem; padding-left: 0.9rem; }
	.about { display: grid; gap: 2rem; grid-template-columns: minmax(0, 0.8fr) minmax(0, 1fr); padding-bottom: 5.5rem; padding-top: 5.5rem; }
	.about .section-label { grid-column: 1 / -1; margin-bottom: 0; }
	.about h2 { margin: 0; }
	.about > p:not(.section-label) { color: var(--muted); font-size: 1rem; line-height: 1.6; margin: 0; max-width: 38rem; }
	article p { color: var(--muted); font-size: 0.79rem; line-height: 1.55; }
	.band, .contact-band { background: var(--band); }
	.section-content { padding-bottom: 5.5rem; padding-top: 5.5rem; }
	.services-grid, .proof-grid, .capability-grid { display: grid; gap: 2.25rem 1.75rem; }
	.services-grid { grid-template-columns: repeat(3, 1fr); }
	.proof-grid, .capability-grid { grid-template-columns: repeat(2, 1fr); }
	.services-grid article, .proof-grid article, .capability-grid article { min-width: 0; }
	.index { margin-bottom: 1rem; }
	.proof-index { color: var(--accent); font-family: Georgia, serif; font-size: 2.7rem; letter-spacing: -0.07em; margin-bottom: 0.65rem; }
	.proof-focus { color: var(--accent); font-size: 0.69rem; font-weight: 700; letter-spacing: 0.07em; margin-bottom: 0.85rem; text-transform: uppercase; }
	.approach-grid { align-items: center; display: grid; gap: 3rem; grid-template-columns: 1fr 1fr; padding-bottom: 5.5rem; padding-top: 5.5rem; }
	.approach-grid h2 { margin-bottom: 0; }
	.approach-copy { margin: 0; }
	.capability-grid h3 { color: var(--accent); font-size: 0.78rem; margin-bottom: 0.8rem; }
	.capability-grid ul { color: var(--muted); font-size: 0.77rem; line-height: 1.7; list-style: none; margin: 0; padding: 0; }
	.contact-band { background: var(--canvas); padding-bottom: 5rem; }
	.contact-panel { background: var(--accent-soft); box-shadow: var(--shadow); padding-bottom: 3.5rem; padding-top: 3.5rem; }
	.contact-panel h2 { max-width: 21ch; }
	.contact-panel > p:not(.section-label) { color: var(--ink); font-size: 1rem; line-height: 1.6; max-width: 44rem; }
	.contact-panel footer { display: flex; flex-wrap: wrap; gap: 0.9rem; margin-top: 2.5rem; }
	.contact-panel footer a { color: var(--ink); }
	.sr-only { clip: rect(0 0 0 0); clip-path: inset(50%); height: 1px; overflow: hidden; position: absolute; white-space: nowrap; width: 1px; }
	@media (max-width: 42rem) {
		nav { gap: 0.4rem; min-height: 3.5rem; padding-left: 0.9rem; padding-right: 0.9rem; }
		.wordmark { font-size: 0.58rem; }
		.navigation-links, .social-links { gap: 0.35rem; }
		.navigation-links a, .social-links a { font-size: 0.6rem; }
		.language-switcher { gap: 0.1rem; }
		.language-switcher button { font-size: 0.6rem; padding: 0.25rem; }
		.hero, .approach-grid { grid-template-columns: 1fr; }
		.hero { gap: 2rem; min-height: auto; padding-bottom: 4rem; padding-top: 4rem; }
		.portrait img { height: auto; }
		.services-grid, .proof-grid, .capability-grid { grid-template-columns: 1fr; }
		.about { grid-template-columns: 1fr; padding-bottom: 4rem; padding-top: 4rem; }
		.section-content, .approach-grid { padding-bottom: 4rem; padding-top: 4rem; }
	}
</style>
