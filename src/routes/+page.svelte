<script lang="ts">
	import { language } from '$lib/locale';
	import { copy } from '$lib/copy';

	let content = $derived(copy[$language]);
</script>

<svelte:head>
	<title>Robin Maasjosthusmann · {content.title}</title>
</svelte:head>

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

<section id="approach" aria-labelledby="approach-title">
	<section class="content-frame approach-grid">
		<section>
			<p class="section-label">01 / {content.nav.approach}</p>
			<h2 id="approach-title">{content.approachTitle}</h2>
		</section>
		<p class="approach-copy">{content.approach}</p>
	</section>
</section>

<section class="band" id="services" aria-labelledby="services-title">
	<section class="content-frame section-content">
		<p class="section-label">02 / {content.nav.services}</p>
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
	<p class="section-label">03 / {content.nav.proof}</p>
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

<section class="band">
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
		</footer>
	</section>
</section>

<style>
	.eyebrow, .section-label, .index { color: var(--accent); font-size: 0.69rem; font-weight: 700; letter-spacing: 0.07em; margin: 0 0 1.25rem; text-transform: uppercase; }
	.hero { align-items: center; display: grid; gap: 3rem; grid-template-columns: minmax(0, 1fr) minmax(16rem, 0.72fr); min-height: 30rem; padding-bottom: 6rem; padding-top: 6rem; }
	.hero-copy { max-width: 34rem; }
	.lead, .approach-copy { color: var(--muted); font-size: 1rem; line-height: 1.6; margin-bottom: 1.6rem; max-width: 37rem; }
	.text-link { color: var(--ink); font-size: 0.85rem; font-weight: 750; text-decoration: underline; text-underline-offset: 0.25em; }
	.text-link:hover { text-decoration: underline; text-underline-offset: 0.25em; }
	.portrait { margin: 0; }
	.portrait img { display: block; height: min(32rem, 54vw); object-fit: cover; object-position: center 18%; width: 100%; }
	.portrait figcaption { border-left: 2px solid var(--accent); color: var(--muted); font-size: 0.78rem; line-height: 1.55; margin: 1.25rem 0 0 1rem; max-width: 26rem; padding-left: 0.9rem; }
	.about { display: grid; gap: 2rem; grid-template-columns: minmax(0, 0.8fr) minmax(0, 1fr); padding-bottom: 5.5rem; padding-top: 5.5rem; }
	.about .section-label { grid-column: 1 / -1; margin-bottom: 0; }
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
	.contact-panel footer a:hover { text-decoration: underline; text-underline-offset: 0.25em; }

	@media (max-width: 42rem) {
		.hero, .approach-grid { grid-template-columns: 1fr; }
		.hero { gap: 2rem; min-height: auto; padding-bottom: 4rem; padding-top: 4rem; }
		.portrait img { height: auto; }
		.services-grid, .proof-grid, .capability-grid { grid-template-columns: 1fr; }
		.about { grid-template-columns: 1fr; padding-bottom: 4rem; padding-top: 4rem; }
		.section-content, .approach-grid { padding-bottom: 4rem; padding-top: 4rem; }
	}
</style>
