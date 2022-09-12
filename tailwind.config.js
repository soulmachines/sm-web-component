module.exports = {
  content: ['./src/**/**/**.tsx'],
  theme: {
    screens: {
      md: { raw: '(min-width: 768px) and (min-height: 450px)' },
    },
    colors: {
      transparent: 'transparent',
      white: '#FFF',
      black: '#000',
      gray: {
        lightest: 'var(--sm-color-gray-lightest)',
        light: 'var(--sm-color-gray-light)',
      },
      primary: {
        lightest: 'var(--sm-color-primary-lightest)',
        light: 'var(--sm-color-primary-light)',
        base: 'var(--sm-color-primary-base)',
        dark: 'var(--sm-color-primary-dark)',
      },
      secondary: {
        base: 'var(--sm-color-secondary-base)',
      },
      tertiary: {
        base: 'var(--sm-color-tertiary-base)',
        dark: 'var(--sm-color-tertiary-dark)',
      },
      text: {
        main: 'black',
      },
    },
    extend: {
      borderWidth: {
        1: '1px',
      },
      borderRadius: {
        inherit: 'inherit',
        sm: '0.25rem',
      },
      boxShadow: {
        sm: 'var(--sm-box-shadow-sm)',
        md: 'var(--sm-box-shadow-md)',
        lg: 'var(--sm-box-shadow-lg)',
        xl: 'var(--sm-box-shadow-xl)',
      },
      fontFamily: {
        primary: ['var(--sm-font-family-primary)'],
      },
      maxHeight: {
        contentCard: '34.25rem',
        87: '21.75rem',
      },
      height: {
        18: '4.5rem',
        35: '8.75rem',
        54: '13.5rem',
      },
      width: {
        18: '4.5rem',
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
      animation: {
        grow: 'grow 1.2s ease-in-out infinite',
        spread: 'spread 1.6s ease-in-out infinite',
      },
      keyframes: {
        grow: {
          '0%': { transform: 'scaleY(.3)' },
          '50%': { transform: 'scaleY(1)' },
          '100%': { transform: 'scaleY(.3)' },
        },
        spread: {
          '0%': { columnGap: '2px' },
          '50%': { columnGap: '4px' },
          '100%': { columnGap: '2px' },
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
  corePlugins: {
    preflight: false,
  },
};
