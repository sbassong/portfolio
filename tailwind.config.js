module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        backgroundImage: {
          'needle-bg': "url('https://i.imgur.com/Ocqn1dd.jpg?2')",
        }
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
