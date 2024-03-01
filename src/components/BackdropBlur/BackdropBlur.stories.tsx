import { BackdropBlur, BackdropBlurProps } from '.';
import { useRef } from 'preact/hooks';
import { ContentCard } from '../../appComponents/ContentCard';
import { Heading } from '../Heading';
import { Text } from '../Text';

export default {
  title: 'Components / BackdropBlur',
  component: BackdropBlur,
  argTypes: {
    scrollOffset: {
      control: {
        type: 'number',
        min: 1,
        max: 20,
        step: 1,
      },
    },
    smallScreenOnly: {
      control: 'boolean',
    },
  },
  args: {
    scrollOffset: 10,
    smallScreenOnly: true,
  },
};

export const Basic = ({ scrollOffset, smallScreenOnly }: BackdropBlurProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={ref}
      className="sm-h-screen sm-overflow-y-auto"
      style="background-image:url(https://dp-images.cdn.soulmachines.cloud/stg/ZT_ASSET_4D621603C3F22BE7954B45DA866255C2_17_0_STG.jpg);background-size:cover;background-position: center;"
    >
      <BackdropBlur
        scrollTargetRef={ref}
        scrollOffset={scrollOffset}
        smallScreenOnly={smallScreenOnly}
      >
        <div id="modal" className="sm-flex sm-flex-col sm-gap-y-3" style={{ height: '2000px' }}>
          <ContentCard contentId="mockId">
            <>
              <Heading type="h1">Backdrop Blur</Heading>
              <Text>The background will when you scroll the offset amount.</Text>
            </>
          </ContentCard>
        </div>
      </BackdropBlur>
    </div>
  );
};
