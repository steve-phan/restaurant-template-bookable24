import { Link } from 'gatsby-plugin-react-i18next';
import { styled } from '@mui/material/styles';

export const AccountPopperst = styled('div')(({ theme }) => ({
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
}));

export const PopperButton = styled(Link)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 600,
  padding: 8,
  cursor: 'pointer',
  width: 180,
  textAlign: 'center',
  borderRadius: 2,
}));

export const PopperSignInButtonSt = styled(PopperButton)(({ theme }) => ({
  background: 'black',
  borderColor: 'black',
  color: 'white',

  marginBottom: 15,
}));

export const PopperSignUpButtonSt = styled(PopperButton)(({ theme }) => ({
  background: 'white',
  border: '1px solid black',
  color: 'black',
}));
