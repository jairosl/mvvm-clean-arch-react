/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        tertiary: 'rgb(var(--tertiary) / <alpha-value>)',
      },
      textColor: {
        black: 'rgb(var(--text-black) / <alpha-value>)',
        label: 'rgb(var(--text-label) / <alpha-value>)',
      },
      borderColor: {
        primary: 'rgb(var(--border-primary) / <alpha-value>)',
        gray: 'rgb(var(--border-gray) / <alpha-value>)',
        secondary: 'rgb(var(--border-secondary) / <alpha-value>)',
      },
      backgroundColor: {
        'line-primary': 'rgb(var(--line-primary) / <alpha-value>)',
        'line-secondary': 'rgb(var(--line-secondary) / <alpha-value>)',
      },
      placeholderColor: {
        primary: 'rgb(var(--placeholder-primary) / <alpha-value>)',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        popins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
