import { Icon } from '../Icon';

export type ProfileImageProps = {
  src?: string;
};

export function ProfileImage({ src }: ProfileImageProps) {
  const altText = 'Digital person';

  if (src) {
    // Render as a background image to ensure it's not to large and fits in the container
    return (
      <div
        style={{ backgroundImage: `url(${src})` }}
        className="sm-w-full sm-h-full sm-bg-cover sm-bg-center"
        data-sm="profileImage"
      >
        <span class="sm-sr-only">{altText}</span>
      </div>
    );
  }

  return <Icon name="profile" title={altText} size={46} />;
}
