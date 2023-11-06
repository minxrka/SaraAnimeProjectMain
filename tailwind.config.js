/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xlbig: { max: "1715px" },
      xbig: { max: "1619px" },
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
        WatchAnimeBg:
          "url('../src/img/trailer-photo/kensin/64a70ec4d2ceb025626775.jpg')",
        RandomAnimeBg:
          "url('../src/img/trailer-photo/death note/2914841108.jpg')",
        heroGradient: "linear-gradient(270deg, #2B60CA 0%, #754BB6 100%)",
        WatchGradient:
          "linear-gradient(180deg, rgba(82 53 125 0.85) 0%, #52357D 95%)",
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
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "pulse-slow": "pulse 3s linear infinite",
      },
    },
  },
  plugins: [],
};
