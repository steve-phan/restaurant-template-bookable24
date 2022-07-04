import axios from 'axios';
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
import { ICreateAccount, ISignUpProps } from './account.types';
import { setAccountLoading, setUserLogin } from './accountSlice';
import {
  localStorageGetItem,
  localStorageRemoveItem,
  localStorageSetItem,
} from '../localStore';

export const checkAuthAccount = (): AppThunk => {
  return (dispatch, getState) => {
    if (typeof window !== 'undefined') {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const { email, displayName } = user as {
            email: string;
            displayName: string;
          };

          await dispatch(getUserInfo()).then(() => {
            dispatch(
              setUserLogin({
                email: email as string,
                displayName: displayName as string,
              })
            );
          });
        } else {
          dispatch(setAccountLoading(false));
        }
      });
    }
  };
};

export const createAccount = createAsyncThunk(
  'account/create',
  async (
    {
      email,
      password,
      phone,
      fullName,
      street,
      houseNumber,
      postCode,
      city,
    }: ISignUpProps,
    { dispatch }
  ) => {
    localStorageRemoveItem('userInfo');
    const userRef = await createUserWithEmailAndPassword(auth, email, password);
    localStorageSetItem(
      'userInfo',
      JSON.stringify({
        email,
        fullName,
        phone,
        street,
        houseNumber,
        postCode,
        city,
      })
    );
    await axios.post('/.netlify/functions/setUserInfo', {
      uid: userRef.user.uid,
      email,
      fullName,
      phone,
      street,
      houseNumber,
      postCode,
      city,
    });

    await updateProfile(userRef.user, {
      displayName: fullName,
    });
    return { email, fullName, phone, street, houseNumber, postCode, city };
  }
);

export const signInAccount = createAsyncThunk(
  'account/signIn',
  async ({ email, password }: { email: string; password: string }) => {
    const userRef = await signInWithEmailAndPassword(auth, email, password);
    const uid = userRef.user.uid;
    const data = localStorageGetItem('userInfo') || '';
    let userInfo: any = null;
    if (!data) {
      const res = await axios.post('/.netlify/functions/getUserInfo', {
        uid,
      });

      userInfo = res?.data?.userInfo;
      if (userInfo) {
        localStorageSetItem('userInfo', JSON.stringify(userInfo));
      }
    } else {
      userInfo = JSON.parse(data);
    }

    return { userRef, userInfo };
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

export const updateUserInfo = createAsyncThunk(
  'account/updateUserInfo',
  async (data: {}) => {
    localStorageSetItem('userInfo', JSON.stringify(data));
    const uid = auth.currentUser?.uid;

    const res = await axios.post('/.netlify/functions/updateUserInfo', {
      ...data,
      uid,
    });
  }
);

export const getUserInfo = createAsyncThunk(
  'account/getUserInfo',
  async (_, thunkAPI) => {
    let userInfo: any = null;
    const { uid } = auth.currentUser as User;
    const data = localStorageGetItem('userInfo');
    if (data) {
      userInfo = JSON.parse(data);
      return {
        userInfo,
      };
    }
    const res = await axios.post('/.netlify/functions/getUserInfo', {
      uid,
    });
    userInfo = res?.data?.userInfo;

    if (userInfo) {
      localStorageSetItem('userInfo', JSON.stringify(userInfo));
    }
    // thunkAPI.dispatch(
    //   setUserLogin({
    //     email: email as string,
    //     displayName: displayName as string,
    //   })
    // );
    return { userInfo };
  }
);
