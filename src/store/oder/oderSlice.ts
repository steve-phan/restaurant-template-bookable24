import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { confirmOderEmail } from './oder.Thunks';

import { IOderState, IInfoUserProps, IFoodItem } from './oder.types';
import {
  addToCart,
  handleReduceCartItem,
  IAddNotes,
  initialOderState,
  initialFoodItemModal,
} from './utils';

const oderSlice = createSlice({
  name: 'oder',
  initialState: initialOderState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },

    addItemToCart: (state: IOderState, action: PayloadAction<IFoodItem>) => {
      const newCartItems = addToCart({
        prevCartItems: state.cartItems,
        nextCartItem: action.payload,
      }) as IFoodItem[];
      state.cartItems = newCartItems;

      state.foodItemModal.quantity = state.foodItemModal.quantity + 1;
    },
    addRequireItemToCart: (
      state: IOderState,
      action: PayloadAction<{ addNotes: IAddNotes }>
    ) => {
      const newCartItems = addToCart({
        prevCartItems: state.cartItems,
        addNotes: action.payload.addNotes,
      }) as IFoodItem[];
      state.cartItems = newCartItems;
    },
    removeItemFromCart: (
      state: IOderState,
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
      state: IOderState,
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
      state: IOderState,
      action: PayloadAction<IFoodItem>
    ) => {
      state.foodItemModal = action.payload;
    },
    closeFoodItemModal: (state: IOderState) => {
      state.foodItemModal = initialFoodItemModal;
    },
    toggleShowBasketModal: (state: IOderState) => {
      state.isShowBasketModal = !state.isShowBasketModal;
      // state.foodItemModal.isOpenModal = !state.foodItemModal.isOpenModal;
    },
    openViewCartModal: (state: IOderState) => {
      state.isViewCartModal = true;
    },
    closeViewCartModal: (state: IOderState) => {
      state.isViewCartModal = false;
    },
    setDeliveryTime: (state: IOderState, action: PayloadAction<string>) => {
      state.deliveryTime = action.payload;
    },

    //Bookabke24
    setNumberOfCustomer: (state: IOderState, action: PayloadAction<number>) => {
      state.person = action.payload;
    },
    setSelectedSlot: (state: IOderState, action: PayloadAction<number>) => {
      state.selectedSlot = action.payload;
    },
    setSelectedDate: (state: IOderState, action: PayloadAction<Date>) => {
      state.selectedDate = action.payload;
    },
    setCustomerInfo: (
      state: IOderState,
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
      state: IOderState,
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
      .addCase(confirmOderEmail.pending, (state: IOderState) => {
        // state.isLoading = true;
      })
      .addCase(confirmOderEmail.rejected, (state: IOderState) => {
        // state.isLoading = false;
        // state.isLoading = true;
      })
      .addCase(confirmOderEmail.fulfilled, (state: IOderState) => {
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
  // Clear Cart
  clearCart,

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

  // Add DeliveryTime action
  setDeliveryTime,

  // Show Modal
  toggleShowBasketModal,
} = oderSlice.actions;

export default oderSlice.reducer;
