import React from 'react';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Hidden from '@mui/material/Hidden';
import Menu from '@mui/icons-material/Menu';

import Logo from '@bookable24/components/molecules/Logo';

import { AppBarSt } from './Header.styles';
import LangSelect from '../../Layout/LangSelect';
import { IMobileToggle } from './Header.types';

export default function Header({
  mobileOpen,
  handleDrawerToggle,
}: IMobileToggle) {
  return (
    <AppBarSt position='fixed' color='default'>
      <Toolbar
        style={{
          justifyContent: 'space-between',
        }}
      >
        <Logo />
        <Hidden mdUp implementation='css'>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <LangSelect />
        </Hidden>
      </Toolbar>
    </AppBarSt>
  );
}
