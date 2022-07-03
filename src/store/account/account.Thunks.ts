import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  updatePassword,
  User,
} from 'firebase/auth';

import { auth } from '@bookable24/firebase';

import { AppThunk } from '../store';
import { ICreateAccount } from './account.types';
import { setAccountLoading, setUserLogin } from './accountSlice';

export const checkAuthAccount = (): AppThunk => {
  return (dispatch, getState) => {
    if (typeof window !== 'undefined') {
      onAuthStateChanged(auth, async (user) => {
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
    return { userRef };
  }
);

export const signOutAccount = createAsyncThunk('account/singOut', async () => {
  await auth.signOut();
});

export const userChangePassword = createAsyncThunk(
  'account/changePassword',
  async (newPassword: string) => {
    const user = auth.currentUser as User;
    await updatePassword(user, newPassword);
  }
);
