import { JSX } from 'preact';
import { useEffect, useMemo } from 'preact/hooks';
import useResizeObserver from '@bedrock-layout/use-resize-observer';
import { Scene } from '@soulmachines/smwebsdk';
import { useSpring, animated, config } from 'react-spring';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { LoadingIndicator as DefaultLoadingIndicator } from '../LoadingIndicator';
import { ConnectionStatus } from '../../enums';

type Props = {
  loadingIndicator?: JSX.Element;
  autoConnect: boolean;
};

export const updateVideoBounds = (scene: Scene, { contentRect }: ResizeObserverEntry) => {
  const width = Math.round(contentRect.width * devicePixelRatio);
  const height = Math.round(contentRect.height * devicePixelRatio);
  scene.sendVideoBounds(width, height);
};

export function Video({ loadingIndicator, autoConnect }: Props) {
  const { scene, connectionStatus, connect } = useSoulMachines();
  const videoStream = scene.videoElement?.srcObject;
  const isConnected = connectionStatus === ConnectionStatus.CONNECTED;
  const videoRef = useResizeObserver<HTMLVideoElement>(
    useMemo(
      () => (measurements) => isConnected && updateVideoBounds(scene, measurements),
      [scene, isConnected],
    ),
  );
  const videoAnimation = useSpring({
    opacity: isConnected ? '1' : '0',
    delay: isConnected ? 500 : 0,
    config: config.gentle,
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

  if (connectionStatus === ConnectionStatus.DISCONNECTED) {
    return null;
  }

  return (
    <div className="sm-w-full sm-h-full sm-overflow-hidden">
      {connectionStatus === ConnectionStatus.CONNECTING &&
        (loadingIndicator || <DefaultLoadingIndicator size="96" />)}

      {isConnected && (
        <animated.video
          style={videoAnimation}
          autoPlay
          ref={videoRef}
          className="sm-w-full sm-h-full sm-object-cover"
        />
      )}
    </div>
  );
}
