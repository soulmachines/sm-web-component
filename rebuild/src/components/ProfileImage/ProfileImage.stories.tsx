import { ProfileImage } from '.';
import { ProfileImageProps } from './ProfileImage';

export default {
  title: `Components / ProfileImage`,
  component: ProfileImage,
};

export const Basic = ({ src }: ProfileImageProps) => <ProfileImage src={src} />;
Basic.args = {
  src: 'https://assets.cdn.soulmachines.cloud/AvatarCoverImages/image-sam-l.jpg',
};
