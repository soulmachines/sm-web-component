import { JSX } from 'preact';
import { useCallback, useEffect } from 'preact/hooks';
import { useSpring, animated, config } from 'react-spring';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { ConnectionStatus } from '../../enums';
import { Scene } from '@soulmachines/smwebsdk';

import classNames from 'classnames';

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

export function CameraFeed() {
  const { cameraRef, scene, connectionStatus, connect, playCameraFeed } = useSoulMachines();
  const isConnecting = connectionStatus === ConnectionStatus.CONNECTING;
  const isConnected = connectionStatus === ConnectionStatus.CONNECTED;
  useEffect(() => {
    if (cameraRef.current && isConnected) {
      playCameraFeed();
    }
  }, [cameraRef, isConnected, playCameraFeed]);

  const onVisibilityChange = useCallback(() => {
    if (cameraRef.current) {
      if (document.visibilityState !== 'visible') {
        cameraRef.current.pause();
      } else {
        playCameraFeed();
      }
    }
  }, [cameraRef, playCameraFeed]);

  const videoAnimation = useSpring({
    opacity: isConnected ? '1' : '0',
    delay: isConnected ? 1100 : 0,
    config: config.gentle,
  });

  useEffect(() => {
    if (isConnected) {
      document.addEventListener('visibilitychange', onVisibilityChange);
    }
    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [isConnected, onVisibilityChange]);

  return (
    <div
      className={classNames('sm-w-full sm-h-full sm-overflow-hidden', {
        'sm-hidden': !isConnected && !isConnecting,
      })}
    >
      <animated.video
        style={videoAnimation}
        autoPlay
        playsInline
        data-sm-video
        className={classNames('sm-w-full sm-h-full sm-object-cover sm-rounded-3xl', {
          'sm-hidden': !isConnected,
        })}
        ref={(el: HTMLVideoElement) => {
          // From the plugin docs https://github.com/wellyshen/react-cool-dimensions#how-to-share-a-ref
          // Allows for our own ref and the resizers ref
          //observe(el);
          if (el) {
            cameraRef.current = el;
          }
        }}
      />
    </div>
  );
}
