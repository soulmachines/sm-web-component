import { ComponentChildren } from 'preact';
import { ProfileImage } from '../ProfileImage';

export type WidgetProps = {
  greeting?: string;
  profilePicture?: string;
  children?: ComponentChildren;
};

export function Widget({ children, profilePicture, greeting }: WidgetProps) {
  return (
    <div>
      <button>
        <ProfileImage src={profilePicture} />
      </button>
      <p>{greeting || "Got any questions? I'm happy to help."}</p>
      {children}
    </div>
  );
}
