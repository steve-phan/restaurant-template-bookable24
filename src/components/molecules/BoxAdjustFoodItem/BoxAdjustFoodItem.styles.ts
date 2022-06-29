import { styled } from '@mui/material/styles';

export const FoodItemQuantitySt = styled('p')(({ theme }) => ({
  margin: 0,
  padding: 0,
  fontSize: 16,
  fontWeight: 600,

  color: theme.color.primary,

  [theme.breakpoints.up('md')]: {
    fontSize: 20,
  },
}));
