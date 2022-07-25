import { Scene } from '@soulmachines/smwebsdk';
import { useCallback, useEffect, useState } from 'preact/hooks';
import { SessionDataKeys } from '../../enums';

function useSMMedia(scene: Scene, canAutoPlayAudio: boolean) {
  const [isVideoMuted, setIsVideoMuted] = useState(!canAutoPlayAudio);
  const [isMicrophoneEnabled, setIsMicrophoneEnabled] = useState(scene.isMicrophoneActive());
  const [isCameraEnabled, setIsCameraEnabled] = useState(scene.isCameraActive());
  const isConnected = scene?.isConnected();

  const setMicrophoneActive = useCallback(
    async (enabled: boolean) => {
      try {
        await scene.setMediaDeviceActive({
          microphone: enabled,
        });

        setIsMicrophoneEnabled(enabled);
        sessionStorage.setItem(SessionDataKeys.microphoneEnabled, enabled.toString());
      } catch (error) {
        // Silently ignore this error. Revisit in QUIC-1744
      }
    },
    [scene],
  );

  const setCameraActive = useCallback(
    async (enabled: boolean) => {
      try {
        await scene.setMediaDeviceActive({
          camera: enabled,
        });

        setIsCameraEnabled(enabled);
        sessionStorage.setItem(SessionDataKeys.cameraEnabled, enabled.toString());
      } catch (error) {
        // Silently ignore this error. Revisit in QUIC-1744
      }
    },
    [scene],
  );

  const setVideoMuted = useCallback((enabled: boolean, fromUserAction: boolean) => {
    setIsVideoMuted(enabled);
    if (fromUserAction) {
      sessionStorage.setItem(SessionDataKeys.videoMuted, enabled.toString());
    }
  }, []);

  // On connection we'll check to see if we can autoplay the video with sound
  // This will update when we determine if its possible
  useEffect(() => {
    // Check if user mute the audio in previous page
    const userMutedAudio = sessionStorage.getItem(SessionDataKeys.videoMuted) === 'true';
    setVideoMuted(!canAutoPlayAudio || userMutedAudio, false);
  }, [canAutoPlayAudio, setVideoMuted]);

  /*
   In resume session, connect with one of mic & cam on while the other off will result in ICE connection fail and websocket close.
   This could be WebRTC lib related issue, will be revisit later after upgrading WebRTC in video host.
   The alternative here is to always connect resume session without cam & mic and toggle them on later.
   */
  useEffect(() => {
    if (isConnected) {
      //session states
      const cameraSaved = sessionStorage.getItem(SessionDataKeys.cameraEnabled) === 'true';
      const microphoneSaved = sessionStorage.getItem(SessionDataKeys.microphoneEnabled) === 'true';

      if (cameraSaved) setCameraActive(true);
      if (microphoneSaved) setMicrophoneActive(true);
    }
  }, [isConnected, setCameraActive, setMicrophoneActive]);

  // When not connected reset to initial state
  // Otherwise when you reconnect it will be in the wrong state
  useEffect(() => {
    if (!isConnected) {
      setIsMicrophoneEnabled(false);
      setIsCameraEnabled(false);
    }
  }, [isConnected]);

  const toggleMicrophone = () => setMicrophoneActive(!isMicrophoneEnabled);

  const toggleCamera = () => setCameraActive(!isCameraEnabled);

  const toggleVideoMuted = () => {
    setVideoMuted(!isVideoMuted, true);
  };

  return {
    isMicrophoneEnabled,
    isCameraEnabled,
    isVideoMuted,
    toggleMicrophone,
    toggleCamera,
    toggleVideoMuted,
  };
}

export { useSMMedia };
