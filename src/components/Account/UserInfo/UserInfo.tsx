import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';

import { useAppDispatch } from '@bookable24/store/hooks';
import {
  updateUserInfo,
  userChangePassword,
} from '@bookable24/store/account/account.Thunks';

import { WrapColSt, TextFieldSt, AccountHeadingSt } from '../Account.styles';
import { getAddressSchema } from '../utils';
import { ButtonSt } from '../Account.styles';
import { IAddress } from '@bookable24/store/account/account.types';

interface IChangePasswordProps {
  confirmpassword: string;
  password: string;
}

export const UserInfo = () => {
  const { t, navigate } = useI18next();
  const dispatch = useAppDispatch();

  const schema = getAddressSchema(t);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, dirtyFields },
  } = useForm<IAddress>({
    resolver: yupResolver(schema),
    defaultValues: {
      street: '',
      city: '',
      // houseNumber: 0,
      // postCode: 0,
      // phone: 0,
    },
  });

  //   useEffect(() => {
  //     if (
  //       dirtyFields.confirmpassword &&
  //       getValues()?.confirmpassword?.length <= 2
  //     ) {
  //       handleSubmit(onSubmit)();
  //     }
  //   }, [
  //     dirtyFields.confirmpassword,
  //     getValues().password,
  //     getValues().confirmpassword,
  //   ]);

  const onSubmit = (data: IAddress) => {
    console.log('submit addresser');
    dispatch(updateUserInfo(data));
  };

  return (
    <WrapColSt>
      <AccountHeadingSt>Lieferadresse</AccountHeadingSt>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFieldSt
          {...register('phone')}
          error={!!errors.phone}
          helperText={errors?.phone?.message}
          variant='standard'
          placeholder='Phone Nummer'
          label='Phone*'
          autoComplete='off'
          type='text'
        />
        <TextFieldSt
          {...register('street')}
          error={!!errors.street}
          helperText={errors?.street?.message}
          variant='standard'
          placeholder='Street'
          label='Street*'
          autoComplete='off'
          type='text'
        />
        <TextFieldSt
          {...register('houseNumber')}
          error={!!errors.houseNumber}
          helperText={errors?.houseNumber?.message}
          variant='standard'
          placeholder='House Number'
          label='House Number*'
          autoComplete='off'
          type='text'
        />
        <TextFieldSt
          {...register('postCode')}
          error={!!errors.postCode}
          helperText={errors?.postCode?.message}
          variant='standard'
          placeholder='Post Code'
          label='Post Code*'
          autoComplete='off'
          type='text'
        />
        <TextFieldSt
          {...register('city')}
          error={!!errors.city}
          helperText={errors?.city?.message}
          variant='standard'
          placeholder='City'
          label='City*'
          autoComplete='off'
          type='text'
        />

        <ButtonSt variant='contained' color='primary' type='submit'>
          Submit
        </ButtonSt>
      </form>
    </WrapColSt>
  );
};
