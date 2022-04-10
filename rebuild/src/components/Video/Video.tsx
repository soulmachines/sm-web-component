import { useEffect, useRef } from 'preact/hooks';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';

export function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { personaVideoStream, sm } = useSoulMachines();

  useEffect(() => {
    if (videoRef.current && personaVideoStream) {
      // videoRef.current.srcObject = personaVideoStream;
      sm?.webrtc.useVideoElement(videoRef.current);
    }
  }, [videoRef, personaVideoStream, sm]);

  return <video sm-video ref={videoRef} width="400" height={250} />;
}
