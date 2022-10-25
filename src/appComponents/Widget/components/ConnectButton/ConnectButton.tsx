import { useSoulMachines } from '../../../../contexts/SoulMachinesContext';

export const ConnectButton = ({ children }: { children: JSX.Element | string }) => {
  const { connect } = useSoulMachines();

  return (
    <button
      onClick={connect}
      data-sm-cy="connectButton"
      className="sm-h-full sm-w-full sm-flex sm-justify-center sm-items-center sm-round-shadow-box sm-pointer-events-auto sm-text-primary-base sm-border-none sm-ring sm-ring-transparent sm-bg-transparent hover:sm-ring-secondary-base sm-transition-colors sm-overflow-hidden"
    >
      {children}
    </button>
  );
};
