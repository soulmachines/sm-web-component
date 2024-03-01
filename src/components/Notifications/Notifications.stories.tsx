import { Notifications } from '.';
import { SMProviderDecorator } from '../../../.storybook/decorators/SMProviderDecorator';

export default {
  title: 'Components / Notifications',
  component: Notifications,
  decorators: [SMProviderDecorator],
};

export const Basic = () => <Notifications />;
