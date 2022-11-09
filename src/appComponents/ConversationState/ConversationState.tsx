import classNames from 'classnames';
import { ConversationStateTypes } from '@soulmachines/smwebsdk';
import { Spinner } from '../../components/Spinner';
import SpeadingDotsAnimation from './components/SpreadingDots';
import WaveFormAnimation from './components/WaveForm';

export type ConversationStateProps = {
  state: keyof typeof ConversationStateTypes;
};

export function ConversationState({ state }: ConversationStateProps) {
  return (
    <div
      className={classNames(
        'sm-flex sm-justify-center sm-items-center sm-transition-all sm-w-[46px] sm-h-[46px] sm-rounded-full sm-gap-x-1',
        {
          'sm-bg-black': state === ConversationStateTypes.dpSpeaking,
          'sm-bg-white sm-animate-spread': state === ConversationStateTypes.idle,
          'sm-bg-secondary-base': state === ConversationStateTypes.userSpeaking,
          'sm-bg-white': state === ConversationStateTypes.dpProcessing,
        },
      )}
    >
      {state === ConversationStateTypes.dpSpeaking && (
        <WaveFormAnimation title="Digital Person Speaking" />
      )}

      {state === ConversationStateTypes.idle && (
        <SpeadingDotsAnimation title="Digital Person Waiting" />
      )}

      {state === ConversationStateTypes.userSpeaking && <WaveFormAnimation title="User Speaking" />}

      {state === ConversationStateTypes.dpProcessing && (
        <Spinner title="Digital Person Processing" />
      )}
    </div>
  );
}
