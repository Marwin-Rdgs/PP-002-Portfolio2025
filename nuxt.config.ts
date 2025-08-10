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
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/google-gtag'
  ],
  sitemap: {
    siteUrl: 'https://marwin-rodrigues.fr',
    trailingSlash: true, // pour que toutes les URLs aient un / final
    gzip: true,
    exclude: [
      '/admin/**',
      '/serveur/**',
      '/components/**',
      '/data/**',
      '/layouts/**',
      '/pages/**',
    ],
    defaults: {
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date()
    }
  },
  gtag: {
    id: 'G-0X03W5CCH6', // remplace par ton ID
    config: {
      anonymize_ip: true,
      send_page_view: true
    },
    debug: true
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: '2025-03-22',
});
