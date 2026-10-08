import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://anurakwongta-Teera.github.io',
  base: '/anurak-research-community',
  trailingSlash: 'always',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'th'],
    routing: { prefixDefaultLocale: false },
  },
});
