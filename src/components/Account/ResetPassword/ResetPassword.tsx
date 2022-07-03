import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth';
import { useQueryParam } from 'use-query-params';

import Layout from '@bookable24/components/Layout/Layout';
import Loading from '@bookable24/components/molecules/Loading/Loading';
import { auth } from '@bookable24/firebase';
import { useAppSelector } from '@bookable24/store/hooks';

import { ButtonSt, ColumnCenterBoxSt, InfoBoxSt } from './ResetPassword.styles';
import { WrapColSt } from '../Account.styles';

const ariaLabel = { 'aria-label': 'description' };
type ToobCode = string;

export const ResetPassword = () => {
  const { navigate } = useI18next();
  const mode = useQueryParam('mode');
  const oobCode = useQueryParam('oobCode') as unknown as ToobCode;
  const [loading, setLoading] = useState(true);
  const [success, setSccess] = useState(false);
  const [newPassowrd, setNewpassword] = useState('');
  const { isUserLogin, isLoading } = useAppSelector((state) => state.account);

  useEffect(() => {
    mode[0] === 'resetPassword' && handleResetPassword();
  }, []);

  if (mode[0] !== 'resetPassword') {
    if (typeof window !== 'undefined') {
      //TODO: need a notice
      alert('The link is not valid');
      navigate('/');
    }
  }

  const handleResetPassword = async () => {
    try {
      const email = await verifyPasswordResetCode(auth, oobCode[0]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (typeof window !== 'undefined') {
        alert('The link is not valid');
        navigate('/');
      }
    }
  };

  const handleSetNewPasssword = async () => {
    try {
      await confirmPasswordReset(auth, oobCode[0], newPassowrd);
      setSccess(true);
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <WrapColSt>
      {isLoading && <Loading />}
      {!success ? (
        <ColumnCenterBoxSt>
          <InfoBoxSt>
            <Typography variant='h5'>Passwort ändern</Typography>
            <Typography variant='body2'>
              Bitte geben Sie zweimal Ihr neues Passwort ein und klicken Sie
              dann auf Passwort ändern.
            </Typography>
          </InfoBoxSt>
          <TextField
            size='small'
            placeholder='Your new Password'
            inputProps={ariaLabel}
            value={newPassowrd}
            onChange={(e) => setNewpassword(e.target.value)}
          />
          <ButtonSt variant='contained' onClick={() => handleSetNewPasssword()}>
            Submit
          </ButtonSt>
        </ColumnCenterBoxSt>
      ) : (
        <ColumnCenterBoxSt>
          <InfoBoxSt>
            <Typography variant='body1'>
              Herzlichen Glückwunsch, Ihr Passwort wurde erfolgreich geändert.
              Klicken Sie
              <strong>
                <Link to='/account/signin'>hier</Link>
              </strong>
              , um sich einzuloggen
            </Typography>
          </InfoBoxSt>
        </ColumnCenterBoxSt>
      )}
    </WrapColSt>
  );
};
