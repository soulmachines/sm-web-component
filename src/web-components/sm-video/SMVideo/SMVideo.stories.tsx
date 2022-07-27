import { SMVideo, SMVideoProps } from './SMVideo';

export default {
  title: 'Web Components / SMVideo',
  component: SMVideo,
};

export const ApiKey = ({ apiKey }: SMVideoProps) => <SMVideo apiKey={apiKey} />;
ApiKey.args = {
  apiKey: import.meta.env.VITE__PROJECT_API_KEY,
};

export const TokenServer = ({ tokenServer }: SMVideoProps) => <SMVideo tokenServer={tokenServer} />;
TokenServer.args = {
  tokenServer: import.meta.env.VITE__TOKEN_SERVER,
};
