import { styled } from '@mui/material/styles';

export const BoxFoodItemSt = styled('div')(({ theme }) => ({
  position: 'relative',
  fontFamily: 'Work Sans , sans-serif',
  maxWidth: 700,
  margin: '0 auto',
  marginTop: 16,
  borderBottom: `1px solid ${theme.color.borderColor}`,
  cursor: 'default',
}));

export const FoodItemInfoSt = styled('div')(({ theme }) => ({
  maxWidth: 650,
  padding: 0,
}));

export const FoodItemTitleSt = styled('h3')(({ theme }) => ({
  fontFamily: 'Work Sans, sans-serif',
  fontSize: 16,
  marginBottom: 0,

  [theme.breakpoints.up('md')]: {
    fontSize: 18,
  },
}));

export const FoodItemDescSt = styled('p')(({ theme }) => ({
  margin: 0,
  fontSize: 14,

  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',

  [theme.breakpoints.up('md')]: {
    fontSize: 16,
  },
}));

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

export const FoodItemOderQtyst = styled('div')(({ theme }) => ({
  position: 'absolute',
  cursor: 'pointer',
  userSelect: 'none',
  width: 36,
  height: 36,
  textAlign: 'center',
  top: 8,
  right: 0,
  fontSize: 18,
  fontWeight: 400,
  color: theme.color.secondary,
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
