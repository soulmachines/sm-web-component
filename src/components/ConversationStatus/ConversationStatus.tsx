import classNames from 'classnames';
import { LoadingIndicator } from '../LoadingIndicator';
import SpeadingDotsAnimation from './components/SpreadingDots';
import WaveFormAnimation from './components/WaveForm';

export enum ConversationStatusTypes {
  dpSpeaking = 'dpSpeaking',
  idle = 'idle',
  userSpeaking = 'userSpeaking',
  dpProcessing = 'dpProcessing',
}

export type ConversationStatusProps = {
  status: keyof typeof ConversationStatusTypes;
};

export function ConversationStatus({ status }: ConversationStatusProps) {
  const wapperClassNames = classNames({
    'sm-flex sm-justify-center sm-items-center sm-transition-all sm-w-[42px] sm-h-[42px] sm-rounded-full sm-gap-x-1':
      true,
    'sm-bg-grayscale-900': status === ConversationStatusTypes.dpSpeaking,
    'sm-bg-white sm-animate-spread': status === ConversationStatusTypes.idle,
    'sm-bg-primary-500': status === ConversationStatusTypes.userSpeaking,
    'sm-bg-white': status === ConversationStatusTypes.dpProcessing,
  });

  return (
    <div className={wapperClassNames}>
      {status === ConversationStatusTypes.dpSpeaking && (
        <WaveFormAnimation title="Digital Person Speaking" />
      )}

      {status === ConversationStatusTypes.idle && (
        <SpeadingDotsAnimation title="Digital Person Waiting" />
      )}

      {status === ConversationStatusTypes.userSpeaking && (
        <WaveFormAnimation title="User Speaking" />
      )}

      {status === ConversationStatusTypes.dpProcessing && (
        <LoadingIndicator title="Digital Person Processing" />
      )}
    </div>
  );
}
