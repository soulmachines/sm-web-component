import { SMVideo, SMVideoProps } from './SMVideo';
import { FixedHeightDecorator } from '../../../../.storybook/decorators/FixedHeightDecorator';

export default {
  title: 'Web Components / SMVideo',
  component: SMVideo,
  decorators: [FixedHeightDecorator],
};

export const ApiKey = ({ apiKey }: SMVideoProps) => <SMVideo apiKey={apiKey} />;
ApiKey.args = {
  apiKey: import.meta.env.VITE__PROJECT_API_KEY,
};

export const TokenServer = ({ tokenServer }: SMVideoProps) => <SMVideo tokenServer={tokenServer} />;
TokenServer.args = {
  tokenServer: import.meta.env.VITE__TOKEN_SERVER,
};
