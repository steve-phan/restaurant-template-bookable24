import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button/Button';
import ButtonGroup from '@mui/material/ButtonGroup/ButtonGroup';

import {
  AddFoodItemToCartSt,
  FoodItemPriceSt,
  SumFoodItemPriceSt,
} from './BoxFoodItem.styles';
import { addItemToCart } from '@bookable24/store/shop/bookingSlice';
import { useAppDispatch } from '@bookable24/store/hooks';
import {
  IFoodItem,
  IFoodItemFromContentFul,
} from '@bookable24/RESTAURANT.CONFIG/restaurant.types';

type TAddFoodItemToCartProps = Omit<
  IFoodItemFromContentFul,
  'category' | 'descriptionAboutFood'
>;

export const AddFoodItemToCart = ({
  priceOfFood,
  foodId,
  foodName,
}: TAddFoodItemToCartProps) => {
  const dispatch = useAppDispatch();
  const [number, setNumber] = useState(1);

  const foodItem = {
    foodId,
    foodName,
    quantity: number,
  };
  return (
    <AddFoodItemToCartSt>
      <Grid container spacing={2} columns={16} justifyContent='space-between'>
        <Grid item xs={6}>
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
                if (number === 1) return;
                setNumber(number - 1);
              }}
            >
              -
            </Button>
            <Button color='primary' disabled>
              <FoodItemPriceSt>{number}</FoodItemPriceSt>
            </Button>
            <Button
              onClick={() => {
                setNumber(number + 1);
              }}
            >
              +
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={9}>
          <Button
            variant='contained'
            fullWidth
            sx={{
              justifyContent: 'space-around',
            }}
            onClick={() => {
              dispatch(addItemToCart(foodItem));
            }}
          >
            Add
            <SumFoodItemPriceSt>
              {(number * priceOfFood).toFixed(2)}€
            </SumFoodItemPriceSt>
          </Button>
        </Grid>
      </Grid>
    </AddFoodItemToCartSt>
  );
};
