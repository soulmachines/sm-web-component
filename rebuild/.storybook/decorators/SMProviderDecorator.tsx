import { FunctionalComponent } from 'preact';
import { SoulMachinesProvider } from '../../src/contexts/SoulMachinesContext';

export const SMProviderDecorator = (
  Story: FunctionalComponent,
  options: Record<string, unknown>,
) => {
  return (
    <SoulMachinesProvider apiKey={import.meta.env.VITE__PROJECT_API_KEY as string}>
      <Story {...options} />
    </SoulMachinesProvider>
  );
};
