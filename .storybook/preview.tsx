import React from 'react';
import '../src/web-components/sm-widget/sm-widget.css';

export const parameters = {
  options: {
    storySort: {
      order: ['Web Components', 'React Components', 'App Components', 'Components'],
    },
  },
  backgrounds: {
    default: 'grey',
    values: [
      {
        name: 'grey',
        value: '#f8f8f8',
      },
      {
        name: 'white',
        value: '#fff',
      },
      {
        name: 'black',
        value: '#000',
      },
    ],
  },
};

// Render our stories in a .sm-widget class so we get the global styles
export const decorators = [(Story) => <div className="sm-widget">{Story()}</div>];
