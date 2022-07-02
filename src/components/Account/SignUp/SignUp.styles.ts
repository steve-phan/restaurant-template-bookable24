import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export const WrapColSt = styled('div')`
  padding: 16px 8px;
  margin: 0 auto;

  max-width: 580px;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
`;

export const TextFieldSt = styled(TextField)(({ theme }) => ({
  marginBottom: 16,
  width: '100%',
  maxWidth: '560px',
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
