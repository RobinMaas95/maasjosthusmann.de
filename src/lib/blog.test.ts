import { expect, test } from 'vitest';

import { getPost, listPosts } from './blog';

test('loads published posts newest first', () => {
	const posts = listPosts();
	const glove80Post = posts.find((post) => post.slug === 'glove80');

	expect(posts.length).toBeGreaterThan(0);
	expect(glove80Post).toMatchObject({
		slug: 'glove80',
		title: 'Why I Switched to the MoErgo Glove80 Keyboard'
	});
	expect(posts[0].date >= posts[posts.length - 1].date).toBe(true);
	expect(posts[0].content).toContain('<p>');
});

test('syntax-highlights fenced JSON code blocks', () => {
	const post = getPost('windows-macos-shortcuts');

	expect(post?.content).toContain('<code class="hljs language-json">');
	expect(post?.content).toMatch(/<span class="hljs-(?:attr|string|punctuation)">/);
});

test('syntax-highlights fenced TOML code blocks', () => {
	const post = getPost('shell-history-i-want');

	expect(post?.content).toContain('<code class="hljs language-toml">');
	expect(post?.content).toMatch(/<span class="hljs-(?:attr|string|comment|literal)">/);
});

test('finds a post by slug and returns undefined for an unknown slug', () => {
	expect(getPost('glove80')?.date).toBe('2026-08-04');
	expect(getPost('missing-post')).toBeUndefined();
});
