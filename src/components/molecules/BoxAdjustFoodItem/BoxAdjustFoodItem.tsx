import React from 'react';
import Button from '@mui/material/Button/Button';
import ButtonGroup from '@mui/material/ButtonGroup/ButtonGroup';

import {
  addItemToCart,
  removeItemFromCart,
} from '@bookable24/store/oder/bookingSlice';
import { useAppDispatch } from '@bookable24/store/hooks';

import { FoodItemQuantitySt } from './BoxAdjustFoodItem.styles';
import { IFoodItem } from '@bookable24/store/oder/shop.types';

export const BoxAdjustFoodItem = ({
  item,
  widthCount,
}: {
  item: IFoodItem;
  widthCount?: boolean;
}) => {
  const dispatch = useAppDispatch();
  const { quantity } = item;

  return (
    <ButtonGroup
      size='small'
      sx={{
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
      {widthCount && (
        <Button color='primary' disabled>
          <FoodItemQuantitySt>{quantity}</FoodItemQuantitySt>
        </Button>
      )}
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
