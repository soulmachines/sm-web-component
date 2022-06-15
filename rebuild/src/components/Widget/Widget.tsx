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
    <div className="sm-w-35 sm-h-35 sm-flex sm-items-center sm-justify-center sm-text-primary-600">
      {loadingIndicator ? loadingIndicator : <DefaultLoadingIndicator size="96" />}
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
    <div className="sm-fixed sm-bottom-0 sm-right-0 sm-p-5 sm-z-max sm-pointer-events-none sm-h-full">
      <div className="sm-flex sm-flex-col sm-items-end sm-gap-y-5 sm-h-full sm-justify-end sm-max-h-full">
        <div class="sm-w-63 md:sm-w-88">
          <ContentCards />
        </div>

        <div className="sm-flex sm-flex-wrap sm-gap-5 sm-items-center sm-justify-end">
          <div className="sm-max-w-xs">
            {isDisconnected && <Notifications greeting={greeting} />}
          </div>

          <div className={scaledDownClass}>
            <animated.div
              style={scaleAnimation}
              className="sm-rounded-3xl sm-origin-bottom-right sm-shadow-lg sm-bg-secondary-100"
            >
              {isDisconnected && (
                <button
                  onClick={connect}
                  data-sm-cy="connectButton"
                  className="sm-w-35 sm-h-35 sm-flex sm-justify-center sm-items-center sm-rounded-inherit sm-text-primary-300 sm-border-2 sm-border-transparent hover:sm-border-primary-400 sm-transition-colors sm-overflow-hidden sm-pointer-events-auto"
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
