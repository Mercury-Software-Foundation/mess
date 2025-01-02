
/** @type {import('tailwindcss').Config} */

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
      fontFamily: {
        "Manrope-Bold": ["Manrope-Bold", "sans-serif"],
        "Manrope-ExtraBold": ["Manrope-ExtraBold", "sans-serif"],
        "Manrope-Light": ["Manrope-Light", "sans-serif"],
        "Manrope-ExtraLight": ["Manrope-ExtraLight", "sans-serif"],
        "Manrope-Medium": ["Manrope-Medium", "sans-serif"],
        "Manrope-Regular": ["Manrope-Regular", "sans-serif"],
        "Manrope-SemiBold": ["Manrope-SemiBold", "sans-serif"],
        Safiro: ["Safiro", "sans-serif"],
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}



// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         manrope: ['Manrope', 'sans-serif'], // Adding Manrope to Tailwind
//       },
//     },
//   },
//   plugins: [],
// };
