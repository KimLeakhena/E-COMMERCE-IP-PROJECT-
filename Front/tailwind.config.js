/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {
      colors: {
        'soft-bg': '#fff9ef',
        'main-color': '#334eac',
        'primary-color': '#bad6eb'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],

}
