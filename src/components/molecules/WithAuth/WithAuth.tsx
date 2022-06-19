import * as React from 'react';

import Loading from '@bookable24/components/molecules/Loading/Loading';
import { useAppSelector } from '@bookable24/store/hooks';
import { RootState } from '@bookable24/store/store';

const WithAuth = () => {
  const { isShopLogin, status } = useAppSelector(
    (state: RootState) => state.shop
  );
  if (status === 'loading' && !isShopLogin) {
    return <Loading />;
  } else {
    return <></>;
  }
};

export default WithAuth;
