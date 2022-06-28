import {
  IFoodItem,
  IFoodItemFromContentFul,
} from '@bookable24/RESTAURANT.CONFIG/restaurant.types';
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

export const BoxFoodItem = ({ item }: { item: IFoodItemFromContentFul }) => {
  const { foodName, descriptionAboutFood, priceOfFood, foodId } = item;
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state) => state.booking);

  const exitsItem =
    !!cartItems && cartItems.find((item) => foodId === item.foodId);

  const currentQuantity =
    exitsItem && foodId === exitsItem.foodId ? exitsItem.quantity : '+';

  const foodItem = {
    foodId,
    foodName,
    quantity: 1,
  };
  return (
    <BoxFoodItemSt>
      <FoodItemInfoSt>
        <FoodItemTitleSt>{foodName} </FoodItemTitleSt>
        <FoodItemDescSt> {descriptionAboutFood} </FoodItemDescSt>
      </FoodItemInfoSt>
      <FoodItemPriceSt>{priceOfFood} € </FoodItemPriceSt>
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
