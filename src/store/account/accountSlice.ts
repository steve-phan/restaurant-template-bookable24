import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { ResponseType, AxiosResponse } from 'axios';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';
import { async } from '@firebase/util';

import { auth } from '@bookable24/firebase';
import { createAccount, signInAccount } from './account.Thunks';
import { IAccountSliceStates } from './account.types';

const initialAccountState: IAccountSliceStates = {
  isLoading: false,
  isUserLogin: false,
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

export const accountSlice = createSlice({
  name: 'account',
  initialState: initialAccountState,
  reducers: {
    setUserLogin: (state) => {
      state.isUserLogin = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAccount.pending, (state: IAccountSliceStates) => {
        state.isLoading = true;
      })
      .addCase(createAccount.rejected, (state: IAccountSliceStates, action) => {
        state.isLoading = false;
        console.log({ action });
      })
      .addCase(
        createAccount.fulfilled,
        (
          state: IAccountSliceStates,
          action: PayloadAction<{ userRef: UserCredential }>
        ) => {
          state.isLoading = false;
          state.isUserLogin = true;
          console.log({ action });
        }
      )
      .addCase(signInAccount.pending, (state: IAccountSliceStates) => {
        state.isLoading = true;
      })
      .addCase(signInAccount.rejected, (state: IAccountSliceStates, action) => {
        state.isLoading = false;
        console.log({ action });
      })
      .addCase(
        signInAccount.fulfilled,
        (
          state: IAccountSliceStates,
          action: PayloadAction<{ userRef: UserCredential }>
        ) => {
          state.isLoading = false;
          state.isUserLogin = true;
          console.log({ action });
        }
      );
  },
});

export const { setUserLogin } = accountSlice.actions;

export default accountSlice.reducer;
