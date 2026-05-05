import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        surface: "#0d0814",
        "surface-2": "#13091e",
        border: "#2a1a3d",
        muted: "#8a8294",
        fg: "#ffffff",
        accent: "#a855f7",
        "accent-soft": "#c084fc",
      },
      fontFamily: {
        script: ["var(--font-script)", "cursive"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
