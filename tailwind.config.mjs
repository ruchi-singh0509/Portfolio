import { Outfit, Ovo } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#f5f3ff', // very light purple
        darkHover: '#2a004a',
        darkTheme: '#0a0014', // deeper black for dark mode
        accent: {
          DEFAULT: '#7C3AED', // main purple
          light: '#A78BFA',   // light purple
          dark: '#5B21B6',    // dark purple
        },
        secondary: {
          DEFAULT: '#6D28D9', // another purple shade
          light: '#C4B5FD',   // lighter purple
          dark: '#4C1D95',    // darkest purple
        },
        background: {
          light: '#F3F0FF',   // soft purple-tinted white
          dark: '#18181B',    // dark gray/black
        },
        border: {
          light: '#E5E7EB',
          dark: '#27272A',
        },
        text: {
          light: '#18181B',
          dark: '#F3F4F6',
        },
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"]
      },
      boxShadow: {
        'black': '4px 4px 0 #000',
        'white': '4px 4px 0 #fff',
        'xl': '0 8px 32px 0 rgba(124,58,237,0.15)',
        'glass': '0 4px 32px 0 rgba(124,58,237,0.10)',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
        'spacing': 'margin, padding',
        'all': 'all',
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
};
