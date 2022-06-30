import { Scene } from '@soulmachines/smwebsdk';
import { useEffect, useState } from 'preact/hooks';
import { SessionDataKeys } from '../../enums';

function useSMMedia(scene: Scene) {
  const [isVideoMuted, setIsVideoMuted] = useState(scene.videoElement?.muted || false);
  const [isMicrophoneEnabled, setIsMicrophoneEnabled] = useState(false);
  const [isCameraEnabled, setIsCameraEnabled] = useState(false);
  const isConnected = scene.isConnected();

  // Set initial active state
  useEffect(() => {
    if (isConnected) {
      setIsMicrophoneEnabled(scene.isMicrophoneActive());
      setIsCameraEnabled(scene.isCameraActive());
    }
  }, [isConnected, scene]);

  /*
   In resume session, connect with one of mic & cam on while the other off will result in ICE connection fail and websocket close. 
   This could be WebRTC lib related issue, will be revisit later after upgrading WebRTC in video host.
   The alternative here is to always connect resume session without cam & mic and toggle them on later.
   */
  useEffect(() => {
    if (isConnected) {
      //update status based on session storage
      const cameraSaved = sessionStorage.getItem(SessionDataKeys.cameraEnabled) === 'true';
      const microphoneSaved = sessionStorage.getItem(SessionDataKeys.microphoneEnabled) === 'true';
      scene.setMediaDeviceActive({
        camera: cameraSaved,
      });
      setIsCameraEnabled(cameraSaved);

      scene.setMediaDeviceActive({
        microphone: microphoneSaved,
      });
      setIsMicrophoneEnabled(microphoneSaved);
    }
  }, [isConnected, scene]);

  const toggleMicrophone = async () => {
    try {
      const micStatus = !isMicrophoneEnabled;
      await scene.setMediaDeviceActive({
        microphone: !isMicrophoneEnabled,
      });

      setIsMicrophoneEnabled(micStatus);
      sessionStorage.setItem(SessionDataKeys.microphoneEnabled, micStatus.toString());
    } catch (error) {
      // Silently ignore this error. Revisit in QUIC-1744
    }
  };

  const toggleCamera = async () => {
    try {
      const cameraStatus = !isCameraEnabled;
      await scene.setMediaDeviceActive({
        camera: cameraStatus,
      });

      setIsCameraEnabled(cameraStatus);
      sessionStorage.setItem(SessionDataKeys.cameraEnabled, cameraStatus.toString());
    } catch (error) {
      // Silently ignore this error. Revisit in QUIC-1744
    }
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
