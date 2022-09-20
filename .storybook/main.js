const { mergeConfig } = require('vite');

module.exports = {
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
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/preact',
  core: { builder: '@storybook/builder-vite' },
};
