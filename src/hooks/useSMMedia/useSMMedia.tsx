import { Scene } from '@soulmachines/smwebsdk';
import { useCallback, useEffect, useState } from 'preact/hooks';
import { SessionDataKeys } from '../../enums';

function useSMMedia(scene: Scene) {
  const [isVideoMuted, setIsVideoMuted] = useState(scene.videoElement?.muted || false);
  const [isMicrophoneEnabled, setIsMicrophoneEnabled] = useState(scene.isMicrophoneActive());
  const [isCameraEnabled, setIsCameraEnabled] = useState(scene.isCameraActive());
  const isConnected = scene?.isConnected();

  const setMicrophone = useCallback(
    async (microphoneStatus: boolean) => {
      try {
        await scene.setMediaDeviceActive({
          microphone: microphoneStatus,
        });

        setIsMicrophoneEnabled(microphoneStatus);
        sessionStorage.setItem(SessionDataKeys.microphoneEnabled, microphoneStatus.toString());
      } catch (error) {
        // Silently ignore this error. Revisit in QUIC-1744
      }
    },
    [scene],
  );

  const setCamera = useCallback(
    async (cameraStatus: boolean) => {
      try {
        await scene.setMediaDeviceActive({
          camera: cameraStatus,
        });

        setIsCameraEnabled(cameraStatus);
        sessionStorage.setItem(SessionDataKeys.cameraEnabled, cameraStatus.toString());
      } catch (error) {
        // Silently ignore this error. Revisit in QUIC-1744
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
      if (cameraSaved) setCamera(true);
      if (microphoneSaved) setMicrophone(true);
    }
  }, [isConnected, setCamera, setMicrophone]);

  const toggleMicrophone = async () => {
    await setMicrophone(!isMicrophoneEnabled);
  };

  const toggleCamera = async () => {
    await setCamera(!isCameraEnabled);
  };

  const toggleVideoMuted = () => {
    setIsVideoMuted(!isVideoMuted);
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
