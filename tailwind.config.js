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
        Bluecurve: ["Blue curve"],
        Akira: ["Akira"],
        WiGuru: ["WiGuru"],
      },
      colors: {
        /* MainBlue */ mainColor50: "#e8e9ff",
        mainColor100: "#d5d6ff",
        mainColor200: "#b5b4ff",
        mainColor300: "#8f88ff",
        mainColor400: "#7459ff",
        mainColor500: "#6533ff",
        mainColor600: "#6010ff",
        mainColor700: "#5b07fb",
        mainColor800: "#4909ca",
        mainColor900: "#3d129d",
        mainColor950: "#070211", //MAIN COLOR
        additionalColor50: "#faf5f8",
        additionalColor100: "#f6edf2",
        additionalColor200: "#efdbe6",
        additionalColor300: "#d9abc5", //MAIN ADDITIONAL COLOR
        additionalColor400: "#cf97b5",
        additionalColor500: "#bd779c",
        additionalColor600: "#a85a7f",
        additionalColor700: "#8f4767",
        additionalColor800: "#773d55",
        additionalColor900: "#65364a",
        additionalColor950: "#3b1c29",
        whiteGray: "#E1E1E1",
        mainVanilla: "#f9e5cc",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "pulse-slow": "pulse 3s linear infinite",
      },
    },
  },
  plugins: [],
};
