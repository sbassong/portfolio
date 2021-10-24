module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        backgroundImage: {
          'needle-bg': "url('https://i.imgur.com/Ocqn1dd.jpg?2')",
          'crystal-bg': "url('https://i.imgur.com/Io5GjW9.png')",
        }
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
