import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton/IconButton';

import { TRoures } from '../routes';
import background from './background.jpg';
import { NavLinks } from './NavLinks';
import {
  NavbarMenuSt,
  DrawerSt,
  BackgroundImgSt,
  WrapCloseIconSt,
  NavbarMenuHeaderSt,
  NavbarMenuBodyrSt,
  AccountButtonGroupSt,
} from './NavBarMenu.styles';
import { AccountLinks } from './AccountLinks/AccountLinks';
import { CTAButton } from '@bookable24/components/molecules/LinkButtons/InternalLink';
import { useTranslation } from 'gatsby-plugin-react-i18next';

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
  const { t } = useTranslation();

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
        <NavbarMenuSt id='navbar-menu-wrapper'>
          <BackgroundImgSt src={background} alt='Bookable24' />
          <NavbarMenuHeaderSt>
            <AccountLinks handleDrawerToggle={handleDrawerToggle} />
            <WrapCloseIconSt>
              <IconButton
                color='inherit'
                edge='end'
                onClick={handleDrawerToggle}
              >
                <CloseIcon />
              </IconButton>
            </WrapCloseIconSt>
          </NavbarMenuHeaderSt>
          <NavbarMenuBodyrSt>
            <NavLinks routes={routes} handleDrawerToggle={handleDrawerToggle} />
          </NavbarMenuBodyrSt>
        </NavbarMenuSt>
      </DrawerSt>
    </>
  );
};
