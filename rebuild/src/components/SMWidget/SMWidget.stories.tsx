import { SMWidget, SMWidgetProps } from './SMWidget';

export default {
  title: 'Components / SMWidget',
  component: SMWidget,
};

export const ApiKey = ({ apiKey }: SMWidgetProps) => <SMWidget apiKey={apiKey} />;
ApiKey.args = {
  apiKey: import.meta.env.VITE__PROJECT_API_KEY,
};

export const TokenServer = ({ tokenServer }: SMWidgetProps) => (
  <SMWidget tokenServer={tokenServer} />
);
TokenServer.args = {
  tokenServer: import.meta.env.VITE__TOKEN_SERVER,
};
