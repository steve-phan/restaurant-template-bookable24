import React, { useRef, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useI18next } from 'gatsby-plugin-react-i18next';

import { useAppDispatch } from '@bookable24/store/hooks';
import { signInAccount } from '@bookable24/store/account/account.Thunks';

import {
  WrapColSt,
  TextFieldSt,
  TypographySt,
  AccountHeadingSt,
} from '../Account.styles';
import { getSignSchema } from '../utils';
import { ButtonSt } from '../Account.styles';

interface ISignInProps {
  email: string;
  password: string;
}

export const SignIn = () => {
  const { t } = useI18next();
  const dispatch = useAppDispatch();

  const schema = getSignSchema(t);

  const {
    control,
    register,
    getValues,
    handleSubmit,
    watch,
    formState: { errors, isValid, dirtyFields },
  } = useForm<ISignInProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: ISignInProps) => {
    dispatch(signInAccount({ email: data.email, password: data.password }));
    console.log('submiting');
  };
  return (
    <WrapColSt>
      <AccountHeadingSt> {t('account.login')} </AccountHeadingSt>
      <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <TextFieldSt
          {...register('email')}
          error={!!errors.email}
          helperText={errors?.email?.message}
          variant='filled'
          placeholder='johndoe@mail.com'
          label='E-Mail*'
          autoComplete='off'
        />
        <TextFieldSt
          {...register('password')}
          error={!!errors.password}
          helperText={errors?.password?.message}
          variant='filled'
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
