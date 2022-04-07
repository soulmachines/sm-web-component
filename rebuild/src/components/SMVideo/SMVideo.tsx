import { SoulMachinesProvider } from '../../contexts/SoulMachinesContext';
import { Video } from '../Video';

export type SMVideoProps = {
  apiKey?: string;
  tokenServer?: string;
};

export function SMVideo({ apiKey, tokenServer }: SMVideoProps) {
  return (
    <SoulMachinesProvider apiKey={apiKey} tokenServer={tokenServer}>
      <Video />
    </SoulMachinesProvider>
  );
}
