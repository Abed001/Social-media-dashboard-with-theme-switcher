/** @type {import('tailwindcss').Config} */
export default {
 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
   
    extend: {
      colors: {
        lime: 'hsl(163, 72%, 41%)',
        BrightRed: 'hsl(356, 69%, 56%)',
        Facebook: '#4267B2',
        Twitter: '#1DA1F2',
        YouTube: '#FD1D1D',
        Insta:'#E1306C',

     
      },
      fontFamily: {
        Inter: 'Inter, sans-serif',
      },
      fontSize: {
        bodycopy: "14px",
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
    },
  },
  plugins: [
   
  ],
};
