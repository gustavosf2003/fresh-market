/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      caveat: ["Caveat", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#7FB196",
        primaryWhite: "#FFFCF8",
        dhr: "#3F4759",
      },
    },
  },
  plugins: [],
};
