import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AccountLinksSt = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  svg: {
    color: 'white',
    fontSize: 60,
  },
}));
export const ButtonAccountSt = styled(Button)(({ theme }) => ({
  //   backgroundColor: bgColor,
  color: 'black',
  //   width: 'fit-content',
  maxWidth: 260,
  margin: '0 auto',
  fontFamily: 'Mukta, sans-serif',
  fontSize: 16,
  textTransform: 'none',
  fontWeight: 700,
  marginLeft: 8,
  textDecoration: 'underline',
  //   border: `1px solid ${theme.color.greyBackground}`,

  '&:hover': {
    color: theme.color.primary,
    // backgroundColor: 'white',
  },
}));

export const SignInButtonAccountSt = styled(ButtonAccountSt)(({ theme }) => ({
  //   background: 'white',
  //   color: theme.color.primary,
}));

export const SignUpButtonAccountSt = styled(ButtonAccountSt)(({ theme }) => ({
  //   background: 'white',
  //   color: '#125fca',
  //   border: `1px solid white`,
  //   fontWeight: 700,
}));

export const AccountInfoWrapperSt = styled('div')(({ theme }) => ({
  display: 'block',
  fontFamily: 'Work Sans,sans-serif',
  fontSize: 22,
  fontWeight: 700,
  color: 'white',
  textAlign: 'left',
  lineHeight: 1.2,
  paddingLeft: 12,
  a: {
    display: 'block',
    color: 'white',
    fontSize: 12,
    textDecoration: 'underline',
  },
}));
