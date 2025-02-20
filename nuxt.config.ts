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
  plugins: [],
});
