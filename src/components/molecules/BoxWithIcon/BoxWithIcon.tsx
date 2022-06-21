import React from 'react';

import {
  BoxDescrition,
  BoxHeading,
  BoxHeadingWrapper,
  BoxWithIconst,
} from './BoxWithIcon.styles';
import { IBoxWithIconInfos } from '@bookable24/RESTAURANT.CONFIG/restaurant.types';

export const BoxWithIcon = ({ boxInfo }: { boxInfo: IBoxWithIconInfos }) => {
  const { icon, heading, descriptions } = boxInfo;
  return (
    <BoxWithIconst>
      <BoxHeadingWrapper>
        <>
          {icon} <BoxHeading> {heading}</BoxHeading>
        </>
      </BoxHeadingWrapper>
      <>
        {descriptions.map((item, index) => (
          <BoxDescrition key={index}>{item} </BoxDescrition>
        ))}
      </>
    </BoxWithIconst>
  );
};
