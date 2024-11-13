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
  position = widgetPosition.BOTTOM_RIGHT,
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
      connect();
    }
  }, [connect, isDisconnected]);

  // When in fullframe mode and content cards change, return the user to the top of the scrollable container
  // Android and Firefox browsers do not return the user to the top and sometimes the new content card is not visible
  useEffect(() => {
    if (layout === widgetLayout.FULL_FRAME) {
      modalPanelRef.current?.scroll({ top: 0 });
    }
  }, [cards, layout]);

  return (
    <div className="sm-fixed sm-bottom-0 sm-right-0 sm-text-primary-text sm-z-max sm-pointer-events-none sm-h-full sm-w-full sm-p-5">
      <div
        className={classNames('sm-h-full sm-flex sm-flex-col sm-justify-end', {
          'sm-gap-y-2 md:sm-gap-y-5': layout === widgetLayout.FLOAT,
          'sm-items-end': position === widgetPosition.BOTTOM_RIGHT,
          'sm-items-start': position === widgetPosition.BOTTOM_LEFT,
        })}
      >
        {layout === widgetLayout.FLOAT && <ContentCards fullHeight={false} />}

        <div
          className={classNames(
            'sm-flex sm-flex-wrap sm-gap-2 sm-items-center sm-justify-end md:sm-gap-5',
            {
              'sm-flex-row-reverse': position === widgetPosition.BOTTOM_LEFT,
            },
          )}
        >
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
            {/* <ProgressIndicatorWrapper transitionIn={isConnecting} position={position}>
              <ProgressIndicator indicator={loadingIndicator} connectionState={connectionState} />
            </ProgressIndicatorWrapper> */}

            {layout === widgetLayout.FLOAT && isConnected && (
              <div className="sm-floating-container">
                <div className="sm-w-full sm-h-full sm-round-shadow-box sm-border-2 sm-border-solid sm-border-gray-lightest">
                  <Video autoConnect={false} />
                  <div className="sm-absolute sm-top-0 sm-left-0 sm-w-full sm-h-full">
                    <VideoControls />
                  </div>
                </div>
              </div>
            )}
          </>
        </div>
      </div>

      <Modal
        title="Interactive Digital Person"
        isOpen={isConnected && layout === widgetLayout.FULL_FRAME}
        onClose={() => toggleLayout()}
        panelRef={modalPanelRef}
      >
        <div className="sm-sticky sm-top-0 sm-w-full sm-h-full">
          <Video autoConnect={false} />
          <div className="sm-absolute sm-top-0 sm-left-0 sm-w-full sm-h-full">
            <BackdropBlur scrollTargetRef={modalPanelRef} smallScreenOnly={true}>
              <VideoControls />
            </BackdropBlur>
          </div>
        </div>

        <div
          className="sm-absolute sm-top-0 sm-left-0 sm-w-full sm-h-full
            minRatio4/3:sm-w-auto minRatio4/3:sm-h-auto minRatio4/3:sm-left-auto
            minRatio4/3:sm-top-24 minRatio4/3:sm-right-24 xl:sm-top-40 xl:sm-right-40 sm-pointer-events-none"
        >
          <div className="sm-pt-[60vh] sm-flex sm-justify-center sm-pb-8 minRatio4/3:sm-pt-0">
            <ContentCards fullHeight={true} />
          </div>
        </div>
      </Modal>
    </div>
  );
}
