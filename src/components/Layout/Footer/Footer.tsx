import React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'gatsby-plugin-react-i18next';
import { FooterSt } from './Footer.styles';

const Footer = ({ shopName }: { shopName: string }) => {
  return (
    <FooterSt>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Link to='/'>
            @ {new Date().getFullYear()} {shopName}
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link to='/privacy'>Privacy</Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link to='/impressum'>Impressum</Link>
        </Grid>
      </Grid>
    </FooterSt>
  );
};

export default Footer;
