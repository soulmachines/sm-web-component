import { Scene } from '@soulmachines/smwebsdk';
import { useEffect, useState } from 'preact/hooks';

function useSMMedia(scene: Scene) {
  const [isMicrophoneEnabled, setIsMicrophoneEnabled] = useState(false);
  const isConnected = scene.isConnected();
  const isMicrophoneActive = scene.isMicrophoneActive();

  // Set initial active state
  useEffect(() => {
    if (isConnected) {
      setIsMicrophoneEnabled(isMicrophoneActive);
    }
  }, [isConnected, isMicrophoneActive]);

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

  return {
    isMicrophoneEnabled,
    toggleMicrophone,
  };
}

export { useSMMedia };
