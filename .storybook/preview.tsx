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
  html: {
    // disable the `HTML` tab by default
    // and enable only in specific stories, eg web components
    disable: true,
    root: '.sm-widget',
    transform: (code: string) => {
      // return only the first level of the html tree
      // so the HTML preview doesn't show the internal structure of the component
      var hostEl = document.createElement('div');
      hostEl.innerHTML = code;
      if (hostEl.firstElementChild?.innerHTML) {
        hostEl.firstElementChild.innerHTML = '';
      }
      return hostEl.innerHTML;
    },
  },
};

// Render our stories in a .sm-widget class so we get the global styles
export const decorators = [(Story) => <div className="sm-widget">{Story()}</div>];
