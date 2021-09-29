module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
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
  plugins: ["gatsby-plugin-postcss"],
}
