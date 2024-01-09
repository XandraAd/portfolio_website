/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/backgroundImage1.jpg')",
        'brand-identity': "url('/public/brandIdentity.jpg')",
      },
      boxShadow: {
        '3xl': '0 35px 0px -25px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

