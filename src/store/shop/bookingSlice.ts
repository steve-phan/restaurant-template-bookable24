import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  IBookingState,
  IBooking,
  TCustomerInfo,
  IInfoUserProps,
  IFoodItem,
  TCartItems,
} from './shop.types';

const intialBooking: IBooking = {
  person: 1,
  selectedDate: new Date(),
  selectedSlot: 0,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  require: '',
};

const initialBookingState: IBookingState = {
  ...intialBooking,
  isValidInfo: false,
  isSubmitted: false,

  customerInfo: null,
  cartItems: null,
};

export const existingCartItem = ({
  prevCartItems,
  nextCartItem,
}: IAddToCartProps) => {
  return (
    !!prevCartItems &&
    prevCartItems.find((cartItem) => cartItem.foodId === nextCartItem.foodId)
  );
};

interface IAddToCartProps {
  prevCartItems: TCartItems | null;
  nextCartItem: IFoodItem;
}
const addToCart = ({ prevCartItems, nextCartItem }: IAddToCartProps) => {
  let newCarItems = prevCartItems ? prevCartItems : [];
  const cartItemExists = existingCartItem({
    prevCartItems,
    nextCartItem,
  });

  if (!!cartItemExists) {
    return newCarItems.map((cartItem) =>
      cartItem.foodId === nextCartItem.foodId
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }

  return [
    ...newCarItems,
    {
      ...nextCartItem,
      quantity: 1,
    },
  ];
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState: initialBookingState,
  reducers: {
    addItemToCart: (state: IBookingState, action: PayloadAction<IFoodItem>) => {
      state.cartItems = addToCart({
        prevCartItems: state.cartItems,
        nextCartItem: action.payload,
      });
    },
    setNumberOfCustomer: (
      state: IBookingState,
      action: PayloadAction<number>
    ) => {
      state.person = action.payload;
    },
    setSelectedSlot: (state: IBookingState, action: PayloadAction<number>) => {
      state.selectedSlot = action.payload;
    },
    setSelectedDate: (state: IBookingState, action: PayloadAction<Date>) => {
      state.selectedDate = action.payload;
    },
    setCustomerInfo: (
      state: IBookingState,
      action: PayloadAction<IInfoUserProps>
    ) => {
      const { firstName, lastName, email, phone, require } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.phone = phone;
      state.require = require;
      state.isSubmitted = true;
    },
    setCustomerValidInfo: (
      state: IBookingState,
      action: PayloadAction<boolean>
    ) => {
      state.isValidInfo = action.payload;
      if (!action.payload) {
        state.isSubmitted = false;
      }
    },
  },
});
export const {
  setNumberOfCustomer,
  setSelectedDate,
  setSelectedSlot,
  setCustomerInfo,
  setCustomerValidInfo,

  // NEW PROJECT :
  addItemToCart,
} = bookingSlice.actions;

export default bookingSlice.reducer;
