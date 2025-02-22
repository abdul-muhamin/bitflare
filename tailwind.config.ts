import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "generative": "url(/images/backaibot.png)",
          "background-about": "url(/images/aboutimage.png)"
          
      },
      colors: {
        yellow: '#facc15',
        red: '#ef4444',
        green: '#10b981',
      },
    },
  },
  plugins: [],
};
export default config;
