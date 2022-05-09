import { ComponentChildren } from 'preact';

export type WidgetProps = {
  greeting?: string;
  profilePicture?: string;
  children?: ComponentChildren;
};

export function Widget({ children, profilePicture, greeting }: WidgetProps) {
  return (
    <div>
      {profilePicture && <button>{profilePicture}</button>}
      <p>{greeting || "Got any questions? I'm happy to help."}</p>
      {children}
    </div>
  );
}
