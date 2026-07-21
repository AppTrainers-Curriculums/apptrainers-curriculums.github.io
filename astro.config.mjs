import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { publishedMaterials } from './materials.config.mjs';

// GitHub Pages org root site: https://apptrainers-curriculums.github.io/
export default defineConfig({
  site: 'https://apptrainers-curriculums.github.io',
  base: '/',
  integrations: [
    starlight({
      title: 'AppTrainers Materials',
      description: 'Hands-on game-development workbooks that build real Unity games, step by step.',
      logo: {
        light: './src/assets/apptrainers-logo.png',
        dark: './src/assets/apptrainers-logo-dark.png',
        replacesTitle: true,
      },
      customCss: ['./src/styles/theme.css'],
      sidebar: publishedMaterials.map((m) => ({
        label: m.sidebarLabel,
        autogenerate: { directory: m.slug },
      })),
      lastUpdated: true,
      pagination: true,
      // Search is disabled: courses are AES-encrypted at build time (see
      // scripts/encrypt.mjs), but Pagefind would index the plaintext pages and
      // leak protected content through the search box. No index = no leak.
      pagefind: false,
    }),
  ],
});
