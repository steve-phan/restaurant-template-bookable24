import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
import {
  updateUserInfo,
  userChangePassword,
} from '@bookable24/store/account/account.Thunks';

import {
  WrapColSt,
  TextFieldSt,
  AccountHeadingSt,
  AccountInfoSt,
  AccountBodyTextRightSt,
} from '../Account.styles';
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
  const [edit, setEdit] = useState(false);
  const {
    userInfo: {
      address: { phone, street, houseNumber, city, postCode },
    },
  } = useAppSelector((state) => state.account);

  // const { phone, street, houseNumber, city, postCode } = address;
  const schema = getAddressSchema(t);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, dirtyFields },
  } = useForm<IAddress>({
    resolver: yupResolver(schema),
    defaultValues: {
      street,
      city,
      houseNumber,
      postCode,
      phone,
    },
  });

  const onSubmit = (data: IAddress) => {
    setEdit(!edit);
    dispatch(updateUserInfo(data));
  };

  return (
    <WrapColSt>
      <AccountHeadingSt>Lieferadresse</AccountHeadingSt>
      <AccountBodyTextRightSt>
        Verändern Lieferadresse?
        <EditOutlinedIcon
          style={{
            cursor: 'pointer',
          }}
          onClick={() => setEdit(!edit)}
        />
      </AccountBodyTextRightSt>
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
          disabled={!edit}
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
          disabled={!edit}
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
          disabled={!edit}
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
          disabled={!edit}
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
          disabled={!edit}
        />

        {edit && (
          <ButtonSt
            // disabled={!edit}
            variant='contained'
            color='primary'
            type='submit'
          >
            Update Addresse
          </ButtonSt>
        )}
      </form>
    </WrapColSt>
  );
};
