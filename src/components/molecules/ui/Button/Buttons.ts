import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CTAButtonFull = styled(Button)(({ theme }) => ({
  backgroundColor: theme.color.primary,
  color: 'white',
  width: '100%',
  maxWidth: 560,
  margin: '0 auto',
  fontFamily: 'Mukta, sans-serif',
  fontSize: 16,
  fontWeight: 700,
  textTransform: 'none',
  marginTop: 8,
  '&:hover': {
    color: theme.color.primary,
    backgroundColor: 'white',
  },
}));
