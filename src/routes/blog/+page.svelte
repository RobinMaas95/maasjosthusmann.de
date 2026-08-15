<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Blog · Robin Maasjosthusmann</title>
	<meta name="description" content="Interesting things I come across, small experiments I try, and little tweaks I make along the way." />
</svelte:head>

<section class="content-frame blog-index" aria-labelledby="blog-title">
	<p class="section-label">Writing</p>
	<h1 id="blog-title">What I found. What I changed.</h1>
	<p class="intro">Interesting things I come across, small experiments I try, and little tweaks I make along the way.</p>

	<section class="post-list" aria-label="Blog posts">
		{#each data.posts as post (post.slug)}
			<article class="post-card">
				<p class="post-date"><time datetime={post.date}>{post.date}</time></p>
				<div class="post-card-body">
					<h2><a href={`/blog/${post.slug}/`}>{post.title}</a></h2>
					<p class="post-description">{post.description}</p>
					<a class="text-link" href={`/blog/${post.slug}/`}>Read the post <span aria-hidden="true">↗</span></a>
				</div>
			</article>
		{:else}
			<p>No posts published yet.</p>
		{/each}
	</section>
</section>

<style>
	.blog-index { padding-bottom: 6rem; padding-top: 6rem; }
	.section-label, .post-date { color: var(--accent); font-size: 0.69rem; font-weight: 700; letter-spacing: 0.07em; margin: 0 0 1.25rem; text-transform: uppercase; }
	.blog-index h1 { font-size: clamp(2rem, 3.6vw, 3.5rem); max-width: 18ch; text-wrap: balance; }
	.intro { color: var(--muted); font-size: 1rem; line-height: 1.6; margin-bottom: 4rem; max-width: 52rem; }
	.post-list { border-top: 1px solid var(--line); }
	.post-card { border-bottom: 1px solid var(--line); display: grid; gap: 0.65rem 2rem; grid-template-columns: minmax(7rem, 0.25fr) minmax(0, 1fr); padding: 2rem 0; }
	.post-date { margin: 0; padding-top: 0.25rem; }
	.post-card h2 { font-size: clamp(1.3rem, 2.2vw, 1.8rem); margin-bottom: 0.65rem; max-width: 24ch; text-wrap: balance; }
	.post-card h2 a { text-decoration: none; }
	.post-card h2 a:hover { text-decoration: underline; text-underline-offset: 0.2em; }
	.post-description { color: var(--muted); line-height: 1.6; margin: 0 0 1rem; max-width: 38rem; }
	.text-link { color: var(--ink); font-size: 0.85rem; font-weight: 750; text-decoration: underline; text-underline-offset: 0.25em; }
	@media (max-width: 42rem) {
		.blog-index { padding-bottom: 4rem; padding-top: 4rem; }
		.post-card { grid-template-columns: 1fr; gap: 0.65rem; }
	}
</style>
