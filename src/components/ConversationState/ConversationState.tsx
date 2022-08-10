import classNames from 'classnames';
import { ConversationStateTypes } from '../../enums';
import { LoadingIndicator } from '../LoadingIndicator';
import SpeadingDotsAnimation from './components/SpreadingDots';
import WaveFormAnimation from './components/WaveForm';

export type ConversationStateProps = {
  status: keyof typeof ConversationStateTypes;
};

export function ConversationState({ status }: ConversationStateProps) {
  const wapperClassNames = classNames({
    'sm-flex sm-justify-center sm-items-center sm-transition-all sm-w-[42px] sm-h-[42px] sm-rounded-full sm-gap-x-1':
      true,
    'sm-bg-grayscale-900': status === ConversationStateTypes.dpSpeaking,
    'sm-bg-white sm-animate-spread': status === ConversationStateTypes.idle,
    'sm-bg-primary-500': status === ConversationStateTypes.userSpeaking,
    'sm-bg-white': status === ConversationStateTypes.dpProcessing,
  });

  return (
    <div className={wapperClassNames}>
      {status === ConversationStateTypes.dpSpeaking && (
        <WaveFormAnimation title="Digital Person Speaking" />
      )}

      {status === ConversationStateTypes.idle && (
        <SpeadingDotsAnimation title="Digital Person Waiting" />
      )}

      {status === ConversationStateTypes.userSpeaking && (
        <WaveFormAnimation title="User Speaking" />
      )}

      {status === ConversationStateTypes.dpProcessing && (
        <LoadingIndicator title="Digital Person Processing" />
      )}
    </div>
  );
}
