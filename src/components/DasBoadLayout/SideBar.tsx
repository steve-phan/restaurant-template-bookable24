import React from 'react';
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';

import { routes } from './routes';
import { WrapSideBarSt } from './dashboard.styles';
import { IMobileToggle } from './Header/Header.types';
import MobileMenu from '../Layout/NavLinks/MobileMenu';

const SideBar = ({ mobileOpen, handleDrawerToggle }: IMobileToggle) => {
  return (
    <WrapSideBarSt>
      <MobileMenu
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        routes={routes}
      />

      <Hidden mdDown implementation='css'>
        <Drawer anchor='left' variant='permanent' open>
          <MobileMenu isDesktop routes={routes} />
        </Drawer>
      </Hidden>
    </WrapSideBarSt>
  );
};

export default SideBar;
