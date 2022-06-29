import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';

import {
  BoxViewCartst,
  FoodListItemSt,
  FoodListSt,
  SumQuantitiesSt,
} from './BoxViewCart.styles';
import { TCartItems } from '@bookable24/store/shop/shop.types';
import { BoxViewCartFoodItem } from './BoxViewCartFoodItem/BoxViewCartFoodItem';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const getSumDetailsCartItem = (cartItems: TCartItems) => {
  return cartItems.reduce(
    (acc, curItem) => {
      const sumQty = acc.sumQuantities + curItem.quantity;
      const sumPrice = acc.sumPrices + curItem.quantity * curItem.priceOfFood;

      return {
        sumQuantities: sumQty,
        sumPrices: sumPrice,
      };
    },
    {
      sumQuantities: 0,
      sumPrices: 0,
    }
  );
};

export const BoxViewCart = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state) => state.booking);

  const { sumPrices, sumQuantities } = getSumDetailsCartItem(cartItems);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <BoxViewCartst>
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
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar
            sx={{
              background: 'white',
              color: 'black',
            }}
          >
            <Typography sx={{ ml: 2, flex: 1 }} variant='body1' component='div'>
              Basket
            </Typography>

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
        <FoodListSt>
          {cartItems.map((item, index) => (
            <FoodListItemSt key={index}>
              <BoxViewCartFoodItem item={item} />
            </FoodListItemSt>
          ))}
        </FoodListSt>
      </Dialog>
    </BoxViewCartst>
  );
};
