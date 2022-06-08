import { SMWidget, SMWidgetProps } from './SMWidget';

export default {
  title: 'Components / SMWidget',
  component: SMWidget,
};
const element = document.createElement('div');

export const ApiKey = ({ apiKey }: SMWidgetProps) => <SMWidget apiKey={apiKey} parent={element} />;
ApiKey.args = {
  apiKey: import.meta.env.VITE__PROJECT_API_KEY,
};

export const TokenServer = ({ tokenServer }: SMWidgetProps) => (
  <SMWidget tokenServer={tokenServer} parent={element} />
);
TokenServer.args = {
  tokenServer: import.meta.env.VITE__TOKEN_SERVER,
};
