import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';

import { useAppDispatch } from '@bookable24/store/hooks';
import { userChangePassword } from '@bookable24/store/account/account.Thunks';

import { WrapColSt, TextFieldSt, AccountHeadingSt } from '../Account.styles';
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
    if (
      dirtyFields.confirmpassword &&
      getValues()?.confirmpassword?.length <= 2
    ) {
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
      alert('Your Confirm password does not match');
      return;
    }
    dispatch(userChangePassword(data.password));
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

        <ButtonSt variant='contained' color='primary' type='submit'>
          Submit
        </ButtonSt>
      </form>
    </WrapColSt>
  );
};
