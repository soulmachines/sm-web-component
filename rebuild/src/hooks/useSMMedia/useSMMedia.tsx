import { Scene } from '@soulmachines/smwebsdk';
import { useEffect, useState } from 'preact/hooks';

function useSMMedia(scene: Scene | null) {
  const [isMicrophoneEnabled, setIsMicrophoneEnabled] = useState(false);

  // Set initial active state
  useEffect(() => {
    if (scene?.isConnected()) {
      setIsMicrophoneEnabled(scene.isMicrophoneActive);
    }
  }, [scene]);

  const toggleMicrophone = async () => {
    if (!scene) {
      return;
    }

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
