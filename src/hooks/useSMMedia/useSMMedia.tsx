import { Scene } from '@soulmachines/smwebsdk';
import { MutableRef, useCallback, useEffect, useState } from 'preact/hooks';
import { SessionDataKeys } from '../../enums';

function useSMMedia({
  scene,
  canAutoPlayAudio,
  videoRef,
}: {
  scene: Scene;
  canAutoPlayAudio: boolean;
  videoRef: MutableRef<HTMLVideoElement | null>;
}) {
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

  // On connection we'll check to see if we can autoplay the video with sound
  // This will update when we determine if its possible
  // useEffect(() => {
  //   if (isConnected) {
  //     // Check if user mute the audio in previous page
  //     // const userMutedAudio = sessionStorage.getItem(SessionDataKeys.videoMuted) === 'true';
  //     // setVideoMuted({ mute: !canAutoPlayAudio || userMutedAudio, saveSetting: false });
  //   }
  // }, [canAutoPlayAudio, setVideoMuted, isConnected]);

  const playVideo = () => {
    const videoStream = scene.videoElement?.srcObject;

    if (videoRef.current && videoStream) {
      // Make sure we are testing with auto unmuted
      videoRef.current.muted = false;
      videoRef.current.srcObject = videoStream;
      videoRef.current
        .play()
        .then((_) => {
          // Video playback started ;)
          console.log('Video playback started');
          // TODO: check if stored value present and use it instead
          const userSavedMuteState = sessionStorage.getItem(SessionDataKeys.videoMuted);

          // If stored use setting
          if (userSavedMuteState) {
            console.log(
              'Video playback started with users saved setting: ',
              userSavedMuteState === 'true',
            );
            setVideoMuted({ mute: userSavedMuteState === 'true', saveSetting: false });
            // Otherwise play with sound
          } else {
            setVideoMuted({ mute: false, saveSetting: false });
          }
        })
        .catch((e) => {
          // Video playback failed ;(
          console.log('Video playback failed ', e);
          setVideoMuted({ mute: true, saveSetting: false });
        });
    }
  };

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
