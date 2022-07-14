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
import { closeViewCartModal } from '@bookable24/store/oder/oderSlice';
import { useSumDetailsCartItem } from '@bookable24/hooks/useSumDetailsCartItem';

import {
  BoxViewCartst,
  SumQuantitiesSt,
  WrapperBoxViewCartst,
} from './BoxViewCart.styles';
import { ViewCartFoodList } from '../ViewCartFoodList/ViewCartFoodList';
import { HeadingBox } from '../ui/Heading/HeadingBox';
import { EmptyViewCart } from '../EmptyViewCart/EmptyViewCart';
import { CheckoutButton } from '../../ShopOnline/CheckoutButton/CheckoutButton';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export const BoxViewCart = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { cartItems, isViewCartModal } = useAppSelector((state) => state.oder);
  const { isUserLogin } = useAppSelector((state) => state.account);
  const { navigate } = useI18next();
  const { sumPrices, sumQuantities } = useSumDetailsCartItem(cartItems);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(closeViewCartModal());
  };

  // useEffect(() => {
  //   if (isViewCartModal) {
  //     handleClickOpen();
  //   } else {
  //     setOpen(false);
  //   }
  // }, [isViewCartModal]);

  return (
    <WrapperBoxViewCartst>
      <BoxViewCartst>
        {cartItems.length !== 0 ? (
          <Toolbar onClick={handleClickOpen}>
            <IconButton
              edge='start'
              sx={{
                color: 'white',
              }}
              onClick={handleClose}
              aria-label='open'
            >
              <ShoppingBagIcon />
              <SumQuantitiesSt>{sumQuantities}</SumQuantitiesSt>
            </IconButton>
            <Typography
              sx={{ ml: 2, flex: 1, textAlign: 'center', color: 'white' }}
              variant='body1'
              component='div'
            >
              {`Basket (${sumPrices.toFixed(2)} €)`}
            </Typography>
          </Toolbar>
        ) : null}
        <WrapperBoxViewCartst>
          <BoxViewCartst>
            <Dialog
              fullScreen
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
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
                  <ViewCartFoodList />
                  <CheckoutButton />
                </>
              ) : (
                <EmptyViewCart />
              )}
            </Dialog>
          </BoxViewCartst>
        </WrapperBoxViewCartst>
      </BoxViewCartst>
    </WrapperBoxViewCartst>
  );
};
