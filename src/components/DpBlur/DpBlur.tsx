import React from 'react';

export type DpBlurProps = {
  children?: JSX.Element | undefined;
  maxBlur?: number;
};
export function DpBlur({ children, maxBlur = 10 }: DpBlurProps) {
  return <div style={'backdrop-filter:blur(' + maxBlur + 'px);'}>{children}</div>;
}
