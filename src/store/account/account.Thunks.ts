import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  updateCurrentUser,
} from 'firebase/auth';

import { auth } from '@bookable24/firebase';

import { AppThunk } from '../store';
import { ICreateAccount } from './account.types';
import { setAccountLoading, setUserLogin } from './accountSlice';
import { async } from '@firebase/util';

export const checkUserAuth = (): AppThunk => {
  return (dispatch, getState) => {
    if (typeof window !== 'undefined') {
      onAuthStateChanged(auth, async (user) => {
        console.log({ user });
        if (user) {
          const { email, displayName } = user as {
            email: string;
            displayName: string;
          };
          dispatch(setUserLogin({ email, displayName }));
        } else {
          dispatch(setAccountLoading(false));
        }
      });
    }
  };
};
export const createAccount = createAsyncThunk(
  'account/create',
  async ({ email, password, phone, fullName }: ICreateAccount) => {
    const userRef = await createUserWithEmailAndPassword(auth, email, password);
    if (auth.currentUser)
      await updateProfile(auth.currentUser, {
        displayName: fullName,
      });
    return { userRef };
  }
);

export const signInAccount = createAsyncThunk(
  'account/signIn',
  async ({ email, password }: { email: string; password: string }) => {
    const userRef = await signInWithEmailAndPassword(auth, email, password);
    // const {} = userRef.user
    console.log({ user: userRef.user });
    return { userRef };
  }
);
