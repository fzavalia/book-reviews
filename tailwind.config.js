module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "forest-dark": "url('/bg-misty-forest-dark.jpg')",
        "forest-light": "url('/bg-misty-forest.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
