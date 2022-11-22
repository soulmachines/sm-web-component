import classNames from 'classnames';
import { JSX } from 'preact';

export type ContentCardProps = {
  flush?: boolean;
  children?: JSX.Element | undefined;
  style?: Record<string, 'string | CSSProperties | undefined'>;
  contentId: string | number;
};

export function ContentCard({ contentId, children, style, flush }: ContentCardProps) {
  return (
    <div
      className="sm-relative sm-flex sm-overflow-hidden sm-pointer-events-auto sm-p-8 -sm-m-8"
      data-sm-content={contentId}
      style={style}
    >
      <div
        className={classNames('sm-round-shadow-box sm-w-full', {
          'sm-p-6': !flush,
        })}
      >
        {children}
      </div>
    </div>
  );
}

ContentCard.defaultProps = {
  flush: false,
};
