import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { Icon } from '../Icon';

export function VideoControls() {
  const { disconnect } = useSoulMachines();

  return (
    <button onClick={disconnect}>
      <Icon name="close" title="Close video" />
    </button>
  );
}
