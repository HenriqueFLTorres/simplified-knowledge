module.exports = {
  content: [
    "./app/**/*.{ts,tsx,jsx,js,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sanspro: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
