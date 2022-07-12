/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      'woodgrain': "url('/public/woodgrain.jpg')",
      'vine': "url('/public/PNG/voodoo_pumpkin-vine-01.png')",
      'skull': "url('/public/PNG/voodoo_skull-01.png')",
    },
    fontFamily: {
      'voodoo' : ['Voodoo', 'sans'],
      'shs' : ['Stolen-Hand-Sketches', 'sans'],
    },
    colors: {
      'pi-yellow' : '#fdfd96',
      'pi-purple' : '#fd96fd',
      'pi-blue' : '#96fdfd',
      'white': '#FFFFFF',
    },
    extend: {},
  },
  plugins: [],
}

