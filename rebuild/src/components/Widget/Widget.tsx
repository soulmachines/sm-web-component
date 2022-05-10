import { ComponentChildren } from 'preact';
import { Icon } from '../Icon';

export type WidgetProps = {
  greeting?: string;
  profilePicture?: string;
  children?: ComponentChildren;
};

export function Widget({ children, profilePicture, greeting }: WidgetProps) {
  return (
    <div>
      <button>
        {profilePicture ? (
          <img src={profilePicture} alt="Digital person" />
        ) : (
          <Icon name="profile" title="Digital person" />
        )}
      </button>
      <p>{greeting || "Got any questions? I'm happy to help."}</p>
      {children}
    </div>
  );
}
