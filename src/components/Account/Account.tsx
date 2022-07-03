import React, { useEffect } from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { auth } from '@bookable24/firebase';
import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';

import Loading from '../molecules/Loading/Loading';
import {
  AccountHeadingSt,
  AccountInfoSt,
  AccountNoticeSt,
  TextFieldSt,
  TypographySt,
  WrapColSt,
} from './Account.styles';
import { ChangePassword } from './ChangePassword/ChangePassword';
import { signOutAccount } from '@bookable24/store/account/account.Thunks';

type Tmode = 'resetPassword' | 'recoverEmail' | 'verifyEmail';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 450,
  bgcolor: 'background.paper',
  border: '2px solid #8b8989',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export const Account = () => {
  const { navigate } = useI18next();
  const dispatch = useAppDispatch();
  //Modal State
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    isUserLogin,
    isLoading,
    isUserChangePasswordSuccess,
    userInfo: { email, fullName },
  } = useAppSelector((state) => state.account);

  useEffect(() => {
    if (isUserChangePasswordSuccess) {
      alert('Your Password was changed');
      navigate('/account/signin');
    }
    if (!isLoading && !isUserLogin && !isUserChangePasswordSuccess) {
      navigate('/account/signin');
    }
  }, [isLoading, isUserLogin, isUserChangePasswordSuccess]);

  return (
    <WrapColSt>
      {(isLoading || !isUserLogin) && <Loading />}
      <AccountHeadingSt>Personenbezogene Daten</AccountHeadingSt>
      <TypographySt>Name</TypographySt>
      <TextFieldSt value={fullName} disabled />
      <TypographySt>E-Mail-Adresse</TypographySt>
      <TextFieldSt value={email} disabled />
      <AccountNoticeSt>
        <InfoOutlinedIcon fontSize='small' />
        <Button
          size='small'
          style={{
            textTransform: 'none',
          }}
          onClick={handleOpen}
        >
          Passwort ändern
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <ChangePassword />
          </Box>
        </Modal>
      </AccountNoticeSt>
      <AccountNoticeSt>
        <InfoOutlinedIcon fontSize='small' />
        <Button
          size='small'
          style={{
            textTransform: 'none',
          }}
          onClick={() => {
            dispatch(signOutAccount());
          }}
        >
          Sign-Out Account
        </Button>
      </AccountNoticeSt>
    </WrapColSt>
  );
};
