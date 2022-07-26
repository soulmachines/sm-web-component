import { Video } from './Video';
import { SMProviderDecorator } from '../../../.storybook/decorators/SMProviderDecorator';

export default {
  title: 'App Components / Video',
  component: Video,
  decorators: [SMProviderDecorator],
};

export const Basic = () => <Video autoConnect={true} />;
