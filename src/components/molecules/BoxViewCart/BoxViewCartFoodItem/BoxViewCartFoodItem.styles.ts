import { styled } from '@mui/material/styles';

export const BoxViewCartFoodItemSt = styled('div')(({ theme }) => ({
  position: 'relative',
}));

export const QuantityFoodItemSt = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  fontSize: 14,
}));

export const BoxAdjustFoodItemSt = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',

  paddingTop: 8,
}));
