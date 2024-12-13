/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    colors: {
      'primary-color' : '#EEA500',
      'secondary-color' : '#F3BB40',
      'contrast-color' : '#2C3236',
      'dark-color' : '#140F03',
      'light-color' : '#FAFAFA',
    },
    fontFamily: {
      Primary: ['Reem Kufi', 'sans-serif'],
      Secondary: ['Quicksand', 'sans-serif'],
    },
    extend: {},
  },

  plugins: [],
};