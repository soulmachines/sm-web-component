import { useSpring, animated } from 'react-spring';
import classNames from 'classnames';

export type LoadingIndicatorProps = {
  progressFrom: number;
  progressTo: number;
  durationMs: number;
  stepName?: string;
};

export function LoadingIndicator({
  progressFrom,
  progressTo,
  durationMs,
  stepName,
}: LoadingIndicatorProps) {
  const defaultAnimationConfig = {
    reset: true,
    config: {
      duration: durationMs,
    },
  };

  const widthAnimation = useSpring({
    ...defaultAnimationConfig,
    from: { width: `${progressFrom}%` },
    to: { width: `${progressTo}%` },
  });

  const { number } = useSpring({
    ...defaultAnimationConfig,
    from: { number: progressFrom },
    to: { number: progressTo },
  });

  const wrapperClassNames = classNames({
    'sm-transition-all sm-duration-300 sm-font-primary sm-flex sm-items-center sm-justify-center sm-text-[10em] sm-relative sm-w-full sm-h-full':
      true,
    'sm-translate-y-8 sm-opacity-60': progressTo === 0,
  });

  return (
    <div
      aria-label="Loading..."
      role="progressbar"
      aria-busy={progressTo < 100}
      aria-valuenow={progressTo}
      className={wrapperClassNames}
    >
      {stepName && <span className="sm-sr-only">{stepName}</span>}
      <div className="sm-bg-white sm-rounded-3xl sm-border-grayscale-200 sm-border sm-border-solid sm-overflow-hidden sm-w-2/5 sm-h-3 sm-absolute sm-top-1/2 sm-left-1/2 -sm-translate-x-1/2 -sm-translate-y-1/2">
        <animated.div className="sm-bg-primary-500 sm-h-full" style={widthAnimation} />
      </div>
      <animated.div className="sm-text-primary-100">{number.to((x) => x.toFixed(0))}</animated.div>
    </div>
  );
}

LoadingIndicator.defaultProps = {
  from: 0,
  to: 0,
  durationMs: 10000, // 10 seconds
};
