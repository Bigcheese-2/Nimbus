import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },

      colors: {
        background: "#0A0A0A",
        foreground: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

export default config;
