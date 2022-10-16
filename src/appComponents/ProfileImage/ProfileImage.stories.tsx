import { ProfileImage } from '.';
import { ProfileImageProps } from './ProfileImage';

export default {
  title: `App Components / ProfileImage`,
  component: ProfileImage,
};

export const Basic = ({ src }: ProfileImageProps) => {
  return (
    <div style="width: 400px; height: 400px;">
      <ProfileImage src={src} />
    </div>
  );
};
Basic.args = {
  src: 'https://assets.cdn.soulmachines.cloud/AvatarCoverImages/image-sam-l.jpg',
};
