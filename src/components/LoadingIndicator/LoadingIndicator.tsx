export function LoadingIndicator({ title }: { title: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentcolor"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <title>{title}</title>
      <rect width="0.738em" height="0.738em" x="42.5" y="22.5" rx="7.5" ry="7.5">
        <animate
          attributeName="opacity"
          begin="-0.8s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        />
      </rect>
      <rect
        width="0.738em"
        height="0.738em"
        x="42.5"
        y="22.5"
        rx="7.5"
        ry="7.5"
        transform="rotate(72 50 50)"
      >
        <animate
          attributeName="opacity"
          begin="-0.6s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        />
      </rect>
      <rect
        width="0.738em"
        height="0.738em"
        x="42.5"
        y="22.5"
        rx="7.5"
        ry="7.5"
        transform="rotate(144 50 50)"
      >
        <animate
          attributeName="opacity"
          begin="-0.4s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        />
      </rect>
      <rect
        width="0.738em"
        height="0.738em"
        x="42.5"
        y="22.5"
        rx="7.5"
        ry="7.5"
        transform="rotate(216 50 50)"
      >
        <animate
          attributeName="opacity"
          begin="-0.2s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        />
      </rect>
      <rect
        width="0.738em"
        height="0.738em"
        x="42.5"
        y="22.5"
        rx="7.5"
        ry="7.5"
        transform="rotate(288 50 50)"
      >
        <animate
          attributeName="opacity"
          begin="0s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        />
      </rect>
    </svg>
  );
}
LoadingIndicator.defaultProps = {
  title: 'Loading...',
};
