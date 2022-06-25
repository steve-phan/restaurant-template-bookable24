import { styled } from '@mui/material/styles';

export const BoxFoodItemSt = styled('div')(({ theme }) => ({
  position: 'relative',
  fontFamily: 'Work Sans , sans-serif',
  maxWidth: 700,
  margin: '0 auto',
  marginTop: 16,

  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: theme.color.borderColor,
  boxShadow: `2px -2px 1px ${theme.color.borderColor}`,
  cursor: 'default',
}));

export const FoodItemInfoSt = styled('div')(({ theme }) => ({
  maxWidth: 650,
  paddingTop: 16,
  paddingBottom: 0,
  paddingLeft: 16,
  paddingRight: 60,
}));

export const FoodItemTitleSt = styled('h3')(({ theme }) => ({
  fontFamily: 'Work Sans, sans-serif',
  fontSize: 18,
  marginBottom: 6,

  [theme.breakpoints.up('md')]: {
    fontSize: 20,
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
  padding: 16,
  paddingTop: 4,
  fontSize: 20,
  fontWeight: 600,

  color: theme.color.primary,

  [theme.breakpoints.up('md')]: {
    fontSize: 22,
  },
}));

export const FoodItemOderQtyst = styled('div')(({ theme }) => ({
  position: 'absolute',
  cursor: 'pointer',

  width: 36,
  height: 36,
  textAlign: 'center',
  top: 0,
  right: 0,
  fontSize: 20,
  fontWeight: 600,
  color: theme.color.secondary,

  borderRightWidth: 0,
  borderTopWidth: 0,
  borderBottomWidth: 1,
  borderLeftWidth: 1,
  borderStyle: 'solid',
  borderColor: theme.color.borderColor,
}));

export const FoodItemViewMorest = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: 2,
  cursor: 'pointer',

  textAlign: 'center',
  bottom: 0,
  right: 0,
  padding: 16,
  fontSize: 14,
  fontWeight: 400,
  color: theme.color.secondary,
}));
