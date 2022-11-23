import classNames from 'classnames';
import { JSX } from 'preact';

export type ContentCardProps = {
  flush?: boolean;
  fullHeight: boolean;
  children?: JSX.Element | undefined;
  style?: Record<string, 'string | CSSProperties | undefined'>;
  contentId: string | number;
};

export function ContentCard({ contentId, children, style, flush, fullHeight }: ContentCardProps) {
  return (
    <div
      className="sm-relative sm-flex sm-overflow-hidden sm-pointer-events-auto sm-p-8 -sm-m-8 sm-justify-center"
      data-sm-content={contentId}
      style={style}
    >
      <div
        className={classNames('sm-round-shadow-box ', {
          'sm-p-6': !flush,
        })}
      >
        <div
          className={classNames(
            'sm-sans sm-flex sm-flex-col sm-gap-y-3 sm-items-start sm-h-full sm-text-primary-text sm-font-normal sm-font-primary',
            {
              'sm-overflow-y-auto sm-max-h-80 md:sm-max-h-137': !fullHeight,
            },
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

ContentCard.defaultProps = {
  flush: false,
};
