import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as ThemeProviderSt } from 'styled-components';
import React, { ReactNode, useEffect } from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import CssBaseline from '@mui/material/CssBaseline';

import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
import { theme } from '@bookable24/theme';
import Loading from '@bookable24/components/molecules/Loading/Loading';

import SideBar from './SideBar';
import Header from './Header/Header';

import { inputGlobalStyles } from '../Layout/Layout';
import {
  WrapDashBoardSt,
  DashBoardContentSt,
  WrapContentSt,
} from './dashboard.styles';
import Footer from '../Layout/Footer/Footer';

const DashBoardLayout = ({
  children,
  location,
}: {
  children: ReactNode;
  location?: any;
}) => {
  const { navigate } = useI18next();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { isShopLogin, status } = useAppSelector((state) => state.shop);

  useEffect(() => {
    if (!isShopLogin && status === 'logout') {
      navigate('/login');
    }
  }, [status]);

  if (status !== 'login') {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <ThemeProviderSt theme={theme}>
        <CssBaseline />
        {inputGlobalStyles}
        <WrapDashBoardSt>
          <SideBar
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
          <DashBoardContentSt>
            <Header
              mobileOpen={mobileOpen}
              handleDrawerToggle={handleDrawerToggle}
            />
            <WrapContentSt>{children}</WrapContentSt>
            <Footer />
          </DashBoardContentSt>
        </WrapDashBoardSt>
      </ThemeProviderSt>
    </ThemeProvider>
  );
};

export default DashBoardLayout;
