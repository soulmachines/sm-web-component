import { ConversationStatus, ConversationStatusProps } from '.';

export default {
  title: `App Components / ConversationStatus`,
  component: ConversationStatus,
  argTypes: {
    status: {
      control: 'select',
      options: ['dpSpeaking', 'conversationIdle', 'userSpeaking', 'dpProcessing'],
      defaultValue: 'conversationIdle',
    },
  },
};

export const Basic = ({ status }: ConversationStatusProps) => (
  <ConversationStatus status={status} />
);
