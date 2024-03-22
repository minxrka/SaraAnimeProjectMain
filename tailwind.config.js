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
      },
      colors: {
        mainBlue: "#1e2142",
        mainRedJapan: "#992434",
        Red50: "#fdf4f3",
        Red100: "#fce8e7",
        Red200: "#f9d2d2",
        Red300: "#f3b0ae",
        Red400: "#ec8081",
        Red500: "#e05357",
        Red600: "#cb333f",
        Red700: "#ab2533",
        Red900: "#7b202f",
        cyberpunk: "#e05357",
        whiteGray: "#E1E1E1",
        darkBlue: "#161932",
        Blue50: "#f0f5fd",
        Blue100: "#f0f5fd",
        Blue200: "#cddbf8",
        Blue300: "#aec4f3",
        Blue400: "#8da4ec",
        Blue500: "#7185e3",
        Blue600: "#5662d5",
        Blue700: "#474fbb",
        Blue800: "#3c4497",
        Blue900: "#363d79",
        mainLightRed: "#da4f4a",
        mainVanilla: "#f9e5cc",
        superLightRed: "#99243426",
      },
      /* colors: {
        mainViolet: "#1e2142",
        mainBlue: "#992434",
        cyberpunk: "#D6FE50",
        whiteGray: "#E1E1E1",
        darkViolet: "#161932",
        lightViolet: "#7185E3",
      }, */
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "pulse-slow": "pulse 3s linear infinite",
      },
    },
  },
  plugins: [],
};
