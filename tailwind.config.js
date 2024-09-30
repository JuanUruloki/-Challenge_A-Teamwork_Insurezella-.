/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heroTitle: ["Montserrat-Bold", "sans-serif"],
        texts: ["Poppins-Bold", "sans-serif"],
        textRegular: ["Poppins-Medium", "sans-serif"],
      },
      colors: {
        lightBlue: "#2E77F8",
        midBlue: "#062AFC",
        darkBlue: "#101374",
        cyan: "#00aefe",
        blueishGray: "#E9F6FF",
        gray: "#E5E0E4",
      },

      boxShadow:{
        cards: "5px 14px 28px -6px rgba(46,119,248,0.88)",
        button: "22px 18px 20px 8px rgba(0,0,0,0.11)",
      },

      screens: {
        sm: "480px",
        md: "640px",
        lg: "768px",
        xl: "1024px",
        "2xl": "1280px",
        "3xl": "1536px",
      },
    },
  },
  plugins: [],
};
