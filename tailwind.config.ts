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
        primary: "#0E7490",
        accent: "#22C55E",
        ink: "#0F172A",
        mist: "#E2E8F0",
      },
      boxShadow: {
        soft: "0 20px 45px rgba(15, 23, 42, 0.08)",
      },
      backgroundImage: {
        glow: "radial-gradient(circle at top, rgba(14, 116, 144, 0.18), transparent 45%)",
      },
    },
  },
  plugins: [],
};

export default config;
