/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/img/desktop/image-header.jpg')",
        "sec-three-left": "url('/img/desktop/image-graphic-design.jpg')",
        "sec-three-right": "url('/img/desktop/image-photography.jpg')",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
    },
  },
  plugins: [],
};
