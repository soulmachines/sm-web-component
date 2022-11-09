import { FunctionalComponent } from 'preact';

export const FixedHeightDecorator = (
  Story: FunctionalComponent,
  options: Record<string, unknown>,
) => {
  return (
    <div className="sm-w-full sm-h-96">
      <Story {...options} />
    </div>
  );
};
