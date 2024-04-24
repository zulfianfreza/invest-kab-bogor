import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        success: {
          100: "#EDFDF8",
          200: "#08876D",
          300: "#04724D",
          400: "#066042",
        },
        warning: {
          100: "#FFF8EB",
          200: "#B25E09",
          300: "#96530F",
          400: "#80460D",
        },
        danger: {
          100: "#FEF1F2",
          200: "#E02D3C",
          300: "#BA2532",
          400: "#981B25",
        },
        primary: {
          lightest: "#8AE399",
          lighter: "#6FD278",
          light: "#5AC16B",
          base: "#40AA52",
          darkest: "#2E853E",
        },
        secondary: {
          1: "#4087AA",
          2: "#40AA87",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
