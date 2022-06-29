import React from 'react';
import { Box, Grid } from '@mui/material';

import { IFoodItem } from '@bookable24/store/shop/shop.types';

import {
  BoxViewCartFoodItemSt,
  QuantityFoodItemSt,
} from './BoxViewCartFoodItem.styles';

export const BoxViewCartFoodItem = ({ item }: { item: IFoodItem }) => {
  const { foodId, foodName, priceOfFood, quantity } = item;
  return (
    <BoxViewCartFoodItemSt>
      <QuantityFoodItemSt>{quantity}</QuantityFoodItemSt>
      <Box
        sx={{
          paddingLeft: '20px',
        }}
      >
        <Grid container>
          <Grid item xs={10}>
            {foodName}
          </Grid>
          <Grid item xs={2}>
            {(quantity * priceOfFood).toFixed(2)} €
          </Grid>
        </Grid>
      </Box>
    </BoxViewCartFoodItemSt>
  );
};
