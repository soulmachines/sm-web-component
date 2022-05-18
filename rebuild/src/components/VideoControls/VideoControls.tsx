import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { useSMMedia } from '../../contexts/SoulMachinesMedia';
import { Icon } from '../Icon';

export function VideoControls() {
  const { disconnect } = useSoulMachines();
  const { toggleMicrophone, isMicrophoneEnabled } = useSMMedia();

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
