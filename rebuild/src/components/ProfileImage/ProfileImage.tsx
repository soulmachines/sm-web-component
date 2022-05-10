import { Icon } from '../Icon';

export type ProfileImageProps = {
  src?: string;
};

export function ProfileImage({ src }: ProfileImageProps) {
  const altText = 'Digital person';

  if (src) {
    return <img src={src} alt={altText} />;
  }

  return <Icon name="profile" title={altText} />;
}
