import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { WrapLogoSt } from './logo.styles';

const Logo = () => {
  return (
    <WrapLogoSt to='/'>
      <StaticImage
        width={40}
        height={40}
        src='./newlogo.png'
        alt='Bookable24.de Online Booking System'
      />
      <span>Bookable24</span>
    </WrapLogoSt>
  );
};

export default Logo;
