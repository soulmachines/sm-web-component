import { Card, CardProps } from '.';

export default {
  title: `Components / Card`,
  component: Card,
  args: {
    isDismissible: true,
  },
};

export const Basic = ({ isDismissible }: CardProps) => {
  return (
    <Card isDismissible={isDismissible}>
      <div>
        <p>Any content can be passed here</p>
        <button>Trigger</button>
      </div>
    </Card>
  );
};
