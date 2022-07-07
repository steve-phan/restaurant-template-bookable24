import React from 'react';

import { InternalLink } from '../LinkButtons/InternalLink';
import { ExternalLink } from '../LinkButtons/ExternalLink';

import {
  SectionContextSt,
  HeaderSt,
  SubHeaderSt,
  DescriptionSt,
  ButtonGroupSt,
} from './SectionContext.styles';

interface IButtonProps {
  text: string;
  path?: string;
  withBg?: boolean;
  externalLink?: string;
}

interface ISection {
  header?: string;
  smallHeader?: string;
  subHeader?: string;
  description?: string;
  ctaButton?: IButtonProps;
  background: 'transparent' | 'black';
  buttons?: {
    buttonLeft: IButtonProps;
    buttonRight: IButtonProps;
  };
}

export const SectionContext = ({
  header,
  smallHeader,
  subHeader,
  description,
  ctaButton,
  background,
  buttons,
}: ISection) => {
  return (
    <SectionContextSt background={background}>
      {!!header && <HeaderSt>{header}</HeaderSt>}
      {!!subHeader && <SubHeaderSt>{subHeader}</SubHeaderSt>}
      {!!smallHeader && <SubHeaderSt>{smallHeader}</SubHeaderSt>}
      {!!description && <DescriptionSt>{description}</DescriptionSt>}
      {!!ctaButton && !!ctaButton.path && (
        <InternalLink
          hasBackground
          text={ctaButton.text}
          target={ctaButton.path}
        />
      )}
      {!!ctaButton && !!ctaButton.externalLink && (
        <ExternalLink
          hasBackground
          text={ctaButton.text}
          externalLink={ctaButton.externalLink}
        />
      )}
      {!!buttons && (
        <ButtonGroupSt>
          {buttons.buttonLeft.path && (
            <InternalLink
              text={buttons.buttonLeft.text}
              target={buttons.buttonLeft.path}
              hasBackground
            />
          )}

          {buttons.buttonRight.path && (
            <InternalLink
              text={buttons.buttonRight.text}
              target={buttons.buttonRight.path}
            />
          )}

          {buttons.buttonRight.externalLink && (
            <ExternalLink
              text={buttons.buttonRight.text}
              externalLink={buttons.buttonRight.externalLink}
            />
          )}
        </ButtonGroupSt>
      )}
    </SectionContextSt>
  );
};
