/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        briem: `"Briem Hand", cursive`,
        indie: `"Indie Flower", cursive`,
        shadows: `"Shadows Into Light", cursive`,
        playpen: `"Playpen Sans", cursive`,
        teachers: `"Teachers", sans-serif`
      },
      colors: {
        'regal-blue': '#243c5a',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

