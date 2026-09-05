import type { Config } from "tailwindcss";

/**
 * 車買取ナビ デザイントークン
 * 配色は3色系統のみ: steel(濃鋼色・ベース) / chalk(オフホワイト・背景) / vermilion(朱・アクセント)
 * グレーは steel のトーンで統一（紫グラデ禁止・Inter/Roboto禁止）
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steel: {
          DEFAULT: "#232b36",
          950: "#12161d",
          900: "#181e27",
          800: "#232b36",
          700: "#303b4a",
          600: "#43505f",
          500: "#5b6979",
          400: "#7e8b9a",
          300: "#a6b0bc",
          200: "#cbd2da",
          100: "#e5e8ec",
        },
        chalk: {
          DEFAULT: "#f4f3ef",
          warm: "#edebe4",
          card: "#fbfaf7",
          line: "#dedbd2",
        },
        vermilion: {
          DEFAULT: "#c94f2f",
          deep: "#a53d21",
          dark: "#8a3018",
          soft: "#f5e2da",
          faint: "#faf0ec",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        site: "72rem",
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};
export default config;
