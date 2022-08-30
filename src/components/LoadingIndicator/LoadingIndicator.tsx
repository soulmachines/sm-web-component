import classNames from 'classnames';

export enum ProgressStage {
  idle = 'idle',
  step1 = 'step1',
  step2 = 'step2',
  step3 = 'step3',
  completed = 'completed',
}

export type LoadingIndicatorProps = {
  progressTo: keyof typeof ProgressStage;
};

export function LoadingIndicator({ progressTo }: LoadingIndicatorProps) {
  const wrapprClassNames = classNames({
    'sm-transition-all sm-duration-300 sm-font-primary sm-flex sm-items-center sm-justify-center sm-text-[10em] sm-relative sm-w-full sm-h-full':
      true,
    'sm-translate-y-8 sm-opacity-60': progressTo === ProgressStage.idle,
  });

  const progressBarClassNames = classNames({
    'sm-bg-primary-500 sm-h-full': true,
    'sm-w-0': progressTo === ProgressStage.idle,
    'sm-animate-fillTo33': progressTo === ProgressStage.step1,
    'sm-animate-fillFrom33To66': progressTo === ProgressStage.step2,
    'sm-animate-fillFrom66To100': progressTo === ProgressStage.step3,
    'sm-w-full': progressTo === ProgressStage.completed,
  });

  const countClassNames = classNames({
    'after:sm-content-[counter(count)] after:sm-text-primary-100': true,
    'after:sm-animate-countTo33': progressTo === ProgressStage.step1,
    'after:sm-animate-countFrom33To66': progressTo === ProgressStage.step2,
    'after:sm-animate-countFrom66To100': progressTo === ProgressStage.step3,
    'after:sm-content-["100"]': progressTo === ProgressStage.completed,
  });

  const progress: Record<string, number> = {
    [ProgressStage.step1]: 0,
    [ProgressStage.step2]: 33,
    [ProgressStage.step3]: 66,
    [ProgressStage.completed]: 100,
  };

  return (
    <div
      className={wrapprClassNames}
      role="progressbar"
      aria-label="Loading..."
      aria-busy={progressTo !== ProgressStage.completed}
      aria-valuenow={progress[progressTo]}
    >
      <div className="sm-bg-white sm-rounded-3xl sm-border-grayscale-200 sm-border sm-border-solid sm-overflow-hidden sm-w-2/5 sm-h-3 sm-absolute sm-top-1/2 sm-left-1/2 -sm-translate-x-1/2 -sm-translate-y-1/2">
        <div className={progressBarClassNames}></div>
      </div>

      <div className={countClassNames}></div>
    </div>
  );
}
