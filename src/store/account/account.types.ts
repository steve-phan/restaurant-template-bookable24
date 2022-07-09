import { GetValuesOf } from '@bookable24/RESTAURANT.CONFIG/restaurant.types';

export interface ISignUpProps {
  fullName: string;
  email: string;
  password: string;
  phone: string;
  postCode: string;
  street: string;
  city: string;
  houseNumber: string;
}

export interface ICreateAccount {
  email: string;
  phone: string;
  fullName: string;
  password: string;
}

export interface IAddress {
  houseNumber: string;
  postCode: string;
  street: string;
  city: string;
  phone?: string;
  option?: string;
}
export interface IAccount {
  fullName: string;
  email: string;
  phone: string;
  address: IAddress;
}
export interface IAccountSliceStates {
  isLoading: boolean;
  isUserLogin: boolean;
  isLoginFail: boolean;
  isOpenNavbarMenu: boolean;
  isUserChangePasswordSuccess: boolean;
  userInfo: IAccount;
  isShowAccountLinksModal: boolean;
  signInAction: 'SIGNIN_TO_CHECKOUT' | 'SIGNIN';
}

export const SignInActionMessages = {
  SIGNIN_TO_CHECKOUT: 'SIGNIN_TO_CHECKOUT',
  SIGNIN: 'SIGNIN',
} as const;

export type TAction = GetValuesOf<typeof SignInActionMessages>;
