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
      'sm': '400px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    dropShadow: {
      'custom': '0px -6px 4px rgba(16, 17, 30, 0.3)', // Matches X:0, Y:-6, Blur:4, Color:#10171E with 30% opacity
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
          'background-image': 'linear-gradient(to right, #EDEDED, rgba(237, 237, 237, 0.7)), linear-gradient(to right,rgba(28, 110, 246, 0.8), rgba(237, 237, 237, 0.5),rgba(237, 237, 237, 0.1))',
          'background-origin': 'border-box',
          'background-clip': 'padding-box, border-box',
          'border': '2px solid transparent',
        },
        '.border-gradient-nt': {
          'background-image': 'linear-gradient(to right, #EDEDED, rgba(237, 237, 237, 0.7)), linear-gradient(to right,rgba(28, 110, 246, 0.8), rgba(237, 237, 237, 0.5),rgba(237, 237, 237, 0.1))',
         'background-origin': 'border-box',
          'background-clip': 'padding-box, border-box',
          'border-left': '2px solid transparent',
          'border-right': '2px solid transparent',
          'border-bottom': '2px solid transparent',
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
        'left': '1rem',
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

