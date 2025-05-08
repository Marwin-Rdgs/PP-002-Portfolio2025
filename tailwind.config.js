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
      'primary-color' : '#F0A500',
      'secondary-color' : '#FCC35F',
      'contrast-color' : '#2C3236',
      'dark-color' : '#140F03',
      'light-color' : '#FAFAFA',
      'CMW-primary' : '#6BC4CC',
      'CMW-secondary' : '#BAE0E6',
      'CMTC-primary' : '#6CB96A',
      'CMTC-secondary': '#B2D6A8',
      'alert-color': '#FF4242',
    },
    fontFamily: {
      Primary: ['Reem Kufi', 'sans-serif'],
      Secondary: ['Quicksand', 'sans-serif'],
    },
    "screens": {
      phone: '274px',
      // tablette: '425px',
      desktop: '1024px'
    },
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },

  plugins: [],
};