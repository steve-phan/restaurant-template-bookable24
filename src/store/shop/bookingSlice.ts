import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StaticQuery } from 'gatsby';

import {
  IBookingState,
  IBooking,
  TCustomerInfo,
  IInfoUserProps,
  IFoodItem,
  TCartItems,
  IFoodItemModal,
} from './shop.types';
import {
  addToCart,
  handleReduceCartItem,
  initialBookingState,
  initialFoodItemModal,
} from './utils';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: initialBookingState,
  reducers: {
    addItemToCart: (state: IBookingState, action: PayloadAction<IFoodItem>) => {
      const newCartItems = addToCart({
        prevCartItems: state.cartItems,
        nextCartItem: action.payload,
      }) as IFoodItem[];
      state.cartItems = newCartItems;

      state.foodItemModal = action.payload;
    },
    removeItemFromCart: (
      state: IBookingState,
      action: PayloadAction<IFoodItem>
    ) => {
      const newCartItems = handleReduceCartItem({
        prevCartItems: state.cartItems,
        cartItemToReduce: action.payload,
      }) as IFoodItem[];

      state.cartItems = newCartItems;
      state.foodItemModal = initialFoodItemModal;
    },
    openFoodItemModal: (
      state: IBookingState,
      action: PayloadAction<IFoodItem>
    ) => {
      state.foodItemModal = action.payload;
    },
    closeFoodItemModal: (state: IBookingState) => {
      state.foodItemModal = initialFoodItemModal;
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
  removeItemFromCart,
  openFoodItemModal,
  closeFoodItemModal,
} = bookingSlice.actions;

export default bookingSlice.reducer;
