import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button/Button';
import ButtonGroup from '@mui/material/ButtonGroup/ButtonGroup';

import {
  addItemToCart,
  removeItemFromCart,
} from '@bookable24/store/shop/bookingSlice';
import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
import { IFoodItemFromContentFul } from '@bookable24/RESTAURANT.CONFIG/restaurant.types';

import {
  AddFoodItemToCartSt,
  FoodItemPriceSt,
  SumFoodItemPriceSt,
} from './AddFoodItemToCart.styles';
import { BoxAdjustFoodItem } from '../../BoxAdjustFoodItem/BoxAdjustFoodItem';

export const AddFoodItemToCart = () => {
  const dispatch = useAppDispatch();

  const {
    cartItems,
    foodItemModal: { foodId, foodName, quantity, priceOfFood },
  } = useAppSelector((state) => state.booking);

  const foodItem = {
    foodId,
    foodName,
    priceOfFood,
  };

  const item = { foodId, foodName, quantity, priceOfFood };

  return (
    <AddFoodItemToCartSt>
      <Grid container spacing={2} columns={16} justifyContent='space-between'>
        <Grid item xs={6}>
          <BoxAdjustFoodItem item={item} />
        </Grid>
        <Grid item xs={9}>
          <Button
            variant='contained'
            fullWidth
            sx={{
              justifyContent: 'space-around',
              fontSize: '14px',
            }}
            // onClick={() => {
            //   dispatch(addItemToCart({ ...foodItem, quantity: number }));
            //   setNumber(1);
            // }}
          >
            go Cart
            <SumFoodItemPriceSt>
              {(quantity * priceOfFood).toFixed(2)}€
            </SumFoodItemPriceSt>
          </Button>
        </Grid>
      </Grid>
    </AddFoodItemToCartSt>
  );
};
