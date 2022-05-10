export function LoadingIndicator() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      fill="currentcolor"
      class="default-spinner"
    >
      <title>Loading...</title>
      <g transform="rotate(0 50 50)">
        <rect x="42.5" y="22.5" rx="7.5" ry="7.5" width="15" height="15">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.8s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(72 50 50)">
        <rect x="42.5" y="22.5" rx="7.5" ry="7.5" width="15" height="15">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.6s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(144 50 50)">
        <rect x="42.5" y="22.5" rx="7.5" ry="7.5" width="15" height="15">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.4s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(216 50 50)">
        <rect x="42.5" y="22.5" rx="7.5" ry="7.5" width="15" height="15">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.2s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(288 50 50)">
        <rect x="42.5" y="22.5" rx="7.5" ry="7.5" width="15" height="15">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
    </svg>
  );
}
