import { styled } from '@mui/material/styles';

export const FoodItemViewMorest = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  zIndex: 2,
}));

export const ButtonViewMorest = styled('button')(({ theme }) => ({
  padding: '10px 10px 4px',
  cursor: 'pointer',
  userSelect: 'none',
  textAlign: 'center',
  fontSize: 14,
  fontWeight: 400,
  color: theme.color.secondary,
  border: 'none',
  background: 'transparent',
}));

export const CloseButtonSt = styled('div')(({ theme }) => ({
  position: 'absolute',
  padding: 4,
  top: 16,
  right: 16,
  color: theme.color.primary,
  background: theme.color.secondaryBackground,
  display: 'flex',
  width: 'fit-content',
  borderRadius: '50%',

  '&:hover': {
    cursor: 'pointer',
  },
}));
