import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { useSMMedia } from '../../hooks/useSMMedia';
import { IconButton } from '../IconButton';

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
      <div className="sm-flex sm-justify-between sm-ml-auto">
        <IconButton onClick={disconnect} name="chevronDown" title="Close video" />
      </div>

      <div className="sm-flex sm-justify-between">
        <IconButton onClick={toggleMicrophone} name={microphoneIcon} title={microphoneText} />
        <IconButton onClick={toggleCamera} name={cameraIcon} title={cameraText} />
      </div>
    </div>
  );
}
