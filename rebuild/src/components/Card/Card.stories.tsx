import { Card } from '.';

export default {
  title: `Components / Card`,
  component: Card,
};

export const Basic = () => (
  <Card>
    <div>
      <p>Any content can be passed here</p>
      <button>Trigger</button>
    </div>
  </Card>
);
