import React from 'react';
import '../src/web-components/sm-widget/sm-widget.css';

export const parameters = {
  options: {
    storySort: {
      order: ['Components', 'App Components'],
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

// Render our stories into a sm-widget so we get the global styles
export const decorators = [(Story) => <sm-widget>{Story()}</sm-widget>];
