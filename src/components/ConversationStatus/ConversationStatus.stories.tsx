import { ConversationStatus, ConversationStatusProps } from '.';

export default {
  title: `App Components / ConversationStatus`,
  component: ConversationStatus,
  argTypes: {
    status: {
      control: 'select',
      options: ['dpSpeaking', 'idle', 'userSpeaking', 'dpProcessing'],
      defaultValue: 'idle',
    },
  },
};

export const Basic = ({ status }: ConversationStatusProps) => (
  <ConversationStatus status={status} />
);
