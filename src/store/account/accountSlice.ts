import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserCredential } from 'firebase/auth';
import { initialAccountState } from './account.defaultValues';

import {
  createAccount,
  getUserInfo,
  signInAccount,
  signOutAccount,
  updateUserInfo,
  userChangePassword,
} from './account.Thunks';
import {
  IAccount,
  IAccountSliceStates,
  IAddress,
  ISignUpProps,
} from './account.types';

export const accountSlice = createSlice({
  name: 'account',
  initialState: initialAccountState,
  reducers: {
    setOpenNavbarMenu: (state) => {
      state.isOpenNavbarMenu = !state.isOpenNavbarMenu;
    },
    setAccountLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setUserLogin: (
      state: IAccountSliceStates,
      action: PayloadAction<{ email: string; displayName: string }>
    ) => {
      state.isUserLogin = true;
      state.isLoading = false;
      state.userInfo.email = action.payload.email;
      state.userInfo.fullName = action.payload.displayName;
    },
    setUserLogOut: (state: IAccountSliceStates) => {
      state.isUserLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAccount.pending, (state: IAccountSliceStates) => {
        state.isLoading = true;
      })
      .addCase(createAccount.rejected, (state: IAccountSliceStates, action) => {
        state.isLoading = false;
      })
      .addCase(
        createAccount.fulfilled,
        (
          state: IAccountSliceStates,
          action: PayloadAction<Omit<ISignUpProps, 'password'>>
        ) => {
          // state.isLoading = false;
          // state.isUserLogin = true;
          // state.userInfo.phone = action.payload.phone;
          // state.userInfo.email = action.payload.email;
          // state.userInfo.fullName = action.payload.fullName;
          // state.userInfo.address.phone = action.payload.phone;
        }
      )
      .addCase(signInAccount.pending, (state: IAccountSliceStates) => {
        state.isLoading = true;
        state.isLoginFail = false;
      })
      .addCase(signInAccount.rejected, (state: IAccountSliceStates, action) => {
        state.isLoading = false;
        state.isLoginFail = true;
      })
      .addCase(
        signInAccount.fulfilled,
        (
          state: IAccountSliceStates,
          action: PayloadAction<{ userRef: UserCredential; userInfo: IAddress }>
        ) => {
          state.isLoading = false;
          state.isUserLogin = true;
          state.isLoginFail = false;
          state.userInfo.address = action.payload.userInfo
            ? action.payload.userInfo
            : state.userInfo.address;
        }
      )
      .addCase(signOutAccount.pending, (state: IAccountSliceStates) => {
        state.isLoading = true;
      })
      .addCase(signOutAccount.rejected, (state: IAccountSliceStates) => {
        state.isLoading = false;
      })
      .addCase(signOutAccount.fulfilled, (state: IAccountSliceStates) => {
        state.isLoading = false;
        state.isUserLogin = false;
      })
      .addCase(userChangePassword.pending, (state: IAccountSliceStates) => {
        state.isLoading = true;
        state.isUserChangePasswordSuccess = false;
      })
      .addCase(userChangePassword.rejected, (state: IAccountSliceStates) => {
        state.isLoading = false;
        state.isUserChangePasswordSuccess = false;
      })
      .addCase(userChangePassword.fulfilled, (state: IAccountSliceStates) => {
        state.isLoading = false;
        state.isUserLogin = false;
        state.isUserChangePasswordSuccess = true;
      })
      .addCase(updateUserInfo.pending, (state: IAccountSliceStates) => {
        state.isLoading = true;
      })
      .addCase(updateUserInfo.rejected, (state: IAccountSliceStates) => {
        state.isLoading = false;
      })
      .addCase(updateUserInfo.fulfilled, (state: IAccountSliceStates) => {
        state.isLoading = false;
      })
      .addCase(getUserInfo.pending, (state: IAccountSliceStates) => {
        state.isLoading = true;
      })
      .addCase(getUserInfo.rejected, (state: IAccountSliceStates) => {
        state.isLoading = false;
      })
      .addCase(
        getUserInfo.fulfilled,
        (
          state: IAccountSliceStates,
          action: PayloadAction<{ userInfo: IAddress }>
        ) => {
          state.isLoading = false;
          state.userInfo.address = action.payload.userInfo;
        }
      );
  },
});

export const {
  setUserLogin,
  setAccountLoading,
  setOpenNavbarMenu,
  setUserLogOut,
} = accountSlice.actions;

export default accountSlice.reducer;
