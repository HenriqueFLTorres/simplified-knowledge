module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js,mdx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      default: [
        '-apple-system',
        'system-ui',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Fira Sans',
        'Ubuntu',
        'Oxygen',
        'Oxygen Sans',
        'Cantarell',
        'Droid Sans',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Lucida Grande',
        'Helvetica',
        'Arial',
        'sans-serif'
      ],
    },
    extend: {},
  },
  safelist: ["clip-path-inset", "hide-top"],
  plugins: [require("@tailwindcss/typography")],
};
