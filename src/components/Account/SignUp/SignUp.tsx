import React, { useRef, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useI18next } from 'gatsby-plugin-react-i18next';

import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
// import { setCustomerInfo, setCustomerValidInfo, setCustomerSubmit } from 'src/store/shop/bookingSlice';
// import { IInfoUserProps } from 'src/store/shop/shop.types';

import { getSchema } from '../utils';
import {
  AccountHeadingSt,
  ButtonSt,
  TextFieldSt,
  TypographySt,
  WrapColSt,
} from '../Account.styles';
import { createAccount } from '@bookable24/store/account/account.Thunks';

interface ISignUpProps {
  fullname: string;
  email: string;
  password: string;
  phone: string;
}

export const SignUp = () => {
  const { t } = useI18next();
  const dispatch = useAppDispatch();
  // const { isValidInfo, isSubmitted, firstName, lastName, phone, email, require } = useAppSelector((state) => state.booking);

  const schema = getSchema(t);

  const {
    control,
    register,
    getValues,
    handleSubmit,
    watch,
    formState: { errors, isValid, dirtyFields },
  } = useForm<ISignUpProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      fullname: '',
      password: '',
      email: '',
      phone: '',
    },
  });

  // useEffect(() => {
  //   if (isSubmitted === 'pending' || isValidInfo) {
  //     handleSubmit(onSubmit)();
  //   }
  //   return () => {
  //     dispatch(setCustomerSubmit('fail'));
  //   };
  // }, [isSubmitted, isValidInfo]);

  const dirtyLength = Object.keys(dirtyFields).map((field) => !!field).length;

  // useEffect(() => {
  //   if (isValid || dirtyLength >= 4) {
  //     handleSubmit(onSubmit)();
  //     dispatch(setCustomerValidInfo(true));
  //   }
  //   // const errorsLength = Object.keys(errors).map(field => !!field).length
  // }, [watch('email'), watch('firstName'), watch('lastName'), watch('phone'), watch('require'), isValid]);
  const onSubmit = (data: ISignUpProps) => {
    // dispatch(setCustomerInfo(data));
    console.log('submiting', data);
    dispatch(createAccount({ email: data.email, password: data.password }));
  };
  return (
    <WrapColSt>
      <AccountHeadingSt> {t('account.register')} </AccountHeadingSt>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFieldSt
          {...register('fullname')}
          error={!!errors.fullname}
          helperText={errors?.fullname?.message}
          variant='filled'
          placeholder='VollName'
          label='Vollname*'
          autoComplete='off'
        />

        <TextFieldSt
          {...register('email')}
          error={!!errors.email}
          helperText={errors?.email?.message}
          variant='filled'
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
                variant='filled'
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
          variant='filled'
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
