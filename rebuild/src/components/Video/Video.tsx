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
  scene?.sendVideoBounds(contentRect.width, contentRect.height);
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
    return loadingIndicator || <DefaultLoadingIndicator />;
  }

  if (isConnected) {
    return <video muted autoPlay ref={videoRef} />;
  }

  return null;
}
