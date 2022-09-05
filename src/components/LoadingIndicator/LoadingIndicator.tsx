import { useSpring, animated } from 'react-spring';
import classNames from 'classnames';
import { usePrevious } from '../../hooks/usePrevious';

export type LoadingIndicatorProps = {
  progress: number;
  durationMs?: number;
  stepName: string;
};

export function LoadingIndicator({ progress, durationMs, stepName }: LoadingIndicatorProps) {
  const previousProgressValue = usePrevious<number>(progress);
  // Reset previous progress so it does not re run from 100 to 0 on subsequent runs
  const previousProgress = previousProgressValue === 100 ? 0 : previousProgressValue;
  const defaultAnimationConfig = {
    reset: true,
    config: {
      duration: durationMs,
    },
  };

  const widthAnimation = useSpring({
    ...defaultAnimationConfig,
    from: { width: `${previousProgress}%` },
    to: { width: `${progress}%` },
  });

  const { number } = useSpring({
    ...defaultAnimationConfig,
    from: { number: previousProgress },
    to: { number: progress },
  });

  const wrapperClassNames = classNames({
    'sm-transition-all sm-duration-300 sm-font-primary sm-flex sm-items-center sm-justify-center sm-text-[10em] sm-relative sm-w-full sm-h-full':
      true,
    'sm-translate-y-8 sm-opacity-60': progress === 0,
  });

  return (
    <div
      aria-label="Loading..."
      role="progressbar"
      aria-busy={progress < 100}
      aria-valuenow={progress}
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
