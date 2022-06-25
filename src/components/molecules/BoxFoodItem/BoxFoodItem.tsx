import { IFoodItem } from '@bookable24/RESTAURANT.CONFIG/restaurant.types';
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
  return (
    <BoxFoodItemSt>
      <FoodItemInfoSt>
        <FoodItemTitleSt>{title} </FoodItemTitleSt>
        <FoodItemDescSt> {description} </FoodItemDescSt>
      </FoodItemInfoSt>
      <FoodItemPriceSt>{price} € </FoodItemPriceSt>
      <FoodItemOderQtyst>+</FoodItemOderQtyst>
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
