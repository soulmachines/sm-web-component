import { ConnectionStateData } from '@soulmachines/smwebsdk';
import { LoadingIndicator } from '../../../../components/LoadingIndicator';

export const ProgressIndicator = ({
  indicator,
  connectionState,
}: {
  indicator?: JSX.Element;
  connectionState: ConnectionStateData;
}) => (
  <div className="sm-flex sm-h-full sm-items-center sm-justify-center sm-text-primary-base">
    {indicator ? (
      indicator
    ) : (
      <LoadingIndicator
        stepName={connectionState.name}
        totalSteps={connectionState.totalSteps}
        percentageLoaded={connectionState.percentageLoaded}
      />
    )}
  </div>
);
