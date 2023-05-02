/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'dark-gray': '#222831',
      'gray': '#393E46',
      'teal': '#00ADB5',
      'white': '#EEEEEE',
    },
    extend: {

    },
  },
  plugins: [],
}
