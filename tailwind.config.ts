import type { Config } from 'tailwindcss'
export default <Config>{
  content: [],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '576px',
      // => @media (min-width: 576px) { ... }

      md: '960px',
      // => @media (min-width: 960px) { ... }

      lg: '1440px'
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        dark: '#121212',
        light: '#f5f5f5',
        primary: '#41b983',
        secondary: '#354a5f',
        accent: '#647eff'
      },
      fontFamily: {
        body: ['"Poppins"', 'sans-serif'],
        handwritten: ['"Satisfy"', 'cursive'],
        sans: ['"Merriweather"', 'serif']
      }
    }
  },
  plugins: []
}
