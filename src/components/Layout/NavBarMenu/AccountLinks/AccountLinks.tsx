import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
import { signInAccount } from '@bookable24/store/account/account.Thunks';
import Loading from '@bookable24/components/molecules/Loading/Loading';
import { setAccountLoading } from '@bookable24/store/account/accountSlice';
import {
  AccountInfoWrapperSt,
  AccountLinksSt,
  ButtonAccountSt,
  SignInButtonAccountSt,
  SignUpButtonAccountSt,
} from './AccountLinks.styles';
import {
  AccountHeadingSt,
  AccountInfoSt,
} from '@bookable24/components/Account/Account.styles';
import { AccountButtonGroupSt } from '../NavBarMenu.styles';
import { CTAButton } from '@bookable24/components/molecules/CTAButton/CTAButton';

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
  const dispatch = useAppDispatch();
  const {
    isUserLogin,
    isLoading,
    isLoginFail,
    userInfo: { fullName },
  } = useAppSelector((state) => state.account);

  return (
    <AccountLinksSt>
      <AccountInfoWrapperSt>
        {!!fullName ? (
          <>
            <AccountCircleOutlinedIcon />
            {fullName}
            <Link to='/account' onClick={handleDrawerToggle}>
              Persönliche Informationen anzeigen
            </Link>
          </>
        ) : (
          <AccountButtonGroupSt>
            <SignUpButtonAccountSt
              onClick={() => {
                handleDrawerToggle();

                navigate('/account/signup');
              }}
            >
              {t('account.register')}
            </SignUpButtonAccountSt>
            <SignInButtonAccountSt
              onClick={() => {
                handleDrawerToggle();
                navigate('/account/signin');
              }}
            >
              {t('account.login')}
            </SignInButtonAccountSt>
          </AccountButtonGroupSt>
        )}
      </AccountInfoWrapperSt>
    </AccountLinksSt>
  );
};
