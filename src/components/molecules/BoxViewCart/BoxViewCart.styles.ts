import { styled } from '@mui/material/styles';

export const BoxViewCartst = styled('div')(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  width: '100vw',
  zIndex: 1100,

  background: theme.color.secondary,

  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const SumQuantitiesSt = styled('span')(({ theme }) => ({
  position: 'absolute',
  width: 24,
  height: 24,
  borderRadius: '50%',
  bottom: '-2px',
  right: '-2px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  WebkitBoxAlign: 'center',
  WebkitBoxPack: 'center',

  fontSize: 12,
  fontWeight: 600,
  color: 'white',
  background: theme.color.primary,
}));

export const FoodListSt = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  margin: 0,
  padding: 16,
}));

export const FoodListItemSt = styled('li')(({ theme }) => ({
  color: 'white',
  background: theme.color.primary,
}));
