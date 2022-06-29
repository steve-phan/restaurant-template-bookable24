import React from 'react';
import Button from '@mui/material/Button/Button';
import ButtonGroup from '@mui/material/ButtonGroup/ButtonGroup';

import {
  addItemToCart,
  removeItemFromCart,
} from '@bookable24/store/shop/bookingSlice';
import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';

import { FoodItemQuantitySt } from './BoxAdjustFoodItem.styles';
import { IFoodItem } from '@bookable24/store/shop/shop.types';

export const BoxAdjustFoodItem = ({ item }: { item: IFoodItem }) => {
  const dispatch = useAppDispatch();
  const { foodId, foodName, quantity, priceOfFood, descriptionAboutFood } =
    item;
  //   const {
  //     foodItemModal: { foodId, foodName, quantity, priceOfFood },
  //   } = useAppSelector((state) => state.booking);

  const foodItem = {
    foodId,
    foodName,
    priceOfFood,
    descriptionAboutFood,
  };

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
          dispatch(removeItemFromCart({ ...foodItem, quantity: 1 }));
        }}
      >
        -
      </Button>
      <Button color='primary' disabled>
        <FoodItemQuantitySt>{quantity}</FoodItemQuantitySt>
      </Button>
      <Button
        onClick={() => {
          dispatch(addItemToCart({ ...foodItem, quantity: 1 }));
        }}
      >
        +
      </Button>
    </ButtonGroup>
  );
};
