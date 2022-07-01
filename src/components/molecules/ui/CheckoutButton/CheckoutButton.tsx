import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useI18next } from 'gatsby-plugin-react-i18next';

import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
import { closeViewCartModal } from '@bookable24/store/shop/bookingSlice';
import { useSumDetailsCartItem } from '@bookable24/hooks/useSumDetailsCartItem';

import { TCartItems } from '@bookable24/store/shop/shop.types';
import { SumQuantitiesSt } from '../../BoxViewCart/BoxViewCart.styles';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

interface ICheckoutButtonProps {
  handleClose?: () => void;
}

export const CheckoutButton = ({ handleClose }: ICheckoutButtonProps) => {
  const dispatch = useAppDispatch();
  const { cartItems, isViewCartModal } = useAppSelector((state) => state.booking);

  const { sumPrices, sumQuantities } = useSumDetailsCartItem(cartItems);
  const { navigate } = useI18next();
  return (
    // <WrapperBoxViewCartst>
    //   <BoxViewCartst>
    <AppBar position='relative' color='primary' sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar
        onClick={() => {
          if (!!handleClose) {
            handleClose();
          }
          navigate('/oder');
        }}
      >
        <IconButton
          edge='start'
          sx={{
            color: 'white',
          }}
          aria-label='icon'
        >
          <ShoppingBagIcon />
          <SumQuantitiesSt>{sumQuantities}</SumQuantitiesSt>
        </IconButton>
        <Typography
          sx={{
            ml: 2,
            flex: 1,
            textAlign: 'center',
            color: 'white',
          }}
          variant='body1'
          component='div'
        >
          {`Checkout (${sumPrices.toFixed(2)} €)`}
        </Typography>
      </Toolbar>
    </AppBar>
    //   </BoxViewCartst>
    // </WrapperBoxViewCartst>
  );
};
