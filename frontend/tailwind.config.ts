import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pumpkinOrange: "#FF7518", 
        nightBlack: "#1C1C1C", 
        darkPurple: "#5D3A9B", 
        foggyGray: "#A8A8A8", 
        neonGreen: "#39FF14", 
        bloodRed: "#8A0707", 
      },
      fontFamily: {
        title: ['Bebas Neue','Playfair Display',  'sans-serif'], // Fontes para títulos
        body: ['Open Sans', 'Source Sans Pro', 'Nunito', 'sans-serif'], // Fontes para o corpo do texto
      },

    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};

export default config;
