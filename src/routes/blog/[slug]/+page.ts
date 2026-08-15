import { error } from '@sveltejs/kit';
import { getPost, listPosts } from '$lib/blog';
import type { PageLoad } from './$types';

export const prerender = true;

export function entries() {
	return listPosts().map((post) => ({ slug: post.slug }));
}

export const load: PageLoad = ({ params }) => {
	const post = getPost(params.slug);
	if (!post) error(404, 'Blog post not found');

	return { post };
};
