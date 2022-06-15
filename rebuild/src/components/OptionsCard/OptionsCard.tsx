import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { Card } from '../Card';
import { CardComponent } from '../ContentCards';
import { Icon } from '../Icon';

type Option = {
  value?: string;
  label: string;
};

type OptionsData = {
  options: Option[];
};

export function OptionsCard({ content }: CardComponent) {
  const { sendTextMessage } = useSoulMachines();
  const data = content.data as unknown as OptionsData;

  if (!data.options.length) {
    return null;
  }

  return (
    <Card>
      <div data-sm-content={content.id}>
        {data.options.map((option) => {
          return (
            <button
              key={content.id + option.label}
              className="sm-flex sm-items-center"
              onClick={() => sendTextMessage(option?.value || option.label)}
            >
              {option.label}
              <Icon name="chevronRight" />
            </button>
          );
        })}
      </div>
    </Card>
  );
}
