import React, { ReactNode, useEffect } from 'react';
import { Provider, ReactReduxContext } from 'react-redux';
import { checkUserAuth } from '../store/account/account.Thunks';
import { useAppDispatch } from '../store/hooks';
import { store } from '../store/store';

export const CheckAuth = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkUserAuth());
  }, []);
  return <> </>;
};
