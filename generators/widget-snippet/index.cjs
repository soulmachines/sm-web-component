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
      name: 'cssFileName',
      message: 'Enter the built css filename',
      default: '',
    },
    {
      type: 'input',
      name: 'version',
      message: 'Enter the version of the web component',
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
