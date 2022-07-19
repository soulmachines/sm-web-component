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
        grayscale: {
          100: 'var(--color-grayscale-100)',
          200: 'var(--color-grayscale-200)',
          300: 'var(--color-grayscale-300)',
          400: 'var(--color-grayscale-400)',
          500: 'var(--color-grayscale-500)',
          600: 'var(--color-grayscale-600)',
          700: 'var(--color-grayscale-700)',
          800: 'var(--color-grayscale-800)',
          900: 'var(--color-grayscale-900)',
        },
        primary: {
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
        secondary: {
          100: 'var(--color-secondary-100)',
          200: 'var(--color-secondary-200)',
          300: 'var(--color-secondary-300)',
          400: 'var(--color-secondary-400)',
          500: 'var(--color-secondary-500)',
          600: 'var(--color-secondary-600)',
          700: 'var(--color-secondary-700)',
          800: 'var(--color-secondary-800)',
          900: 'var(--color-secondary-900)',
        },
        neutral: {
          100: 'var(--color-neutral-100)',
          200: 'var(--color-neutral-200)',
          300: 'var(--color-neutral-300)',
          400: 'var(--color-neutral-400)',
          500: 'var(--color-neutral-500)',
          600: 'var(--color-neutral-600)',
          700: 'var(--color-neutral-700)',
          800: 'var(--color-neutral-800)',
          900: 'var(--color-neutral-900)',
        },
        error: {
          100: 'var(--color-error-100)',
          200: 'var(--color-error-200)',
          300: 'var(--color-error-300)',
          400: 'var(--color-error-400)',
          500: 'var(--color-error-500)',
          600: 'var(--color-error-600)',
          700: 'var(--color-error-700)',
          800: 'var(--color-error-800)',
          900: 'var(--color-error-900)',
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
