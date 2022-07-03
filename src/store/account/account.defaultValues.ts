import { IAccountSliceStates } from './account.types';

export const initialAccountState: IAccountSliceStates = {
  isLoading: true,
  isUserLogin: false,
  isLoginFail: false,
  isUserChangePasswordSuccess: false,
  isOpenNavbarMenu: false,
  userInfo: {
    fullName: '',
    email: '',
    phone: '',
    address: {
      houseNumber: 0,
      postCode: 0,
      street: '',
      city: '',
    },
  },
};
