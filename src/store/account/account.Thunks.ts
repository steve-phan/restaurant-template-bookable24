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
import { setUserLogin } from './accountSlice';

export const checkUserAuth = (): AppThunk => {
  return (dispatch, getState) => {
    if (typeof window !== 'undefined') {
      onAuthStateChanged(auth, (user) => {
        console.log('haha thunk', user);
        if (user?.email) {
          dispatch(setUserLogin());
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          // const uid = user.uid
        }
      });
    }
  };
};
export const createAccount = createAsyncThunk(
  'account/create',
  async ({ email, password, phone, fullName }: ICreateAccount) => {
    const userRef = await createUserWithEmailAndPassword(auth, email, password);
    // auth.currentUser?.displayName = fullName;

    // auth.currentUser?.providerData[0].displayName = fullName
    await updateProfile(userRef.user, {
      displayName: fullName,
    });
    console.log({ newUser: userRef.user });
    return { userRef };
  }
);

export const signInAccount = createAsyncThunk(
  'account/signIn',
  async ({ email, password }: ICreateAccount) => {
    const userRef = await signInWithEmailAndPassword(auth, email, password);
    // const {} = userRef.user
    console.log({ user: userRef.user });
    return { userRef };
  }
);
