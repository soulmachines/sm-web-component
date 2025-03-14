const productionPlugins = [
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('cssnano')({
    preset: 'default',
    discardComments: { removeAll: true },
  }),
];

/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('@thedutchcoder/postcss-rem-to-px', { baseValue: 10 }),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? productionPlugins : []),
  ],
};
