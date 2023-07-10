/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      'mont' : ['Montserrat', 'sans-serif'],
      'barl': ['Barlow Condensed', 'sans-serif']
    },
    colors : {
      darkMdBG : '#0F0D13',
      lightMdBG : '#FFFFFF',
      transparent : 'transparent',
      accent: '#4732E7',
      white: '#FFFFFF',
      green: '#4DFF5E',
    },
  },
  plugins: [],
  darkMode: 'class'
}
