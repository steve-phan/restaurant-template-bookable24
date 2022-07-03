import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';

import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
import { signInAccount } from '@bookable24/store/account/account.Thunks';
import Loading from '@bookable24/components/molecules/Loading/Loading';
import {
  setAccountLoading,
  setOpenNavbarMenu,
} from '@bookable24/store/account/accountSlice';

import {
  WrapColSt,
  TextFieldSt,
  TypographySt,
  AccountHeadingSt,
  AccountInfoSt,
} from '../Account.styles';
import { getSignInSchema } from '../utils';
import { ButtonSt } from '../Account.styles';

interface ISignInProps {
  email: string;
  password: string;
}

export const SignIn = () => {
  const { t, navigate } = useI18next();
  const dispatch = useAppDispatch();
  const { isUserLogin, isLoading, isLoginFail } = useAppSelector(
    (state) => state.account
  );

  const schema = getSignInSchema(t);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    if (isLoginFail) {
      alert('Your Email or Password is wrong...');
    } else if (isUserLogin) {
      dispatch(setOpenNavbarMenu());
      navigate('/oder');
    } else {
      dispatch(setAccountLoading(false));
    }
  }, [isLoading, isUserLogin, isLoginFail]);

  const onSubmit = (data: ISignInProps) => {
    dispatch(signInAccount({ email: data.email, password: data.password }));
  };
  return (
    <WrapColSt>
      {isLoading && <Loading />}
      <AccountHeadingSt> {t('account.login')} </AccountHeadingSt>
      <AccountInfoSt>
        Loggen Sie sich jetzt ein, um alle Vorteile des Kundenkontos
        wahrzunehmen. Neuer Kunde?
        <Link to='/account/signup'> {t('account.register')} </Link>
      </AccountInfoSt>
      <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <TextFieldSt
          {...register('email')}
          error={!!errors.email}
          helperText={errors?.email?.message}
          variant='standard'
          placeholder='johndoe@mail.com'
          label='E-Mail*'
          autoComplete='off'
        />
        <TextFieldSt
          {...register('password')}
          error={!!errors.password}
          helperText={errors?.password?.message}
          variant='standard'
          placeholder='Password'
          label='Passwrod*'
          autoComplete='off'
          type='password'
        />
        <ButtonSt variant='contained' color='primary' type='submit'>
          Sign In
        </ButtonSt>

        <TypographySt>
          Alle Felder, die mit einem Sternchen (*) gekennzeichnet sind, müssen
          bei der Anmeldung ausgefüllt werden.
        </TypographySt>
        <Link to='/account/recover'> {t('account.forgot')} </Link>
      </form>
    </WrapColSt>
  );
};
