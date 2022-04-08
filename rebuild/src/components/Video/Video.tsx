import { useEffect, useRef } from 'preact/hooks';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { LoadingIndicator as DefaultLoadingIndicator } from '../LoadingIndicator';

type Props = {
  loadingIndicator?: JSX.Element;
};

export function Video({ loadingIndicator }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scene, isConnecting } = useSoulMachines();
  const videoStream = scene?.videoElement?.srcObject;

  useEffect(() => {
    if (videoRef.current && videoStream) {
      videoRef.current.srcObject = videoStream;
    }
  }, [videoRef, videoStream]);

  if (isConnecting) {
    return loadingIndicator || <DefaultLoadingIndicator />;
  }

  return <video muted autoPlay ref={videoRef} />;
}
