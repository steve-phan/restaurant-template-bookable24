import React from 'react';
import { CTAButton } from '../CTAButton/CTAButton';

import {
  SectionContextSt,
  HeaderSt,
  SubHeaderSt,
  DescriptionSt,
  ButtonGroupSt,
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
  ctaButton?: string;
  background: 'transparent' | 'black';
  buttonLeft?: string;
  buttonRight?: string;
}

export const SectionContext = ({
  header,
  smallHeader,
  subHeader,
  description,
  ctaButton,
  background,
  buttonLeft,
  buttonRight,
}: ISection) => {
  return (
    <SectionContextSt background={background}>
      {!!header && <HeaderSt>{header}</HeaderSt>}
      {!!subHeader && <SubHeaderSt>{subHeader}</SubHeaderSt>}
      {!!smallHeader && <SubHeaderSt>{smallHeader}</SubHeaderSt>}
      {!!description && <DescriptionSt>{description}</DescriptionSt>}
      {!!ctaButton && <CTAButton hasBackground text={ctaButton} />}
      {!!buttonLeft && !!buttonRight && (
        <ButtonGroupSt>
          <CTAButton text={buttonLeft} />
          <CTAButton hasBackground text={buttonRight} />
        </ButtonGroupSt>
      )}
    </SectionContextSt>
  );
};
