import type { Config } from "tailwindcss"
import colors from 'tailwindcss/colors'

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {

    container: {
      center: true,
      padding: {
        DEFAULT: '0rem',
        sm: '0rem',
        md: '0rem',
        lg: '4rem',
        xl: '4rem',
        '2xl': '4rem'
      },
      screens: {
        "sm": "320px",
        "md": "575px",
        "lg": "768px",
        "xl": "1024px",
        "2xl": "1536px"
      },
    },

    colors: {

      // default 
      gray: colors.gray,
      black: colors.black,
      white: colors.white,
      transparent: 'transparent',

      primary :{

      },
      secondary :{
        
      }

    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config