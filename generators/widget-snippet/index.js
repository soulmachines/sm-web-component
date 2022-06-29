'use strict';

module.exports = {
  description: 'Create sm-widget snippet',
  prompts: [
    {
      type: 'input',
      name: 'javascriptFileName',
      message: 'Enter the built widgets javascript filename',
    },
    {
      type: 'input',
      name: 'cssFileNames',
      message: 'Enter the built css filename',
      default: [],
    },
  ],
  actions: () => {
    // Generate file
    const actions = [
      {
        type: 'add',
        path: '../dist/widget-snippet.js',
        templateFile: './widget-snippet/snippet.js.template',
        abortOnFail: true,
        force: true,
      },
    ];

    return actions;
  },
};
