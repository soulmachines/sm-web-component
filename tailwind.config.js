module.exports = {
  content: ['./src/**/**/**.tsx'],
  theme: {
    screens: {
      md: { raw: '(min-width: 768px) and (min-height: 450px)' },
    },
    extend: {
      borderRadius: {
        inherit: 'inherit',
        sm: '0.25rem',
      },
      boxShadow: {
        sm: 'var(--box-shadow-sm)',
        md: 'var(--box-shadow-md)',
        lg: 'var(--box-shadow-lg)',
        xl: 'var(--box-shadow-xl)',
      },
      fontFamily: {
        primary: ['var(--font-family-primary)'],
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
      colors: {
        gray: {
          lightest: 'var(--color-gray-lightest)',
          light: 'var(--color-gray-light)',
        },
        primary: {
          lightest: 'var(--color-primary-lightest)',
          light: 'var(--color-primary-light)',
          base: 'var(--color-primary-base)',
          dark: 'var(--color-primary-dark)',
        },
        secondary: {
          base: 'var(--color-secondary-base)',
        },
        tertiary: {
          base: 'var(--color-tertiary-base)',
          dark: 'var(--color-tertiary-dark)',
        },
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
