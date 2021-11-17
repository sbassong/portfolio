module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        backgroundImage: {
          'needle-bg': "url('https://i.imgur.com/HaSdxXz.jpg?1')",
          'crystal-bg': "url('https://i.imgur.com/Io5GjW9.png')",
          'eastlake-bg': "url('https://i.imgur.com/X5zmTlb.jpg?2')",
        }
      }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
