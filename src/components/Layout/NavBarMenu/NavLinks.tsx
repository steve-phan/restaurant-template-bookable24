import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { ThemeOptions } from '@mui/material';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { LinkItemSt, NavLinksSt } from './NavLinks.styles';

export const NavLinks = ({ routes, handleDrawerToggle }: any) => {
  const theme = useTheme<ThemeOptions>();
  const { t } = useTranslation();
  return (
    <NavLinksSt>
      {routes.map((route: any, i: number) => (
        <LinkItemSt
          onClick={handleDrawerToggle}
          key={i}
          activeStyle={{
            backgroundColor: '#f5f5f5',
            color: theme.color.text,
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
          }}
          to={route.path}
        >
          <route.icon /> {t(`menu.${route.name}`, route.name)}
        </LinkItemSt>
      ))}
    </NavLinksSt>
  );
};
