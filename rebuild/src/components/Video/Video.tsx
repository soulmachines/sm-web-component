import { JSX } from 'preact';
import { useEffect, useMemo } from 'preact/hooks';
import useResizeObserver from '@bedrock-layout/use-resize-observer';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { LoadingIndicator as DefaultLoadingIndicator } from '../LoadingIndicator';
import { Scene } from '@soulmachines/smwebsdk';
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

  if (connectionStatus === ConnectionStatus.CONNECTING) {
    return (
      <div className="sm-w-full sm-h-full sm-flex sm-items-center sm-justify-center">
        {loadingIndicator || <DefaultLoadingIndicator size="96" />}
      </div>
    );
  }

  if (isConnected) {
    return <video autoPlay ref={videoRef} className="sm-w-full sm-h-full" />;
  }

  return null;
}
