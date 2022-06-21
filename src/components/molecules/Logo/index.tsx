import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { WrapLogoSt } from './logo.styles';

const Logo = ({ shopName }: { shopName?: string }) => {
  return (
    <WrapLogoSt to='/'>
      <StaticImage
        width={40}
        height={40}
        src='../../../images/maisontomlogo.png'
        alt={`${shopName} Online Booking System Bookable24.de `}
      />
      {!!shopName && <span>{shopName}</span>}
    </WrapLogoSt>
  );
};

export default Logo;
