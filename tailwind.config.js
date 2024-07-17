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
        "primary-50": "#e8e9ff",
        "primary-100": "#d5d6ff",
        "primary-200": "#b5b4ff",
        "primary-300": "#8f88ff",
        "primary-400": "#7459ff",
        "primary-500": "#6533ff",
        "primary-600": "#6010ff",
        "primary-700": "#5b07fb",
        "primary-800": "#4909ca",
        "primary-900": "#3d129d",
        "primary-950": "#070211", //General body color
        "secondary-50": "#f3f2ff",
        "secondary-100": "#e9e8ff",
        "secondary-200": "#d5d4ff",
        "secondary-300": "#b7b1ff",
        "secondary-400": "#9385ff",
        "secondary-500": "#7459ff", //General button color
        "secondary-600": "#5d30f7",
        "secondary-700": "#4f1ee3",
        "secondary-800": "#4118bf",
        "secondary-900": "#37169c",
        "secondary-950": "#1f0b6a",
        "accent-50": "#faf5f8",
        "accent-100": "#f6edf2",
        "accent-200": "#efdbe6",
        "accent-300": "#d9abc5", //General player color
        "accent-400": "#cf97b5",
        "accent-500": "#bd779c",
        "accent-600": "#a85a7f",
        "accent-700": "#8f4767",
        "accent-800": "#773d55",
        "accent-900": "#65364a",
        "accent-950": "#3b1c29",
        whiteGray: "#E1E1E1",
        mainVanilla: "#f9e5cc",
        lightGray: "#F0F0F0",
        mediumGray: "#EEEEEE",
        darkGray: "#C9C9C9",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "pulse-slow": "pulse 3s linear infinite",
      },
    },
  },
  plugins: [],
};
