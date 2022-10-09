import { JSX } from 'preact';
import { useSpring, animated, config } from 'react-spring';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { Video } from '../Video';
import { VideoControls } from '../VideoControls';
import { ConnectionStatus, SessionDataKeys, widgetLayout, widgetPosition } from '../../enums';
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
  layout?: widgetLayout;
};

export function Widget({
  profilePicture,
  greeting,
  loadingIndicator,
  position = widgetPosition.BOTTOM_RIGHT,
  layout = widgetLayout.FIXED,
}: WidgetProps) {
  const { connectionStatus, connectionState, connect } = useSoulMachines();
  const isConnected = connectionStatus === ConnectionStatus.CONNECTED;
  const isConnectingOrConnected = connectionStatus === ConnectionStatus.CONNECTING || isConnected;
  const isDisconnected = connectionStatus === ConnectionStatus.DISCONNECTED;

  const styles = {
    scaleAnimation: useSpring({
      transform: isConnectingOrConnected ? 'scale(2)' : 'scale(1)',
      config: config.stiff,
    }),

    // Scales down the above animation back to 1, the normal size
    scaledDownClass: classNames({
      'sm-scale-50 sm-origin-bottom-right': isConnectingOrConnected,
    }),

    widgetPositionClass: classNames({
      'sm-right-0': position === widgetPosition.BOTTOM_RIGHT && layout === widgetLayout.FIXED,
      'sm-left-0': position === widgetPosition.BOTTOM_LEFT && layout === widgetLayout.FIXED,
    }),

    containerClass: classNames({
      'sm-fixed sm-bottom-0 sm-p-2 sm-text-primary-text sm-z-max sm-pointer-events-none sm-h-full md:sm-p-5':
        layout === widgetLayout.FIXED,
      'sm-text-primary-text sm-h-full sm-w-full': layout === widgetLayout.Embedded,
    }),

    containerPositionClass: classNames({
      'sm-flex sm-flex-col sm-gap-y-2 sm-h-full sm-justify-end md:sm-gap-y-5':
        layout === widgetLayout.FIXED,
      'sm-rounded-xl sm-origin-bottom-right sm-bg-white sm-pointer-events-auto md:sm-rounded-3xl':
        layout === widgetLayout.Embedded,
    }),

    notificationClass: classNames({
      'sm-flex sm-flex-wrap sm-gap-2 sm-items-center sm-justify-end md:sm-gap-5':
        layout === widgetLayout.FIXED,
      'sm-flex-row-reverse':
        layout === widgetLayout.FIXED && position === widgetPosition.BOTTOM_LEFT,
    }),

    greetingClass: classNames({
      'sm-max-w-xs sm-z-10': layout === widgetLayout.FIXED,
    }),

    scaleAnimationClass: classNames({
      'sm-rounded-xl sm-origin-bottom-right sm-shadow-lg sm-bg-white sm-pointer-events-auto md:sm-rounded-3xl':
        layout === widgetLayout.FIXED,
    }),

    connectButtonClass: classNames({
      'sm-flex sm-justify-center sm-items-center sm-rounded-inherit sm-text-primary-base sm-border-none sm-outline sm-outline-2 sm-outline-transparent sm-bg-transparent hover:sm-outline-secondary-base sm-transition-colors sm-overflow-hidden':
        true,
      'sm-w-18 sm-h-18 md:sm-w-35 md:sm-h-35 ': layout === widgetLayout.FIXED,
      'sm-w-full sm-h-full': layout === widgetLayout.Embedded,
    }),

    connectingOrConnectedClass: classNames({
      'sm-relative sm-rounded-inherit sm-overflow-hidden sm-transform-gpu':
        layout === widgetLayout.FIXED,
      'sm-w-63 sm-h-40 md:sm-h-54 md:sm-w-88 sm-border-2 sm-border-solid sm-border-gray-lightest':
        isConnectingOrConnected && layout === widgetLayout.FIXED,

      'sm-w-full sm-h-full sm-relative sm-rounded-inherit sm-overflow-hidden sm-transform-gpu':
        layout === widgetLayout.Embedded,
      'sm-absolute': !isConnectingOrConnected && layout === widgetLayout.Embedded,
      'sm-border-2 sm-border-solid sm-border-gray-lightest':
        isConnectingOrConnected && layout === widgetLayout.Embedded,
    }),

    contentCardsClass: classNames({
      'sm-w-63 md:sm-w-88 sm-max-h-full sm-flex sm-flex-col sm-justify-end sm-gap-y-2 sm-overflow-hidden sm-p-8 -sm-m-8 sm-box-content md:sm-gap-y-3':
        layout === widgetLayout.FIXED,
    }),
  };

  // Connect directly if it's resume session
  useEffect(() => {
    if (isDisconnected && sessionStorage.getItem(SessionDataKeys.sessionId)) {
      connect();
    }
  }, [connect, isDisconnected]);

  // Pass through a wrapped loader with some custom styles
  const LoadingIndicator = () => (
    <div className="sm-flex sm-h-full sm-items-center sm-justify-center sm-text-primary-base">
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

  const greetingElement =
    !isConnectingOrConnected && layout === widgetLayout.FIXED ? (
      <div className={styles.greetingClass}>
        <Notifications greeting={greeting} />
      </div>
    ) : (
      <></>
    );

  const videoElement = (
    <>
      {isDisconnected && (
        <button onClick={connect} data-sm-cy="connectButton" className={styles.connectButtonClass}>
          <ProfileImage src={profilePicture} />
        </button>
      )}
      <div className={styles.connectingOrConnectedClass}>
        <Video autoConnect={false} loadingIndicator={<LoadingIndicator />} />
        {isConnected && <VideoControls />}
      </div>
    </>
  );

  const animatedVideoElement =
    layout === widgetLayout.FIXED ? (
      <div className={styles.scaledDownClass}>
        <animated.div style={styles.scaleAnimation} className={styles.scaleAnimationClass}>
          {videoElement}
        </animated.div>
      </div>
    ) : (
      videoElement
    );

  const contentCardsElement = (
    <div class={styles.contentCardsClass}>
      <ContentCards />
    </div>
  );

  return (
    <div className={`${styles.containerClass} ${styles.widgetPositionClass}`}>
      <div className={styles.containerPositionClass}>
        {contentCardsElement}
        <div className={`${styles.notificationClass}`}>
          {greetingElement}
          {animatedVideoElement}
        </div>
      </div>
    </div>
  );
}
