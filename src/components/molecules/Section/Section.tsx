import React from 'react';

import {
  HeaderSt,
  SectionSt,
  SectionContextSt,
  SectionBackGroundSt,
  SubHeaderSt,
  DescriptionSt,
} from './Section.styles';

interface ISection {
  isSeparate?: boolean;
  content?: 'left' | 'right';
  header?: string;
  smallHeader?: string;
  subHeader?: string;
  description?: string;
  imageName?: string;
  buttonLeft?: string;
  buttonRight?: string;
}

export const Section = ({
  isSeparate = false,
  content,
  header,
  smallHeader,
  subHeader,
  description,
  imageName,
  buttonLeft,
  buttonRight,
}: ISection) => {
  return (
    <SectionSt>
      <SectionContextSt isSeparate={isSeparate}>
        {!!header && <HeaderSt>{header}</HeaderSt>}
        {!!subHeader && <SubHeaderSt>{subHeader}</SubHeaderSt>}
        {!!description && <DescriptionSt>{description}</DescriptionSt>}
      </SectionContextSt>
    </SectionSt>
  );
};
