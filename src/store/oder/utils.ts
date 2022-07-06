import { localStorageGetItem } from '../localStore';
import { IBookingState, IBooking, IFoodItem, TCartItems } from './shop.types';

export const intialBooking: IBooking = {
  person: 1,
  selectedDate: new Date(),
  selectedSlot: 0,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  require: '',
};

export const initialFoodItemModal = {
  foodName: '',
  foodId: '',
  priceOfFood: 0,
  descriptionAboutFood: '',
  quantity: 1,
  require: '',
  // foodImage: IGatsbyImageData,
  isOpenModal: false,
};

export const getDefaultCartItems = (): TCartItems => {
  const data = localStorageGetItem('cartItems');
  if (!data) {
    return [];
  }
  return JSON.parse(data);
};

export const initialBookingState: IBookingState = {
  ...intialBooking,
  isValidInfo: false,
  isSubmitted: false,

  customerInfo: null,
  cartItems: getDefaultCartItems(),
  foodItemModal: initialFoodItemModal,
  isViewCartModal: false,
  isShowBasketModal: false,
};

export const existingCartItem = (
  prevCartItems?: IFoodItem[],
  nextFoodId?: string
) => {
  if (!nextFoodId || !prevCartItems) {
    return false;
  }
  return (
    !!prevCartItems &&
    prevCartItems.find((cartItem) => cartItem.foodId === nextFoodId)
  );
};

export const getCurrentQuantity = (cartItems: IFoodItem[], foodId: string) => {
  const exitsItem = cartItems.find((item) => item.foodId === foodId);

  const currentQuantity =
    exitsItem && foodId === exitsItem.foodId ? exitsItem.quantity : 0;

  return currentQuantity;
};

export interface IAddNotes {
  foodId: string;
  require: string;
}

interface IAddToCartProps {
  prevCartItems?: IFoodItem[];
  nextCartItem?: IFoodItem;
  cartItemToReduce?: IFoodItem;
  addNotes?: IAddNotes;
}
export const addToCart = ({
  prevCartItems,
  nextCartItem,
  addNotes,
}: IAddToCartProps) => {
  let newCarItems = !!prevCartItems ? prevCartItems : [];
  const cartItemExists = existingCartItem(
    prevCartItems,
    nextCartItem?.foodId || addNotes?.foodId
  );

  if (!!cartItemExists) {
    if (addNotes) {
      return newCarItems.map((cartItem) =>
        cartItem.foodId === addNotes.foodId
          ? {
              ...cartItem,
              require: addNotes?.require,
            }
          : cartItem
      );
    }

    return newCarItems.map((cartItem) =>
      cartItem.foodId === nextCartItem?.foodId
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

export const handleReduceCartItem = ({
  prevCartItems,
  cartItemToReduce,
  addNotes,
}: IAddToCartProps) => {
  const cartItemExists = existingCartItem(
    prevCartItems,
    cartItemToReduce?.foodId || addNotes?.foodId
  );

  if (!cartItemExists) {
    return prevCartItems;
  }

  if (addNotes) {
    return prevCartItems?.map((cartItem) =>
      cartItem.foodId === addNotes.foodId
        ? {
            ...cartItem,
            require: addNotes?.require,
          }
        : cartItem
    );
  }

  if (!!cartItemExists && cartItemExists.quantity === 1) {
    return prevCartItems?.filter(
      (cartItem) => cartItem.foodId !== cartItemExists.foodId
    );
  }

  return prevCartItems?.map((cartItem) =>
    cartItem.foodId === cartItemExists?.foodId
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};
