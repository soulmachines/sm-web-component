import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { Icon } from '../Icon';
import { useSMMedia } from '../../hooks/useSMMedia';

export function VideoControls() {
  const { scene, disconnect } = useSoulMachines();
  const { isMicrophoneEnabled, toggleMicrophone } = useSMMedia(scene);

  const microphoneIcon = isMicrophoneEnabled ? 'mic' : 'micOff';
  const microphoneText = isMicrophoneEnabled ? 'Disable microphone' : 'Enable microphone';

  return (
    <div className="sm-p-3 sm-flex sm-flex-col sm-justify-between sm-absolute sm-top-0 sm-left-0 sm-w-full sm-h-full">
      <div className="sm-flex sm-justify-between">
        <button onClick={disconnect} className="sm-ml-auto">
          <Icon name="chevronDown" title="Close video" />
        </button>
      </div>

      <div className="sm-flex sm-justify-between">
        <button onClick={toggleMicrophone}>
          <Icon name={microphoneIcon} title={microphoneText} />
        </button>
      </div>
    </div>
  );
}
