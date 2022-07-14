import { HeadingCenterSt } from '@bookable24/components/molecules/ui/Heading/Heading.styles';
import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
import { localStorageRemoveItem } from '@bookable24/store/localStore';
import { clearCart, setIsOderConfirm } from '@bookable24/store/oder/oderSlice';
import React, { useEffect } from 'react';
import {
  ConfirmDeliveryInfo,
  ConfirmDeliverySectionHeader,
  ConfirmDeliveryText,
  ConfirmDeliveryTime,
  ConfirmTextst,
  OderConfirmSt,
} from './OderConfirm.styles';

export const OderConfirmation = () => {
  const dispatch = useAppDispatch();
  const {
    isLoading,
    userInfo: { email, fullName, address },
  } = useAppSelector((state) => state.account);
  const { cartItems, deliveryTime, isOderConfirmed } = useAppSelector(
    (state) => state.oder
  );
  const { phone, postCode, houseNumber, street, city } = address;

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
    <OderConfirmSt>
      <HeadingCenterSt> Hi {fullName}</HeadingCenterSt>
      <ConfirmTextst>
        vielen Dank für Deine Bestellung beim MaiSonTom® Lieferservice!
      </ConfirmTextst>
      <ConfirmDeliveryInfo>
        <ConfirmDeliverySectionHeader>
          LIEFERANSCHRIFT:
        </ConfirmDeliverySectionHeader>
        <ConfirmDeliveryText>
          {fullName} {phone}
        </ConfirmDeliveryText>
        <ConfirmDeliveryText>
          {street} {houseNumber}
        </ConfirmDeliveryText>
        <ConfirmDeliveryText>
          {postCode} {city}
        </ConfirmDeliveryText>
        <ConfirmDeliveryTime>Lieferzeit {deliveryTime}</ConfirmDeliveryTime>
      </ConfirmDeliveryInfo>
      <ConfirmDeliverySectionHeader>
        LIEFERANSCHRIFT:
      </ConfirmDeliverySectionHeader>
      <div>
        {cartItems.map((item, index) => {
          const { quantity, foodId, foodName, priceOfFood } = item;
          return (
            <div key={`${foodId}-${index}`}>
              <div>{`${quantity} x ${foodId} ${foodName}`}</div>
            </div>
          );
        })}
      </div>

      <ConfirmTextst>
        Wir wünschen Dir einen guten Appetit und freuen uns schon auf Deinen
        nächsten Besuch auf unserer Webseite
      </ConfirmTextst>
    </OderConfirmSt>
  );
};
