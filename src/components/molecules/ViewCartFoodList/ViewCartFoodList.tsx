import React, { useEffect } from 'react';

import { TCartItems } from '@bookable24/store/oder/oder.types';

import {
  ViewCartFoodItemSt,
  ViewCartFoodListSt,
} from './ViewCartFoodList.styles';
import { ViewCartFoodItem } from './ViewCartFoodItem/ViewCartFoodItem';
import {
  localStorageRemoveItem,
  localStorageSetItem,
} from '@bookable24/store/localStore';
import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
import { clearCart, setIsOderConfirm } from '@bookable24/store/oder/oderSlice';

export const ViewCartFoodList = () => {
  const dispatch = useAppDispatch();
  const { cartItems, deliveryTime, isOderConfirmed } = useAppSelector(
    (state) => state.oder
  );
  const {
    isLoading,
    userInfo: { email, fullName, address },
  } = useAppSelector((state) => state.account);
  useEffect(() => {
    localStorageSetItem('cartItems', JSON.stringify(cartItems));

    // return () => {
    //   dispatch(setIsOderConfirm(false));
    // };
  }, [cartItems]);

  useEffect(() => {
    return () => {
      if (isOderConfirmed) {
        localStorageRemoveItem('cartItems');

        dispatch(setIsOderConfirm(false));
        dispatch(clearCart());
      }
    };
  }, []);

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
