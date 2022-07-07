import { styled } from '@mui/material/styles';

import { Button } from '@mui/material';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';

export const CTALinksStyles = {
  width: '100%',
  maxWidth: 260,
  fontFamily: 'Mukta, sans-serif',
  fontSize: 16,
  fontWeight: 600,
  margin: '0 auto',
  padding: '8px 24px',
  borderRadius: '4px',
};

export const CTAButtonst = styled(Button)(({ theme }) => ({
  backgroundColor: theme?.color.primary,
  color: 'white',
  width: '100%',
  maxWidth: 260,
  margin: '0 auto',
  fontFamily: 'Mukta, sans-serif',
  fontSize: 16,

  textTransform: 'none',

  '&:hover': {
    color: theme?.color.primary,
    backgroundColor: 'white',
  },
}));

export const InternalLinkSt = styled(Link)(({ theme }) => ({
  ...CTALinksStyles,
}));

export const ExternalLinkSt = styled('a')(({ theme }) => ({
  ...CTALinksStyles,
}));
