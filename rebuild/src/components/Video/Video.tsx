import { JSX } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { LoadingIndicator as DefaultLoadingIndicator } from '../LoadingIndicator';

type Props = {
  loadingIndicator?: JSX.Element;
  autoConnect: boolean;
};

export function Video({ loadingIndicator, autoConnect }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scene, isConnecting, isConnected, connect } = useSoulMachines();
  const videoStream = scene?.videoElement?.srcObject;

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
