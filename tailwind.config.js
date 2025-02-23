/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        foreground: "#020617",
        border: "#E2E8F0",
      },
    },
  },
  plugins: [],
};
