module.exports = {
  content: ['./src/**/**/**.tsx'],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      fontFamily: {
        Rubik: ['Rubik', 'monospace'],
      },
    },
  },
  plugins: [],
  prefix: 'sm-',
};