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
        dark: {
          DEFAULT: '#1e2326', // Fondo principal
          card: '#252A2E',    // Fondo de tarjetas
        },
        primary: {
          DEFAULT: '#1CB698', // Tu color verde/turquesa
          hover: '#15967d',
        }
      },
    },
  },
  plugins: [],
};
export default config;