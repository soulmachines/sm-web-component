import { SoulMachinesProvider } from '../../contexts/SoulMachinesContext';
import { Video } from '../Video';

export type SMVideoProps = {
  apiKey?: string;
  tokenServer?: string;
  connectingIndicator?: JSX.Element;
};

export function SMVideo({ apiKey, tokenServer, connectingIndicator }: SMVideoProps) {
  return (
    <SoulMachinesProvider apiKey={apiKey} tokenServer={tokenServer}>
      <Video loadingIndicator={connectingIndicator} />
    </SoulMachinesProvider>
  );
}
