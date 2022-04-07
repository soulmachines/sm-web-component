'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a component',
  prompts: [
    // Ask for the component name
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: () => {
    // Generate files
    const actions = [
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/index.ts',
        templateFile: './component/index.template.js',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/{{properCase name}}.tsx',
        templateFile: './component/component.template.js',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/{{properCase name}}.test.tsx',
        templateFile: './component/test.template.js',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/{{properCase name}}.stories.tsx',
        templateFile: './component/stories.template.js',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
