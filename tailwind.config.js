/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        foreground: "#020617",
        border: "#E2E8F0",
        primaryForeground: "#F8FAFC",
        mutedForeground: "#64748B",
        success: "#16A34A",
        destructive: "#DC2626",
      },
    },
  },
  plugins: [],
};

// 1	12px	0.0025em
// 2	14px	0em	20px
// 3	16px	0em	24px
// 4	18px	-0.0025em
// 5	20px	-0.005em
// 6	24px	-0.00625em
// 7	28px	-0.0075em
// 8	35px	-0.01em
// 9	60px	-0.025em
