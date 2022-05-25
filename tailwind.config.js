module.exports = {
  content: [
    "./app/**/*.{ts,tsx,jsx,js}",
    "./app/components/*.{ts,tsx,jsx,js}",
    "./app/*.{ts,tsx,jsx,js}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sanspro: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
