import { mergeConfig } from 'vite';

export default {
  // Function that allows vite config overrides
  async viteFinal(config) {
    return mergeConfig(config, {
      // customize the Vite config here
      base: '',
      esbuild: {
        jsxInject: `import { h } from 'preact'`,
      },
      resolve: {
        alias: {
          react: 'preact/compat',
          'react-dom': 'preact/compat',
        },
      },
    });
  },

  stories: ['../**/*.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],

  framework: {
    name: '@storybook/preact-vite',
    options: {},
  },
};
