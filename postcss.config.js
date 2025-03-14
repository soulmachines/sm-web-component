import cssnano from 'cssnano';
import tailwindcss from 'tailwindcss';
import remToPx from '@thedutchcoder/postcss-rem-to-px';
import autoprefixer from 'autoprefixer';

const productionPlugins = [
  cssnano({
    preset: 'default',
    discardComments: { removeAll: true },
  }),
];

/** @type {import('postcss-load-config').Config} */
export default {
  plugins: [
    tailwindcss,
    remToPx({ baseValue: 10 }),
    autoprefixer,
    ...(process.env.NODE_ENV === 'production' ? productionPlugins : []),
  ],
};
