import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { ConversationState } from '../ConversationState';
import { IconButton, Theme } from '../../components/IconButton';
import { CircularTimeOutIndicator } from '../Widget/components/CircularTimeOutIndicator';

export type VideoControlsProps = {
  duration?: number;
  delay?: number;
};

export function VideoControls({ duration, delay }: VideoControlsProps) {
  const {
    disconnect,
    isMicrophoneEnabled,
    isCameraEnabled,
    isVideoMuted,
    conversationState,
    toggleMicrophone,
    toggleCamera,
    toggleVideoMuted,
    stopSpeaking,
  } = useSoulMachines();

  const muteIcon = isVideoMuted ? 'volumeOff' : 'volume';
  const muteText = isVideoMuted ? 'Unmute video' : 'Mute video';

  const interruptText = 'Interrupt Avatar';
  const interruptIcon = 'stopTalking';
  const microphoneIcon = isMicrophoneEnabled ? 'microphone' : 'microphoneOff';
  const cameraIcon = isCameraEnabled ? 'camera' : 'cameraOff';
  const microphoneText = isMicrophoneEnabled ? 'Disable microphone' : 'Enable microphone';
  const cameraText = isCameraEnabled ? 'Disable camera' : 'Enable camera';

  return (
    // <div className="sm-h-full sm-p-3 sm-flex sm-flex-col sm-gap-y-[2px] md:sm-gap-y-2">
    <div
      style={{ height: '97%' }}
      className="sm-h-full sm-p-3 sm-flex sm-flex-col sm-gap-y md:sm-gap-y-2"
    >
      <div className="sm-flex sm-flex-col">
        <div className="sm-flex sm-justify-between sm-items-center">
          {/* <IconButton
            onClick={toggleVideoMuted}
            name={muteIcon}
            title={muteText}
            theme={isVideoMuted ? Theme.danger : Theme.default}
          /> */}
          <ConversationState state={conversationState} />
          <CircularTimeOutIndicator duration={duration} delay={delay} />
          {/* {layout === widgetLayout.FLOAT ? (
            <IconButton onClick={disconnect} name="close" title="Close video" />
          ) : (
            <IconButton onClick={toggleLayout} name={layoutToggleIcon} title={layoutToggleTitle} />
          )} */}
        </div>
      </div>
      <div className="sm-flex sm-flex-col sm-gap-y-[2px] md:sm-gap-y-2 sm-flex-1">
        <div className="sm-flex sm-justify-between sm-flex-2">
          <div className="sm-self-end">
            <IconButton
              onClick={toggleVideoMuted}
              name={muteIcon}
              title={muteText}
              theme={isVideoMuted ? Theme.danger : Theme.default}
            />
          </div>
          <div className="sm-self-end">
            {conversationState === 'dpSpeaking' ? (
              <IconButton
                onClick={stopSpeaking}
                name={interruptIcon}
                title={interruptText}
                theme={Theme.default}
              />
            ) : (
              <div></div>
            )}
          </div>
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
