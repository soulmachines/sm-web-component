import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { Icon } from '../Icon';
import { useSMMedia } from '../../hooks/useSMMedia';

export function VideoControls() {
  const { scene, disconnect } = useSoulMachines();
  const { isMicrophoneEnabled, isCameraEnabled, toggleMicrophone, toggleCamera } =
    useSMMedia(scene);

  const microphoneIcon = isMicrophoneEnabled ? 'microphone' : 'microphoneOff';
  const cameraIcon = isCameraEnabled ? 'camera' : 'cameraOff';
  const microphoneText = isMicrophoneEnabled ? 'Disable microphone' : 'Enable microphone';
  const cameraText = isCameraEnabled ? 'Disable camera' : 'Enable camera';

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

        <button onClick={toggleCamera}>
          <Icon name={cameraIcon} title={cameraText} />
        </button>
      </div>
    </div>
  );
}
