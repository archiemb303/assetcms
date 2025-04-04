/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", 
    ],
    theme: {
      extend: {
        colors: {
          primary: "#056791",  
          danger: "#ff0000",
          darkGray: "#333333",
        },
      },
    },
    plugins: [],
};
