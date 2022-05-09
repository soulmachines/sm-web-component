import { JSX } from 'preact';
import { SoulMachinesProvider } from '../../contexts/SoulMachinesContext';
import { Video } from '../Video';

export type SMWidgetProps = {
  apiKey?: string;
  tokenServer?: string;
  autoConnect: string;
  connectingIndicator?: JSX.Element;
};

export function SMWidget({ autoConnect, tokenServer, apiKey, connectingIndicator }: SMWidgetProps) {
  // Cast from string into a boolean
  const isAutoConnect = autoConnect === 'true';

  return (
    <SoulMachinesProvider apiKey={apiKey} tokenServer={tokenServer}>
      <Video autoConnect={isAutoConnect} loadingIndicator={connectingIndicator} />
    </SoulMachinesProvider>
  );
}
SMWidget.defaultProps = {
  autoConnect: 'true',
};
