import { ContentCard as SMContentCard } from '@soulmachines/smwebsdk';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { Button } from '../../components/Button';
import { ContentCard } from '../../appComponents/ContentCard';
import { Icon } from '../../components/Icon';

type OptionsCardProps = {
  content: SMContentCard;
  //  Styles are SMSMContentCard through from react spring
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
    <ContentCard contentId={content.id} style={style}>
      <div className="sm-flex sm-flex-col sm-gap-y-2">
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
    </ContentCard>
  );
}
