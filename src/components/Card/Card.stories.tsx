import { Card, CardProps } from '.';
import { Button } from '../Button';

export default {
  title: `App Components / Card`,
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
        <Button>Trigger</Button>
      </div>
    </Card>
  );
};
