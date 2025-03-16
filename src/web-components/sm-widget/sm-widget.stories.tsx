import { widgetLayout, widgetPosition } from '../../enums';
import type { Meta } from '@storybook/preact';
import './index';
import { SMWidgetElement } from './SMWidget';

/**
 * Add the sm-widget element to the JSX namespace
 * so we can use it in our JSX-based stories without TS errors
 */
declare module 'preact' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'sm-widget': JSX.HTMLAttributes<SMWidgetElement>;
    }
  }
}

interface SMWidgetAttributes {
  'api-key': string;
  'token-server': string;
  greeting: string;
  'profile-picture': string;
  position: widgetPosition;
  layout: widgetLayout;
}

/**
 * Component Setup
 */
const meta: Meta = {
  title: 'Web Components / sm-widget',
  parameters: {
    html: {
      // enable HTML tab
      disable: false,
    },
  },
  argTypes: {
    'api-key': { control: 'text' },
    'token-server': { control: 'text' },
    greeting: { control: 'text' },
    'profile-picture': { control: 'text' },
    position: {
      control: 'inline-radio',
      options: [widgetPosition.BOTTOM_LEFT, widgetPosition.BOTTOM_RIGHT],
    },
    layout: {
      control: 'inline-radio',
      options: [widgetLayout.FLOAT, widgetLayout.FULL_FRAME],
    },
  },
  // default values
  args: {
    'api-key': import.meta.env.VITE__PROJECT_API_KEY,
  },
};

export default meta;

/**
 * Stories
 */

/**
 * naming this story 'sm-widget' will make it the default story because:
 * - it matches the last part of the `title` property in component setup
 * - and it is the only named exported story
 */
export const DefaultStory = (args: SMWidgetAttributes) => <sm-widget {...args} />;
DefaultStory.storyName = 'sm-widget';
DefaultStory.args = {
  'api-key': import.meta.env.VITE__PROJECT_API_KEY,
};
