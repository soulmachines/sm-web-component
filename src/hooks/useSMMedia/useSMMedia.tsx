import { Scene } from '@soulmachines/smwebsdk';
import { MutableRef, useCallback, useEffect, useState } from 'preact/hooks';
import { SessionDataKeys } from '../../enums';

function useSMMedia({
  scene,
  videoRef,
}: {
  scene: Scene;
  videoRef: MutableRef<HTMLVideoElement | null>;
}) {
  const [isVideoMuted, setIsVideoMuted] = useState(true);
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
        console.error(error);
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
        console.error(error);
      }
    },
    [scene],
  );

  const setVideoMuted = useCallback(
    ({ mute, saveSetting }: { mute: boolean; saveSetting: boolean }) => {
      setIsVideoMuted(mute);

      if (videoRef.current) {
        videoRef.current.muted = mute;
      }

      // Only save if the user indicated the change
      if (saveSetting) {
        sessionStorage.setItem(SessionDataKeys.videoMuted, mute.toString());
      }
    },
    [videoRef],
  );

  const playVideo = useCallback(async () => {
    const videoStream = scene.videoElement?.srcObject;

    if (videoRef.current && videoStream) {
      scene.videoElement = videoRef.current;

      // Make sure we are testing with auto unmuted
      videoRef.current.muted = false;

      return videoRef.current
        .play()
        .then(() => {
          // Video playback started, can play with audio
          const restoreMuteState = sessionStorage.getItem(SessionDataKeys.videoMuted);

          // Restore previous mute state, otherwise unmute video
          if (restoreMuteState) {
            setVideoMuted({ mute: restoreMuteState === 'true', saveSetting: false });
          } else {
            setVideoMuted({ mute: false, saveSetting: false });
          }
        })
        .catch(() => {
          // Video playback failed, can't play with audio
          setVideoMuted({ mute: true, saveSetting: false });
        });
    }
  }, [videoRef, setVideoMuted, scene.videoElement?.srcObject]);

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
    setVideoMuted({ mute: !isVideoMuted, saveSetting: true });
  };

  return {
    isMicrophoneEnabled,
    isCameraEnabled,
    isVideoMuted,
    toggleMicrophone,
    toggleCamera,
    toggleVideoMuted,
    playVideo,
  };
}

export { useSMMedia };
