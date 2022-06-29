import React from 'react';
import Button from '@mui/material/Button/Button';
import ButtonGroup from '@mui/material/ButtonGroup/ButtonGroup';

import {
  addItemToCart,
  removeItemFromCart,
} from '@bookable24/store/shop/bookingSlice';
import { useAppDispatch } from '@bookable24/store/hooks';

import { FoodItemQuantitySt } from './BoxAdjustFoodItem.styles';
import { IFoodItem } from '@bookable24/store/shop/shop.types';

export const BoxAdjustFoodItem = ({ item }: { item: IFoodItem }) => {
  const dispatch = useAppDispatch();
  const { quantity } = item;

  return (
    <ButtonGroup
      sx={{
        width: '100%',
        fontWeight: 600,
      }}
      variant='outlined'
      aria-label='outlined button group'
    >
      <Button
        onClick={() => {
          if (quantity === 0) return;
          dispatch(removeItemFromCart(item));
        }}
      >
        -
      </Button>
      <Button color='primary' disabled>
        <FoodItemQuantitySt>{quantity}</FoodItemQuantitySt>
      </Button>
      <Button
        onClick={() => {
          dispatch(addItemToCart(item));
        }}
      >
        +
      </Button>
    </ButtonGroup>
  );
};