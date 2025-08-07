import type { Config } from "tailwindcss";
import relumeTailwindPreset from "@relume_io/relume-tailwind";

const config: Config = {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [relumeTailwindPreset],
  theme: {
    extend: {
      colors: {
        'bizzie': {
          50: '#f8faf9',
          100: '#CAD2C5',  // Light sage/green
          200: '#b8c4b8',
          300: '#a6b7a6', 
          400: '#84A98C',  // Medium sage/green
          500: '#6b8b73',
          600: '#52796F',  // Darker sage/green
          700: '#456661',
          800: '#354F52',  // Dark teal/green
          900: '#2F3E46',  // Darkest teal/green
        },
        'sage': {
          50: '#f8faf9',
          100: '#CAD2C5',
          200: '#b8c4b8',
          300: '#a6b7a6',
          400: '#84A98C',
          500: '#6b8b73',
          600: '#52796F',
          700: '#456661',
          800: '#354F52',
          900: '#2F3E46',
        },
        'forest': {
          50: '#f8faf9',
          100: '#CAD2C5',
          200: '#b8c4b8',
          300: '#a6b7a6',
          400: '#84A98C',
          500: '#6b8b73',
          600: '#52796F',
          700: '#456661',
          800: '#354F52',
          900: '#2F3E46',
        }
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'green-glow': '0 0 20px rgba(34, 197, 94, 0.3)',
        'sage-glow': '0 0 15px rgba(93, 120, 93, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
};
export default config;
