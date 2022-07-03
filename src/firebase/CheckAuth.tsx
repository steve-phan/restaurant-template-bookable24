import React, { useEffect } from 'react';

import { checkAuthAccount } from '../store/account/account.Thunks';
import { useAppDispatch } from '../store/hooks';

export const CheckAuth = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAccount());
  }, []);
  return <> </>;
};
