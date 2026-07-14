import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// GitHub Pages project site: https://apptrainers-curriculums.github.io/materials-web/
export default defineConfig({
  site: 'https://apptrainers-curriculums.github.io',
  base: '/materials-web',
  integrations: [
    starlight({
      title: 'AppTrainers Materials',
      description: 'Hands-on game-development workbooks that build real Unity games, step by step.',
      logo: {
        light: './src/assets/apptrainers-logo.svg',
        dark: './src/assets/apptrainers-logo-dark.svg',
        replacesTitle: true,
      },
      customCss: ['./src/styles/theme.css'],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/AppTrainers-Curriculums/materials-web' },
      ],
      sidebar: [
        {
          label: 'Build a Checkers Game',
          autogenerate: { directory: 'checkers' },
        },
        {
          label: 'A Reusable Game Board',
          autogenerate: { directory: 'board-foundation' },
        },
      ],
      lastUpdated: true,
      pagination: true,
    }),
  ],
});
