import { useSpring, animated } from 'react-spring';
import classNames from 'classnames';

export type LoadingIndicatorProps = {
  totalSteps: number;
  percentageLoaded: number;
  durationMs: number;
  stepName?: string;
};

export function LoadingIndicator({
  totalSteps,
  percentageLoaded,
  durationMs,
  stepName,
}: LoadingIndicatorProps) {
  const stepAmount = Math.round(100 / totalSteps);
  const nextAmount = percentageLoaded + stepAmount;
  // Make sure we don't continue above 100
  const nextPercentageLoaded = nextAmount < 100 ? nextAmount : 100;
  const defaultAnimationConfig = {
    reset: true,
    config: {
      duration: durationMs,
    },
  };

  const widthAnimation = useSpring({
    ...defaultAnimationConfig,
    from: { width: `${percentageLoaded}%` },
    to: { width: `${nextPercentageLoaded}%` },
  });

  const { number } = useSpring({
    ...defaultAnimationConfig,
    from: { number: percentageLoaded },
    to: { number: nextPercentageLoaded },
  });

  return (
    <div
      aria-label="Loading..."
      role="progressbar"
      aria-busy={percentageLoaded < 100}
      aria-valuenow={percentageLoaded}
      className={classNames(
        'sm-transition-all sm-duration-300 sm-font-primary sm-flex sm-items-center sm-justify-center sm-text-[6em] md:sm-text-[10em] sm-relative sm-w-full sm-h-full',
        {
          'sm-translate-y-8 sm-opacity-60': percentageLoaded === 0,
        },
      )}
    >
      {stepName && <span className="sm-sr-only">{stepName}</span>}
      <div className="sm-bg-white sm-rounded-3xl sm-border-gray-light sm-border sm-border-solid sm-overflow-hidden sm-w-2/5 sm-h-3 sm-absolute sm-top-1/2 sm-left-1/2 -sm-translate-x-1/2 -sm-translate-y-1/2">
        <animated.div className="sm-bg-primary-base sm-h-full" style={widthAnimation} />
      </div>

      <animated.div className="sm-text-primary-lightest">
        {number.to((x) => x.toFixed(0))}
      </animated.div>
    </div>
  );
}

LoadingIndicator.defaultProps = {
  from: 0,
  to: 0,
  durationMs: 10000, // 10 seconds
};
