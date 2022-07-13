import * as React from 'react';
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
import { toggleShowBasketModal } from '@bookable24/store/oder/oderSlice';

import Logo from '../../molecules/Logo';
import { NavbarMenu } from '../NavBarMenu/NavBarMenu';
import { routes } from '../routes';
import { AccountPoppper } from './AccountPopper/AccountPopper';
import { IconButtonSt, WrapHeaderButtonst } from './Header.styles';
import { BasketHeaderButton } from './BasketHeaderButton/BasketHeaderButton';

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
          <BasketHeaderButton />
          <AccountPoppper />
          <IconButton color='inherit' edge='end' onClick={handleDrawerToggle}>
            <Menu />
          </IconButton>
        </WrapHeaderButtonst>
        <BastketModal />

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
