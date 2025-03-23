export default defineNuxtConfig({
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