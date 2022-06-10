import { VideoControls } from '.';
import { SMProviderDecorator } from '../../../.storybook/decorators/SMProviderDecorator';

export default {
  title: `Components / VideoControls`,
  component: VideoControls,
  decorators: [SMProviderDecorator],
};

export const Basic = () => <VideoControls />;
