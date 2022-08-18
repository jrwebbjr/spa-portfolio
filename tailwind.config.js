/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '360px',
        'md': '768px',
        'lg': '1366px',
      },
      backgroundImage: {
        'woodgrain': "url('/public/woodgrain.jpg')",
        'vine': "url('/public/PNG/voodoo_pumpkin-vine-01.png')",
        'skull': "url('/public/PNG/voodoo_skull-01.png')",
      },
      fontFamily: {
        'manic': ['MANIC', 'sans-serif'],
        'manic-sketch': ['MANIC-SKETCHES', 'sans'],
        'voodoo' : ['Voodoo', 'sans'],
        'voodoo-bold': ['Voodoo-Bold', 'sans'],
        'shs': ['Stolen-Hand-Sketches', 'sans'],
        'shs-quirky': ['Stolen-Hand-Quirky', 'sans'],
        'shs-alt': ['Stolen-Hand-Alternates', 'sans'],
        'poppy': ['Poppy-Fineliner', 'sans'],
      },
      colors: {
        'pi-yellow' : '#fdfd96',
        'pi-purple' : '#fd96fd',
        'pi-blue' : '#96fdfd',
      },
    },
    
  
  },
  plugins: [],
}

