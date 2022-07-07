import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import { ExternalLinkSt } from './CTAButton.styles';

export interface IExternalLinkProps {
  text: string;
  hasBackground?: boolean;
  externalLink: string;
}

export const ExternalLink = ({
  text,
  hasBackground,
  externalLink,
}: IExternalLinkProps): JSX.Element => {
  const theme = useTheme();
  const bgColor = hasBackground ? theme?.color.primary : 'white';
  const color = !hasBackground ? theme?.color.primary : 'white';
  return (
    <ExternalLinkSt
      style={{
        backgroundColor: bgColor,
        color,
      }}
      href={externalLink}
      target='__blank'
    >
      {text}
    </ExternalLinkSt>
  );
};
