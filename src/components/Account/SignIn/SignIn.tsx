import React, { useRef, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// import { useAppDispatch, useAppSelector } from 'src/store/hooks';
// import { setCustomerInfo, setCustomerValidInfo, setCustomerSubmit } from 'src/store/shop/bookingSlice';

import { WrapColSt, TextFieldSt, TypographySt } from '../Account.styles';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { getSignSchema } from '../utils';
import { ButtonSt } from '../Account.styles';
import { useAppDispatch } from '@bookable24/store/hooks';

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

  const onSubmit = (data: ISignInProps) => {
    // dispatch(setCustomerInfo(data));
    console.log('submiting');
  };
  return (
    <WrapColSt>
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
        />

        <ButtonSt variant='contained' color='primary'>
          Sign In
        </ButtonSt>
        <TypographySt>Alle Felder, die mit einem Sternchen (*) gekennzeichnet sind, müssen bei der Anmeldung ausgefüllt werden.</TypographySt>
      </form>
    </WrapColSt>
  );
};
