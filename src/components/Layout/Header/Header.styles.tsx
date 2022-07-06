import { Link } from 'gatsby-plugin-react-i18next';
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

export const WrapHeaderButtonst = styled('div')(({ theme }) => ({
  // background: 'red',
}));

export const IconButtonSt = styled(IconButton)(({ theme }) => ({
  marginRight: 8,
  background: theme.color.primary,
  color: 'white',
}));

export const CTAButtons = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary};
  padding: 8px 22px;
  cursor: pointer;
  border-radius: 20px;
  text-transform: uppercase;
`;

export const LoginButton = styled(CTAButtons)`
  padding: 10px 16px;
  margin: 0 auto;
`;
export const WrapLoginSt = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

export const DashBoardButtonSt = styled(CTAButtons)(({ theme }) => ({
  background: theme.color.black,
  color: alpha(theme.color.primary, 0.86),
}));

// Account Popper
export const AccountPopperst = styled('div')(({ theme }) => ({
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
}));

export const PopperSignInButtonSt = styled(CTAButtons)(({ theme }) => ({
  borderRadius: 2,
  background: 'black',
  borderColor: 'black',
  color: 'white',
  width: 180,
  textAlign: 'center',
  marginBottom: 15,
}));
export const PopperSignUpButtonSt = styled(CTAButtons)(({ theme }) => ({
  borderRadius: 2,
  background: 'white',
  border: '1px solid black',
  color: 'black',
  width: 180,
  textAlign: 'center',
}));
