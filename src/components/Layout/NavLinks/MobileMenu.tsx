import React from 'react';
import Hidden from '@mui/material/Hidden';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
// import { signOut } from 'firebase/auth';

import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
// import { setShopLogout } from '@bookable24/store/shop/shopSlice';
// import { auth } from 'src/firebase';

import LangSelect from '../LangSelect';
import {
  WrapLoginMobileSt,
  DrawerSt,
  CTAButtonAccountSt,
  BackgroundImgSt,
} from './NavLinks.styles';
import { MobileNavLinks } from './MobileNavLink';
import background from './background.jpg';
import { IMobileToggle } from '@bookable24/components/DasBoadLayout/Header/Header.types';

export interface IMobileMenu extends IMobileToggle {
  isDesktop?: boolean;
  routes?: any;
  isShop?: boolean;
}

const MobileMenu = ({
  isDesktop,
  mobileOpen,
  handleDrawerToggle,
  routes,
  isShop,
}: IMobileMenu) => {
  const { t } = useTranslation();
  const { navigate } = useI18next();
  const dispatch = useAppDispatch();
  // const { isShopLogin } = useAppSelector((state) => state.shop);

  return (
    <>
      <Hidden mdUp implementation='css'>
        <DrawerSt
          variant='temporary'
          anchor='right'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <BackgroundImgSt src={background} alt='Bookable24' />
          {/* <WrapLoginMobileSt>
            {!isShop && (
              <CTAButtonAccountSt
                onClick={async () => {
                  try {
                    if (isShopLogin) {
                      // await signOut(auth);
                      dispatch(setShopLogout());
                    }
                    navigate('/login');
                  } catch (error) {
                    alert('Try Again');
                  }
                }}
              >
                {isShopLogin
                  ? t('account.logout', 'Logout')
                  : t('account.login', 'Login')}
              </CTAButtonAccountSt>
            )}
            <LangSelect />
          </WrapLoginMobileSt> */}
          <MobileNavLinks
            routes={routes}
            handleDrawerToggle={handleDrawerToggle}
          />
        </DrawerSt>
      </Hidden>
      {isDesktop && (
        <>
          <BackgroundImgSt src={background} alt='Bookable24' />

          {/* <BackgroundSt /> */}
          {/* <WrapLoginMobileSt>
            <CTAButtonAccountSt
              onClick={async () => {
                try {
                  if (isShopLogin) {
                    // await signOut(auth);
                    dispatch(setShopLogout());
                  }
                  navigate('/login');
                } catch (error) {
                  alert('Try Again');
                }
              }}
            >
              {isShopLogin
                ? t('account.logout', 'Logout')
                : t('account.login', 'Login')}
            </CTAButtonAccountSt>
            <LangSelect />
          </WrapLoginMobileSt> */}
          <MobileNavLinks
            handleDrawerToggle={handleDrawerToggle}
            routes={routes}
          />
        </>
      )}
    </>
  );
};

export default MobileMenu;
