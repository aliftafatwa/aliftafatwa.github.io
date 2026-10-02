import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aliftafatwa.github.io',
  base: '/',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  vite: {
    plugins: [tailwindcss()],
  }
});