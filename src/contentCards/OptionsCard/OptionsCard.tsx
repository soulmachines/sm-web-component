import { ContentCard } from '@soulmachines/smwebsdk';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Icon } from '../../components/Icon';

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
    <Card isDismissible={false} style={style}>
      <div
        data-sm-content={content.id}
        className="sm-content-card-max-height sm-h-full sm-flex sm-flex-col sm-gap-y-2 sm-overflow-y-auto"
      >
        {data.options.map((option) => {
          return (
            <Button
              key={content.id + option.label}
              theme="outline"
              onClick={() => sendTextMessage(option?.value || option.label)}
            >
              {option.label}
              <Icon name="chevronRight" />
            </Button>
          );
        })}
      </div>
    </Card>
  );
}
