<script lang="ts">
	import { onMount } from 'svelte';

	type Language = 'en' | 'de';
	type Copy = {
		nav: { services: string; proof: string; approach: string; contact: string };
		eyebrow: string;
		title: string;
		introduction: string;
		cta: string;
		operatingTitle: string;
		operatingBody: string;
		workflow: { id: string; title: string; body: string }[];
		servicesTitle: string;
		services: { id: string; title: string; body: string }[];
		proofTitle: string;
		proof: { id: string; title: string; body: string }[];
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
			eyebrow: 'Freelance Consultant · Remote · Germany / EU',
			title: 'Platform & AI Engineer',
			introduction: 'I’m Robin Maasjosthusmann, a freelance consultant helping teams turn product bets into operable software—through dependable delivery paths, governed AI capability, and technical decisions that survive contact with reality.',
			cta: 'Start a Conversation',
			operatingTitle: 'A delivery system, not a collection of tools.',
			operatingBody: 'The goal is simple: turn a risky product decision into a small, reviewable, observable change the team can own after I leave.',
			workflow: [
				{ id: '01', title: 'Frame the Constraint', body: 'Find the irreducible product, operational, and ownership constraints before choosing technology.' },
				{ id: '02', title: 'Make the Path Reviewable', body: 'Deliver a narrow end-to-end change with explicit controls, verification, and a clear rollback story.' },
				{ id: '03', title: 'Leave the Team Stronger', body: 'Document the decision, expose operational signals, and make the next change easier than the first.' }
			],
			servicesTitle: 'Infrastructure & Developer Experience',
			services: [
				{ id: '01', title: 'Platform Reliability & Delivery', body: 'Secure, repeatable delivery from repository to production—with reviewable infrastructure, observable systems, and a clear operating model.' },
				{ id: '02', title: 'Developer Experience', body: 'Platforms, local and per-PR environments, automation, and documentation that help engineers and data scientists do their best work.' },
				{ id: '03', title: 'AI Platform Engineering', body: 'Practical AI foundations: provider integration, access controls, cost visibility, and a delivery practice that remains accountable.' }
			],
			proofTitle: 'Selected Platform Work',
			proof: [
				{ id: '01', title: 'Developer Platform as a Product', body: 'Builds platform services, development and per-PR environments, tooling, and documentation for developers and data scientists.' },
				{ id: '02', title: 'Managed Kubernetes Delivery', body: 'Operated DigitalOcean managed Kubernetes and OpenShift workloads, including Argo CD setup and day-to-day GitOps delivery.' },
				{ id: '03', title: 'Governed Delivery Infrastructure', body: 'Maintained internal GitHub Actions runners and a secured catalogue of internally reviewed actions for a company-wide engineering workflow.' },
				{ id: '04', title: 'Secure Platform Access', body: 'Configured Cloudflare DNS, Zero Trust, tunnels, and security rules to provide protected access to VPS services without public exposure.' }
			],
			approachTitle: 'Agent-Assisted. Never Unaccountable.',
			approach: 'Claude Code, Pi, and OpenCode accelerate the work—not the responsibility. Agents produce reviewable changes; I understand the architecture and every changed line before a human-facing pull request exists.',
			capabilityTitle: 'Working Surface',
			capabilityGroups: [
				{ title: 'Delivery Automation', items: ['GitHub Actions', 'Docker', 'Terraform Enterprise / Cloud', 'Argo CD'] },
				{ title: 'Platform Operation', items: ['DigitalOcean Kubernetes', 'OpenShift', 'OpenTelemetry', 'Grafana Cloud', 'Prometheus', 'Loki'] },
				{ title: 'Developer Experience', items: ['Platform Services', 'Local & Per-PR Environments', 'Internal CLI & Automation', 'Operational Documentation'] },
				{ title: 'Platform Security', items: ['Cloudflare DNS', 'Cloudflare Zero Trust', 'Cloudflare Tunnels', 'Cloudflare Workers / WAF'] }
			],
			contactTitle: 'A Product Decision Should Not Become a Platform Emergency.',
			contactBody: 'Working through a product, platform, AI, or delivery decision? If the next step deserves a clear owner, let’s make it concrete.',
			legal: { imprint: 'Imprint', privacy: 'Privacy' }
		},
		de: {
			nav: { services: 'Leistungen', proof: 'Erfahrung', approach: 'Arbeitsweise', contact: 'Kontakt' },
			eyebrow: 'Freiberuflicher Consultant · Remote · Deutschland / EU',
			title: 'Plattform- & AI-Engineer',
			introduction: 'Ich bin Robin Maasjosthusmann, freiberuflicher Consultant für Teams, die Produktideen in betreibbare Software verwandeln wollen—mit belastbaren Delivery-Wegen, kontrollierter AI-Funktionalität und technischen Entscheidungen, die in der Realität bestehen.',
			cta: 'Gespräch Starten',
			operatingTitle: 'Ein Delivery-System, keine Sammlung von Tools.',
			operatingBody: 'Das Ziel ist einfach: Eine riskante Produktentscheidung wird zu einer kleinen, reviewbaren und beobachtbaren Änderung, die das Team auch ohne mich tragen kann.',
			workflow: [
				{ id: '01', title: 'Constraint Klären', body: 'Produkt-, Betriebs- und Ownership-Constraints identifizieren, bevor Technologie gewählt wird.' },
				{ id: '02', title: 'Weg Reviewbar Machen', body: 'Eine schmale End-to-End-Änderung mit expliziten Kontrollen, Verifikation und klarem Rollback liefern.' },
				{ id: '03', title: 'Team Stärker Hinterlassen', body: 'Entscheidung dokumentieren, operative Signale sichtbar machen und die nächste Änderung leichter als die erste machen.' }
			],
			servicesTitle: 'Infrastruktur & Developer Experience',
			services: [
				{ id: '01', title: 'Plattform-Zuverlässigkeit & Delivery', body: 'Sichere, wiederholbare Delivery vom Repository bis in die Produktion—mit reviewbarer Infrastruktur, beobachtbaren Systemen und einem klaren Betriebsmodell.' },
				{ id: '02', title: 'Developer Experience', body: 'Plattformen, lokale und Per-PR-Umgebungen, Automatisierung und Dokumentation, die Entwicklern und Data Scientists bessere Arbeitsbedingungen geben.' },
				{ id: '03', title: 'AI-Plattform-Engineering', body: 'Pragmatische Grundlagen für AI: Provider-Integration, Zugriffskontrollen, Kostentransparenz und eine Delivery-Praxis mit klarer Verantwortung.' }
			],
			proofTitle: 'Ausgewählte Plattform-Arbeit',
			proof: [
				{ id: '01', title: 'Developer-Plattform als Produkt', body: 'Entwickelt Plattform-Services, Entwicklungs- und Per-PR-Umgebungen, Tools und Dokumentation für Entwickler und Data Scientists.' },
				{ id: '02', title: 'Managed-Kubernetes-Delivery', body: 'Betreibt DigitalOceans Managed Kubernetes und OpenShift-Workloads, einschließlich Argo-CD-Setup und täglicher GitOps-Delivery.' },
				{ id: '03', title: 'Kontrollierte Delivery-Infrastruktur', body: 'Betreut interne GitHub-Actions-Runner sowie einen sicherheitsgeprüften Katalog intern bereitgestellter Actions für unternehmensweite Engineering-Workflows.' },
				{ id: '04', title: 'Sicherer Plattform-Zugang', body: 'Konfiguriert Cloudflare DNS, Zero Trust, Tunnels und Sicherheitsregeln für geschützten Zugriff auf VPS-Services ohne öffentliche Exponierung.' }
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
		const stored = window.localStorage.getItem('preferred-language');
		if (stored === 'de' || stored === 'en') language = stored;
		else if (navigator.languages.some((value) => value.toLowerCase().startsWith('de'))) language = 'de';
	});

	function selectLanguage(next: Language) {
		language = next;
		window.localStorage.setItem('preferred-language', next);
	}
</script>

<svelte:head>
	<title>Robin Maasjosthusmann · Platform & AI Engineer</title>
	<meta name="description" content="Robin Maasjosthusmann helps teams turn product bets into operable software through dependable delivery paths and governed AI capability." />
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
		<aside class="operating-model" aria-labelledby="operating-title">
			<p class="section-label">Operating model / 01</p>
			<h2 id="operating-title">{content.operatingTitle}</h2>
			<p>{content.operatingBody}</p>
			<ol>
				{#each content.workflow as step (step.id)}
					<li><strong>{step.id} · {step.title}</strong><span>{step.body}</span></li>
				{/each}
			</ol>
		</aside>
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
				<a href="/impressum/">{content.legal.imprint}</a>
				<a href="/privacy/">{content.legal.privacy}</a>
				<a href="https://github.com/RobinMaas95/" rel="noreferrer" target="_blank">GitHub<span class="sr-only"> (opens in new tab)</span></a>
				<a href="https://www.linkedin.com/in/robin-maasjosthusmann/" rel="noreferrer" target="_blank">LinkedIn<span class="sr-only"> (opens in new tab)</span></a>
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
	.wordmark { font-size: 0.75rem; font-weight: 750; letter-spacing: -0.02em; text-decoration: none; white-space: nowrap; }
	.navigation-links { display: flex; gap: 0.75rem; list-style: none; margin: 0; padding: 0; }
	.navigation-links a, footer a { color: var(--muted); font-size: 0.75rem; text-decoration: none; }
	.navigation-links a:hover, footer a:hover, .text-link:hover { text-decoration: underline; text-underline-offset: 0.25em; }
	.language-switcher { border: 0; display: flex; gap: 0.25rem; margin: 0 0 0 auto; padding: 0; }
	.language-switcher button { background: transparent; border: 0; border-radius: 0.35rem; color: var(--muted); cursor: pointer; font-size: 0.68rem; font-weight: 750; padding: 0.38rem 0.45rem; }
	.language-switcher button[aria-pressed='true'] { background: var(--ink); color: var(--surface); }
	.hero { align-items: center; display: grid; gap: 3rem; grid-template-columns: minmax(0, 1fr) minmax(18rem, 0.9fr); min-height: 30rem; padding-bottom: 6rem; padding-top: 6rem; }
	.hero-copy { max-width: 34rem; }
	.eyebrow, .section-label, .index { color: var(--accent); font-size: 0.69rem; font-weight: 700; letter-spacing: 0.07em; margin: 0 0 1.25rem; text-transform: uppercase; }
	h1, h2, h3, p { margin-top: 0; }
	h1, h2 { font-family: Georgia, serif; letter-spacing: -0.055em; line-height: 0.98; }
	h1 { font-size: clamp(2.8rem, 6vw, 5.3rem); margin-bottom: 1.5rem; }
	h2 { font-size: clamp(2rem, 3.8vw, 3.35rem); margin-bottom: 2.5rem; max-width: 18ch; }
	h3 { font-size: 1rem; letter-spacing: -0.025em; margin-bottom: 0.65rem; }
	.lead, .approach-copy { color: var(--muted); font-size: 1rem; line-height: 1.6; margin-bottom: 1.6rem; max-width: 37rem; }
	.text-link { color: var(--ink); font-size: 0.85rem; font-weight: 750; text-decoration: underline; text-underline-offset: 0.25em; }
	.operating-model { background: var(--surface); box-shadow: var(--shadow); padding: 2rem; }
	.operating-model h2 { font-family: Inter, ui-sans-serif, sans-serif; font-size: 1.25rem; letter-spacing: -0.035em; line-height: 1.15; margin-bottom: 0.8rem; }
	.operating-model > p:not(.section-label), .operating-model li span, article p { color: var(--muted); font-size: 0.79rem; line-height: 1.55; }
	.operating-model ol { display: grid; gap: 1rem; list-style: none; margin: 1.75rem 0 0; padding: 0; }
	.operating-model li { display: grid; gap: 0.25rem; }
	.operating-model strong { font-size: 0.76rem; }
	.band, .contact-band { background: var(--band); }
	.section-content { padding-bottom: 5.5rem; padding-top: 5.5rem; }
	.services-grid, .proof-grid, .capability-grid { display: grid; gap: 2.25rem 1.75rem; }
	.services-grid { grid-template-columns: repeat(3, 1fr); }
	.proof-grid, .capability-grid { grid-template-columns: repeat(2, 1fr); }
	.services-grid article, .proof-grid article, .capability-grid article { min-width: 0; }
	.index { margin-bottom: 1rem; }
	.proof-index { color: var(--accent); font-family: Georgia, serif; font-size: 2.7rem; letter-spacing: -0.07em; margin-bottom: 0.65rem; }
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
		nav { gap: 0.8rem; min-height: 3.5rem; }
		.wordmark { font-size: 0.65rem; }
		.navigation-links { gap: 0.5rem; }
		.navigation-links a { font-size: 0.67rem; }
		.hero, .approach-grid { grid-template-columns: 1fr; }
		.hero { gap: 2rem; min-height: auto; padding-bottom: 4rem; padding-top: 4rem; }
		.services-grid, .proof-grid, .capability-grid { grid-template-columns: 1fr; }
		.section-content, .approach-grid { padding-bottom: 4rem; padding-top: 4rem; }
	}
</style>
