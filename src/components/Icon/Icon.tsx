import paths from './paths';

export type IconProps = {
  name?: keyof typeof paths;
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
      {paths[name!].map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  );
}
Icon.defaultProps = {
  size: '20px',
};

export function InterruptIcon({ size, title }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 31"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round"
      >
        <g
          id="btn-interrupt-on-click"
          transform="translate(1.000000, 1.000000)"
          stroke="#000000"
          stroke-width="2"
        >
          <g id="Group">
            <path
              d="M12,5 C12,3.8954305 12.8954305,3 14,3 C15.1045695,3 16,3.8954305 16,5 L16,9 M8,6 L8,2 C8,0.8954305 8.8954305,0 10,0 C11.1045695,0 12,0.8954305 12,2 L12,11 M4,11 L4,4 C4,2.8954305 4.8954305,2 6,2 C7.1045695,2 8,2.8954305 8,4 L8,13 M0,17 L0,10 C0,8.8954305 0.8954305,8 2,8 C3.1045695,8 4,8.8954305 4,10 L4,15 M19,22 C19,25.8659932 15.8659932,29 12,29"
              id="Shape"
            ></path>
            <path d="M0,17 L0,21 C0,25.418278 3.581722,29 8,29" id="Path" opacity="1.0"></path>
            <path
              d="M15,20 L15,15.059 C15,13.922 15.895,13 17,13 C18.105,13 19,13.922 19,15.059 L19,22 M10,26 L10,25 C10,22.2385763 12.2385763,20 15,20"
              id="Shape"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}
InterruptIcon.defaultProps = {
  size: '20px',
};
