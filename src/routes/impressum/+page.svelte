<script lang="ts">
	import impressumEn from '$lib/legal/impressum-en.html?raw';
	import impressumDe from '$lib/legal/impressum-de.html?raw';
	import { language } from '$lib/locale';
	import { copy } from '$lib/copy';

	let content = $derived(copy[$language]);
</script>

<svelte:head>
	<title>{content.legal.imprint} · Robin Maasjosthusmann</title>
</svelte:head>

<article class="content-frame legal-page">
	<h1>{content.legal.imprint}</h1>

	<section class="legal-section">
		<h2>English</h2>
		{@html impressumEn}
	</section>

	<hr />

	<section class="legal-section">
		<h2>Deutsch</h2>
		{@html impressumDe}
	</section>

	<footer class="legal-footer">
		<a href="/impressum/">{content.legal.imprint}</a>
		<a href="/privacy/">{content.legal.privacy}</a>
	</footer>
</article>

<style>
	.legal-page { padding-bottom: 5.5rem; padding-top: 5.5rem; }
	.legal-page h1 { margin-bottom: 2rem; }
	:global(.legal-section p) { margin: 0 0 1rem; max-width: 48rem; }
	.legal-section h2 { font-size: clamp(1.4rem, 3vw, 2rem); margin-top: 0; margin-bottom: 1rem; }
	.legal-page hr { margin: 2.5rem 0; border: 0; border-top: 1px solid var(--line); }
	.legal-footer { display: flex; flex-wrap: wrap; gap: 0.9rem; margin-top: 2.5rem; color: var(--muted); font-size: 0.85rem; }
	.legal-footer a { color: var(--muted); text-decoration: none; }
	.legal-footer a:hover { text-decoration: underline; text-underline-offset: 0.25em; }
</style>
