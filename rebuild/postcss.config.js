const productionPlugins = [
  require('cssnano')({
    preset: 'default',
    discardComments: { removeAll: true },
  }),
];

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('@thedutchcoder/postcss-rem-to-px', { baseValue: 10 }),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? productionPlugins : []),
  ],
};
