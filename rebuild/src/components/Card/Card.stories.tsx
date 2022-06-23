import { Card, CardProps } from '.';
import { Button } from '../Button';

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
        <Button>Trigger</Button>
      </div>
    </Card>
  );
};
