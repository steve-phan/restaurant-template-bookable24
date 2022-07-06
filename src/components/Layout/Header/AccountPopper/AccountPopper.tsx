import * as React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Popover from '@mui/material/Popover';
import { useI18next } from 'gatsby-plugin-react-i18next';

import { useAppSelector } from '@bookable24/store/hooks';

import { IconButtonSt } from '../Header.styles';
import {
  AccountPopperst,
  PopperSignInButtonSt,
  PopperSignUpButtonSt,
} from './AccountPopper.styles';

export const AccountPoppper = () => {
  const { navigate } = useI18next();

  const { isUserLogin } = useAppSelector((state) => state.account);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <IconButtonSt
        onClick={(e) => {
          if (!isUserLogin) {
            handleClick(e);
          } else {
            navigate('/account');
          }
        }}
      >
        <AccountCircleIcon />
      </IconButtonSt>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        sx={{
          top: 10,
          right: 60,
        }}
      >
        <AccountPopperst>
          <PopperSignInButtonSt to='/account/signin'>
            Einloggen
          </PopperSignInButtonSt>
          <PopperSignUpButtonSt to='/account/signup'>
            Registrieren
          </PopperSignUpButtonSt>
        </AccountPopperst>
      </Popover>
    </>
  );
};
