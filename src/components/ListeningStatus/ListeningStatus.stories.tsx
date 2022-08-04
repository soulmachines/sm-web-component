import { ListeningStatus, ListeningStatusProps } from '.';

export default {
  title: `App Components / ListeningStatus`,
  component: ListeningStatus,
  argTypes: {
    status: {
      control: 'select',
      options: ['dpSpeaking', 'dpIdle', 'userSpeaking', 'dpProcessing'],
      defaultValue: 'dpIdle',
    },
  },
};

export const Basic = ({ status }: ListeningStatusProps) => <ListeningStatus status={status} />;
