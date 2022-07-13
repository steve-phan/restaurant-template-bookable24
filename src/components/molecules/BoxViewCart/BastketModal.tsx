import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import AppBar from '@mui/material/AppBar';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { useEffect, useState } from 'react';

import { useSumDetailsCartItem } from '@bookable24/hooks/useSumDetailsCartItem';
import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
import {
  closeViewCartModal,
  toggleShowBasketModal,
} from '@bookable24/store/oder/oderSlice';

import { CheckoutButton } from '../../ShopOnline/CheckoutButton/CheckoutButton';
import { EmptyViewCart } from '../EmptyViewCart/EmptyViewCart';
import { HeadingBox } from '../ui/Heading/HeadingBox';
import { ViewCartFoodList } from '../ViewCartFoodList/ViewCartFoodList';
import { BoxViewCartst, WrapperBoxViewCartst } from './BoxViewCart.styles';
import { TransitionProps } from '@mui/material/transitions';
import { Slide } from '@mui/material';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export const BastketModal = () => {
  const dispatch = useAppDispatch();
  const { cartItems, isShowBasketModal } = useAppSelector(
    (state) => state.oder
  );

  const handleClose = () => {
    dispatch(toggleShowBasketModal());
  };
  return (
    <WrapperBoxViewCartst>
      <BoxViewCartst>
        <Dialog
          fullScreen
          open={isShowBasketModal}
          onClose={handleClose}
          TransitionComponent={Transition}
          aria-labelledby='basket-modal'
          aria-describedby='basket-modal'
        >
          <AppBar
            sx={{
              position: 'relative',
              paddingRight: '0 !important',
              background: 'white',
            }}
          >
            <Toolbar
              sx={{
                background: 'white',
                color: 'black',
              }}
            >
              <HeadingBox title='Basket' />
              <IconButton
                edge='end'
                color='inherit'
                onClick={handleClose}
                aria-label='close'
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          {cartItems.length !== 0 ? (
            <>
              <ViewCartFoodList cartItems={cartItems} />
              <CheckoutButton />
            </>
          ) : (
            <EmptyViewCart />
          )}
        </Dialog>
      </BoxViewCartst>
    </WrapperBoxViewCartst>
  );
};
