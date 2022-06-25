import React from 'react';

import { IFoodItem } from '@bookable24/RESTAURANT.CONFIG/restaurant.types';

import { ShopOnlineSt } from './ShopOnline copy';
import { BoxFoodItem } from '../molecules/BoxFoodItem/BoxFoodItem';

export const ShopOnline = ({
  restaurantMenu,
}: {
  restaurantMenu: IFoodItem[];
}) => {
  return (
    <ShopOnlineSt>
      {restaurantMenu.map((item, index) => (
        <BoxFoodItem key={index} item={item} />
      ))}
    </ShopOnlineSt>
  );
};
