module.exports = {
  // Function that allows vite config overrides
  async viteFinal(config) {
    config.esbuild = {
      jsxInject: `import { h } from 'preact'`,
    };

    return config;
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/preact',
  core: { builder: '@storybook/builder-vite' },
};
