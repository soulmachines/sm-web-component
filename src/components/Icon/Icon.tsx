import paths from './paths';

export type IconProps = {
  name: keyof typeof paths;
  title?: string;
  size?: number | string;
};

export function Icon({ size, name, title }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentcolor"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
    >
      <title>{title || name}</title>
      {paths[name].map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  );
}
Icon.defaultProps = {
  size: '20px',
};
