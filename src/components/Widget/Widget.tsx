import { JSX } from 'preact';
import { useSpring, animated, config } from 'react-spring';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { Video } from '../Video';
import { VideoControls } from '../VideoControls';
import { ConnectionStatus } from '../../enums';
import { Notifications } from '../Notifications';
import { ProfileImage } from '../ProfileImage';
import { LoadingIndicator as DefaultLoadingIndicator } from '../LoadingIndicator';
import classNames from 'classnames';
import { ContentCards } from '../ContentCards';

export type WidgetProps = {
  greeting?: string;
  profilePicture?: string;
  loadingIndicator?: JSX.Element;
};

export function Widget({ profilePicture, greeting, loadingIndicator }: WidgetProps) {
  const { connectionStatus, connect } = useSoulMachines();
  const isConnected = connectionStatus === ConnectionStatus.CONNECTED;
  const isDisconnected =
    connectionStatus !== ConnectionStatus.CONNECTED &&
    connectionStatus !== ConnectionStatus.CONNECTING;

  // Pass through a wrapped loader with some custom styles
  const LoadingIndicator = () => (
    <div className="sm-w-18 sm-h-18 md:sm-w-35 md:sm-h-35 sm-flex sm-items-center sm-justify-center sm-text-primary-600">
      <div className="sm-w-12 sm-h-12 md:sm-w-24 md:sm-h-24">
        {loadingIndicator ? loadingIndicator : <DefaultLoadingIndicator />}
      </div>
    </div>
  );

  const scaleAnimation = useSpring({
    transform: isConnected ? 'scale(2)' : 'scale(1)',
    config: config.stiff,
  });

  // Scales down the above animation back to 1, the normal size
  const scaledDownClass = classNames({
    'sm-scale-50 sm-origin-bottom-right': isConnected,
  });

  return (
    <div className="sm-fixed sm-bottom-0 sm-right-0 sm-p-2 sm-z-max sm-pointer-events-none sm-h-full md:sm-p-5 ">
      <div className="sm-flex sm-flex-col sm-items-end sm-gap-y-2 sm-h-full sm-justify-end md:sm-gap-y-5">
        <div class="sm-w-63 md:sm-w-88 sm-max-h-full sm-flex sm-flex-col sm-justify-end sm-gap-y-2 sm-overflow-hidden sm-p-8 -sm-m-8 sm-box-content md:sm-gap-y-3">
          <ContentCards />
        </div>

        <div className="sm-flex sm-flex-wrap sm-gap-2 sm-items-center sm-justify-end md:sm-gap-5">
          {isDisconnected && (
            <div className="sm-max-w-xs">
              <Notifications greeting={greeting} />
            </div>
          )}

          <div className={scaledDownClass}>
            <animated.div
              style={scaleAnimation}
              className="sm-rounded-xl sm-origin-bottom-right sm-shadow-lg sm-bg-secondary-100 sm-pointer-events-auto md:sm-rounded-3xl"
            >
              {isDisconnected && (
                <button
                  onClick={connect}
                  data-sm-cy="connectButton"
                  className="sm-w-18 sm-h-18 md:sm-w-35 md:sm-h-35 sm-flex sm-justify-center sm-items-center sm-rounded-inherit sm-text-primary-300 sm-border-2 sm-border-transparent sm-bg-transparent hover:sm-border-primary-400 sm-transition-colors sm-overflow-hidden"
                >
                  <ProfileImage src={profilePicture} />
                </button>
              )}

              {!isDisconnected && (
                <div
                  className={classNames({
                    'sm-relative sm-rounded-inherit sm-overflow-hidden sm-transform-gpu': true,
                    'sm-w-63 sm-h-40 md:sm-h-54 md:sm-w-88 sm-border-2 sm-border-primary-400':
                      isConnected,
                  })}
                >
                  <Video autoConnect={false} loadingIndicator={<LoadingIndicator />} />
                  {isConnected && <VideoControls />}
                </div>
              )}
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
}
