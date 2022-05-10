import { ComponentChildren } from 'preact';
import { ProfileImage } from '../ProfileImage';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { Greeting } from '../Greeting';

export type WidgetProps = {
  greeting?: string;
  profilePicture?: string;
  children?: ComponentChildren;
};

export function Widget({ children, profilePicture, greeting }: WidgetProps) {
  const { connect } = useSoulMachines();

  return (
    <div>
      <button onClick={connect}>
        <ProfileImage src={profilePicture} />
      </button>
      <Greeting message={greeting} />
      {children}
    </div>
  );
}
