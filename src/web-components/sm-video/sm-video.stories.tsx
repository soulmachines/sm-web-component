import type { Meta, StoryObj } from '@storybook/preact';
import { SMVideo } from './SMVideo';
import './index';

/**
 * Add the sm-video tag to the JSX namespace
 * so we can use it in our stories without TS errors
 */
declare module 'preact' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'sm-video': JSX.HTMLAttributes<HTMLElement>;
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
  'auto-connect'?: boolean;
}

/**
 * Component Setup
 */
const meta: Meta = {
  title: 'Web Components / sm-video',
  component: SMVideo,
  render: (args: WidgetWebComponentProps) => <sm-video {...args} />,
  argTypes: {
    'api-key': { control: 'text' },
    'token-server': { control: 'text' },
    'auto-connect': { control: 'boolean' },
  },
  // default values
  args: {
    'api-key': import.meta.env.VITE__PROJECT_API_KEY,
    'auto-connect': true,
  },
};

export default meta;

/**
 * Stories
 */

/**
 * naming this story 'sm-video' will make it the default story because:
 * - it matches the last part of the `title` property in component setup
 * - and it is the only named exported story
 */
export const DefaultStory: StoryObj = {
  name: 'sm-video',
  args: {},
};
