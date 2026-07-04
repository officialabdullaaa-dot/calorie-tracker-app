/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F7F8FC",
          surface: "#FFFFFF",
          primary: "#2563EB",
          primaryDark: "#1D4ED8",
          secondary: "#0F766E",
          text: "#111827",
          muted: "#6B7280",
          border: "#E5E7EB",
          soft: "#EFF6FF",
          success: "#22C55E",
          danger: "#EF4444",
          warning: "#F59E0B",
        },
      },
      borderRadius: {
        app: "1.5rem",
      },
      boxShadow: {
        soft: "0 12px 40px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};