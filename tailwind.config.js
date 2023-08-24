/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      test: { max: "1619px" },
      big: { max: "1536px" },
      xxl: { max: "1380px" },
      xl: { max: "1280px" },
      lg: { max: "1124px" },
      md: { max: "868px" },
      sm: { max: "640px" },
    },
    extend: {
      backgroundImage: {
        slide1: "url('../src/img/slider/slide1.png')",
        slide2: "url('../src/img/slider/slide2.png')",
        slide3: "url('../src/img/slider/slide3.png')",
        slide4: "url('../src/img/slider/slide4.png')",
        slide5: "url('../src/img/slider/slide5.png')",
        bgmain: "url('../src/img/slider/bg1.png')",
      },
      fontFamily: {
        GothamPro: ["Gotham Pro"],
        Bowler: ["Bowler"],
        Akira: ["Akira"],
      },
      colors: {
        mainViolet: "#52357D",
        mainBlue: "#3474DC",
        cyberpunk: "#D6FE50",
        whiteGray: "#E1E1E1",
        darkViolet: "#332154",
        lightViolet: "#624194",
      },
    },
  },
  plugins: [],
};
