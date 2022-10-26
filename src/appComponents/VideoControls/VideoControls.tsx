import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { ConversationState } from '../ConversationState';
import { IconButton, Theme } from '../../components/IconButton';
import { widgetLayout } from '../../enums';

export function VideoControls() {
  const {
    disconnect,
    isMicrophoneEnabled,
    isCameraEnabled,
    isVideoMuted,
    conversationState,
    toggleMicrophone,
    toggleCamera,
    toggleVideoMuted,
    layout,
    toggleLayout,
  } = useSoulMachines();

  const muteIcon = isVideoMuted ? 'volumeOff' : 'volume';
  const muteText = isVideoMuted ? 'Unmute video' : 'Mute video';
  const microphoneIcon = isMicrophoneEnabled ? 'microphone' : 'microphoneOff';
  const cameraIcon = isCameraEnabled ? 'camera' : 'cameraOff';
  const microphoneText = isMicrophoneEnabled ? 'Disable microphone' : 'Enable microphone';
  const cameraText = isCameraEnabled ? 'Disable camera' : 'Enable camera';
  const layoutToggleIcon = layout === widgetLayout.FLOAT ? 'arrowUpRight' : 'arrowDownLeft';
  const layoutToggleTitle =
    layout === widgetLayout.FLOAT ? 'Switch to fullframe layout' : 'Switch to float layout';

  return (
    <div className="sm-p-3 sm-flex sm-flex-col sm-justify-between sm-absolute sm-top-0 sm-left-0 sm-w-full sm-h-full">
      <div className="sm-flex sm-flex-col sm-gap-y-2">
        <div className="sm-flex sm-justify-between">
          <IconButton onClick={toggleVideoMuted} name={muteIcon} title={muteText} />
          <IconButton onClick={disconnect} name="close" title="Close video" />
        </div>
        <div className="sm-flex sm-self-end">
          <IconButton onClick={toggleLayout} name={layoutToggleIcon} title={layoutToggleTitle} />
        </div>
      </div>

      <div className="sm-flex sm-flex-col sm-gap-y-2">
        <div className="sm-flex sm-justify-between">
          <ConversationState state={conversationState} />
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
    </div>
  );
}
