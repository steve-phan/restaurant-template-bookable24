import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import { InternalLinkSt } from './CTAButton.styles';

interface CTAButtonProps {
  text: string;
  target: string;
  hasBackground?: boolean;
}

export const InternalLink = ({
  text,
  hasBackground,
  target,
}: CTAButtonProps): JSX.Element => {
  const theme = useTheme();
  const bgColor = hasBackground ? theme?.color.primary : 'white';
  const color = !hasBackground ? theme?.color.primary : 'white';
  return (
    <InternalLinkSt
      style={{
        backgroundColor: bgColor,
        color,
      }}
      to={target}
    >
      {text}
    </InternalLinkSt>
  );
};
