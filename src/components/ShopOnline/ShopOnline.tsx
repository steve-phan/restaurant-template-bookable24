import React from 'react';

import { IFoodItem } from '@bookable24/RESTAURANT.CONFIG/restaurant.types';
import { menuMapping } from '@bookable24/RESTAURANT.CONFIG/RESTAURANT.MENU';

import {
  CategorySectionSt,
  ShopOnlineSt,
  HeadingSectionSt,
} from './ShopOnline.styles';
import { BoxFoodItem } from '../molecules/BoxFoodItem/BoxFoodItem';

export const ShopOnline = ({
  restaurantMenu,
}: {
  restaurantMenu: IFoodItem[];
}) => {
  const categoryMenu = Object.entries(menuMapping(restaurantMenu));

  console.log({ categoryMenu });

  return (
    <ShopOnlineSt>
      {categoryMenu.map(([id, items], outerIndex) => (
        <CategorySectionSt key={outerIndex} id={id}>
          <HeadingSectionSt> {id} </HeadingSectionSt>
          {items.map((item, innerIndex) => (
            <BoxFoodItem key={innerIndex} item={item} />
          ))}
        </CategorySectionSt>
      ))}
    </ShopOnlineSt>
  );
};
