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
        rubik: ['Rubik', 'Helvetica', 'sans-serif'],
      },
      height: {
        35: '8.75rem',
        54: '13.5rem',
      },
      width: {
        35: '8.75rem',
        63: '15.75rem',
        88: '22rem',
      },
      minWidth: {
        xs: '15.625rem',
      },
      maxWidth: {
        xs: '17rem',
        md: '25rem',
        '2xl': '40rem',
        '60-screen': '60vw',
      },
      zIndex: {
        max: '9999',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('children', '& > *');
    },
  ],
  prefix: 'sm-',
};
