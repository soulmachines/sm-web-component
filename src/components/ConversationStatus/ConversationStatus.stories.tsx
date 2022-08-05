import { ConversationStatus, ConversationStatusProps } from '.';

export default {
  title: `App Components / ConversationStatus`,
  component: ConversationStatus,
  argTypes: {
    status: {
      control: 'select',
      options: ['dpSpeaking', 'dpIdle', 'userSpeaking', 'dpProcessing'],
      defaultValue: 'dpIdle',
    },
  },
};

export const Basic = ({ status }: ConversationStatusProps) => (
  <ConversationStatus status={status} />
);
