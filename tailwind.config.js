/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#4592AF", // Main Highlight Color
        secondary: "#33313B", // Dark Text Color
        accent: "#E3C4A8", // Accent Color for Highlights
        background: "#F6F5F5", // Light Background Color
        darkBlue: "#201E43", // Dark Blue
        mediumBlue: "#134B70", // Medium Blue
        lightBlue: "#508C9B", // Light Blue
      },
      fontFamily: {
        Italianno: ["Italianno"],
        Playfair_Display: ["Playfair Display"],
      },
    },
  },
  plugins: [],
};
