import classNames from 'classnames';
import { JSX } from 'preact';
import { animated, SpringValue } from 'react-spring';

export type ContentCardProps = {
  flush?: boolean;
  fullHeight?: boolean;
  children?: JSX.Element | undefined;
  springStyle?: Record<string, SpringValue<number> | SpringValue<string>>;
  contentId: string | number;
};

export function ContentCard({
  contentId,
  children,
  springStyle,
  flush,
  fullHeight,
}: ContentCardProps) {
  return (
    <animated.div
      className="sm-relative sm-flex sm-overflow-hidden sm-pointer-events-auto sm-p-8 -sm-m-8 sm-justify-center"
      style={springStyle}
    >
      <div
        data-sm-content={contentId}
        className={classNames('sm-round-shadow-box', {
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
    </animated.div>
  );
}

ContentCard.defaultProps = {
  flush: false,
  fullHeight: false,
};
