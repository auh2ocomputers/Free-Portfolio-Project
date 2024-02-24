/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

// Define a default color scheme
let primaryColor = colors.blue; // Default primary color
let secondaryColor = colors.green; // Default secondary color

// Check if environment variables for colors are set and override the defaults
if (process.env.NEXT_PUBLIC_PRIMARY_COLOR && colors[process.env.NEXT_PUBLIC_PRIMARY_COLOR]) {
  primaryColor = colors[process.env.NEXT_PUBLIC_PRIMARY_COLOR];
}

if (process.env.NEXT_PUBLIC_SECONDARY_COLOR && colors[process.env.NEXT_PUBLIC_SECONDARY_COLOR]) {
  secondaryColor = colors[process.env.NEXT_PUBLIC_SECONDARY_COLOR];
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      extend: {
        zIndex: {
          '-1': '-1',
          '-10': '-10',
          // Add more negative values as needed
        },
      },
    },
    colors: {
      ...colors,
      primary: primaryColor,
      secondary: secondaryColor,
    },
  },
  plugins: [],
}

