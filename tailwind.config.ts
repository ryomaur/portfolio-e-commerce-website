import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--inter)", "var(--noto-sans)", "sans-serif"],
      mono: ["var(--roboto-mono)", "var(--noto-sans)", "monospace"],
    },
    colors: {
      background: "#E8E8E7", // Background
      foreground: "#404040", // Foreground
      dark: "#111111", // Primary - Dark
      red: "#E03941", // Primary - Red
      light: "#EAEAEA", // Primary - Light
      blue: "#3390A6", // Primary - Blue
      altlight: "#AFAFAF", // Alternative Light
      bglight: "#F6F6F6", // Background - Light
      bglighter: "#FEFCF8", // Background - Lighter
      fglight: "#555555", // Foreground - Light
      fglighter: "#696969", // Foreground - Lighter
      bgtransparent: "rgba(232, 232, 231, 0.38)", // Transparent Background
    },
  },
  plugins: [],
};
export default config;
