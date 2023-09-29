/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'body-color-light': 'hsla(233, 29%, 22%, 1)',
        'body-color': 'hsla(232, 27%, 19%, 1)',
        'first-color': 'hsla(0, 0%, 100%, 1)',
        'second-color': 'hsla(182, 97%, 42%, 1)',
        'third-color': 'hsla(252, 91%, 55%, 1)',
        'border-color': 'hsla(232, 28%, 40%, 1)',
        'border-color-light': 'hsla(0, 0%, 100%, 0.7)',
        'error-color': 'hsl(0, 68%, 56%, 0.8)'
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1024px",
        lg: "1200px",
        xl: "1700px",
      },
      boxShadow: {
        'custom': '0px 4px 16px 4px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}

