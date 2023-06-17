/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#84D3F3',
      secondary: '#E5E83F',
      thirdarylol: '	#FAF9F6',
      grey: '#bababa',
      test1: '#00FF00',
      test2: '#0000FF',
      test3: '#FFC0CB',
    },
    backgroundImage: {
      'hero-pattern': "url('/public/home.webp')",
      'city-pattern': "url('/public/scv.jpg')",
      'porcelain-pattern': "url('/public/scv.jpg')",
    },
    gridTemplateRows: {
      '7': 'repeat(7, minmax(0, 1fr))',
      '6': 'repeat(6, minmax(0, auto))',
    },
  },
  plugins: [],
}

