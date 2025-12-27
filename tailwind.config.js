/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bridgelux: {
          bg: '#020617',
          section: '#030712',
          accent: '#38bdf8',
        },
      },
      boxShadow: {
        'xl-soft': '0 18px 45px rgba(0,0,0,0.55)',
      },
      borderRadius: {
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
};
