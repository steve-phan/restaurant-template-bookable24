import React, { useEffect } from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import { auth } from '@bookable24/firebase';
import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';

import Loading from '../molecules/Loading/Loading';
import {
  AccountHeadingSt,
  AccountInfoSt,
  AccountNoticeSt,
  TextFieldSt,
  TypographySt,
  WrapColSt,
} from './Account.styles';

type Tmode = 'resetPassword' | 'recoverEmail' | 'verifyEmail';

export const Account = () => {
  const { navigate } = useI18next();
  const dispatch = useAppDispatch();
  const {
    isUserLogin,
    isLoading,
    userInfo: { email, fullName },
  } = useAppSelector((state) => state.account);

  useEffect(() => {
    if (!isLoading && !isUserLogin) navigate('/account/signin');
  }, [isLoading]);

  return (
    <WrapColSt>
      <AccountHeadingSt>Personenbezogene Daten</AccountHeadingSt>
      <TypographySt>Name</TypographySt>
      <TextFieldSt value={fullName} disabled />
      <TypographySt>E-Mail-Adresse</TypographySt>
      <TextFieldSt value={email} disabled />
      <AccountNoticeSt>
        <InfoOutlinedIcon fontSize='small' />
        <Link to='/account/resetpassword'>Passwort ändern</Link>
      </AccountNoticeSt>
      {(isLoading || !isUserLogin) && <Loading />}
    </WrapColSt>
  );
};
