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

const initialFoodItemModal = {
  foodId: '',
  foodName: '',
  descriptionAboutFood: '',
  isOpenModal: false,
  quantity: 0,
  priceOfFood: 1,
};

const initialBookingState: IBookingState = {
  ...intialBooking,
  isValidInfo: false,
  isSubmitted: false,

  customerInfo: null,
  cartItems: [],
  foodItemModal: initialFoodItemModal,
};

export const existingCartItem = (
  prevCartItems?: IFoodItem[],
  nextCartItem?: IFoodItem
) => {
  if (!nextCartItem || !prevCartItems) {
    return false;
  }
  return (
    !!prevCartItems &&
    prevCartItems.find((cartItem) => cartItem.foodId === nextCartItem.foodId)
  );
};

export const getCurrentQuantity = (cartItems: IFoodItem[], foodId: string) => {
  const exitsItem = cartItems.find((item) => item.foodId === foodId);

  const currentQuantity =
    exitsItem && foodId === exitsItem.foodId ? exitsItem.quantity : 0;

  return currentQuantity;
};
interface IAddToCartProps {
  prevCartItems?: IFoodItem[];
  nextCartItem?: IFoodItem;
  cartItemToReduce?: IFoodItem;
}
const addToCart = ({ prevCartItems, nextCartItem }: IAddToCartProps) => {
  let newCarItems = prevCartItems ? prevCartItems : [];
  const cartItemExists = existingCartItem(prevCartItems, nextCartItem);

  if (!nextCartItem) {
    return prevCartItems;
  }

  if (!!cartItemExists) {
    return newCarItems.map((cartItem) =>
      cartItem.foodId === nextCartItem.foodId
        ? {
            ...cartItem,
            quantity: cartItem.quantity + nextCartItem.quantity,
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

export const handleReduceCartItem = ({
  prevCartItems,
  cartItemToReduce,
}: IAddToCartProps) => {
  const cartItemExists = existingCartItem(prevCartItems, cartItemToReduce);
  console.log({ cartItemExists: cartItemExists });
  if (!cartItemExists || !prevCartItems) {
    return prevCartItems;
  }

  if (!!cartItemExists && cartItemExists.quantity === 1) {
    return prevCartItems.filter(
      (cartItem) => cartItem.foodId !== cartItemExists.foodId
    );
  }

  return prevCartItems.map((cartItem) =>
    cartItem.foodId === cartItemExists?.foodId
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};

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

      const currentQuantity = getCurrentQuantity(
        newCartItems,
        action.payload.foodId
      );

      state.foodItemModal.quantity = currentQuantity;
    },
    removeItemFromCart: (
      state: IBookingState,
      action: PayloadAction<IFoodItem>
    ) => {
      const newCartItems = handleReduceCartItem({
        prevCartItems: state.cartItems,
        cartItemToReduce: action.payload,
      }) as IFoodItem[];

      const currentQuantity = getCurrentQuantity(
        newCartItems,
        action.payload.foodId
      );
      state.cartItems = newCartItems;
      state.foodItemModal.quantity = currentQuantity;
    },
    openFoodItemModal: (
      state: IBookingState,
      action: PayloadAction<IFoodItemModal>
    ) => {
      const { cartItems } = state;
      const currentQuantity = getCurrentQuantity(
        cartItems,
        action.payload.foodId
      );
      state.foodItemModal = {
        ...action.payload,
        isOpenModal: true,
        quantity: currentQuantity,
      };
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
