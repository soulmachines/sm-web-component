import { useSpring, animated } from 'react-spring';
import classNames from 'classnames';

export type LoadingIndicatorProps = {
  currentStep: number;
  totalSteps: number;
  durationMs?: number;
  stepName: string;
};

const calculateProgress = (step: number, totalSteps: number) => {
  // Handle negative numbers
  if (step < 0 || totalSteps < 0) return 0;

  return Math.floor((step / totalSteps) * 100);
};
export function LoadingIndicator({
  currentStep,
  totalSteps,
  durationMs,
  stepName,
}: LoadingIndicatorProps) {
  const stepAmount = calculateProgress(1, totalSteps);
  let animateTo = calculateProgress(currentStep, totalSteps);
  let animateFrom = animateTo - stepAmount;

  // Prevent negative number
  if (animateFrom <= 0) {
    animateFrom = 0;
  }

  // Prevent animating above 100
  if (animateTo >= 100) {
    animateTo = 100;
  }

  const defaultAnimationConfig = {
    reset: true,
    config: {
      duration: durationMs,
    },
  };

  const widthAnimation = useSpring({
    ...defaultAnimationConfig,
    from: { width: `${animateFrom}%` },
    to: { width: `${animateTo}%` },
  });

  const { number } = useSpring({
    ...defaultAnimationConfig,
    from: { number: animateFrom },
    to: { number: animateTo },
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
      aria-busy={currentStep < totalSteps}
      aria-valuenow={animateTo}
      className={wrapperClassNames}
    >
      <span className="sm-sr-only">{stepName}</span>

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
