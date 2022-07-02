import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { ResponseType, AxiosResponse } from 'axios';
import { onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@bookable24/firebase';
import { async } from '@firebase/util';

interface IAccountprops {
  email: string;
  password: string;
}

interface IAccountSliceStates {
  isLoading: boolean;
}

const initialAccountState: IAccountSliceStates = {
  isLoading: false,
};

export const createAccount = createAsyncThunk('account/create', async ({ email, password }: IAccountprops) => {
  const userRef = await createUserWithEmailAndPassword(auth, email, password);
  console.log({ userRef });
  return { userRef };
});

export const accountSlice = createSlice({
  name: 'account',
  initialState: initialAccountState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAccount.pending, (state: IAccountSliceStates) => {
        state.isLoading = true;
      })
      .addCase(createAccount.rejected, (state: IAccountSliceStates, action) => {
        state.isLoading = false;
        console.log({ action });
      })
      .addCase(createAccount.fulfilled, (state: IAccountSliceStates, action) => {
        state.isLoading = false;
        console.log({ action });
      });
  },
});

export const {} = accountSlice.actions;

export default accountSlice.reducer;
