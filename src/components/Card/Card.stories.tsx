import { Card, CardProps } from '.';

export default {
  title: `Components / Card`,
  component: Card,
  args: {
    isDismissible: true,
    flush: false,
  },
};

export const Basic = ({ isDismissible, flush }: CardProps) => {
  return (
    <Card isDismissible={isDismissible} flush={flush}>
      <div>
        <p>Any content can be passed here</p>
      </div>
    </Card>
  );
};
