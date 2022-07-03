import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/icons-material/Menu';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { routes } from '../routes';
import Logo from '../../molecules/Logo';
import LangSelect from '../LangSelect';
import { NavbarMenu } from '../NavLinks/NavBarMenu';
import { heightNavbar } from '@bookable24/components/config';

interface IHeaderProps {
  isShopLogin?: boolean | undefined;
  location?: any;
  isShop?: boolean;
}

const Header: React.FC<IHeaderProps> = ({ isShopLogin, location, isShop }) => {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();
  const handleDrawerToggle = () => {
    setOpen(!open);
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
        <IconButton color='inherit' edge='end' onClick={handleDrawerToggle}>
          <Menu />
        </IconButton>
        <NavbarMenu
          handleDrawerToggle={handleDrawerToggle}
          open={open}
          routes={routes}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
