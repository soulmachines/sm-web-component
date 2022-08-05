import classNames from 'classnames';
import { LoadingIndicator } from '../LoadingIndicator';
import SpeadingDotsAnimation from './components/SpreadingDots';
import WaveFormAnimation from './components/WaveForm';

export enum ListeningStatusTypes {
  dpSpeaking = 'dpSpeaking',
  dpIdle = 'dpIdle',
  userSpeaking = 'userSpeaking',
  dpProcessing = 'dpProcessing',
}

export type ListeningStatusProps = {
  status: keyof typeof ListeningStatusTypes;
};

export function ListeningStatus({ status }: ListeningStatusProps) {
  const wapperClassNames = classNames({
    'sm-flex sm-justify-center sm-items-center sm-transition-all sm-w-[42px] sm-h-[42px] sm-rounded-full sm-gap-x-1':
      true,
    'sm-bg-grayscale-900': status === ListeningStatusTypes.dpSpeaking,
    'sm-bg-white sm-animate-spread': status === ListeningStatusTypes.dpIdle,
    'sm-bg-secondary-400': status === ListeningStatusTypes.userSpeaking,
    'sm-bg-white': status === ListeningStatusTypes.dpProcessing,
  });

  return (
    <div className={wapperClassNames}>
      {status === ListeningStatusTypes.dpSpeaking && (
        <WaveFormAnimation title="Digital Person Speaking" />
      )}

      {status === ListeningStatusTypes.dpIdle && (
        <SpeadingDotsAnimation title="Digital Person Waiting" />
      )}

      {status === ListeningStatusTypes.userSpeaking && <WaveFormAnimation title="User Speaking" />}

      {status === ListeningStatusTypes.dpProcessing && (
        <LoadingIndicator title="Digital Person Processing" />
      )}
    </div>
  );
}
