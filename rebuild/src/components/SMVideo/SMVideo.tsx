import { JSX } from 'preact';
import { SoulMachinesProvider } from '../../contexts/SoulMachinesContext';
import { Video } from '../Video';

export type SMVideoProps = {
  apiKey?: string;
  tokenServer?: string;
  autoConnect: string;
  // Slot attributes come through as the case entered
  // Have asked about auto formatting them to camelcase like the attributes https://github.com/jahilldev/component-elements/issues/16
  'connecting-indicator'?: JSX.Element;
};

export function SMVideo(props: SMVideoProps) {
  // Cast from string into a boolean
  const autoConnect = props.autoConnect === 'true';

  return (
    <SoulMachinesProvider apiKey={props.apiKey} tokenServer={props.tokenServer}>
      <Video autoConnect={autoConnect} loadingIndicator={props['connecting-indicator']} />
    </SoulMachinesProvider>
  );
}
SMVideo.defaultProps = {
  autoConnect: 'true',
};
