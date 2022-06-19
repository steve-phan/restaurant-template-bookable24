import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/icons-material/Menu';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { routes } from '../routes';
import Logo from '../../molecules/Logo';
import { CTAButtons, WrapLoginSt, DashBoardButtonSt } from './Header.styles';
import LangSelect from '../LangSelect';
import MobileMenu from '../NavLinks/MobileMenu';
import { NavLinks } from '../NavLinks/Navlinks';
import { heightNavbar } from '@bookable24/components/config';

interface IHeaderProps {
  isShopLogin?: boolean | undefined;
  location?: any;
  isShop?: boolean;
}

const Header: React.FC<IHeaderProps> = ({ isShopLogin, location, isShop }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { t } = useTranslation();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
        <Hidden mdDown>
          <NavLinks routes={routes} />

          {/* <WrapLoginSt>
            {!isShop && (
              <>
                {isShopLogin && !location?.pathname?.includes('/login') ? (
                  <DashBoardButtonSt to='/dashboard'>
                    {t('menu.DashBoard', 'DashBoard')}
                  </DashBoardButtonSt>
                ) : (
                  <CTAButtons to='/login'>
                    {t('account.login', 'Login')}
                  </CTAButtons>
                )}
              </>
            )}

            <LangSelect />
          </WrapLoginSt> */}
        </Hidden>
        <MobileMenu
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          routes={routes}
          isShop={isShop}
        />
        <Hidden mdUp>
          <div>
            {!isShop && (
              <>
                {isShopLogin && !location?.pathname?.includes('/login') && (
                  <DashBoardButtonSt to='/dashboard'>
                    {t('menu.DashBoard', 'DashBoard')}
                  </DashBoardButtonSt>
                )}
              </>
            )}
            <IconButton color='inherit' edge='end' onClick={handleDrawerToggle}>
              <Menu />
            </IconButton>
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
