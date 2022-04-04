import { SoulMachinesProvider } from '../../contexts/SoulMachinesContext';
import { Video } from '../Video';

export type SMVideoProps = {
  apiKey: string;
};

export function SMVideo({ apiKey }: SMVideoProps) {
  return (
    <SoulMachinesProvider apiKey={apiKey}>
      <Video />
    </SoulMachinesProvider>
  );
}
