import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/AppTrainers-Curriculums/apptrainers-curriculums.github.io' },
      ],
      sidebar: [
        {
          label: 'Build a Checkers Game',
          autogenerate: { directory: 'checkers' },
        },
      ],
      lastUpdated: true,
      pagination: true,
    }),
  ],
});
