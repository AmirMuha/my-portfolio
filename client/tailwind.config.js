const plugin = require("tailwindcss/plugin")
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx,css,.module.css}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      palatte: {
        100: "#FFE1D0",
        200: "#F0AF8A",
        300: "#AA6239",
        400: "#642A09",
        500: "#1E0B00",
      },
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      2: "2px",
      5: "5px",
      10: "10px",
    },
    fontSize: {
      tiny: "10px",
      xs: "16px",
      sm: "20px",
      "sm.2": "22px",
      "sm.4": "24px",
      "sm.6": "26px",
      "sm.8": "28px",
      md: "30px",
      "md.2": "32px",
      "md.4": "34px",
      "md.6": "36px",
      "md.8": "38px",
      lg: "40px",
      "lg.2": "42px",
      "lg.4": "44px",
      "lg.6": "46px",
      "lg.8": "48px",
      xl: "50px",
      "hero-title-sm": "40px",
      "hero-title-lg": "66px",
      "y-of-experience-sm": "144px",
      "y-of-experience-lg": "240px",
    },
    extend: {
      width: {
        "pipe-sm": "5px",
        "pipe-lg": "10px",
      },
      height: {
        "pipe-sm": "5px",
        "pipe-lg": "10px",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    "gatsby-plugin-postcss",
    plugin(({ addUtilities }) => {
      const utilities = {
        ".icon-s-1 svg": {
          width: "12px",
          height: "12px",
        },
        ".icon-s-2 svg": {
          width: "15px",
          height: "15px",
        },
        ".icon-s-3 svg": {
          width: "17px",
          height: "17px",
        },
        ".icon-s-4 svg": {
          width: "19px",
          height: "19px",
        },
        ".icon-s-5 svg": {
          width: "21px",
          height: "21px",
        },
        ".icon-s-6 svg": {
          width: "23px",
          height: "23px",
        },
        ".icon-s-7 svg": {
          width: "25px",
          height: "25px",
        },
        ".icon-s-8 svg": {
          width: "27px",
          height: "27px",
        },
        ".icon-s-9 svg": {
          width: "29px",
          height: "29px",
        },
        ".icon-s-10 svg": {
          width: "31px",
          height: "31px",
        },
        ".icon-palatte-100 svg path": {
          fill: "#FFE1D0",
        },
        ".icon-palatte-200 svg path": {
          fill: "#F0AF8A",
        },
        ".icon-palatte-300 svg path": {
          fill: "#AA6239",
        },
        ".icon-palatte-400 svg path": {
          fill: "#642A09",
        },
        ".icon-palatte-500 svg path": {
          fill: "#1E0B00",
        },
      }
      addUtilities(utilities)
    }),
  ],
}
