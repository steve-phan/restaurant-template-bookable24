import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AccountLinksSt = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'start',
  flexDirection: 'column',

  svg: {
    color: theme.color.primary,
    fontSize: 30,
  },
}));

export const ButtonAccountSt = styled(Button)(({ theme }) => ({
  color: theme.color.primary,
  maxWidth: 260,
  margin: '0 auto',
  fontFamily: 'Mukta, sans-serif',
  fontSize: 16,
  textTransform: 'none',
  fontWeight: 700,
  marginLeft: 8,
  textDecoration: 'underline',
  '&:hover': {
    color: theme.color.primary,
  },
}));

export const AccountInfoWrapperSt = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  fontFamily: 'Work Sans,sans-serif',
  fontSize: 22,
  fontWeight: 700,
  color: theme.color.primary,
  textAlign: 'left',
  lineHeight: 1.2,
  a: {
    display: 'block',
    color: theme.color.primary,
    fontSize: 12,
    textDecoration: 'underline',
  },
}));

export const FullNamefoWrapperSt = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Work Sans,sans-serif',
  fontSize: 22,
  fontWeight: 700,
  color: theme.color.primary,
  textAlign: 'left',
  lineHeight: 1.2,
}));
