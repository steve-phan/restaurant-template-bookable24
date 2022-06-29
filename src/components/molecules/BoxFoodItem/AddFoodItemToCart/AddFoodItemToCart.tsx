import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button/Button';

import {
  openViewCartModal,
  closeFoodItemModal,
} from '@bookable24/store/shop/bookingSlice';
import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';

import { AddFoodItemToCartSt } from './AddFoodItemToCart.styles';
import { BoxAdjustFoodItem } from '../../BoxAdjustFoodItem/BoxAdjustFoodItem';

export const AddFoodItemToCart = () => {
  const dispatch = useAppDispatch();

  const { foodItemModal } = useAppSelector((state) => state.booking);

  return (
    <AddFoodItemToCartSt>
      <Grid container spacing={2} columns={16} justifyContent='space-between'>
        <Grid item xs={6}>
          <BoxAdjustFoodItem item={foodItemModal} widthCount />
        </Grid>
        <Grid item xs={9}>
          <Button
            variant='contained'
            fullWidth
            sx={{
              justifyContent: 'space-around',
              fontSize: '14px',
              textTransform: 'none',
            }}
            onClick={() => {
              dispatch(closeFoodItemModal());
              dispatch(openViewCartModal());
            }}
          >
            View your basket
          </Button>
        </Grid>
      </Grid>
    </AddFoodItemToCartSt>
  );
};
