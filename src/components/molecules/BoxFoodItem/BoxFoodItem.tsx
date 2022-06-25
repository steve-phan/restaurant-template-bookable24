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

interface IFoodItem {
  title: string;
  description: string;
  price: number;
  id: string;
  otherOption?: string;
}

export const BundauMamTom: IFoodItem = {
  title: 'Bun Vit Mam Tom',
  description:
    'four dumplings with a spicy filling of shrimps, sweet potatoes, Dau Que beans in a spicy ginger-chili sauce with crispy fried onions, if desired without fried onions',
  price: 10.35,
  id: 'bvmt06',
  otherOption: '',
};

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
