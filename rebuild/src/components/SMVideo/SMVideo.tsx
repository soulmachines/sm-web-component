import { SoulMachinesProvider } from '../../contexts/SoulMachinesContext';
import { Video } from '../Video';
import { SoulMachinesOptions } from '../../websdk/soulmachines-config';
import { AuthOptions } from '../../websdk/session/models/auth-options';

export type SMVideoProps = {
  apiKey?: string;
  tokenServer?: string;
};

export function SMVideo({ apiKey, tokenServer }: SMVideoProps) {
  let auth: AuthOptions | null = null;
  
  if (apiKey) {
    auth = { apiKey };
  } else if (tokenServer) {
    auth = { authServer: tokenServer };
  } else {
    auth = { authServer: '/api/jwt' };
  }

  const smOptions: SoulMachinesOptions = { auth };

  return (
    <SoulMachinesProvider smConfig={smOptions}>
      <Video />
    </SoulMachinesProvider>
  );
}
