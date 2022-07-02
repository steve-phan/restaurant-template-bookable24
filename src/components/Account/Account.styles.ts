import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal/Modal';

export const WrapColSt = styled('div')`
  padding: 16px 8px;
  margin: 0 auto;

  max-width: 500px;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
`;

export const AccountHeadingSt = styled('span')(({ theme }) => ({
  display: 'block',
  fontFamily: 'Work Sans,sans-serif',
  fontSize: 20,
  textAlign: 'center',
  fontWeight: 700,
  marginBottom: 24,
  marginTop: 16,
}));

export const TextFieldSt = styled(TextField)(({ theme }) => ({
  marginBottom: 24,
  width: '100%',
  maxWidth: '500px',
  backgroundColor: theme.color.background,

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
  color: '#333',
  borderLeft: `2px solid red`,
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
