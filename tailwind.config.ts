import type { Config } from "tailwindcss";
import relumeTailwindPreset from "@relume_io/relume-tailwind";

const config: Config = {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [relumeTailwindPreset],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'bizzie': {
          50: '#f7f9f7',
          100: '#eef2ee',
          200: '#dde5dd',
          300: '#CAD2C5',
          400: '#b1c0b1',
          500: '#84A98C',
          600: '#6b8e73',
          700: '#52796F',
          800: '#354F52',
          900: '#2F3E46',
          950: '#1a2327',
        },
        'sage': {
          50: '#f7f9f7',
          100: '#eef2ee',
          200: '#dde5dd',
          300: '#CAD2C5',
          400: '#b1c0b1',
          500: '#84A98C',
          600: '#6b8e73',
          700: '#52796F',
          800: '#354F52',
          900: '#2F3E46',
          950: '#1a2327',
        }
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(47, 62, 70, 0.07), 0 10px 20px -2px rgba(47, 62, 70, 0.04)',
        'soft-lg': '0 10px 15px -3px rgba(47, 62, 70, 0.1), 0 4px 6px -2px rgba(47, 62, 70, 0.05)',
        'bizzie-glow': '0 0 20px rgba(132, 169, 140, 0.3)',
        'sage-glow': '0 0 15px rgba(82, 121, 111, 0.2)',
        'dark-soft': '0 2px 15px -3px rgba(0, 0, 0, 0.25), 0 10px 20px -2px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
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
