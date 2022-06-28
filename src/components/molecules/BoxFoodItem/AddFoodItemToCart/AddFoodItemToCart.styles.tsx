import { styled } from '@mui/material/styles';

export const FoodItemPriceSt = styled('p')(({ theme }) => ({
  margin: 0,
  padding: 0,
  fontSize: 16,
  fontWeight: 600,

  color: theme.color.primary,

  [theme.breakpoints.up('md')]: {
    fontSize: 20,
  },
}));

export const AddFoodItemToCartSt = styled('div')(({ theme }) => ({
  padding: '12px',
  userSelect: 'none',
  fontSize: 14,
  fontWeight: 400,
  color: theme.color.secondary,
  border: 'none',
  background: 'transparent',
}));

export const SumFoodItemPriceSt = styled('p')(({ theme }) => ({
  margin: 0,
  padding: 0,
  fontSize: 14,
  fontWeight: 400,

  color: theme.color.white,

  [theme.breakpoints.up('md')]: {
    fontSize: 18,
  },
}));
