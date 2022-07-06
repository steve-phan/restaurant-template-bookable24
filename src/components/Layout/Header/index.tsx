import * as React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/icons-material/Menu';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { heightNavbar } from '@bookable24/components/config';
import { BastketModal } from '@bookable24/components/molecules/BoxViewCart/BastketModal';
import { setOpenNavbarMenu } from '@bookable24/store/account/accountSlice';
import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
import { toggleShowBasketModal } from '@bookable24/store/oder/bookingSlice';
import Logo from '../../molecules/Logo';
import { NavbarMenu } from '../NavBarMenu/NavBarMenu';
import { routes } from '../routes';
import {
  AccountPopperst,
  IconButtonSt,
  PopperSignInButtonSt,
  PopperSignUpButtonSt,
  WrapHeaderButtonst,
} from './Header.styles';
import Popover from '@mui/material/Popover';

interface IHeaderProps {
  isShopLogin?: boolean | undefined;
  location?: any;
  isShop?: boolean;
}

const Header: React.FC<IHeaderProps> = ({ isShopLogin, location, isShop }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { isOpenNavbarMenu } = useAppSelector((state) => state.account);
  const handleDrawerToggle = () => {
    dispatch(setOpenNavbarMenu());
  };
  //account
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
    <AppBar position='fixed' color='default'>
      <Toolbar
        style={{
          justifyContent: 'space-between',
          height: heightNavbar,
          minHeight: heightNavbar,
        }}
      >
        <Logo />
        <WrapHeaderButtonst>
          <IconButtonSt
            onClick={() => {
              dispatch(toggleShowBasketModal());
            }}
          >
            <ShoppingBagIcon />
          </IconButtonSt>
          <IconButtonSt onClick={handleClick}>
            <AccountCircleIcon />
          </IconButtonSt>
          <IconButton color='inherit' edge='end' onClick={handleDrawerToggle}>
            <Menu />
          </IconButton>
        </WrapHeaderButtonst>
        <BastketModal />

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
        <NavbarMenu
          handleDrawerToggle={handleDrawerToggle}
          open={isOpenNavbarMenu}
          routes={routes}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
