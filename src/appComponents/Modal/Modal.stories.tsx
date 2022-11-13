import { Modal } from '.';
import { SMProviderDecorator } from '../../../.storybook/decorators/SMProviderDecorator';

export default {
  title: `App Components / Modal`,
  component: Modal,
  decorators: [SMProviderDecorator],
};

export const Basic = () => <Modal isOpen={true} />;
