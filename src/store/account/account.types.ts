export interface ICreateAccount {
  email: string;
  phone: string;
  fullName: string;
  password: string;
}

export interface IAddress {
  houseNumber: number;
  postCode: number;
  street: string;
  city: string;
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
  isUserChangePasswordSuccess: boolean;
  userInfo: IAccount;
}
