import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { IconButton, Theme } from '../IconButton';

export function VideoControls() {
  const {
    disconnect,
    isMicrophoneEnabled,
    isCameraEnabled,
    isVideoMuted,
    toggleMicrophone,
    toggleCamera,
    toggleVideoMuted,
  } = useSoulMachines();

  const muteIcon = isVideoMuted ? 'volumeOff' : 'volume';
  const muteText = isVideoMuted ? 'Unmute video' : 'Mute video';
  const microphoneIcon = isMicrophoneEnabled ? 'microphone' : 'microphoneOff';
  const cameraIcon = isCameraEnabled ? 'camera' : 'cameraOff';
  const microphoneText = isMicrophoneEnabled ? 'Disable microphone' : 'Enable microphone';
  const cameraText = isCameraEnabled ? 'Disable camera' : 'Enable camera';

  return (
    <div className="sm-p-3 sm-flex sm-flex-col sm-justify-between sm-absolute sm-top-0 sm-left-0 sm-w-full sm-h-full">
      <div className="sm-flex sm-justify-between">
        <IconButton onClick={toggleVideoMuted} name={muteIcon} title={muteText} />
        <IconButton onClick={disconnect} name="close" title="Close video" />
      </div>

      <div className="sm-flex sm-justify-between">
        <IconButton
          onClick={toggleMicrophone}
          name={microphoneIcon}
          title={microphoneText}
          theme={isMicrophoneEnabled ? Theme.default : Theme.danger}
        />
        <IconButton
          onClick={toggleCamera}
          name={cameraIcon}
          title={cameraText}
          theme={isCameraEnabled ? Theme.default : Theme.danger}
        />
      </div>
    </div>
  );
}
