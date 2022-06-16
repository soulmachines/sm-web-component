import { ContentCard } from '@soulmachines/smwebsdk';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { Card } from '../Card';
import { Icon } from '../Icon';

type OptionsCardProps = {
  content: ContentCard;
  //  Styles are passed through from react spring
  style?: Record<string, 'string | CSSProperties | undefined'>;
};

type Option = {
  value?: string;
  label: string;
};

type OptionsData = {
  options: Option[];
};

export function OptionsCard({ content, style }: OptionsCardProps) {
  const { sendTextMessage } = useSoulMachines();
  const data = content.data as unknown as OptionsData;

  if (!data.options.length) {
    return null;
  }

  return (
    <div style={style}>
      <Card isDismissible={false}>
        <div data-sm-content={content.id} className="sm-max-h-contentCard">
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
    </div>
  );
}
