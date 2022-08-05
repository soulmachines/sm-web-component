import { Button } from '../Button';
import { Card } from '../Card';

export type AudioCardProps = {
  style?: Record<string, 'string | CSSProperties | undefined'>;
};

const audioElement = document.querySelector('audio');
if (audioElement) {
  audioElement.onplay = getFrequencies;
}
let isPlaying = false;

function controlMusic() {
  if (isPlaying) {
    isPlaying = false;
    audioElement?.pause();
  } else {
    isPlaying = true;
    audioElement?.play();
  }
}

function getFrequencies() {
  try {
    analyseAudio();
  } catch (error) {
    console.log(error);
  }
}

function analyseAudio() {
  const audio = document.querySelector('audio');
  const context = new AudioContext();
  let track: MediaElementAudioSourceNode | null = null;
  if (audio) {
    track = context.createMediaElementSource(audio);
  }
  const analyser = context.createAnalyser();
  analyser.fftSize = 128;
  analyser.connect(context.destination);
  track?.connect(analyser);

  var canvasElem = document.getElementById('audio_analyser') as HTMLCanvasElement | null;
  var canvasCtx = canvasElem?.getContext('2d');
  let WIDTH = canvasCtx?.canvas.width;

  let HEIGHT = canvasCtx?.canvas.height;
  const dataArray = new Uint8Array(analyser.frequencyBinCount);

  const displayFrequencies = () => {
    analyser.getByteFrequencyData(dataArray);
    if (WIDTH == undefined) {
      WIDTH = 100;
    }
    if (HEIGHT == undefined) {
      HEIGHT = 100;
    }
    canvasCtx?.clearRect(0, 0, WIDTH, HEIGHT);
    if (canvasCtx) {
      canvasCtx.fillStyle = '#215489';
    }
    var bar_pos = 15;
    const bar_width = 5;
    for (var i = 0; i < 100; i++) {
      bar_pos = i * 8;
      const bar_height = -(dataArray[i] / 2);
      if (canvasElem) {
        canvasCtx?.fillRect(bar_pos, canvasElem.height, bar_width, bar_height);
      }
    }
    window.requestAnimationFrame(displayFrequencies);
  };
  displayFrequencies();
}

export function AudioCard({ style }: AudioCardProps) {
  return (
    <Card style={style}>
      <div>
        <audio
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/858/outfoxing.mp3"
          crossOrigin="anonymous"
        ></audio>
        <div className="sm-m-4">
          <canvas
            id="audio_analyser"
            className="sm-border sm-border-solid sm-border-blue-300"
          ></canvas>
        </div>
        <Button onClick={controlMusic}>Play</Button>
      </div>
    </Card>
  );
}
