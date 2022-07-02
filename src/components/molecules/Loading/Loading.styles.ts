import { styled } from '@mui/material/styles';

export const LoadingSt = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: 2060,
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.color.white,

  '& svg': {
    color: '#f05123',
  },
}));
