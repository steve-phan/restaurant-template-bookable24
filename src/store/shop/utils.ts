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
interface IAddToCartProps {
  prevCartItems?: IFoodItem[];
  nextCartItem?: IFoodItem;
  cartItemToReduce?: IFoodItem;
}
export const addToCart = ({ prevCartItems, nextCartItem }: IAddToCartProps) => {
  let newCarItems = prevCartItems ? prevCartItems : [];
  const cartItemExists = existingCartItem(prevCartItems, nextCartItem?.foodId);

  if (!nextCartItem) {
    return prevCartItems;
  }

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

export const handleReduceCartItem = ({
  prevCartItems,
  cartItemToReduce,
}: IAddToCartProps) => {
  const cartItemExists = existingCartItem(
    prevCartItems,
    cartItemToReduce?.foodId
  );

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
