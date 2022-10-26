import { JSX } from 'preact';
import classNames from 'classnames';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { ConnectionStatus, SessionDataKeys, widgetLayout, widgetPosition } from '../../enums';
import { Notifications } from '../../components/Notifications';
import { ProfileImage } from '../ProfileImage';
import { ContentCards } from '../ContentCards';
import { useEffect } from 'preact/hooks';
import { ConnectButton } from './components/ConnectButton';
import { ProgressIndicator } from './components/ProgressIndicator';
import { ProgressIndicatorWrapper } from './components/ProgressIndicatorWrapper';
import { VideoPlayer } from './components/VideoPlayer';

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
  const { connectionStatus, connectionState, connect, layout } = useSoulMachines();
  const isConnecting = connectionStatus === ConnectionStatus.CONNECTING;
  const isConnected = connectionStatus === ConnectionStatus.CONNECTED;
  const isConnectingOrConnected = connectionStatus === ConnectionStatus.CONNECTING || isConnected;
  const isDisconnected = connectionStatus === ConnectionStatus.DISCONNECTED;

  const layoutStyles = classNames({
    'sm-h-full sm-flex sm-flex-col sm-justify-end': true,
    'sm-gap-y-2 md:sm-gap-y-5': layout === widgetLayout.FLOAT,
    'sm-items-end': position === widgetPosition.BOTTOM_RIGHT,
    'sm-items-start': position === widgetPosition.BOTTOM_LEFT,
  });

  const notificationsVideoWrapperStyles = classNames({
    'sm-flex sm-flex-wrap sm-gap-2 sm-items-center sm-justify-end md:sm-gap-5': true,
    'sm-flex-row-reverse': position === widgetPosition.BOTTOM_LEFT,
  });

  // Connect directly if it's resume session
  useEffect(() => {
    if (isDisconnected && sessionStorage.getItem(SessionDataKeys.sessionId)) {
      connect();
    }
  }, [connect, isDisconnected]);

  return (
    <div className="sm-fixed sm-bottom-0 sm-right-0 sm-text-primary-text sm-z-max sm-pointer-events-none sm-h-full sm-w-full sm-p-5">
      <div className={layoutStyles}>
        <div class="sm-w-63 md:sm-w-88 sm-max-h-full sm-flex sm-flex-col sm-justify-end sm-gap-y-2 sm-overflow-hidden sm-p-8 -sm-m-8 sm-box-content md:sm-gap-y-3">
          <ContentCards />
        </div>

        <div className={notificationsVideoWrapperStyles}>
          <>
            {!isConnectingOrConnected && (
              <div className="sm-max-w-xs sm-z-10">
                <Notifications greeting={greeting} />
              </div>
            )}

            {isDisconnected && (
              <div className="sm-w-18 sm-h-18 md:sm-w-35 md:sm-h-35">
                <ConnectButton>
                  <ProfileImage src={profilePicture} />
                </ConnectButton>
              </div>
            )}

            <ProgressIndicatorWrapper transitionIn={isConnecting} position={position}>
              <ProgressIndicator indicator={loadingIndicator} connectionState={connectionState} />
            </ProgressIndicatorWrapper>

            <VideoPlayer
              floatingPosition={position}
              renderInFullFrame={isConnected && layout === widgetLayout.FULL_FRAME}
            />
          </>
        </div>
      </div>
    </div>
  );
}
