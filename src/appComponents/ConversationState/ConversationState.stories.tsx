import { ConversationState, ConversationStateProps } from '.';

export default {
  title: 'App Components / ConversationState',
  component: ConversationState,
  argTypes: {
    state: {
      control: 'select',
      options: ['dpSpeaking', 'idle', 'userSpeaking', 'dpProcessing'],
    },
  },
  args: {
    state: 'idle',
  },
};

export const Basic = ({ state }: ConversationStateProps) => <ConversationState state={state} />;
