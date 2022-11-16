import { DpBlur, DpBlurProps } from '.';
import { imageCardContent } from '../../storybook-content';
import { ImageCard } from '../../contentCards/ImageCard';
import { useRef } from 'preact/hooks';

export default {
  title: `Components / DpBlur`,
  component: DpBlur,
  argTypes: {
    maxBlur: {
      control: {
        type: 'number',
        min: 1,
        max: 20,
        step: 1,
      },
      defaultValue: 10,
    },
    isActive: {
      control: 'boolean',
    },
  },
};

// type BlurData = {
//   maxBlur:
// };

export const Basic = ({ maxBlur, isActive }: DpBlurProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div
      id="video"
      ref={ref}
      className="sm-h-full sm-overflow-y-auto"
      style="background-image:url(https://assets.gocomics.com/uploads/collection_images/collection_image_large_1628638_dilbert-inventions-content-admin-2048x1280_201809101600.jpg);background-attachment:fixed"
    >
      <DpBlur scrollTargetRef={ref}>
        <div id="modal" className="" style="padding-top:90px;height=150%">
          <ImageCard content={imageCardContent} />
          <ImageCard content={imageCardContent} />
        </div>
      </DpBlur>
    </div>
  );
};
