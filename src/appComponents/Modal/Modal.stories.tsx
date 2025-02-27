import { Modal, ModalProps } from '.';
import { SMProviderDecorator } from '../../../.storybook/decorators/SMProviderDecorator';

export default {
  title: 'Components / Modal',
  component: Modal,
  decorators: [SMProviderDecorator],
  argTypes: {
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    isOpen: {
      control: 'boolean',
    },
  },
  args: {
    title: 'Modal Title',
    description: 'Modal Description',
    isOpen: true,
  },
};

export const Basic = (props: ModalProps) => <Modal {...props} onClose={console.log} />;
