import { defineConfig } from 'vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [
		sveltekit({
			adapter: adapter({ pages: 'dist', assets: 'dist' }),
			files: { assets: 'legal-static' },
			prerender: {
				handleHttpError: ({ path, message }) => {
					if (path === '/impressum/' || path === '/privacy/') return;
					throw new Error(message);
				}
			},
			compilerOptions: {
				runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			}
		})
	]
});
