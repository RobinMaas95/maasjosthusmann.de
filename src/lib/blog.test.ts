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

test('finds a post by slug and returns undefined for an unknown slug', () => {
	expect(getPost('glove80')?.date).toBe('2026-08-04');
	expect(getPost('missing-post')).toBeUndefined();
});
