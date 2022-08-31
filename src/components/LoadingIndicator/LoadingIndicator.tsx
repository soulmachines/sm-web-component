import { useSpring, animated } from 'react-spring';
import words from 'lodash/words';
import classNames from 'classnames';

export type LoadingIndicatorProps = {
  currentStep: number;
  totalSteps: number;
  durationMs?: number;
  stepName: string;
};

const calculateProgress = (step: number, totalSteps: number) => {
  return Math.round((step / totalSteps) * 100);
};
export function LoadingIndicator({
  currentStep,
  totalSteps,
  durationMs,
  stepName,
}: LoadingIndicatorProps) {
  const stepAmount = calculateProgress(1, totalSteps);
  let currentProgress = calculateProgress(currentStep, totalSteps);
  let animateFrom = currentProgress - stepAmount;

  // Prevent negative number
  if (animateFrom <= 0) {
    animateFrom = 0;
  }

  // Prevent animating above 100
  if (currentProgress >= 100) {
    currentProgress = 100;
  }

  const defaultAnimationConfig = {
    reset: true,
    config: {
      duration: durationMs,
    },
  };

  const widthAnimation = useSpring({
    ...defaultAnimationConfig,
    to: { width: `${currentProgress}%` },
    from: { width: `${animateFrom}%` },
  });

  const { number } = useSpring({
    ...defaultAnimationConfig,
    to: { number: currentProgress },
    from: { number: animateFrom },
  });

  const wrapperClassNames = classNames({
    'sm-transition-all sm-duration-300 sm-font-primary sm-flex sm-items-center sm-justify-center sm-text-[10em] sm-relative sm-w-full sm-h-full':
      true,
    'sm-translate-y-8 sm-opacity-60': currentStep === 0,
  });

  return (
    <div
      aria-label="Loading..."
      role="progressbar"
      aria-busy={currentStep !== totalSteps}
      aria-valuenow={currentProgress}
      className={wrapperClassNames}
    >
      <span className="sm-sr-only">{words(stepName)}</span>

      <div className="sm-bg-white sm-rounded-3xl sm-border-grayscale-200 sm-border sm-border-solid sm-overflow-hidden sm-w-2/5 sm-h-3 sm-absolute sm-top-1/2 sm-left-1/2 -sm-translate-x-1/2 -sm-translate-y-1/2">
        <animated.div className="sm-bg-primary-500 sm-h-full" style={widthAnimation} />
      </div>

      <animated.div className="sm-text-primary-100">{number.to((x) => x.toFixed(0))}</animated.div>
    </div>
  );
}

LoadingIndicator.defaultProps = {
  durationMs: 1500,
};
