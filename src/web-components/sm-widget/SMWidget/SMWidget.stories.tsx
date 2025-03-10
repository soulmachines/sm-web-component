import { widgetLayout, widgetPosition } from '../../../enums';
import { SMWidget, SMWidgetProps } from './SMWidget';

/**
 * Component Setup
 */
export default {
  title: 'React Components / SMWidget',
  component: SMWidget,
  render: (args: SMWidgetProps) => <SMWidget {...args} />,
  argTypes: {
    apiKey: { control: 'text' },
    tokenServer: { control: 'text' },
    greeting: { control: 'text' },
    profilePicture: { control: 'text' },
    position: {
      control: 'inline-radio',
      options: [widgetPosition.BOTTOM_LEFT, widgetPosition.BOTTOM_RIGHT],
    },
    layout: { control: 'inline-radio', options: [widgetLayout.FLOAT, widgetLayout.FULL_FRAME] },
  },
  // default values
  args: {
    apiKey: import.meta.env.VITE__PROJECT_API_KEY,
  },
};

const element = document.createElement('div');

/**
 * Stories
 */

export const ConnectWithApiKey = {
  args: {
    apiKey: import.meta.env.VITE__PROJECT_API_KEY,
    parent: element,
  },
  parameters: {
    controls: {
      include: ['apiKey'],
    },
  },
};

export const ConnectWithTokenServer = {
  args: {
    tokenServer: import.meta.env.VITE__TOKEN_SERVER,
    parent: element,
  },
  parameters: {
    controls: {
      include: ['tokenServer'],
    },
  },
};

export const AdvancedCustomization = {
  args: {
    apiKey: import.meta.env.VITE__PROJECT_API_KEY,
    greeting: 'This is a customized greeting!',
    profilePicture:
      'https://assets.cdn.soulmachines.cloud/AvatarCoverImages/2024stocks/UpgradedVesper.png',
    position: widgetPosition.BOTTOM_RIGHT,
    layout: widgetLayout.FLOAT,
    parent: element,
  },
  parameters: {
    controls: {
      exclude: ['parent', 'tokenServer'],
    },
  },
};
