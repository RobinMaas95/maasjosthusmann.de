import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import lua from 'highlight.js/lib/languages/lua';
import plaintext from 'highlight.js/lib/languages/plaintext';

hljs.registerLanguage('json', json);
hljs.registerLanguage('lua', lua);
hljs.registerLanguage('plaintext', plaintext);
hljs.registerAliases(['text', 'txt'], { languageName: 'plaintext' });

const marked = new Marked(
	markedHighlight({
		emptyLangClass: 'hljs',
		langPrefix: 'hljs language-',
		highlight(code, language) {
			const supportedLanguage = hljs.getLanguage(language) ? language : 'plaintext';
			return hljs.highlight(code, { language: supportedLanguage }).value;
		}
	})
);

export type BlogPost = {
	slug: string;
	date: string;
	title: string;
	description: string;
	content: string;
};

type Frontmatter = Record<string, string>;

const sources = import.meta.glob<string>('./blog/posts/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
});

function parseFrontmatter(source: string, path: string): { metadata: Frontmatter; body: string } {
	const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
	if (!match) throw new Error(`Blog post ${path} is missing frontmatter`);

	const metadata = Object.fromEntries(
		match[1]
			.split(/\r?\n/)
			.filter(Boolean)
			.map((line) => {
				const separator = line.indexOf(':');
				if (separator === -1) throw new Error(`Invalid frontmatter in ${path}: ${line}`);

				const key = line.slice(0, separator).trim();
				const value = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, '');
				return [key, value];
			})
	);

	return { metadata, body: match[2].trim() };
}

function required(metadata: Frontmatter, key: string, path: string): string {
	const value = metadata[key];
	if (!value) throw new Error(`Blog post ${path} is missing ${key}`);
	return value;
}

function parsePost(source: string, path: string): BlogPost {
	const { metadata, body } = parseFrontmatter(source, path);
	const content = marked.parse(body, { async: false });

	return {
		slug: required(metadata, 'slug', path),
		date: required(metadata, 'date', path),
		title: required(metadata, 'title', path),
		description: required(metadata, 'description', path),
		content: typeof content === 'string' ? content : ''
	};
}

const posts = Object.entries(sources).map(([path, source]) => parsePost(source, path));

export function listPosts(): BlogPost[] {
	return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): BlogPost | undefined {
	return posts.find((post) => post.slug === slug);
}
