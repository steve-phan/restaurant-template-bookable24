import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface IShopInfo {
  city: string;
  cityCode: string;
  company: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  shopName: string;
  street: string;
  uid?: string;
  settings: {
    time: string;
    slotTime: string;
    weekdays: number[];
    closedRegularDay:
      | 'none'
      | 'Sun'
      | 'Mon'
      | 'Tue'
      | 'Wed'
      | 'Thu'
      | 'Fri'
      | 'Sat';
    closedSpecificDay: Date[];
    terminBefore?: number;
    maxTerminPerSlot?: number;
  };
}

export interface ICustomer {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
}
export interface IInfoUserProps extends ICustomer {
  require?: string;
  isSubmitted?: boolean;
}
export interface ITermin extends ICustomer {
  created_at?: string;
  person: string;
  require: null | string;
  selectedDate: string;
  selectedSlot: string;
  slots?: string;
  status: boolean;
  __v?: number;
  _id?: string;
  canceled?: boolean;
}

export interface IShop {
  email: string;
  shopId: string;
}

export interface IShopState {
  shopInfo: IShopInfo;
  status: 'login' | 'loading' | 'logout';
  isShopLogin: boolean;
  allTermins: any[];
  isFetching: boolean;
  cancelTermin: ITermin;
}

export interface IShopQuery {
  shopEmail: string;
  shopId: string;
  isShopLogin: boolean;
}

export interface Iaccount {
  email: string;
  password: string;
}
export type TCustomerInfo =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'phone'
  | 'require';

export interface IOder {
  person: number;
  selectedDate: Date;
  selectedSlot: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  require?: string;
  deliveryTime: string;
}

export type TCartItems = IFoodItem[];

export interface IFoodItem {
  foodName: string;
  foodId: string;
  priceOfFood: number;
  descriptionAboutFood: string;
  quantity: number;
  require?: string;
  foodImage?: IGatsbyImageData;
  isOpenModal?: boolean;
}

export interface ICustomerInfos {
  fullName: string;
  address: string;
  phone: number;
  otherRequire?: string;
  timeDelivery?: Date;
}

export interface IOderState extends IOder {
  isValidInfo: boolean;
  isSubmitted: boolean;

  customerInfo: ICustomerInfos;
  cartItems: TCartItems;
  foodItemModal: IFoodItem;
  isViewCartModal: boolean;
  isShowBasketModal: boolean;
}

export interface IFoodItemModal {
  foodItemModalId: string;
  isOpenModal: boolean;
  foodImage?: IGatsbyImageData;
}
