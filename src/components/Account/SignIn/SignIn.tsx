import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';

import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
import { signInAccount } from '@bookable24/store/account/account.Thunks';

import {
  WrapColSt,
  TextFieldSt,
  TypographySt,
  AccountHeadingSt,
  AccountInfoSt,
} from '../Account.styles';
import { getSignSchema } from '../utils';
import { ButtonSt } from '../Account.styles';
import Loading from '@bookable24/components/molecules/Loading/Loading';
import {
  setAccountLoading,
  setUserLogin,
} from '@bookable24/store/account/accountSlice';

interface ISignInProps {
  email: string;
  password: string;
}

export const SignIn = () => {
  const { t, navigate } = useI18next();
  const dispatch = useAppDispatch();
  const { isUserLogin, isLoading } = useAppSelector((state) => state.account);

  const schema = getSignSchema(t);

  const {
    control,
    register,
    getValues,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignInProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    if (isUserLogin) {
      navigate('/account');
    } else {
      dispatch(setAccountLoading(false));
    }
  }, [isLoading, isUserLogin]);

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

        <ButtonSt
          variant='contained'
          color='primary'
          onClick={handleSubmit(onSubmit)}
        >
          Sign In
        </ButtonSt>
        <TypographySt>
          Alle Felder, die mit einem Sternchen (*) gekennzeichnet sind, müssen
          bei der Anmeldung ausgefüllt werden.
        </TypographySt>
      </form>
    </WrapColSt>
  );
};
