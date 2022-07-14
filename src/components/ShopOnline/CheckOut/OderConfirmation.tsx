import { HeadingCenterSt } from '@bookable24/components/molecules/ui/Heading/Heading.styles';
import { useSumDetailsCartItem } from '@bookable24/hooks/useSumDetailsCartItem';
import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
import { localStorageRemoveItem } from '@bookable24/store/localStore';
import { clearCart, setIsOderConfirm } from '@bookable24/store/oder/oderSlice';
import React, { useEffect } from 'react';
import {
  ConfirmDeliveryInfo,
  ConfirmDeliverySectionHeader,
  ConfirmDeliveryText,
  ConfirmDeliveryTime,
  ConfirmOderItemWrap,
  ConfirmRequirest,
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
  const { sumPrices, sumQuantities } = useSumDetailsCartItem(cartItems);

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
          const { quantity, foodId, foodName, priceOfFood, require } = item;
          return (
            <div key={`${foodId}-${index}`}>
              <ConfirmOderItemWrap>
                <span>{`${quantity} x ${foodId}`} </span>
                <span>{foodName} </span>
                <span>{(quantity * priceOfFood).toFixed(2)}€ </span>
              </ConfirmOderItemWrap>
              {!!require && <ConfirmRequirest> {require}</ConfirmRequirest>}
            </div>
          );
        })}
      </div>
      <ConfirmDeliverySectionHeader>
        <ConfirmOderItemWrap>
          <div>GESAMTE BESTELLUNG:</div>
          <div>{sumPrices}€</div>
        </ConfirmOderItemWrap>
      </ConfirmDeliverySectionHeader>
      <ConfirmTextst>
        Wir wünschen Dir einen guten Appetit und freuen uns schon auf Deinen
        nächsten Besuch auf unserer Webseite
      </ConfirmTextst>
    </OderConfirmSt>
  );
};
