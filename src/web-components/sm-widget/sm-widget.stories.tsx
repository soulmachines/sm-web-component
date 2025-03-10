import { widgetLayout, widgetPosition } from '../../enums';
import { SMWidget } from './SMWidget';
import type { Meta, StoryObj } from '@storybook/preact';
import './index';

/**
 * Add the sm-widget tag to the JSX namespace
 * so we can use it in our stories without TS errors
 */
declare module 'preact' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'sm-widget': JSX.HTMLAttributes<HTMLElement>;
    }
  }
}

/**
 * Define the props for the sm-widget tag
 * so we can use it in our stories with TS types
 */
interface WidgetWebComponentProps {
  'api-key'?: string;
  'token-server'?: string;
  greeting?: string;
  'profile-picture'?: string;
  position?: widgetPosition;
  layout?: widgetLayout;
}

/**
 * Component Setup
 */
const meta: Meta = {
  title: 'Web Components / sm-widget',
  component: SMWidget,
  render: (args: WidgetWebComponentProps) => <sm-widget {...args} />,
  argTypes: {
    'api-key': { control: 'text' },
    'token-server': { control: 'text' },
    greeting: { control: 'text' },
    'profile-picture': { control: 'text' },
    position: {
      control: 'inline-radio',
      options: [widgetPosition.BOTTOM_LEFT, widgetPosition.BOTTOM_RIGHT],
    },
    layout: { control: 'inline-radio', options: [widgetLayout.FLOAT, widgetLayout.FULL_FRAME] },
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
export const DefaultStory: StoryObj = {
  name: 'sm-widget',
  args: {
    'api-key': import.meta.env.VITE__PROJECT_API_KEY,
  },
  parameters: {
    controls: {
      include: ['api-key'],
    },
  },
};
