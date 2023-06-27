/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/index.html',
  ],
  theme: {
    extend: {
      colors: {
            'Very-dark-desaturated-blue':'hsl(238, 29%, 16%)',
            'Soft-red':'hsl(14, 88%, 65%)',
            'Soft-violet':'hsl(273, 75%, 66%)',
            'Soft-blue':'hsl(240, 73%, 65%)',
            'Very-dark-grayish-blue':'hsl(237, 12%, 33%)',
            'Dark-grayish-blue':'hsl(240, 6%, 50%)',
            'Light-grayish-blue':'hsl(240, 5%, 91%)'
      },
      fontFamily:{
        'Kumbh-Sans':['Kumbh Sans', 'sans-serif']
      },
      screens:{
        'desktop':'1440px'
      }
    },
  },
  plugins: [],
}
