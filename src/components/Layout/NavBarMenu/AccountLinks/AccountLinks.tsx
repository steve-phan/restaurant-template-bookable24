import React, { useEffect } from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';

import {
  AccountInfoWrapperSt,
  AccountLinksSt,
  ButtonAccountSt,
  FullNamefoWrapperSt,
} from './AccountLinks.styles';
import { AccountButtonGroupSt } from '../NavBarMenu.styles';

interface ISignInProps {
  email: string;
  password: string;
}

export const AccountLinks = ({
  handleDrawerToggle,
}: {
  handleDrawerToggle: () => void;
}) => {
  const { t, navigate } = useI18next();
  const {
    isUserLogin,
    isLoading,
    isLoginFail,
    userInfo: { fullName },
  } = useAppSelector((state) => state.account);

  return (
    <AccountLinksSt>
      <>
        {!!isUserLogin ? (
          <AccountInfoWrapperSt>
            <FullNamefoWrapperSt>
              <AccountCircleOutlinedIcon />
              {fullName}
            </FullNamefoWrapperSt>
            <Link
              to='/account'
              onClick={() => {
                handleDrawerToggle();
              }}
            >
              Persönliche Informationen anzeigen
            </Link>
          </AccountInfoWrapperSt>
        ) : (
          <AccountButtonGroupSt>
            <ButtonAccountSt
              onClick={() => {
                handleDrawerToggle();

                navigate('/account/signup');
              }}
            >
              {t('account.register')}
            </ButtonAccountSt>
            <ButtonAccountSt
              onClick={() => {
                handleDrawerToggle();
                navigate('/account/signin');
              }}
            >
              {t('account.login')}
            </ButtonAccountSt>
          </AccountButtonGroupSt>
        )}
      </>
    </AccountLinksSt>
  );
};
