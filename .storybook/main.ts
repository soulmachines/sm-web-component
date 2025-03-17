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
  addons: [
    // adds the `HTML` tab in stories, displaying the rendered HTML of the story
    // https://github.com/whitespace-se/storybook-addon-html
    '@whitespace/storybook-addon-html',
    // adds the 'controls' and 'outputs' tabs in stories
    '@storybook/addon-essentials',
  ],

  framework: {
    name: '@storybook/preact-vite',
    options: {},
  },
};
