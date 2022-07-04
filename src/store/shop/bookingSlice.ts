import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { confirmOderEmail } from './booking.Thunks';

import { IBookingState, IInfoUserProps, IFoodItem } from './shop.types';
import {
  addToCart,
  handleReduceCartItem,
  IAddNotes,
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

      state.foodItemModal.quantity = state.foodItemModal.quantity + 1;
    },
    addRequireItemToCart: (
      state: IBookingState,
      action: PayloadAction<{ addNotes: IAddNotes }>
    ) => {
      const newCartItems = addToCart({
        prevCartItems: state.cartItems,
        addNotes: action.payload.addNotes,
      }) as IFoodItem[];
      state.cartItems = newCartItems;
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
      state.foodItemModal.quantity = state.foodItemModal.quantity - 1;
    },
    removeRequireItemFromCart: (
      state: IBookingState,
      action: PayloadAction<{ addNotes: IAddNotes }>
    ) => {
      const newCartItems = handleReduceCartItem({
        prevCartItems: state.cartItems,
        addNotes: action.payload.addNotes,
      }) as IFoodItem[];
      state.cartItems = newCartItems;

      state.foodItemModal.quantity = state.foodItemModal.quantity + 1;
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
    openViewCartModal: (state: IBookingState) => {
      state.isViewCartModal = true;
    },
    closeViewCartModal: (state: IBookingState) => {
      state.isViewCartModal = false;
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
  extraReducers: (builder) => {
    builder
      .addCase(confirmOderEmail.pending, (state: IBookingState) => {
        // state.isLoading = true;
      })
      .addCase(confirmOderEmail.rejected, (state: IBookingState) => {
        // state.isLoading = false;
        // state.isLoading = true;
      })
      .addCase(confirmOderEmail.fulfilled, (state: IBookingState) => {
        // state.isLoading = true;
        // state.isLoading = false;
        // state.isUserLogin = false;
      });
  },
});
export const {
  setNumberOfCustomer,
  setSelectedDate,
  setSelectedSlot,
  setCustomerInfo,
  setCustomerValidInfo,

  // Adjust Item
  addItemToCart,
  removeItemFromCart,

  // ShopOnline Modal
  openFoodItemModal,
  closeFoodItemModal,
  openViewCartModal,
  closeViewCartModal,

  // AddNotes actions
  addRequireItemToCart,
  removeRequireItemFromCart,
} = bookingSlice.actions;

export default bookingSlice.reducer;
