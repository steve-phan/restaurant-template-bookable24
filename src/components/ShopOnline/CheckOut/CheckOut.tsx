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
import { closeViewCartModal } from '@bookable24/store/oder/bookingSlice';
import { useSumDetailsCartItem } from '@bookable24/hooks/useSumDetailsCartItem';

import { TCartItems } from '@bookable24/store/oder/shop.types';
import { localStorageSetItem } from '@bookable24/store/localStore';
import { ContainerSt } from '@bookable24/components/molecules/ui/Container/Container';
import { HeadingCenter } from '@bookable24/components/molecules/ui/Heading/HeadingCenter';
import { UserInfo } from '@bookable24/components/Account/UserInfo/UserInfo';
import { ViewCartFoodList } from '@bookable24/components/molecules/ViewCartFoodList/ViewCartFoodList';
import { AccountHeadingSt } from '@bookable24/components/Account/Account.styles';
import { OderSummary } from '../OderSummary/OderSummary';
import { TextWarningSt } from '@bookable24/components/molecules/ui/TextWarning/TextWarning';
import { CTAButton } from '@bookable24/components/molecules/CTAButton/CTAButton';
import { CTAButtonFull } from '@bookable24/components/molecules/ui/Button/Buttons';
import { confirmOderEmail } from '@bookable24/store/oder/booking.Thunks';
import { RestaurantName } from '@bookable24/RESTAURANT.CONFIG/RESTAURANT.CONFIG';
import axios from 'axios';
import { setAccountLoading } from '@bookable24/store/account/accountSlice';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export const Checkout = () => {
  const dispatch = useAppDispatch();
  const { cartItems, isViewCartModal } = useAppSelector(
    (state) => state.booking
  );
  const {
    userInfo: { email, fullName, address },
  } = useAppSelector((state) => state.account);

  const { phone, postCode, houseNumber, street } = address;

  const { sumPrices, sumQuantities } = useSumDetailsCartItem(cartItems);
  const { navigate } = useI18next();

  useEffect(() => {
    localStorageSetItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <ContainerSt>
      <HeadingCenter title='Please review your Oder and Address' />
      <UserInfo />
      <AccountHeadingSt>Warenkorb</AccountHeadingSt>
      <ViewCartFoodList cartItems={cartItems} />
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
            alert('You need update your address first');
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
              ...address,
            };
            const res = await axios.post(
              '/.netlify/functions/sendOderConfirmEmail',
              dataToSend
            );
            dispatch(setAccountLoading(true));
            if (res?.data?.message === 'SUCCESS') {
              alert(
                "Oder successfully, we'll send a confirm email in a fews minutes"
              );
              navigate('/');
            } else {
              alert('Ops.. Somethings gone wrong.. try again please');
            }

            dispatch(setAccountLoading(false));
          }
        }}
      >
        Submit Oder
      </CTAButtonFull>
    </ContainerSt>
  );
};
