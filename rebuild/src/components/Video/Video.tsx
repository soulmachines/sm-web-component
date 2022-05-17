import { JSX } from 'preact';
import { useEffect, useMemo } from 'preact/hooks';
import useResizeObserver from '@bedrock-layout/use-resize-observer';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { LoadingIndicator as DefaultLoadingIndicator } from '../LoadingIndicator';
import { Scene } from '@soulmachines/smwebsdk';

type Props = {
  loadingIndicator?: JSX.Element;
  autoConnect: boolean;
};

export const updateVideoBounds = (scene: Scene | null, { contentRect }: ResizeObserverEntry) => {
  const width = Math.round(contentRect.width * devicePixelRatio);
  const height = Math.round(contentRect.height * devicePixelRatio);

  scene?.sendVideoBounds(width, height);
};

export function Video({ loadingIndicator, autoConnect }: Props) {
  const { scene, isConnecting, isConnected, connect } = useSoulMachines();
  const videoStream = scene?.videoElement?.srcObject;
  const videoRef = useResizeObserver<HTMLVideoElement>(
    useMemo(() => (measurements) => updateVideoBounds(scene, measurements), [scene]),
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

  if (isConnecting) {
    return (
      <div className="sm-w-screen sm-h-screen sm-flex sm-items-center sm-justify-center">
        {loadingIndicator || <DefaultLoadingIndicator size="96" />}
      </div>
    );
  }

  if (isConnected) {
    return <video muted autoPlay ref={videoRef} className="sm-w-screen sm-h-screen" />;
  }

  return null;
}
