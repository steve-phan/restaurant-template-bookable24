import { styled } from '@mui/material/styles';

export const ViewCartFoodListSt = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  margin: 0,
  padding: 16,
}));

export const ViewCartFoodItemSt = styled('li')(({ theme }) => ({
  padding: '8px 0',
  borderBottom: `1px solid ${theme.color.borderColor}`,
  width: '100%',
  maxWidth: 700,
  margin: '0 auto',
}));
