import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { ConversationState } from '../ConversationState';
import { IconButton, Theme } from '../../components/IconButton';
import { widgetLayout } from '../../enums';
import { useEffect } from 'preact/hooks';

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
    stopSpeaking,
  } = useSoulMachines();

  const muteIcon = isVideoMuted ? 'volumeOff' : 'volume';
  const muteText = isVideoMuted ? 'Unmute video' : 'Mute video';
  const interrputIcon = 'stopSpeaking';
  const interrputText = 'Interrupt Avatar';
  const microphoneIcon = isMicrophoneEnabled ? 'microphone' : 'microphoneOff';
  const cameraIcon = isCameraEnabled ? 'camera' : 'cameraOff';
  const microphoneText = isMicrophoneEnabled ? 'Disable microphone' : 'Enable microphone';
  const cameraText = isCameraEnabled ? 'Disable camera' : 'Enable camera';
  const layoutToggleIcon = layout === widgetLayout.FLOAT ? 'arrowUpRight' : 'arrowDownLeft';
  const layoutToggleTitle =
    layout === widgetLayout.FLOAT ? 'Switch to fullframe layout' : 'Switch to float layout';

  return (
    // <div className="sm-h-full sm-p-3 sm-flex sm-flex-col sm-gap-y-[2px] md:sm-gap-y-2">
    <div
      style={{ height: '97%' }}
      className="sm-h-full sm-p-3 sm-flex sm-flex-col sm-gap-y md:sm-gap-y-2"
    >
      <div className="sm-flex sm-flex-col">
        <div style={{ justifyContent: 'right' }} className="sm-flex sm-justify-between">
          {/* <IconButton
            onClick={toggleVideoMuted}
            name={muteIcon}
            title={muteText}
            theme={isVideoMuted ? Theme.danger : Theme.default}
          /> */}
          <IconButton onClick={disconnect} name="close" title="Close video" theme={Theme.danger} />
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
        </div>
        {/* <div className="sm-flex sm-justify-between sm-flex-2"> */}
        <div style={{ justifyContent: 'left' }} className="sm-flex sm-justify-between">
          <div className="sm-self-end">
            <ConversationState state={conversationState} />
            {/* <IconButton
              onClick={stopSpeaking}
              name={interrputIcon}
              title={interrputText}
              theme={Theme.default}
            /> */}
          </div>
          {layout === widgetLayout.FLOAT && (
            <div>
              <IconButton
                onClick={toggleLayout}
                name={layoutToggleIcon}
                title={layoutToggleTitle}
              />
            </div>
          )}
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
