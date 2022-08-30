import classNames from 'classnames';

export enum LoadingIndicatorProgress {
  idle = 'idle',
  thirtyThree = 'thirtyThree',
  sixtySix = 'sixtySix',
  oneHundred = 'oneHundred',
  complete = 'complete',
}

export type LoadingIndicatorProps = {
  progressTo: keyof typeof LoadingIndicatorProgress;
};

export function LoadingIndicator({ progressTo }: LoadingIndicatorProps) {
  const wrapprClassNames = classNames({
    'sm-transition-all sm-font-primary sm-flex sm-items-center sm-justify-center sm-text-[10em] sm-relative sm-w-full sm-h-full':
      true,
    'sm-translate-y-8 sm-opacity-60': progressTo === LoadingIndicatorProgress.idle,
  });

  const progressBarClassNames = classNames({
    'sm-bg-primary-500 sm-h-full sm-w-0': true,
    'sm-animate-fillTo33': progressTo === LoadingIndicatorProgress.thirtyThree,
    'sm-animate-fillFrom33To66': progressTo === LoadingIndicatorProgress.sixtySix,
    'sm-animate-fillFrom66To100': progressTo === LoadingIndicatorProgress.oneHundred,
  });

  const countClassNames = classNames({
    'after:sm-content-[counter(count)] after:sm-text-primary-100': true,
    'after:sm-animate-countTo33': progressTo === LoadingIndicatorProgress.thirtyThree,
    'after:sm-animate-countFrom33To66': progressTo === LoadingIndicatorProgress.sixtySix,
    'after:sm-animate-countFrom66To100': progressTo === LoadingIndicatorProgress.oneHundred,
  });

  const progress: Record<string, number> = {
    [LoadingIndicatorProgress.thirtyThree]: 33,
    [LoadingIndicatorProgress.sixtySix]: 66,
    [LoadingIndicatorProgress.oneHundred]: 100,
  };

  return (
    <div
      className={wrapprClassNames}
      role="progressbar"
      aria-label="Loading..."
      aria-busy={progressTo !== LoadingIndicatorProgress.complete}
      aria-valuenow={progress[progressTo]}
    >
      <div className="sm-bg-white sm-rounded-3xl sm-border-grayscale-200 sm-border sm-border-solid sm-overflow-hidden sm-w-2/5 sm-h-3 sm-absolute sm-top-1/2 sm-left-1/2 -sm-translate-x-1/2 -sm-translate-y-1/2">
        <div className={progressBarClassNames}></div>
      </div>

      <div className={countClassNames}></div>
    </div>
  );
}
