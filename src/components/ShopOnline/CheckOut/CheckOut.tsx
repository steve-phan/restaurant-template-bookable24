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
    isUserLogin,
    userInfo: { address },
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
        onClick={() => {
          if (!phone || !postCode || !houseNumber || !street) {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
            alert('You need update your address first');
          } else {
            alert('We are on track :)');
          }
        }}
      >
        Submit Oder
      </CTAButtonFull>
    </ContainerSt>
  );
};
