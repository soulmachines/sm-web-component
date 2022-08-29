import classNames from 'classnames';

enum LoadingIndicatorProgress {
  zero = 'zero',
  twentyFive = 'twentyFive',
  fifty = 'fifty',
  seventyFive = 'seventyFive',
  fourQuarter = 'fourQuarter',
}

export type LoadingIndicatorProps = {
  progressTo: keyof typeof LoadingIndicatorProgress;
};

export function LoadingIndicator({ progressTo }: LoadingIndicatorProps) {
  const wrapprClassNames = classNames({
    'sm-transition-all sm-font-primary sm-flex sm-items-center sm-justify-center sm-text-[10em] sm-relative sm-w-full sm-h-full':
      true,
    'sm-translate-y-8 sm-opacity-60': progressTo === LoadingIndicatorProgress.zero,
  });

  const progressBarClassNames = classNames({
    'sm-bg-primary-500 sm-h-full sm-w-0': true,
    'sm-animate-fillTo25': progressTo === LoadingIndicatorProgress.twentyFive,
    'sm-animate-fillFrom25To50': progressTo === LoadingIndicatorProgress.fifty,
    'sm-animate-fillFrom50To75': progressTo === LoadingIndicatorProgress.seventyFive,
    'sm-animate-fillFrom75To100': progressTo === LoadingIndicatorProgress.fourQuarter,
  });

  const countClassNames = classNames({
    'after:sm-content-[counter(count)] after:sm-text-primary-100': true,
    'after:sm-animate-countTo25': progressTo === LoadingIndicatorProgress.twentyFive,
    'after:sm-animate-countFrom25To50': progressTo === LoadingIndicatorProgress.fifty,
    'after:sm-animate-countFrom50To75': progressTo === LoadingIndicatorProgress.seventyFive,
    'after:sm-animate-countFrom75To100': progressTo === LoadingIndicatorProgress.fourQuarter,
  });

  return (
    <div className={wrapprClassNames}>
      <div className="sm-bg-white sm-rounded-3xl sm-border-grayscale-200 sm-border sm-border-solid sm-overflow-hidden sm-w-2/5 sm-h-3 sm-absolute sm-top-1/2 sm-left-1/2 -sm-translate-x-1/2 -sm-translate-y-1/2">
        <div className={progressBarClassNames}></div>
      </div>

      <div className={countClassNames}></div>
    </div>
  );
}
