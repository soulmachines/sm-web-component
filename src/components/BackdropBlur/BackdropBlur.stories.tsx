import { BackdropBlur, BackdropBlurProps } from '.';
import { imageCardContent } from '../../storybook-content';
import { ImageCard } from '../../contentCards/ImageCard';
import { useRef } from 'preact/hooks';

export default {
  title: `Components / BackdropBlur`,
  component: BackdropBlur,
  argTypes: {
    scrollOffset: {
      control: {
        type: 'number',
        min: 1,
        max: 20,
        step: 1,
      },
      defaultValue: 10,
    },
  },
};

export const Basic = ({ scrollOffset }: BackdropBlurProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={ref}
      className="sm-h-screen sm-overflow-y-auto"
      style="background-image:url(https://assets.gocomics.com/uploads/collection_images/collection_image_large_1628638_dilbert-inventions-content-admin-2048x1280_201809101600.jpg);background-attachment:fixed"
    >
      <BackdropBlur scrollTargetRef={ref} scrollOffset={scrollOffset}>
        <div id="modal" style={{ height: '3000px' }}>
          <ImageCard content={imageCardContent} />
          <ImageCard content={imageCardContent} />
        </div>
      </BackdropBlur>
    </div>
  );
};
