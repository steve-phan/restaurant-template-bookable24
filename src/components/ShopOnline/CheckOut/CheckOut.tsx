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
  clearCart,
  closeViewCartModal,
  setIsOderConfirm,
} from '@bookable24/store/oder/oderSlice';
import { useSumDetailsCartItem } from '@bookable24/hooks/useSumDetailsCartItem';

import { TCartItems } from '@bookable24/store/oder/oder.types';
import {
  localStorageRemoveItem,
  localStorageSetItem,
} from '@bookable24/store/localStore';
import { ContainerSt } from '@bookable24/components/molecules/ui/Container/Container';
import { HeadingCenter } from '@bookable24/components/molecules/ui/Heading/HeadingCenter';
import { UserInfo } from '@bookable24/components/Account/UserInfo/UserInfo';
import { ViewCartFoodList } from '@bookable24/components/molecules/ViewCartFoodList/ViewCartFoodList';
import { AccountHeadingSt } from '@bookable24/components/Account/Account.styles';
import { OderSummary } from '../OderSummary/OderSummary';
import { TextWarningSt } from '@bookable24/components/molecules/ui/TextWarning/TextWarning';

import { CTAButtonFull } from '@bookable24/components/molecules/ui/Button/Buttons';
import { RestaurantName } from '@bookable24/RESTAURANT.CONFIG/RESTAURANT.CONFIG';
import axios from 'axios';
import { setAccountLoading } from '@bookable24/store/account/accountSlice';
import Loading from '@bookable24/components/molecules/Loading/Loading';
import { EmptyViewCart } from '@bookable24/components/molecules/EmptyViewCart/EmptyViewCart';
import { DeliveryTime } from '@bookable24/components/molecules/DeliveryTime/DeliveryTime';
import { OderConfirmation } from './OderConfirmation';

const Message = {
  error: 'Something gone wrong, please try again later.Thanks',
  success: (email: string) =>
    `Oder successfully, we'll send you a confirm <strong> ${email} </strong> in a few minutes`,
  needLogin: 'Please update your delivery address first.',
};

export const Checkout = () => {
  const [error, setError] = React.useState(false);

  const dispatch = useAppDispatch();
  const { cartItems, deliveryTime, isOderConfirmed } = useAppSelector(
    (state) => state.oder
  );
  const {
    isLoading,
    userInfo: { email, fullName, address },
  } = useAppSelector((state) => state.account);

  const { phone, postCode, houseNumber, street } = address;

  const { sumPrices, sumQuantities } = useSumDetailsCartItem(cartItems);
  const { navigate } = useI18next();

  useEffect(() => {
    localStorageSetItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  if (true) {
    return (
      <ContainerSt>
        <OderConfirmation />
      </ContainerSt>
    );
  }

  return (
    <ContainerSt>
      {isLoading && <Loading />}
      {cartItems.length === 0 && !isOderConfirmed ? (
        <EmptyViewCart />
      ) : (
        <>
          <HeadingCenter title='Please review your Oder and Address' />
          <UserInfo />
          <DeliveryTime />
          <AccountHeadingSt>Warenkorb</AccountHeadingSt>
          <ViewCartFoodList />

          <OderSummary sumPrices={sumPrices} sumQuantities={sumQuantities} />
          <TextWarningSt>
            Im Moment akzeptieren wir nur Bargeld ... wir arbeiten an der
            Online-Zahlung
          </TextWarningSt>

          <CTAButtonFull
            onClick={async () => {
              dispatch(setAccountLoading(true));
              if (!phone || !postCode || !houseNumber || !street) {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                });
              } else {
                const dataToSend = {
                  restaurantName: RestaurantName,
                  cartItems: cartItems.map((item) => {
                    const { foodId, foodName, quantity, priceOfFood, require } =
                      item;
                    return {
                      foodId,
                      foodName,
                      quantity,
                      priceOfFood,
                      require,
                      payAmount: (item.priceOfFood * item.quantity).toFixed(2),
                    };
                  }),
                  fullName,
                  email,
                  phone,
                  sumPrices: Number(sumPrices).toFixed(2),
                  sumQuantities,
                  deliveryTime,
                  ...address,
                };

                const res = await axios.post(
                  '/.netlify/functions/sendOderConfirmEmail',
                  dataToSend
                );
                if (res?.data?.message === 'SUCCESS') {
                  dispatch(setIsOderConfirm(true));
                } else {
                  setError(true);
                }
              }
              dispatch(setAccountLoading(false));
            }}
          >
            Submit Oder
          </CTAButtonFull>
        </>
      )}
    </ContainerSt>
  );
};
