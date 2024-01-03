/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: 'hsl(163, 72%, 41%)',
        BrightRed: 'hsl(356, 69%, 56%)',
        Facebook: 'hsl(208, 92%, 53%)',
        Twitter: 'hsl(203, 89%, 53%)',
        Instagram: 'linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
        YouTube: 'hsl(348, 97%, 39%)',

     
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
  plugins: [],
};
