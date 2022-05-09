import { ComponentChildren } from 'preact';

type Props = {
  greeting?: string;
  profilePicture?: string;
  children?: ComponentChildren;
};

export function Widget({
  children,
  profilePicture,
  greeting = "Got any questions? I'm happy to help.",
}: Props) {
  return (
    <div>
      {profilePicture && <p>{profilePicture}</p>}
      <p>{greeting}</p>
      {children}
    </div>
  );
}
