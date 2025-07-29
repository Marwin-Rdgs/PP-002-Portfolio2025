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

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2025-03-22',
});