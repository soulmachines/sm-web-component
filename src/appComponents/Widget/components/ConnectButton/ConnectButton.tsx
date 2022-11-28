import { useSoulMachines } from '../../../../contexts/SoulMachinesContext';

export const ConnectButton = ({ children }: { children: JSX.Element | string }) => {
  const { connect } = useSoulMachines();

  return (
    <button
      aria-label="Talk to a Digital Person"
      onClick={connect}
      data-sm-cy="connectButton"
      className="sm-h-full sm-w-full sm-p-0 sm-bg-white sm-flex sm-justify-center sm-items-center sm-round-shadow-box sm-pointer-events-auto sm-text-primary-base sm-border-none sm-ring sm-ring-transparent hover:sm-ring-secondary-base sm-transition-colors sm-overflow-hidden"
    >
      {children}
    </button>
  );
};
