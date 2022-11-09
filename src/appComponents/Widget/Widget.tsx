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
import { Dialog } from '@headlessui/react';
import { Video } from '../Video';
import { VideoControls } from '../VideoControls';

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
  const { connectionStatus, connectionState, connect, layout, toggleLayout } = useSoulMachines();
  const isConnecting = connectionStatus === ConnectionStatus.CONNECTING;
  const isConnected = connectionStatus === ConnectionStatus.CONNECTED;
  const isConnectingOrConnected = connectionStatus === ConnectionStatus.CONNECTING || isConnected;
  const isDisconnected = connectionStatus === ConnectionStatus.DISCONNECTED;

  // Connect directly if it's resume session
  useEffect(() => {
    if (isDisconnected && sessionStorage.getItem(SessionDataKeys.sessionId)) {
      connect();
    }
  }, [connect, isDisconnected]);

  return (
    <div className="sm-fixed sm-bottom-0 sm-right-0 sm-text-primary-text sm-z-max sm-pointer-events-none sm-h-full sm-w-full sm-p-5">
      <div
        className={classNames('sm-h-full sm-flex sm-flex-col sm-justify-end', {
          'sm-gap-y-2 md:sm-gap-y-5': layout === widgetLayout.FLOAT,
          'sm-items-end': position === widgetPosition.BOTTOM_RIGHT,
          'sm-items-start': position === widgetPosition.BOTTOM_LEFT,
        })}
      >
        <div class="sm-w-79 md:sm-w-104 sm-max-h-full sm-flex sm-flex-col sm-justify-end sm-gap-y-2 sm-overflow-hidden sm-p-8 -sm-m-8 md:sm-gap-y-3">
          <ContentCards />
        </div>

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
            <ProgressIndicatorWrapper transitionIn={isConnecting} position={position}>
              <ProgressIndicator indicator={loadingIndicator} connectionState={connectionState} />
            </ProgressIndicatorWrapper>

            <div className="sm-floating-container" hidden={!isConnected} aria-hidden={!isConnected}>
              {layout === widgetLayout.FLOAT && (
                <div className="sm-w-full sm-h-full sm-round-shadow-box sm-border-2 sm-border-solid sm-border-gray-lightest">
                  <Video autoConnect={false} />
                  {isConnected && <VideoControls />}
                </div>
              )}
            </div>
          </>
        </div>
      </div>

      <Dialog
        open={isConnected && layout === widgetLayout.FULL_FRAME}
        onClose={() => toggleLayout()}
        className="sm-widget"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="sm-fixed sm-inset-0 sm-bg-black/40 sm-z-max" aria-hidden="true" />

        <div className="sm-fixed sm-inset-0 md:sm-inset-10 xl:sm-inset-16 sm-z-max sm-overflow-y-auto">
          <Dialog.Panel className="sm-w-full sm-h-full md:sm-rounded-3xl sm-overflow-hidden sm-transform-gpu sm-border-2 sm-border-solid sm-border-gray-lightest">
            <Video autoConnect={false} />
            {isConnected && <VideoControls />}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
