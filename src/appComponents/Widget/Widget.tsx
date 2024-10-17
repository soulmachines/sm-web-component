import { JSX } from 'preact';
import classNames from 'classnames';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { ConnectionStatus, SessionDataKeys, widgetLayout, widgetPosition } from '../../enums';
import { Notifications } from '../../components/Notifications';
import { ProfileImage } from '../ProfileImage';
import { ContentCards } from '../ContentCards';
import { useEffect, useRef } from 'preact/hooks';
import { ConnectButton } from './components/ConnectButton';
import { ProgressIndicator } from './components/ProgressIndicator';
import { ProgressIndicatorWrapper } from './components/ProgressIndicatorWrapper';
import { Video } from '../Video';
import { VideoControls } from '../VideoControls';
import { Modal } from '../Modal';
import { BackdropBlur } from '../../components/BackdropBlur';

export type WidgetProps = {
  greeting?: string;
  profilePicture?: string;
  position?: widgetPosition;
  loadingIndicator?: JSX.Element;
  autoConnect?: boolean;
};

export function Widget({
  profilePicture,
  greeting,
  loadingIndicator,
  position = widgetPosition.TOP_LEFT,
  autoConnect,
}: WidgetProps) {
  const { connectionStatus, connectionState, connect, layout, toggleLayout, cards } =
    useSoulMachines();
  const isConnecting = connectionStatus === ConnectionStatus.CONNECTING;
  const isConnected = connectionStatus === ConnectionStatus.CONNECTED;
  const isConnectingOrConnected = connectionStatus === ConnectionStatus.CONNECTING || isConnected;
  const isDisconnected = connectionStatus === ConnectionStatus.DISCONNECTED;
  const modalPanelRef = useRef<HTMLDivElement | null>(null);

  // Connect directly if it's resume session
  useEffect(() => {
    if (isDisconnected && sessionStorage.getItem(SessionDataKeys.sessionId)) {
      //  if (isDisconnected) {
      connect();
    }
  }, [connect, isDisconnected, autoConnect]);

  // When in fullframe mode and content cards change, return the user to the top of the scrollable container
  // Android and Firefox browsers do not return the user to the top and sometimes the new content card is not visible
  useEffect(() => {
    if (layout === widgetLayout.FULL_FRAME) {
      modalPanelRef.current?.scroll({ top: 0 });
    }
  }, [cards, layout]);

  return (
    <div>
      <div className="sm-sticky sm-top-0 sm-w-full sm-h-full">
        <Video autoConnect={false} />
        <div className="sm-absolute sm-top-0 sm-left-0 sm-w-full sm-h-full">
          <BackdropBlur scrollTargetRef={modalPanelRef} smallScreenOnly={true}>
            <VideoControls />
          </BackdropBlur>
        </div>
      </div>
      <div className="sm-fixed sm-text-primary-text sm-z-max sm-pointer-events-none sm-h-full sm-w-full sm-p-5">
        <div
          className={classNames('sm-h-full sm-flex sm-flex-col', {
            'sm-gap-y-2 md:sm-gap-y-5 sm-justify-end':
              layout === widgetLayout.FLOAT && position !== widgetPosition.TOP_LEFT,
            'sm-justify-start': position === widgetPosition.TOP_LEFT,
          })}
        >
          <div
            className={classNames('sm-flex sm-flex-wrap sm-gap-2 sm-items-center', {
              'sm-justify-end sm-items-end': position === widgetPosition.BOTTOM_RIGHT,
              'sm-justify-start sm-items-start':
                position === widgetPosition.BOTTOM_LEFT || position === widgetPosition.TOP_LEFT,
              'sm-flex-row-reverse': position === widgetPosition.BOTTOM_LEFT,
            })}
          >
            {/* Display notifications when not connecting or connected */}
            {!isConnectingOrConnected && (
              <div className="sm-max-w-xs sm-z-10">
                <Notifications greeting={greeting} />
              </div>
            )}

            {/* Display connect button when disconnected */}
            {isDisconnected && (
              <div className="sm-w-18 sm-h-18 md:sm-w-35 md:sm-h-35">
                <ConnectButton>
                  <ProfileImage src={profilePicture} />
                </ConnectButton>
              </div>
            )}

            {/* Display progress indicator */}
            <ProgressIndicatorWrapper transitionIn={isConnecting} position={position}>
              <ProgressIndicator indicator={loadingIndicator} connectionState={connectionState} />
            </ProgressIndicatorWrapper>

            {/* Display video and controls if in FLOAT layout and connected */}
            {layout === widgetLayout.FLOAT && isConnected && (
              //  <div className="sm-floating-container">
              <div className="sm-w-full sm-h-full sm-round-shadow-box sm-border-2 sm-border-solid sm-border-gray-lightest">
                <Video autoConnect={false} />
                <div className="sm-absolute sm-top-0 sm-left-0 sm-w-full sm-h-full">
                  <VideoControls />
                </div>
              </div>
              //  </div>
            )}
          </div>
        </div>
        {/* Khurram Shane hacking
      <div className="sm-sticky sm-top-0 sm-w-full sm-h-full">
        <Video autoConnect={false} />
        <div className="sm-absolute sm-top-0 sm-left-0 sm-w-full sm-h-full">
          <BackdropBlur scrollTargetRef={modalPanelRef} smallScreenOnly={true}>
            <VideoControls />
          </BackdropBlur>
        </div>
      </div> */}
        {/* Modal for full-frame layout when connected */}
      </div>
    </div>
  );
}
