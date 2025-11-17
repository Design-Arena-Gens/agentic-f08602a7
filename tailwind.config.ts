import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7ff",
          100: "#d9edff",
          200: "#baddff",
          300: "#8cc8ff",
          400: "#56aaff",
          500: "#2b89ff",
          600: "#1e6ee6",
          700: "#1a59b8",
          800: "#184e96",
          900: "#173f74"
        }
      }
    }
  },
  plugins: []
};

export default config;
