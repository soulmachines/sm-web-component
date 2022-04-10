import { SoulMachinesProvider } from '../../contexts/SoulMachinesContext';
import { Video } from '../Video';
import { SoulMachinesConfig } from '../../websdk/soulmachines-config';

export type SMVideoProps = {
  apiKey?: string;
  tokenServer?: string;
};

export function SMVideo({ apiKey, tokenServer }: SMVideoProps) {
  const smConfig: SoulMachinesConfig = {
    apiKey,
    authServer: tokenServer,
  };
  return (
    <SoulMachinesProvider smConfig={smConfig}>
      <Video />
    </SoulMachinesProvider>
  );
}
