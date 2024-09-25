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
      screens: {
        // Ejemplo de breakpoints, puedes ajustarlos según tus necesidades
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
