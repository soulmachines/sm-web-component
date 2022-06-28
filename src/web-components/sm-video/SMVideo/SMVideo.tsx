import { JSX } from 'preact';
import { SoulMachinesProvider } from '../../../contexts/SoulMachinesContext';
import { Video } from '../../../components/Video';

export type SMVideoProps = {
  apiKey?: string;
  tokenServer?: string;
  autoConnect: string;
  connectingIndicator?: JSX.Element;
};

export function SMVideo({ autoConnect, tokenServer, apiKey, connectingIndicator }: SMVideoProps) {
  // Cast from string into a boolean
  const isAutoConnect = autoConnect === 'true';

  return (
    <SoulMachinesProvider apiKey={apiKey} tokenServer={tokenServer}>
      <Video autoConnect={isAutoConnect} loadingIndicator={connectingIndicator} />
    </SoulMachinesProvider>
  );
}
SMVideo.defaultProps = {
  autoConnect: 'true',
};
