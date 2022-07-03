import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton/IconButton';

import { IMobileToggle } from '@bookable24/components/DasBoadLayout/Header/Header.types';

import { TRoures } from '../routes';
import background from './background.jpg';
import { NavLinks } from './NavLinks';
import {
  DrawerSt,
  BackgroundImgSt,
  WrapCloseIconSt,
} from './NavBarMenu.styles';

export interface IMobileMenu extends IMobileToggle {
  isDesktop?: boolean;
  routes?: TRoures;
  isShop?: boolean;
}

export interface INavbarMenuprops {
  open?: boolean;
  handleDrawerToggle: () => void;
  routes: TRoures;
}

export const NavbarMenu = ({
  open,
  handleDrawerToggle,
  routes,
}: INavbarMenuprops) => {
  return (
    <>
      <DrawerSt
        variant='temporary'
        anchor='right'
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <WrapCloseIconSt>
          <IconButton color='inherit' edge='end' onClick={handleDrawerToggle}>
            <CloseIcon
              style={{
                color: 'white',
                fontSize: 30,
              }}
            />
          </IconButton>
        </WrapCloseIconSt>
        <BackgroundImgSt src={background} alt='Bookable24' />
        <NavLinks routes={routes} handleDrawerToggle={handleDrawerToggle} />
      </DrawerSt>
    </>
  );
};
