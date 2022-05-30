import { Fragment, JSX } from 'preact';
import { useSpring, animated, config } from 'react-spring';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { Video } from '../Video';
import { VideoControls } from '../VideoControls';
import { ConnectionStatus } from '../../enums';
import { Notifications } from '../Notifications';
import { ProfileImage } from '../ProfileImage';
import { LoadingIndicator as DefaultLoadingIndicator } from '../LoadingIndicator';
import classNames from 'classnames';

export type WidgetProps = {
  greeting?: string;
  profilePicture?: string;
  loadingIndicator?: JSX.Element;
};

export function Widget({ profilePicture, greeting, loadingIndicator }: WidgetProps) {
  const { connectionStatus, connect } = useSoulMachines();
  const isConnected = connectionStatus === ConnectionStatus.CONNECTED;
  const isDisconnected = connectionStatus === ConnectionStatus.DISCONNECTED;
  // Pass through a wrapped loader with some custom styles
  const LoadingIndicator = () => (
    <div className="sm-w-35 sm-h-35 sm-flex sm-items-center sm-justify-center">
      {loadingIndicator ? loadingIndicator : <DefaultLoadingIndicator size="96" />}
    </div>
  );

  const scaleAnimation = useSpring({
    transform: isConnected ? 'scale(2)' : 'scale(1)',
    config: config.gentle,
  });

  // Scales down the above animation back to 1, the normal size
  const scaledDownClass = classNames({
    'sm-scale-50 sm-origin-bottom-right': isConnected,
  });

  return (
    <div className="sm-fixed sm-bottom-0 sm-right-0 sm-p-5 sm-z-max">
      <div className="sm-flex sm-flex-wrap sm-flex-col sm-items-end sm-gap-y-5">
        {/* Placeholder for the cards component */}
        <div class="sm-w-full sm-max-w-md">
          <div class="sm-w-full" />
          <div class="sm-w-full" />
          <div class="sm-w-full" />
        </div>

        <div className={scaledDownClass}>
          <animated.div
            style={scaleAnimation}
            className="sm-flex sm-flex-wrap sm-gap-5 sm-items-center sm-justify-end sm-origin-bottom-right"
          >
            {isDisconnected && (
              <Fragment>
                <Notifications greeting={greeting} />

                <button
                  onClick={connect}
                  className="sm-w-35 sm-h-35 sm-flex sm-justify-center sm-items-center"
                >
                  <ProfileImage src={profilePicture} />
                </button>
              </Fragment>
            )}

            {!isDisconnected && (
              <div
                className={classNames({
                  'sm-relative': true,
                  'sm-w-63 sm-h-40 md:sm-h-54 md:sm-w-88': isConnected,
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
  );
}
