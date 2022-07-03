import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserCredential } from 'firebase/auth';
import { initialAccountState } from './account.defaultValues';

import { createAccount, signInAccount, signOutAccount } from './account.Thunks';
import { IAccountSliceStates } from './account.types';

export const accountSlice = createSlice({
  name: 'account',
  initialState: initialAccountState,
  reducers: {
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
          action: PayloadAction<{ userRef: UserCredential }>
        ) => {
          state.isLoading = false;
          state.isUserLogin = true;
        }
      )
      .addCase(signInAccount.pending, (state: IAccountSliceStates) => {
        state.isLoading = true;
      })
      .addCase(signInAccount.rejected, (state: IAccountSliceStates, action) => {
        state.isLoading = false;
      })
      .addCase(
        signInAccount.fulfilled,
        (
          state: IAccountSliceStates,
          action: PayloadAction<{ userRef: UserCredential }>
        ) => {
          state.isLoading = false;
          state.isUserLogin = true;
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
        state.isUserLogin = true;
      });
  },
});

export const { setUserLogin, setAccountLoading } = accountSlice.actions;

export default accountSlice.reducer;
