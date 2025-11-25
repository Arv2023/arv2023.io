/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        primary: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
        },
        accent: {
          purple: "#a855f7",
          indigo: "#6366f1",
          pink: "#f472b6",
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease both",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
