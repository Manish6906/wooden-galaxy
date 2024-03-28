/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        "abhaya-libre":["Abhaya Libre", "serif"],
        ABeeZee:["ABeeZee", "sans-serif"],
        DM:["DM Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
};
