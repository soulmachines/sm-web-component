export type LoadingIndicatorProps = {
  size?: number | string;
};

export function LoadingIndicator({ size }: LoadingIndicatorProps = { size: '100%' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style="margin: auto; display: block; shape-rendering: auto;"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <title>Loading...</title>
      <g transform="rotate(0 50 50)">
        <rect x="42.5" y="22.5" rx="7.5" ry="7.5" width="15" height="15" fill="#6a6a6a">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.8s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(72 50 50)">
        <rect x="42.5" y="22.5" rx="7.5" ry="7.5" width="15" height="15" fill="#6a6a6a">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.6s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(144 50 50)">
        <rect x="42.5" y="22.5" rx="7.5" ry="7.5" width="15" height="15" fill="#6a6a6a">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.4s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(216 50 50)">
        <rect x="42.5" y="22.5" rx="7.5" ry="7.5" width="15" height="15" fill="#6a6a6a">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.2s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(288 50 50)">
        <rect x="42.5" y="22.5" rx="7.5" ry="7.5" width="15" height="15" fill="#6a6a6a">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
    </svg>
  );
}
