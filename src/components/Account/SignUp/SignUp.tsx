import React, { useRef, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';

import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
import { createAccount } from '@bookable24/store/account/account.Thunks';

import { getSchema } from '../utils';
import {
  AccountHeadingSt,
  AccountInfoSt,
  ButtonSt,
  TextFieldSt,
  TypographySt,
  WrapColSt,
} from '../Account.styles';
import Loading from '@bookable24/components/molecules/Loading/Loading';

interface ISignUpProps {
  fullName: string;
  email: string;
  password: string;
  phone: string;
}

export const SignUp = () => {
  const { t, navigate } = useI18next();
  const dispatch = useAppDispatch();
  const { isUserLogin, isLoading } = useAppSelector((state) => state.account);

  const schema = getSchema(t);

  const {
    control,
    register,
    getValues,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignUpProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: '',
      password: '',
      email: '',
      phone: '',
    },
  });

  // useEffect(() => {
  //   if (isUserLogin) {
  //     navigate('/account');
  //   }
  // }, []);

  const onSubmit = (data: ISignUpProps) => {
    const { email, password, phone, fullName } = data;
    dispatch(createAccount({ email, password, phone, fullName }));
  };
  return (
    <WrapColSt>
      {isLoading && <Loading />}

      <AccountHeadingSt> {t('account.register')} </AccountHeadingSt>

      <AccountInfoSt>
        Erstellen Sie sich jetzt ein Kundenkonto für ein persönlicheres .
        Bereits Kunde?
        <Link to='/account/signin' className='siteLink'>
          {' '}
          Zur Anmeldung
        </Link>
      </AccountInfoSt>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFieldSt
          {...register('fullName')}
          error={!!errors.fullName}
          helperText={errors?.fullName?.message}
          variant='standard'
          placeholder='VollName'
          label='Vollname*'
          autoComplete='off'
        />

        <TextFieldSt
          {...register('email')}
          error={!!errors.email}
          helperText={errors?.email?.message}
          variant='standard'
          placeholder='johndoe@mail.com'
          label='E-Mail*'
          autoComplete='off'
        />
        <Controller
          name='phone'
          control={control}
          render={({ field }) => {
            const { onChange: onChangeCustom } = field;
            return (
              <TextFieldSt
                autoComplete='off'
                {...field}
                value={field.value}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === '') {
                    onChangeCustom('');
                  }
                  const num =
                    !/^\d+$/.test(value) && Number.isNaN(parseFloat(value))
                      ? null
                      : value;
                  if (num) onChangeCustom(num);
                }}
                error={!!errors.phone}
                helperText={errors?.phone?.message}
                type='tel'
                variant='standard'
                placeholder='01723567890'
                label='Telefonnummer*'
              />
            );
          }}
        />
        <TextFieldSt
          {...register('password')}
          error={!!errors.password}
          helperText={errors?.password?.message}
          variant='standard'
          placeholder='password'
          label='Password*'
          autoComplete='off'
          type='password'
        />
        <ButtonSt
          variant='contained'
          color='primary'
          onClick={handleSubmit(onSubmit)}
        >
          Sign Up
        </ButtonSt>
        <TypographySt>
          Alle Felder, die mit einem Sternchen (*) gekennzeichnet sind, müssen
          bei der Anmeldung ausgefüllt werden.
        </TypographySt>
      </form>
    </WrapColSt>
  );
};
