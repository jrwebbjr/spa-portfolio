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
        'joe': "url('/public/joe.jpg')",
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
        'pi-yellow' : '#ffcf37',
        'pi-purple' : '#c5a2cf',
        'pi-blue' : '#5ccbee',
        'pi-green' : '#83c783',
        'pi-red' : '#f25964',
      },
      boxShadow: {
        'untaped': '10px 5px 0px rgba(0, 0, 0, 0.1)',
      }
    },
    
  
  },
  plugins: [],
}

