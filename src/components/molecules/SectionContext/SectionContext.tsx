import React from 'react';
import { CTAButton } from '../CTAButton/CTAButton';

import {
  SectionContextSt,
  HeaderSt,
  SubHeaderSt,
  DescriptionSt,
} from './SectionContext.styles';

interface IButtonProps {
  text: string;
  withBg?: boolean;
}

interface ISection {
  header?: string;
  smallHeader?: string;
  subHeader?: string;
  description?: string;
  ctaButton?: IButtonProps;
  background: 'transparent' | 'primary';
}

export const SectionContext = ({
  header,
  smallHeader,
  subHeader,
  description,
  ctaButton,
  background,
}: ISection) => {
  return (
    <SectionContextSt background={background}>
      {!!header && <HeaderSt>{header}</HeaderSt>}
      {!!subHeader && <SubHeaderSt>{subHeader}</SubHeaderSt>}
      {!!description && <DescriptionSt>{description}</DescriptionSt>}
      {!!ctaButton?.text && <CTAButton hasBackground text={ctaButton?.text} />}
    </SectionContextSt>
  );
};
