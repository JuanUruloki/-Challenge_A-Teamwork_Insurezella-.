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
      },
      colors: {
        lightBlue: "#2E77F8",
        midBlue: "#062AFC",
        darkBlue: "#101374",
        cyan: "#00CBFE",
        blueishGray: "#E9F6FF",
        gray: "#D6D0D2",
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
