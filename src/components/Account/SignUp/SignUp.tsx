import React, { useRef, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';

import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
import { createAccount } from '@bookable24/store/account/account.Thunks';
import Loading from '@bookable24/components/molecules/Loading/Loading';
import {
  setAccountLoading,
  setOpenNavbarMenu,
} from '@bookable24/store/account/accountSlice';

import { getSignUpSchema } from '../utils';
import {
  AccountHeadingSt,
  AccountInfoSt,
  ButtonSt,
  TextFieldSt,
  TypographySt,
  WrapColSt,
} from '../Account.styles';
import { ISignUpProps } from '@bookable24/store/account/account.types';

export const SignUp = () => {
  const { t, navigate } = useI18next();
  const dispatch = useAppDispatch();
  const { isUserLogin, isLoading } = useAppSelector((state) => state.account);

  const schema = getSignUpSchema(t);

  const {
    control,
    register,
    handleSubmit,
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

  useEffect(() => {
    if (isUserLogin) {
      dispatch(setOpenNavbarMenu());
      navigate('/oder');
    }
  }, [isUserLogin]);

  useEffect(() => {
    if (!isUserLogin) dispatch(setAccountLoading(false));
  }, []);

  const onSubmit = (data: ISignUpProps) => {
    // const { email, password, phone, fullName } = data;
    dispatch(setAccountLoading(true));
    dispatch(createAccount(data));
  };
  return (
    <WrapColSt>
      {isLoading && <Loading />}
      <AccountHeadingSt> {t('account.registration')} </AccountHeadingSt>
      <AccountInfoSt>
        Erstellen Sie sich jetzt ein Kundenkonto für ein persönlicheres .
        Bereits Kunde?{' '}
        <Link to='/account/signin' className='siteLink'>
          {t('account.toLogin')}
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
          {...register('street')}
          error={!!errors.street}
          helperText={errors?.street?.message}
          variant='standard'
          placeholder='Straße'
          label='Straße*'
          autoComplete='off'
          type='text'
          // disabled={!edit}
        />
        <TextFieldSt
          {...register('houseNumber')}
          error={!!errors.houseNumber}
          helperText={errors?.houseNumber?.message}
          variant='standard'
          placeholder='Hausnummer'
          label='Hausnummer*'
          autoComplete='off'
          type='text'
          // disabled={!edit}
        />
        <TextFieldSt
          {...register('postCode')}
          error={!!errors.postCode}
          helperText={errors?.postCode?.message}
          variant='standard'
          placeholder='Postleitzahl'
          label='Postleitzahl*'
          autoComplete='off'
          type='text'
          // disabled={!edit}
        />
        <TextFieldSt
          {...register('city')}
          error={!!errors.city}
          helperText={errors?.city?.message}
          variant='standard'
          placeholder='Stadt'
          label='Stadt*'
          autoComplete='off'
          type='text'
          // disabled={!edit}
        />
        <TextFieldSt
          {...register('password')}
          error={!!errors.password}
          helperText={errors?.password?.message}
          variant='standard'
          placeholder='Passwort'
          label='Passwort*'
          autoComplete='off'
          type='password'
        />
        <ButtonSt variant='contained' color='primary' type='submit'>
          {t('account.registration')}
        </ButtonSt>
        <TypographySt>
          Alle Felder, die mit einem Sternchen (*) gekennzeichnet sind, müssen
          bei der Anmeldung ausgefüllt werden.
        </TypographySt>
      </form>
    </WrapColSt>
  );
};
