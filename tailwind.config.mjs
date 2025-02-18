/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        damion: ['Damion', 'cursive'], // For Website Logo
        montserrat: ['Montserrat', 'sans-serif'], // For H1 Title & Sidebar
        jost: ['Jost', 'sans-serif'], // For Paragraph, Nav Bar, Table Text
      },
      colors: {
        backgroundPrimary: '#FFFFFF',
        backgroundSecondary: '#F7F7F7',
        backgroundForm: '#8174FF',

        mainPrimary: '#6859FF',
        mainSecondary: '#8778FB',
        mainLight: '#B0A7F8',
      },
      keyframes: {
        'modal-enter': {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        'modal-enter': 'modal-enter 0.2s ease-out',
      },
    },
  },
  plugins: [],
}
