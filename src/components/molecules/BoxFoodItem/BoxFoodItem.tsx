import { IFoodItem } from '@bookable24/RESTAURANT.CONFIG/restaurant.types';
import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
import { addItemToCart } from '@bookable24/store/shop/bookingSlice';
import React, { ReactNode } from 'react';

import {
  BoxFoodItemSt,
  FoodItemInfoSt,
  FoodItemTitleSt,
  FoodItemDescSt,
  FoodItemPriceSt,
  FoodItemOderQtyst,
  FoodItemViewMorest,
} from './BoxFoodItem.styles';

export const BoxFoodItem = ({ item }: { item: IFoodItem }) => {
  const { title, description, price, id } = item;
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state) => state.booking);

  const exitsItem = !!cartItems && cartItems.find((item) => id === item.id);

  const currentQuantity =
    exitsItem && id === exitsItem.id ? exitsItem.quantity : '+';

  const foodItem = {
    id,
    title,
    quantity: 1,
  };
  return (
    <BoxFoodItemSt>
      <FoodItemInfoSt>
        <FoodItemTitleSt>{title} </FoodItemTitleSt>
        <FoodItemDescSt> {description} </FoodItemDescSt>
      </FoodItemInfoSt>
      <FoodItemPriceSt>{price} € </FoodItemPriceSt>
      <FoodItemOderQtyst
        onClick={() => {
          dispatch(addItemToCart(foodItem));
        }}
      >
        {currentQuantity}
      </FoodItemOderQtyst>
      <FoodItemViewMorest
        onClick={() => {
          console.log('clicking');
        }}
      >
        More info
      </FoodItemViewMorest>
    </BoxFoodItemSt>
  );
};
