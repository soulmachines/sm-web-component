import { DpBlur, DpBlurProps } from '.';
import { imageCardContent } from '../../storybook-content';
import { ImageCard } from '../../contentCards/ImageCard';

export default {
  title: `Components / DpBlur`,
  component: DpBlur,
  argTypes: {
    maxBlur: {
      control: {
        type: 'number',
        min: 1,
        max: 10,
        step: 1,
      },
      defaultValue: 10,
    },
  },
};

// type BlurData = {
//   maxBlur:
// };

export const Basic = ({ maxBlur }: DpBlurProps) => {
  return (
    <div
      className="sm-h-full"
      style="background-image:url(https://assets.gocomics.com/uploads/collection_images/collection_image_large_1628638_dilbert-inventions-content-admin-2048x1280_201809101600.jpg);background-attachment:fixed"
    >
      <DpBlur maxBlur={maxBlur}>
        <div className="" style="padding-top:calc(90%);">
          <ImageCard content={imageCardContent} />
          <ImageCard content={imageCardContent} />
        </div>
      </DpBlur>
    </div>
  );
};
