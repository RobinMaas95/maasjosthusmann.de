<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.post.title} · Robin Maasjosthusmann</title>
	<meta name="description" content={data.post.description} />
	<meta property="og:title" content={data.post.title} />
	<meta property="og:description" content={data.post.description} />
	<meta property="og:type" content="article" />
</svelte:head>

<article class="content-frame post-page">
	<a class="back-link" href="/blog/">← Back to blog</a>
	<header class="post-header">
		<p class="post-date"><time datetime={data.post.date}>{data.post.date}</time></p>
		<h1>{data.post.title}</h1>
		<p class="post-description">{data.post.description}</p>
	</header>
	<div class="post-content">{@html data.post.content}</div>
</article>

<style>
	.post-page { padding-bottom: 6rem; padding-top: 3rem; }
	.back-link { color: var(--muted); font-size: 0.78rem; text-underline-offset: 0.25em; }
	.back-link:hover { color: var(--ink); }
	.post-header { border-bottom: 1px solid var(--line); margin: 4rem auto 3.5rem; max-width: 46rem; padding-bottom: 2.5rem; }
	.post-date { color: var(--accent); font-size: 0.69rem; font-weight: 700; letter-spacing: 0.07em; margin: 0 0 1.25rem; text-transform: uppercase; }
	.post-header h1 { font-size: clamp(2.5rem, 6vw, 4.8rem); max-width: 16ch; }
	.post-description { color: var(--muted); font-size: 1.05rem; line-height: 1.6; margin-bottom: 0; max-width: 46rem; }
	.post-content { margin: 0 auto; max-width: 46rem; }
	.post-content :global(h2) { font-size: clamp(1.7rem, 3vw, 2.5rem); margin: 3rem 0 1rem; }
	.post-content :global(h3) { font-size: 1.2rem; margin: 2rem 0 0.8rem; }
	.post-content :global(p), .post-content :global(li) { color: var(--muted); font-size: 1rem; line-height: 1.75; }
	.post-content :global(p) { margin-bottom: 1.35rem; }
	.post-content :global(ul), .post-content :global(ol) { margin: 0 0 1.5rem; padding-left: 1.4rem; }
	.post-content :global(a) { color: var(--ink); text-underline-offset: 0.2em; }
	.post-content :global(blockquote) { border-left: 2px solid var(--accent); color: var(--muted); margin: 2rem 0; padding-left: 1.25rem; }
	.post-content :global(code) { background: var(--band); font-size: 0.9em; padding: 0.15em 0.3em; }
	.post-content :global(pre) { background: var(--ink); color: var(--surface); overflow-x: auto; padding: 1rem; }
	.post-content :global(pre code) { background: transparent; padding: 0; }
	.post-content :global(.hljs-comment), .post-content :global(.hljs-quote) { color: #a8b0aa; }
	.post-content :global(.hljs-attr), .post-content :global(.hljs-attribute), .post-content :global(.hljs-name), .post-content :global(.hljs-selector-tag) { color: #8fc7ff; }
	.post-content :global(.hljs-string), .post-content :global(.hljs-regexp) { color: #b7dc9b; }
	.post-content :global(.hljs-number), .post-content :global(.hljs-literal), .post-content :global(.hljs-bullet) { color: #f0b27a; }
	.post-content :global(.hljs-keyword), .post-content :global(.hljs-selector-class), .post-content :global(.hljs-built_in) { color: #d7a8f2; }
	.post-content :global(.hljs-variable), .post-content :global(.hljs-template-variable), .post-content :global(.hljs-title) { color: #f4d17a; }
	.post-content :global(img) { max-width: 100%; height: auto; }
	@media (max-width: 42rem) {
		.post-page { padding-bottom: 4rem; padding-top: 2rem; }
		.post-header { margin-top: 3rem; }
	}
</style>
