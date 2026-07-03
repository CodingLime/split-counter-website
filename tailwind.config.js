/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // The whole palette derives from the two logo colours:
        // blue #0072b2 and amber #ffa900.
        split: {
          blue: {
            50: "#eef7fc",
            100: "#d5ecf8",
            200: "#a3d6f0",
            300: "#66bce6",
            400: "#2599d1",
            500: "#0072b2",
            600: "#00639b",
            700: "#004f7c",
            800: "#003959",
            900: "#062c42",
          },
          amber: {
            50: "#fff8eb",
            100: "#ffedc7",
            200: "#ffdd8f",
            300: "#ffc94d",
            400: "#ffb81f",
            500: "#ffa900",
            600: "#d98f00",
            700: "#a86e00",
            800: "#7f5400",
            900: "#5c3d00",
          },
        },
        // Near-black with the blue's hue — replaces generic gray-900.
        ink: {
          DEFAULT: "#071722",
          soft: "#12293a",
          muted: "#48606f",
          faint: "#7d919e",
        },
        // Warm off-white tinted by the amber — replaces plain white/gray-50.
        paper: {
          DEFAULT: "#faf8f2",
          deep: "#f3efe4",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        phone: "0 24px 48px -16px rgba(7, 23, 34, 0.28)",
      },
    },
  },
  plugins: [],
};
