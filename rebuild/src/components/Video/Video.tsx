import { useEffect, useRef } from 'preact/hooks';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';

export function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scene } = useSoulMachines();
  const videoStream = scene?.videoElement?.srcObject;

  useEffect(() => {
    if (videoRef.current && videoStream) {
      videoRef.current.srcObject = videoStream;
    }
  }, [videoRef, videoStream]);

  return <video muted autoPlay ref={videoRef} />;
}
