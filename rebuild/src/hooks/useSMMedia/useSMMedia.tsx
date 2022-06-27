import { Scene } from '@soulmachines/smwebsdk';
import { useEffect, useState } from 'preact/hooks';

function useSMMedia(scene: Scene) {
  const [isVideoMuted, setIsVideoMuted] = useState(scene.videoElement?.muted || false);
  const [isMicrophoneEnabled, setIsMicrophoneEnabled] = useState(false);
  const [isCameraEnabled, setIsCameraEnabled] = useState(false);
  const isConnected = scene.isConnected();
  const isMicrophoneActive = scene.isMicrophoneActive();
  const isCameraActive = scene.isCameraActive();

  // Set initial active state
  useEffect(() => {
    if (isConnected) {
      setIsMicrophoneEnabled(isMicrophoneActive);
      setIsCameraEnabled(isCameraActive);
    }
  }, [isConnected, isMicrophoneActive, isCameraActive]);

  const toggleMicrophone = async () => {
    try {
      await scene.setMediaDeviceActive({
        microphone: !isMicrophoneEnabled,
      });

      setIsMicrophoneEnabled(!isMicrophoneEnabled);
    } catch (error) {
      // Silently ignore this error. Revisit in QUIC-1744
    }
  };

  const toggleCamera = async () => {
    try {
      await scene.setMediaDeviceActive({
        camera: !isCameraEnabled,
      });

      setIsCameraEnabled(!isCameraEnabled);
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
