import { DpBlur } from '.';
import { imageCardContent } from '../../storybook-content';
import { ImageCard } from '../../contentCards/ImageCard';

export default {
  title: `Components / DpBlur`,
  component: DpBlur,
};

export const Basic = () => {
  return (
    <div
      className="sm-h-full"
      style="background-image:url(https://assets.gocomics.com/uploads/collection_images/collection_image_large_1628638_dilbert-inventions-content-admin-2048x1280_201809101600.jpg);background-attachment:fixed"
    >
      <DpBlur>
        <div className="sm-pt-96" style="">
          <ImageCard content={imageCardContent} />
          <ImageCard content={imageCardContent} />
        </div>
      </DpBlur>
    </div>
  );
};
