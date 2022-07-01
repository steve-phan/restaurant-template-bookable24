import React from 'react';
import { Box, Grid } from '@mui/material';

import { IFoodItem } from '@bookable24/store/shop/shop.types';

import { BoxAdjustFoodItemSt, BoxViewCartFoodItemSt, FoodNameSt, QuantityFoodItemSt } from './ViewCartFoodItem.styles';
import { BoxAdjustFoodItem } from '../../BoxAdjustFoodItem/BoxAdjustFoodItem';

export const ViewCartFoodItem = ({ item }: { item: IFoodItem }) => {
  const { foodName, priceOfFood, quantity } = item;
  return (
    <BoxViewCartFoodItemSt>
      <QuantityFoodItemSt>{quantity}</QuantityFoodItemSt>
      <Box
        sx={{
          paddingLeft: '20px',
          fontSize: '14px',
        }}
      >
        <Grid container>
          <Grid item xs={10}>
            <FoodNameSt>{foodName}</FoodNameSt>
          </Grid>
          <Grid item xs={2} textAlign='end'>
            {(quantity * priceOfFood).toFixed(2)} €
          </Grid>
        </Grid>
        <BoxAdjustFoodItemSt>
          <BoxAdjustFoodItem item={item} />
        </BoxAdjustFoodItemSt>
      </Box>
    </BoxViewCartFoodItemSt>
  );
};
