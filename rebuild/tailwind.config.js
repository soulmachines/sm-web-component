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
      colors: {
        primary: {
          100: '#E8EBEF',
          200: '#CCD4DD',
          300: '#A5B5C7',
          400: '#6E8CAD',
          500: '#34669B',
          600: '#215489',
          700: '#234973',
          800: '#223E5D',
          900: '#1C2D41',
        },
        secondary: {
          100: '#DFEDEE',
          200: '#B6DADC',
          300: '#6BC0C7',
          400: '#2F979D',
          500: '#346B6F',
          600: '#31595B',
          700: '#2D4C4F',
          800: '#284142',
          900: '#1F2F30',
        },
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
