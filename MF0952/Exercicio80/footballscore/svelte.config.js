import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: { 
		adapter: adapter({
			// Fallback to index.html for SPA routing
			fallback: 'index.html'
		}) 
	}
};

export default config;
