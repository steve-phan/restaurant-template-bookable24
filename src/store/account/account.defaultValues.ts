import { IAccountSliceStates } from './account.types';

export const initialAccountState: IAccountSliceStates = {
  isLoading: true,
  isUserLogin: false,
  isLoginFail: false,
  isUserChangePasswordSuccess: false,
  isOpenNavbarMenu: false,
  isShowAccountLinksModal: false,
  signInAction: 'SIGNIN',
  userInfo: {
    fullName: '',
    email: '',
    phone: '',
    address: {
      houseNumber: '',
      postCode: '',
      street: '',
      city: '',
      phone: '',
    },
  },
};
