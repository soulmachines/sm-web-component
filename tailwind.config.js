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
          light: 'var(--color-gray-light)',
          base: 'var(--color-gray-base)',
          dark: 'var(--color-gray-dark)',
        },
        grayscale: {
          100: 'var(--color-grayscale-100)',
          200: 'var(--color-grayscale-200)',
          900: 'var(--color-grayscale-900)',
        },
        primary: {
          lightest: 'var(--color-primary-lightest)',
          light: 'var(--color-primary-light)',
          base: 'var(--color-primary-base)',
          dark: 'var(--color-primary-dark)',
          //
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
        },
        secondary: {
          100: 'var(--color-secondary-100)',
        },
        error: {
          400: 'var(--color-error-400)',
          500: 'var(--color-error-500)',
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
