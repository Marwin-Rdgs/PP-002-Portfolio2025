export default defineNuxtConfig({
  ssr: true, // SSR est requis pour `nuxt generate` mais pas de backend ici
  target: 'static', // facultatif mais explicite
  nitro: {
    preset: 'static'
  },
  css: [
    '@/assets/css/main.css',
    'animate.css/animate.min.css'
  ],
  modules: ['@nuxtjs/sitemap'],
sitemap: {
  siteUrl: 'https://marwin-rodrigues.fr',
  trailingSlash: true,
  gzip: true,
  exclude: [
    '/admin/**',
    '/serveur/**',
    '/components/**',
    '/data/**',
    '/layouts/**',
  ],
  defaults: {
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date()
  }
},
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: '2025-03-22',
});
