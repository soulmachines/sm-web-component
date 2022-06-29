import { Scene } from '@soulmachines/smwebsdk';
import { useEffect, useState } from 'preact/hooks';

function useSMMedia(scene: Scene) {
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [isMicrophoneEnabled, setIsMicrophoneEnabled] = useState(false);
  const [isCameraEnabled, setIsCameraEnabled] = useState(false);
  const isConnected = scene.isConnected();

  // Set initial active state
  useEffect(() => {
    if (isConnected) {
      setIsVideoMuted(scene.videoElement?.muted || false);
      setIsMicrophoneEnabled(scene.isMicrophoneActive());
      setIsCameraEnabled(scene.isCameraActive());
    }
  }, [isConnected, scene]);


  useEffect(() => {
    if (isConnected) {
      //update status based on session storage
      const cameraSaved = sessionStorage.getItem('sm-camera') === "true";
      const microphoneSaved = sessionStorage.getItem('sm-mic') === "true";
      if(cameraSaved){
        scene.setMediaDeviceActive({
          camera: true,
        });
        setIsCameraEnabled(cameraSaved);
      }
      if(microphoneSaved){
        scene.setMediaDeviceActive({
          microphone: true,
        });
        setIsMicrophoneEnabled(microphoneSaved)
      }
    }
  }, [isConnected, scene]);

  useEffect(() => {
    if (isConnected) {
      scene.onCameraActive.addListener((cameraStatus:boolean) =>
        sessionStorage.setItem('sm-camera', cameraStatus.toString())
      );
      scene.onMicrophoneActive.addListener((micStatus:boolean) =>
        sessionStorage.setItem('sm-mic', micStatus.toString())
      );
    }
  }, [isConnected, scene.onCameraActive, scene.onMicrophoneActive]);

  // Reset state when not connected
  useEffect(() => {
    if (!isConnected) {
      setIsVideoMuted(false);
    }
  }, [isConnected, setIsVideoMuted]);

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
