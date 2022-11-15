import React from 'react';

type DpBlurProps = {
  children?: JSX.Element | undefined;
};
export function DpBlur({ children }: DpBlurProps) {
  return <div style="backdrop-filter:blur(10px)">{children}</div>;
}
