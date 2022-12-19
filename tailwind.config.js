module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/dist/img/svg/blob1.svg')",
        'footer-texture': "url('/dist/img/svg/blob2.svg')",
      },
      colors: {
        primary: '#0ea5e9',
        dark: '#0f172a',
        gray: '#334155',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
