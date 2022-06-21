import React, { ReactNode } from 'react';
import { BoxLandingSt } from './BoxLanding.styles';

export const BoxLanding = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  return <BoxLandingSt>{children}</BoxLandingSt>;
};
