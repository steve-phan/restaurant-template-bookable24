import React from 'react';

import { TCartItems } from '@bookable24/store/shop/shop.types';

import { ViewCartFoodItemSt, ViewCartFoodListSt } from './ViewCartFoodList.styles';
import { ViewCartFoodItem } from './ViewCartFoodItem/ViewCartFoodItem';

export const ViewCartFoodList = ({ cartItems }: { cartItems: TCartItems }) => {
  return (
    <ViewCartFoodListSt>
      {cartItems.map((item, index) => (
        <ViewCartFoodItemSt key={index}>
          <ViewCartFoodItem item={item} />
        </ViewCartFoodItemSt>
      ))}
    </ViewCartFoodListSt>
  );
};
