module.exports = {
  content: ['./src/**/**/**.tsx'],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      borderRadius: {
        inherit: 'inherit',
        sm: '0.25rem',
      },
      boxShadow: {
        // Translates to designs menu, hover, overlay and modal
        sm: '0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 8px rgba(0, 0, 0, 0.04), 0px 4px 16px rgba(0, 0, 0, 0.06)',
        md: '0px 2px 10px rgba(0, 0, 0, 0.04), 0px 6px 24px rgba(0, 0, 0, 0.1)',
        lg: '0px 4px 12px rgba(0, 0, 0, 0.06), 0px 12px 28px rgba(0, 0, 0, 0.12)',
        xl: '0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 8px 16px rgba(0, 0, 0, 0.12), 0px 16px 32px rgba(0, 0, 0, 0.12)',
      },
      fontFamily: {
        rubik: ['Rubik', 'Helvetica', 'sans-serif'],
      },
      maxHeight: {
        contentCard: '34.25rem',
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
        alpha: {
          black10: 'rgba(0,0,0, 0.10)',
        },
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
        neutral: {
          100: '#E8EBEE',
          200: '#CDD3DA',
          300: '#A9B4C0',
          400: '#788CA1',
          500: '#52657A',
          600: '#455463',
          700: '#3D4955',
          800: '#343D47',
          900: '#272D33',
        },
        error: {
          100: '#F7E7E5',
          200: '#F4C9C2',
          300: '#F39D8F',
          400: '#ED5645',
          500: '#BD2920',
          600: '#972C21',
          700: '#812A20',
          800: '#69271E',
          900: '#4A1F19',
        }
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
