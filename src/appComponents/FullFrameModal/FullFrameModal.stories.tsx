import { FullFrameModal } from '.';
import { SMProviderDecorator } from '../../../.storybook/decorators/SMProviderDecorator';

export default {
  title: `App Components / FullFrameModal`,
  component: FullFrameModal,
  decorators: [SMProviderDecorator],
};

export const Basic = () => <FullFrameModal isOpen={true} />;
