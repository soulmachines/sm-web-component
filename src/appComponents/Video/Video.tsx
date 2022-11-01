import { JSX } from 'preact';
import { useCallback, useEffect, useMemo } from 'preact/hooks';
import useDimensions from 'react-cool-dimensions';
import { useSpring, animated, config } from 'react-spring';
import debounce from 'lodash/debounce';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { ConnectionStatus } from '../../enums';
import { Scene } from '@soulmachines/smwebsdk';
import classNames from 'classnames';

type Props = {
  loadingIndicator?: JSX.Element;
  autoConnect: boolean;
};

export const updateVideoBounds = (scene: Scene, size: { width: number; height: number }) => {
  const width = Math.round(size.width * devicePixelRatio);
  const height = Math.round(size.height * devicePixelRatio);

  // Don't request a video stream if value is 0
  // A resize event can be triggered when animating videos in/out
  if (width === 0 || height === 0) {
    return;
  }

  scene.sendVideoBounds(width, height);
};

export function Video({ loadingIndicator, autoConnect }: Props) {
  const { videoRef, scene, connectionStatus, isVideoMuted, connect, playVideo } = useSoulMachines();
  // const videoStream = scene.videoElement?.srcObject;
  const isConnecting = connectionStatus === ConnectionStatus.CONNECTING;
  const isConnected = connectionStatus === ConnectionStatus.CONNECTED;
  const { observe } = useDimensions<HTMLVideoElement>({
    onResize: useMemo(
      () =>
        debounce(({ width, height }) => {
          updateVideoBounds(scene, { width, height });
        }, 500),
      [scene],
    ),
  });

  useEffect(() => {
    if (!videoRef.current || !isConnected) {
      return;
    }

    playVideo();
  }, [videoRef.current, isConnected]);

  const onVisibilityChange = useCallback(() => {
    if (videoRef.current) {
      if (document.visibilityState !== 'visible') {
        videoRef.current.pause();
      } else {
        //  TODO: Should we use new play function here?
        // Shouldnt assume play will work on return
        videoRef.current.play();
      }
    }
  }, [videoRef]);

  const videoAnimation = useSpring({
    opacity: isConnected ? '1' : '0',
    delay: isConnected ? 1100 : 0,
    config: config.gentle,
  });

  const videoWrapperClass = classNames({
    'sm-w-full sm-h-full sm-overflow-hidden': true,
    'sm-hidden': !isConnected && !isConnecting,
  });

  const videoClass = classNames({
    'sm-w-full sm-h-full sm-object-cover': true,
    'sm-hidden': !isConnected,
  });

  const showLoader = isConnecting && loadingIndicator;

  useEffect(() => {
    if (autoConnect) {
      connect();
    }
  }, [connect, autoConnect]);

  // useEffect(() => {
  //   if (videoRef.current && videoStream) {
  //     videoRef.current.srcObject = videoStream;
  //     videoRef.current
  //       .play()
  //       .then((_) => {
  //         // Video playback started ;)
  //         console.log('Video playback started');
  //       })
  //       .catch((e) => {
  //         // Video playback failed ;(
  //         console.log('Video playback failed ', e);
  //       });
  //   }
  // }, [videoRef, videoStream]);

  useEffect(() => {
    if (isConnected) {
      document.addEventListener('visibilitychange', onVisibilityChange);
    }
    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [isConnected, onVisibilityChange]);

  return (
    <div className={videoWrapperClass}>
      {showLoader && loadingIndicator}

      <animated.video
        style={videoAnimation}
        autoPlay
        playsInline
        data-sm-video
        className={videoClass}
        muted={isVideoMuted}
        ref={(el: HTMLVideoElement) => {
          // From the plugin docs https://github.com/wellyshen/react-cool-dimensions#how-to-share-a-ref
          // Allows for our own ref and the resizers ref
          observe(el);
          if (el) {
            videoRef.current = el;
          }
        }}
      />
    </div>
  );
}
