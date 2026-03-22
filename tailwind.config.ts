import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cauris: {
          black: "#000000",
          void: "#030304",
          space: "#050508",
          mist: "#0c0a12",
          gold: "#c9a227",
          ember: "#e8943a",
          flame: "#f4b042",
          dawn: "#fde68a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "glow-gold": "0 0 40px rgba(244, 176, 66, 0.12), 0 0 100px rgba(232, 148, 58, 0.06)",
        "glow-gold-lg": "0 0 60px rgba(244, 176, 66, 0.18), 0 0 140px rgba(201, 162, 39, 0.08)",
      },
      animation: {
        "fade-up": "fade-up 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "pulse-slow": "pulse-slow 5s ease-in-out infinite",
        twinkle: "twinkle 6s ease-in-out infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.75" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
