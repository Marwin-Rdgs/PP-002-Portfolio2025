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
  plugins: [
    { src: '~/plugins/barba.ts', mode: 'client' }, // Exécuter uniquement côté client
  ],
});
