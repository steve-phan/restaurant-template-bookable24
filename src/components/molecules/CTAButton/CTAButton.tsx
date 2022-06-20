import Button from '@mui/material/Button/Button';
import { useTheme, css } from '@mui/material/styles';
import React from 'react';
import { CTAButtonst } from './CTAButton.styles';

interface CTAButtonProps {
  text: string;
  hasBackground?: boolean;
}

export const CTAButton = ({
  text,
  hasBackground,
}: CTAButtonProps): JSX.Element => {
  const theme = useTheme();
  const bgColor = hasBackground ? theme?.color.primary : 'white';
  const color = !hasBackground ? theme?.color.primary : 'white';
  return (
    <Button
      sx={{
        backgroundColor: bgColor,
        color,
        width: '100%',
        maxWidth: 260,
        margin: '0 auto',
        fontFamily: 'Mukta, sans-serif',
        fontSize: 16,
        textTransform: 'none',

        '&:hover': {
          color: bgColor,
          backgroundColor: color,
        },
      }}
      size='large'
    >
      {text}
    </Button>
  );
};
