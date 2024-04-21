import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        display: 'Motter, ui-serif', 
       aveline: 'Aveline, ui-serif'
      },
      cursor: {
        default: 'url(/assets/cursor.png), default',
        pointer: 'url(/assets/cursor.png), pointer',
      },
    },
  },
  plugins: [],
};
export default config;
