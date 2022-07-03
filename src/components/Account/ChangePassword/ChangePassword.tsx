import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';

import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
import {
  signInAccount,
  userChangePassword,
} from '@bookable24/store/account/account.Thunks';
import Loading from '@bookable24/components/molecules/Loading/Loading';
import { setAccountLoading } from '@bookable24/store/account/accountSlice';

import {
  WrapColSt,
  TextFieldSt,
  TypographySt,
  AccountHeadingSt,
  AccountInfoSt,
} from '../Account.styles';
import { getChangePasswordSchema } from '../utils';
import { ButtonSt } from '../Account.styles';

interface IChangePasswordProps {
  confirmpassword: string;
  password: string;
}

export const ChangePassword = () => {
  const { t, navigate } = useI18next();
  const dispatch = useAppDispatch();

  const schema = getChangePasswordSchema(t);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, dirtyFields },
  } = useForm<IChangePasswordProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      password: '',
      confirmpassword: '',
    },
  });

  useEffect(() => {
    if (dirtyFields.confirmpassword && !getValues().confirmpassword) {
      console.log('password ---- ===');
      handleSubmit(onSubmit)();
    }
  }, [
    dirtyFields.confirmpassword,
    getValues().password,
    getValues().confirmpassword,
  ]);

  const onSubmit = (data: IChangePasswordProps) => {
    const { password, confirmpassword } = data;
    if (password !== confirmpassword) {
      console.log('Submit Change Password');
      return;
    }
    dispatch(userChangePassword(data.password));
    // dispatch(signInAccount({ email: data.email, password: data.password }));
  };

  return (
    <WrapColSt>
      <AccountHeadingSt> Passwort ändern</AccountHeadingSt>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFieldSt
          {...register('password')}
          error={!!errors.password}
          helperText={errors?.password?.message}
          variant='standard'
          placeholder='Password'
          label='Password*'
          autoComplete='off'
          type='password'
        />
        <TextFieldSt
          {...register('confirmpassword')}
          error={!!errors.confirmpassword}
          helperText={errors?.confirmpassword?.message}
          variant='standard'
          placeholder='Confirm Password'
          label='Confirm Password*'
          autoComplete='off'
          type='password'
        />

        <ButtonSt
          variant='contained'
          color='primary'
          type='submit'
          // onClick={() => {
          //   console.log('is clicking');
          //   handleSubmit(onSubmit)();
          // }}
        >
          Submit
        </ButtonSt>
      </form>
    </WrapColSt>
  );
};
