import { useEffect, useRef } from 'preact/hooks';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { LoadingIndicator } from '../LoadingIndicator';

export function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scene, isConnecting } = useSoulMachines();
  const videoStream = scene?.videoElement?.srcObject;

  useEffect(() => {
    if (videoRef.current && videoStream) {
      videoRef.current.srcObject = videoStream;
    }
  }, [videoRef, videoStream]);

  if (isConnecting) {
    return <LoadingIndicator />;
  }

  return <video muted autoPlay ref={videoRef} />;
}
