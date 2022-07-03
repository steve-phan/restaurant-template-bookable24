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
}
