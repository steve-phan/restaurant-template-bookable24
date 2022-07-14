import React, { useEffect, useState } from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';

import { useSumDetailsCartItem } from '@bookable24/hooks/useSumDetailsCartItem';
import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';

import {
  DesktopViewCartActionButtonSt,
  DesktopViewCartFoodListSt,
  DesktopViewCartHeadingSt,
  DesktopViewCartSt,
} from './DesktopViewCart.styles';
import { ViewCartFoodList } from '../ViewCartFoodList/ViewCartFoodList';
import { HeadingBox } from '../ui/Heading/HeadingBox';
import { CheckoutButton } from '../../ShopOnline/CheckoutButton/CheckoutButton';
import { EmptyViewCart } from '../EmptyViewCart/EmptyViewCart';

export const DesktopViewCart = () => {
  const dispatch = useAppDispatch();
  const { cartItems, isViewCartModal } = useAppSelector((state) => state.oder);
  const { navigate } = useI18next();
  const { sumPrices, sumQuantities } = useSumDetailsCartItem(cartItems);
  return (
    <DesktopViewCartSt id='desktop-viewcart'>
      <DesktopViewCartHeadingSt>Batsket</DesktopViewCartHeadingSt>
      {sumPrices ? (
        <>
          <DesktopViewCartFoodListSt>
            <ViewCartFoodList />
          </DesktopViewCartFoodListSt>
          <DesktopViewCartActionButtonSt>
            <CheckoutButton />
          </DesktopViewCartActionButtonSt>
        </>
      ) : (
        <EmptyViewCart />
      )}
    </DesktopViewCartSt>
  );
};
