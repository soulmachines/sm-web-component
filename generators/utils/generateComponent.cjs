const componentExists = require('./componentExists.cjs');

function generateComponent(type) {
  return {
    description: `Add a ${type}`,
    prompts: [
      // Ask for the component name
      {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Button',
        validate: (value) => {
          if (/.+/.test(value)) {
            return componentExists(value, type)
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
          path: `../src/${type}/{{properCase name}}/index.ts`,
          templateFile: './components/index.ts.template',
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `../src/${type}/{{properCase name}}/{{properCase name}}.tsx`,
          templateFile: './components/component.tsx.template',
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `../src/${type}/{{properCase name}}/{{properCase name}}.test.tsx`,
          templateFile: './components/test.tsx.template',
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `../src/${type}/{{properCase name}}/{{properCase name}}.stories.tsx`,
          templateFile: `./${type}/stories.tsx.template`,
          abortOnFail: true,
        },
      ];

      return actions;
    },
  };
}

module.exports = generateComponent;
