import React from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { IconButtonSt } from '../Header.styles';

import { toggleShowBasketModal } from '@bookable24/store/oder/oderSlice';
import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
import { useSumDetailsCartItem } from '@bookable24/hooks/useSumDetailsCartItem';
import { BasketQuanties } from './BasketHeaderButton.styles';

export const BasketHeaderButton = () => {
  const dispatch = useAppDispatch();
  const { cartItems, isViewCartModal, isOderConfirmed } = useAppSelector(
    (state) => state.oder
  );
  const { sumQuantities } = useSumDetailsCartItem(cartItems);
  return (
    <>
      <IconButtonSt
        onClick={() => {
          dispatch(toggleShowBasketModal());
        }}
      >
        <ShoppingBagIcon />
        <BasketQuanties>{isOderConfirmed ? 0 : sumQuantities}</BasketQuanties>
      </IconButtonSt>
    </>
  );
};
