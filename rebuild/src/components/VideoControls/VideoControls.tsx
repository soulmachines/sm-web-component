import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { Icon } from '../Icon';
import { useSMMedia } from '../../hooks/useSMMedia';

export function VideoControls() {
  const { scene, disconnect } = useSoulMachines();
  const { isMicrophoneEnabled, toggleMicrophone } = useSMMedia(scene);

  const microphoneIcon = isMicrophoneEnabled ? 'mic' : 'micOff';
  const microphoneText = isMicrophoneEnabled ? 'Disable microphone' : 'Enable microphone';

  return (
    <div>
      <button onClick={disconnect}>
        <Icon name="close" title="Close video" />
      </button>

      <button onClick={toggleMicrophone}>
        <Icon name={microphoneIcon} title={microphoneText} />
      </button>
    </div>
  );
}
