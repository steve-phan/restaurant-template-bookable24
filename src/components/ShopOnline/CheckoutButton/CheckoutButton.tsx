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
import {
  closeViewCartModal,
  toggleShowBasketModal,
} from '@bookable24/store/oder/bookingSlice';
import { useSumDetailsCartItem } from '@bookable24/hooks/useSumDetailsCartItem';

import { TCartItems } from '@bookable24/store/oder/shop.types';
import { SumQuantitiesSt } from '../../molecules/BoxViewCart/BoxViewCart.styles';
import { localStorageSetItem } from '@bookable24/store/localStore';
import { ConfirmModal } from '../CheckOut/ConfirmModal';
import { setSignInAction } from '@bookable24/store/account/accountSlice';
import { SignInActionMessages } from '@bookable24/store/account/account.types';

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
  const [open, setOpen] = React.useState(false);
  const [goTo, setGoTo] = useState('');
  const dispatch = useAppDispatch();
  const { cartItems, isViewCartModal } = useAppSelector(
    (state) => state.booking
  );
  const { isUserLogin } = useAppSelector((state) => state.account);

  const { sumPrices, sumQuantities } = useSumDetailsCartItem(cartItems);
  const { navigate } = useI18next();

  useEffect(() => {
    localStorageSetItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <AppBar
      position='relative'
      color='primary'
      sx={{ top: 'auto', bottom: 0, cursor: 'pointer' }}
    >
      <Toolbar
        onClick={() => {
          dispatch(toggleShowBasketModal());
          if (!isUserLogin) {
            dispatch(setSignInAction(SignInActionMessages.SIGNIN_TO_CHECKOUT));
            navigate('/account/signin');
          } else {
            navigate('/checkout');
          }
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
  );
};
