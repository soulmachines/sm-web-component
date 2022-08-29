import classNames from 'classnames';

enum LoadingIndicatorProgress {
  zero = 'zero',
  oneQuarter = 'oneQuarter',
  twoQuarter = 'twoQuarter',
  threeQuarter = 'threeQuarter',
  fourQuarter = 'fourQuarter',
}

export type LoadingIndicatorProps = {
  progress: keyof typeof LoadingIndicatorProgress;
};

export function LoadingIndicator({ progress }: LoadingIndicatorProps) {
  const wrapprClassNames = classNames({
    'sm-transition-all sm-font-primary sm-flex sm-items-center sm-justify-center sm-text-[10em] sm-relative sm-w-full sm-h-full':
      true,
    'sm-translate-y-5 sm-opacity-60': progress === LoadingIndicatorProgress.zero,
  });

  const progressBarClassNames = classNames({
    'sm-bg-primary-500 sm-h-full sm-w-0': true,
    'sm-animate-fillTo25': progress === LoadingIndicatorProgress.oneQuarter,
    'sm-animate-fillTo50From25': progress === LoadingIndicatorProgress.twoQuarter,
  });

  const countClassNames = classNames({
    'after:sm-content-[counter(count)]': true,
    'after:sm-animate-countTo25': progress === LoadingIndicatorProgress.oneQuarter,
    'after:sm-animate-countTo50From25': progress === LoadingIndicatorProgress.twoQuarter,
  });

  return (
    <div className={wrapprClassNames}>
      <div className="sm-bg-white sm-rounded-3xl sm-overflow-hidden sm-w-2/5 sm-h-3 sm-absolute sm-top-1/2 sm-left-1/2 -sm-translate-x-1/2 -sm-translate-y-1/2">
        <div className={progressBarClassNames}></div>
      </div>

      <div className={countClassNames}></div>
    </div>
  );
}
