import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark-mode palette: deep coastal navy canvas, ivory text, brightened teal accent.
        // Token names kept stable so component classes don't change.
        ink: {
          DEFAULT: "#F1F5F9",
          soft: "#CBD5E1",
        },
        muted: "#94A3B8",
        hairline: "#1F3A57",
        surface: {
          DEFAULT: "#0B1F33",
          warm: "#13304D",
          deep: "#06121F",
        },
        accent: {
          DEFAULT: "#2DD4BF",
          deep: "#14B8A6",
          soft: "#CCE7E3",
          "sea-glass": "#99F6E4",
        },
        destructive: "#F87171",
      },
      fontFamily: {
        sans: ['"Compass Sans"', "system-ui", "sans-serif"],
        serif: ['"Compass Serif"', "Georgia", "serif"],
      },
      fontSize: {
        xs: ["12px", { lineHeight: "1.5" }],
        sm: ["14px", { lineHeight: "1.55" }],
        base: ["16px", { lineHeight: "1.65" }],
        md: ["18px", { lineHeight: "1.6" }],
        lg: ["22px", { lineHeight: "1.4" }],
        xl: ["30px", { lineHeight: "1.2" }],
        "2xl": ["42px", { lineHeight: "1.1" }],
        "3xl": ["clamp(3rem, 6vw, 5.25rem)", { lineHeight: "1.05" }],
        "4xl": ["clamp(3.5rem, 8vw, 7.5rem)", { lineHeight: "1" }],
      },
      letterSpacing: {
        tightest: "-0.02em",
        label: "0.06em",
      },
      maxWidth: {
        prose: "980px",
        landing: "1200px",
      },
      spacing: {
        section: "96px",
        "section-mobile": "64px",
      },
      borderRadius: {
        card: "10px",
        callout: "6px",
        pill: "999px",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
