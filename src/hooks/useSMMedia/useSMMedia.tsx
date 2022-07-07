import { Scene } from '@soulmachines/smwebsdk';
import { useCallback, useEffect, useState } from 'preact/hooks';
import { SessionDataKeys } from '../../enums';

function useSMMedia(scene: Scene) {
  const [isVideoMuted, setIsVideoMuted] = useState(scene.videoElement?.muted || false);
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

  const setVideoMuted = useCallback(
    (enabled: boolean) => {
      if (scene.videoElement) {
        scene.videoElement.muted = enabled;
        setIsVideoMuted(enabled);
        sessionStorage.setItem(SessionDataKeys.videoMuted, enabled.toString());
      }
    },
    [scene],
  );

  /*
   In resume session, connect with one of mic & cam on while the other off will result in ICE connection fail and websocket close. 
   This could be WebRTC lib related issue, will be revisit later after upgrading WebRTC in video host.
   The alternative here is to always connect resume session without cam & mic and toggle them on later.
   */
  useEffect(() => {
    if (isConnected) {
      const cameraSaved = sessionStorage.getItem(SessionDataKeys.cameraEnabled) === 'true';
      const microphoneSaved = sessionStorage.getItem(SessionDataKeys.microphoneEnabled) === 'true';
      const videoMuted = sessionStorage.getItem(SessionDataKeys.videoMuted) === 'true';
      if (cameraSaved) setCameraActive(true);
      if (microphoneSaved) setMicrophoneActive(true);
      if (videoMuted) setVideoMuted(true);
    }
  }, [isConnected, setCameraActive, setMicrophoneActive, setVideoMuted]);

  const toggleMicrophone = async () => {
    await setMicrophoneActive(!isMicrophoneEnabled);
  };

  const toggleCamera = async () => {
    await setCameraActive(!isCameraEnabled);
  };

  const toggleVideoMuted = () => {
    setVideoMuted(!isVideoMuted);
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
