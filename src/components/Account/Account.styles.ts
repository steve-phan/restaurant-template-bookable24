import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal/Modal';

export const WrapColSt = styled('div')`
  position: relative;
  padding: 16px 8px;
  margin: 0 auto;

  max-width: 500px;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
`;

export const BoxFlexSt = styled('div')`
  display: flex;
  justify-content: space-evenly;
`;

export const AccountHeadingSt = styled('span')(({ theme }) => ({
  display: 'block',
  fontFamily: 'Work Sans,sans-serif',
  fontSize: 22,
  textAlign: 'center',
  fontWeight: 700,
  marginBottom: 16,
  marginTop: 16,
}));

export const AccountBodyTextRightSt = styled('span')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  fontFamily: 'Work Sans,sans-serif',
  fontSize: 14,
  textAlign: 'center',
}));

export const TextFieldSt = styled(TextField)(({ theme }) => ({
  marginBottom: 24,
  width: '100%',
  maxWidth: '500px',
  backgroundColor: theme.color.white,

  '& label.Mui-focused': {
    color: theme.color.primary,
  },
  '& >:after': {
    borderBottom: `1px solid ${theme.color.primary} !important`,
  },
}));

export const TypographySt = styled(Typography)(({ theme }) => ({
  fontSize: 14.5,
  paddingLeft: 10,
  marginBottom: 8,
  color: '#333',
  borderLeft: `2px solid ${theme.color.primary}`,
}));

export const AccountActionSt = styled(TypographySt)(({ theme }) => ({
  color: theme.color.primary,
}));

export const AccountInfoSt = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 600,
  color: theme.color.gray,
  textAlign: 'center',
  fontFamily: 'Work Sans,sans-serif',
  padding: '8px 24px 20px 24px',

  a: {
    color: theme.color.secondary,
  },
}));

export const AccountNoticeSt = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: 12,
  fontWeight: 600,
  color: theme.color.gray,
  fontFamily: 'Work Sans,sans-serif',

  a: {
    color: theme.color.secondary,
    marginLeft: 8,
  },
}));

export const ButtonSt = styled(Button)`
  width: 100%;
  height: 40px;
  margin-bottom: 24px;
  background: ${({ theme }) => theme.color.primary};

  :hover {
    background: ${({ theme }) => alpha(theme.color.primary, 0.8)};
  }
`;

export const WrapModalSt = styled(Modal)(({ theme }) => ({
  '& .MuiBox-root': {
    borderRadius: 4,
    padding: 16,
    border: `1px solid ${theme.color.primary}`,
    maxWidth: '96%',

    '& p': {
      marginBottom: 0,
    },
  },
}));
