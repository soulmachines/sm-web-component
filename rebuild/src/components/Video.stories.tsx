import { Video, VideoProps } from './Video';

export default {
  title: 'Components / Video',
  component: Video,
};

export const Basic = ({ apiKey }: VideoProps) => <Video apiKey={apiKey} />;
Basic.args = {
  apiKey: '123',
};
