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

export const confirmOderEmail = createAsyncThunk(
  'oder/confirmOderEmail',
  async (data: {}) => {
    await axios.post('/.netlify/functions/sendOderConfirmEmail', data);
  }
);
