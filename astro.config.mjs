import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'The Grizzley Den 🐻',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Andy Notes',
					autogenerate: { directory: 'notes' },

				},
				{
					label: 'Code Examples',
					autogenerate: { directory: 'examples' },
				},
			],
		}),
	],
});
