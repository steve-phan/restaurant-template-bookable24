import { styled } from '@mui/material/styles';

export const BasketQuanties = styled('span')(({ theme }) => ({
  position: 'absolute',
  background: theme.color.primary,
  color: 'white',
  width: 24,
  height: 24,
  top: -10,
  right: -10,
  borderRadius: '50%',
  textAlign: 'center',
  fontSize: '14px',
  border: '1px solid white',
}));
