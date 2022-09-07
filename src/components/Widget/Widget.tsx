import { JSX } from 'preact';
import { useSpring, animated, config } from 'react-spring';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { Video } from '../Video';
import { VideoControls } from '../VideoControls';
import { ConnectionStatus, SessionDataKeys, widgetPosition } from '../../enums';
import { Notifications } from '../Notifications';
import { ProfileImage } from '../ProfileImage';
import { LoadingIndicator as DefaultLoadingIndicator } from '../LoadingIndicator';
import classNames from 'classnames';
import { ContentCards } from '../ContentCards';
import { useEffect } from 'preact/hooks';

export type WidgetProps = {
  greeting?: string;
  profilePicture?: string;
  position?: widgetPosition;
  loadingIndicator?: JSX.Element;
};

export function Widget({
  profilePicture,
  greeting,
  loadingIndicator,
  position = widgetPosition.BOTTOM_RIGHT,
}: WidgetProps) {
  const { connectionStatus, connectionState, connect } = useSoulMachines();
  const isConnected = connectionStatus === ConnectionStatus.CONNECTED;
  const isConnectingOrConnected = connectionStatus === ConnectionStatus.CONNECTING || isConnected;
  const isDisconnected = connectionStatus === ConnectionStatus.DISCONNECTED;

  const wrapperPositionClass = classNames({
    'sm-right-0': position === widgetPosition.BOTTOM_RIGHT,
    'sm-left-0': position === widgetPosition.BOTTOM_LEFT,
  });
  const notificationVideoOrderClass = classNames({
    'sm-flex-row-reverse': position === widgetPosition.BOTTOM_LEFT,
  });

  // Connect directly if it's resume session
  useEffect(() => {
    if (isDisconnected && sessionStorage.getItem(SessionDataKeys.sessionId)) {
      connect();
    }
  }, [connect, isDisconnected]);

  // Pass through a wrapped loader with some custom styles
  const LoadingIndicator = () => (
    <div className="sm-flex sm-h-full sm-items-center sm-justify-center sm-text-primary-600">
      {loadingIndicator ? (
        loadingIndicator
      ) : (
        <DefaultLoadingIndicator
          stepName={connectionState.name}
          totalSteps={connectionState.totalSteps}
          percentageLoaded={connectionState.percentageLoaded}
        />
      )}
    </div>
  );

  const scaleAnimation = useSpring({
    transform: isConnectingOrConnected ? 'scale(2)' : 'scale(1)',
    config: config.stiff,
  });

  // Scales down the above animation back to 1, the normal size
  const scaledDownClass = classNames({
    'sm-scale-50 sm-origin-bottom-right': isConnectingOrConnected,
  });

  return (
    <div
      className={`sm-fixed sm-bottom-0 sm-p-2 sm-z-max sm-pointer-events-none sm-h-full md:sm-p-5 ${wrapperPositionClass}`}
    >
      <div className="sm-flex sm-flex-col sm-gap-y-2 sm-h-full sm-justify-end md:sm-gap-y-5">
        <div class="sm-w-63 md:sm-w-88 sm-max-h-full sm-flex sm-flex-col sm-justify-end sm-gap-y-2 sm-overflow-hidden sm-p-8 -sm-m-8 sm-box-content md:sm-gap-y-3">
          <ContentCards />
        </div>

        <div
          className={`sm-flex sm-flex-wrap sm-gap-2 sm-items-center sm-justify-end md:sm-gap-5 ${notificationVideoOrderClass}`}
        >
          {!isConnectingOrConnected && (
            <div className="sm-max-w-xs">
              <Notifications greeting={greeting} />
            </div>
          )}

          <div className={scaledDownClass}>
            <animated.div
              style={scaleAnimation}
              className="sm-rounded-xl sm-origin-bottom-right sm-shadow-lg sm-bg-white sm-pointer-events-auto md:sm-rounded-3xl"
            >
              {isDisconnected && (
                <button
                  onClick={connect}
                  data-sm-cy="connectButton"
                  className="sm-w-18 sm-h-18 md:sm-w-35 md:sm-h-35 sm-flex sm-justify-center sm-items-center sm-rounded-inherit sm-text-primary-500 sm-border-2 sm-border-transparent sm-bg-transparent hover:sm-border-primary-400 sm-transition-colors sm-overflow-hidden"
                >
                  <ProfileImage src={profilePicture} />
                </button>
              )}

              <div
                className={classNames({
                  'sm-relative sm-rounded-inherit sm-overflow-hidden sm-transform-gpu': true,
                  'sm-w-63 sm-h-40 md:sm-h-54 md:sm-w-88 sm-border-2 sm-border-primary-400':
                    isConnectingOrConnected,
                })}
              >
                <Video autoConnect={false} loadingIndicator={<LoadingIndicator />} />
                {isConnected && <VideoControls />}
              </div>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
}
