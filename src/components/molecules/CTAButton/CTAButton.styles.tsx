import { styled } from '@mui/material/styles';

import { Button } from '@mui/material';

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
