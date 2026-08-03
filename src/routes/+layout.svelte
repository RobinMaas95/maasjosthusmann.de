<script lang="ts">
	import { onMount } from 'svelte';
	import { language, initialLanguage, type Language } from '$lib/locale';
	import { copy } from '$lib/copy';

	let { children } = $props();

	let content = $derived(copy[$language]);

	onMount(() => {
		language.set(initialLanguage(
			window.localStorage.getItem('preferred-language'),
			navigator.languages
		));
	});

	function selectLanguage(next: Language) {
		language.set(next);
		window.localStorage.setItem('preferred-language', next);
	}
</script>

<svelte:head>
	<title>Robin Maasjosthusmann</title>
	<meta name="description" content="Robin Maasjosthusmann is an independent Platform & AI Engineer: dependable delivery, developer platforms, and AI infrastructure with guardrails for teams in Germany and the EU." />
	<link rel="icon" href="/favicon.ico" />

</svelte:head>

<a class="skip-link" href="#content">Skip to content</a>
<header>
	<nav aria-label="Primary navigation">
		<a class="wordmark" href="/">Robin Maasjosthusmann</a>
		<ul class="navigation-links">
			<li><a href="/#approach">{content.nav.approach}</a></li>
			<li><a href="/#services">{content.nav.services}</a></li>
			<li><a href="/#proof">{content.nav.proof}</a></li>
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
			<button aria-pressed={$language === 'de'} onclick={() => selectLanguage('de')}>DE</button>
			<button aria-pressed={$language === 'en'} onclick={() => selectLanguage('en')}>EN</button>
		</fieldset>
	</nav>
</header>

<main id="content">
	{@render children()}
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
	nav, :global(.content-frame) { margin: 0 auto; max-width: 68rem; padding-left: 1.5rem; padding-right: 1.5rem; }
	nav { align-items: center; display: flex; gap: 1.25rem; min-height: 4rem; }
	.wordmark { font-size: 0.75rem; font-weight: 750; letter-spacing: -0.02em; line-height: 1; text-decoration: none; transform: translateY(0.1rem); white-space: nowrap; }
	.navigation-links, .social-links { display: flex; gap: 0.75rem; list-style: none; margin: 0; padding: 0; }
	.social-links { margin-left: auto; }
	.navigation-links a, .social-links a { color: var(--muted); font-size: 0.75rem; line-height: 1; text-decoration: none; }
	.social-links a { align-items: center; display: flex; height: 1rem; }
	.social-links img { display: block; height: 0.9rem; width: auto; }
	.navigation-links a:hover, .social-links a:hover { text-decoration: underline; text-underline-offset: 0.25em; }
	.language-switcher { border: 0; display: flex; gap: 0.25rem; margin: 0; padding: 0; }
	.language-switcher button { background: transparent; border: 0; border-radius: 0.35rem; color: var(--muted); cursor: pointer; font-size: 0.68rem; font-weight: 750; padding: 0.38rem 0.45rem; }
	.language-switcher button[aria-pressed='true'] { background: var(--ink); color: var(--surface); }
	:global(h1, h2, h3, p) { margin-top: 0; }
	:global(h1, h2) { font-family: Georgia, serif; letter-spacing: -0.055em; line-height: 0.98; }
	:global(h1) { font-size: clamp(2.8rem, 6vw, 5.3rem); margin-bottom: 1.5rem; }
	:global(h2) { font-size: clamp(2rem, 3.8vw, 3.35rem); margin-bottom: 2.5rem; max-width: 18ch; }
	:global(h3) { font-size: 1rem; letter-spacing: -0.025em; margin-bottom: 0.65rem; }
	.sr-only { clip: rect(0 0 0 0); clip-path: inset(50%); height: 1px; overflow: hidden; position: absolute; white-space: nowrap; width: 1px; }

	@media (max-width: 42rem) {
		nav { column-gap: 0.9rem; flex-wrap: wrap; min-height: 3.5rem; padding-left: 0.9rem; padding-right: 0.9rem; row-gap: 0; }
		.wordmark { font-size: 0.75rem; padding: 0.65rem 0; }
		.navigation-links { flex-basis: 100%; gap: 1.1rem; order: 3; padding-bottom: 0.7rem; }
		.navigation-links a { font-size: 0.78rem; }
		.social-links { gap: 0.4rem; }
		.social-links a { height: 2.1rem; padding: 0 0.35rem; }
		.social-links img { height: 1.05rem; }
		.language-switcher { gap: 0.15rem; }
		.language-switcher button { font-size: 0.75rem; padding: 0.5rem 0.6rem; }
	}
</style>
