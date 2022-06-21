import * as React from 'react';
import { ThemeProvider as ThemeProviderSt } from 'styled-components';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';

// import { useAppSelector } from '@bookable24/store/hooks';
import { theme, globalStyles } from '@bookable24/theme';

import Footer from './Footer/Footer';
import Header from './Header';
import { BodySt } from './Layout.styles';
import { RootState } from 'src/store/store';

import './reset.css';
import { RestaurantName } from '@bookable24/RESTAURANT.CONFIG/RESTAURANT.CONFIG';

export const inputGlobalStyles = <GlobalStyles styles={globalStyles} />;

interface ILayoutProps {
  location?: Record<string, any>;
  children: JSX.Element | JSX.Element[];
  isShop?: boolean;
}

const Layout = ({ children, location, isShop }: ILayoutProps) => {
  // const { isShopLogin } = useAppSelector((state: RootState) => state.shop)

  return (
    <ThemeProvider theme={theme}>
      <ThemeProviderSt theme={theme}>
        <CssBaseline />
        {inputGlobalStyles}
        <Container
          style={{
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
          }}
          disableGutters
          maxWidth={false}
        >
          <Header
          // location={location}
          // isShopLogin={isShopLogin}
          // isShop={isShop}
          />
          <BodySt>{children}</BodySt>
          <Footer shopName={RestaurantName} />
        </Container>
      </ThemeProviderSt>
    </ThemeProvider>
  );
};

export default Layout;
