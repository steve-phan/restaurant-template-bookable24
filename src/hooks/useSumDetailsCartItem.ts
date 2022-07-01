import { TCartItems } from '@bookable24/store/shop/shop.types';

export const useSumDetailsCartItem = (cartItems: TCartItems) => {
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
