import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '425px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: "#313131",
        metropoliBg:"#F1F1F1",
        blueGradientStart: '#1C6EF6',
        blueGradientEnd: '#CBDCF8',
        strongBlue: '#091934'
      },
      borderRadius:{
        'xl': '1.5rem',
        'lg': '1.25rem',
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        'placeholder-gradient': 'linear-gradient(90deg, #091934 0%, #1C6EF6 100%)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.border-gradient': {
          'background-image': 'linear-gradient(white, white), linear-gradient(to right, #1C6EF6, #CBDCF8)',
          'background-origin': 'border-box',
          'background-clip': 'padding-box, border-box',
          'border': '2px solid transparent',
        },
        '.placeholder-gradient': {
          '&::placeholder': {
            'background-image': 'linear-gradient(90deg, #091934 0%, #1C6EF6 100%)',
            'background-clip': 'text',
            '-webkit-background-clip': 'text',
            'color': 'transparent',
            'font-family': 'Lato',
            'font-size': '15px',
            'font-weight': '700',
            'line-height': '18px',
            'text-align': 'left',
            'text-underline-position': 'from-font',
            'text-decoration-skip-ink': 'none',
          }
        },
        '.input-gradient': {
          'position': 'relative',
          'color': 'transparent',
          '&::before': {
            'content': 'attr(data-value)',
            'position': 'absolute',
            'left': '1rem', // match padding
            'right': '1rem',
            'background-image': 'linear-gradient(90deg, #091934 0%, #1C6EF6 100%)',
            'background-clip': 'text',
            '-webkit-background-clip': 'text',
            'color': 'transparent',
            'pointer-events': 'none',
          }
        }
      });
    }),
  ],
} satisfies Config;

