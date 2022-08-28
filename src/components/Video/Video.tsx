import { JSX } from 'preact';
import { useCallback, useEffect, useMemo } from 'preact/hooks';
import useDimensions from 'react-cool-dimensions';
import { useSpring, animated, config } from 'react-spring';
import debounce from 'lodash/debounce';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { Spinner } from '../Spinner';
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

  scene.sendVideoBounds(width, height);
};

export function Video({ loadingIndicator, autoConnect }: Props) {
  const { videoRef, scene, connectionStatus, isVideoMuted, connect } = useSoulMachines();
  const videoStream = scene.videoElement?.srcObject;
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

  const onVisibilityChange = useCallback(() => {
    if (videoRef.current) {
      if (document.visibilityState !== 'visible') {
        videoRef.current.pause();
      } else {
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

  useEffect(() => {
    if (autoConnect) {
      connect();
    }
  }, [connect, autoConnect]);

  useEffect(() => {
    if (videoRef.current && videoStream) {
      videoRef.current.srcObject = videoStream;
    }
  }, [videoRef, videoStream]);

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
      {isConnecting && (loadingIndicator || <Spinner />)}

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
