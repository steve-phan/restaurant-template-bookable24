import { auth } from '@bookable24/firebase';
import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
import { graphql } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import React, { useEffect } from 'react';
import Loading from '../molecules/Loading/Loading';
import { WrapColSt } from './Account.styles';

type Tmode = 'resetPassword' | 'recoverEmail' | 'verifyEmail';

export const Account = () => {
  const { navigate } = useI18next();
  const dispatch = useAppDispatch();
  const { isUserLogin, isLoading } = useAppSelector((state) => state.account);

  //   if (isLoading) {
  //     return <Loading />;
  //   }

  useEffect(() => {
    if (!isLoading && !isUserLogin) navigate('/account/signin');
  }, [isLoading]);

  console.log({ isLoading });

  return (
    <WrapColSt>
      <button
        onClick={() => {
          auth.signOut();
        }}
      >
        logout
      </button>
      {(isLoading || !isUserLogin) && <Loading />}
      <h1>Account Page Component</h1>
    </WrapColSt>
  );
};
