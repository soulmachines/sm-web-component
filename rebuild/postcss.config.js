const productionPlugins = {
  cssnano: {},
};

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? productionPlugins : {}),
  },
};
