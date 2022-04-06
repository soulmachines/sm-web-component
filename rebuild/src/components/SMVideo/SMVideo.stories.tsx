import { SMVideo, SMVideoProps } from './SMVideo';

export default {
  title: 'Components / SMVideo',
  component: SMVideo,
};

export const Basic = ({ apiKey }: SMVideoProps) => <SMVideo apiKey={apiKey} />;
Basic.args = {
  apiKey: import.meta.env.VITE__PROJECT_API_KEY,
};
