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
        'sage': {
          50: '#f6f8f6',
          100: '#e3e9e3',
          200: '#c7d4c7',
          300: '#a3b6a3',
          400: '#7a947a',
          500: '#5d785d',
          600: '#4a614a',
          700: '#3d4f3d',
          800: '#334133',
          900: '#2b362b',
        },
        'forest': {
          50: '#f2f7f2',
          100: '#e0ebe0',
          200: '#c3d6c3',
          300: '#9db89d',
          400: '#759475',
          500: '#58755a',
          600: '#455d46',
          700: '#3a4b3b',
          800: '#313e32',
          900: '#2a332b',
        },
        'emerald-deep': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
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
