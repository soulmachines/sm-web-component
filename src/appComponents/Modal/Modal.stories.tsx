import { Modal, ModalProps } from '.';
import { SMProviderDecorator } from '../../../.storybook/decorators/SMProviderDecorator';

export default {
  title: 'Components / Modal',
  component: Modal,
  decorators: [SMProviderDecorator],
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Modal Title',
    },
    description: {
      control: 'text',
      defaultValue: 'Modal Description',
    },
    isOpen: {
      control: 'boolean',
      defaultValue: true,
    },
  },
};

export const Basic = (props: ModalProps) => <Modal {...props} onClose={console.log} />;
