/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      transparent:'transparent',
      primary:'#f5f5f5',
      light:'#E4DFDC',
      gray:'#7F7F7F',
      dark:'#595959',
      main:'#7F6C5F',
      warning:'#F66178',
      info:'#71B9B1',
      highlight:'#EAB25F',

    },
    extend: {
      fontSize: {
        'h1': '40px',
        'h2': '24px',
        'h3': '20px',
        'h4': '14px',
        'h5': '10px',
        'h6': '8px',
      },
    },
  },
  plugins: [],
}