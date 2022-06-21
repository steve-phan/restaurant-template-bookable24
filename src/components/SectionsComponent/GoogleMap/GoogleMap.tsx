import React from 'react';

import { GoogleMapSt } from './GoogleMap.styles';

const apiKey = process.env.GATSBY_GOOGLE_API_KEY || '';
console.log({ apiKey });
export const GoogleMap = () => (
  <GoogleMapSt>
    <iframe
      width='100%'
      height='450'
      frameBorder='0'
      loading='lazy'
      allowFullScreen
      referrerPolicy='no-referrer-when-downgrade'
      src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Yorckstra%C3%9Fe%2C%20Karlsruhe%2C%20%C4%90%E1%BB%A9c&zoom=15`}
    ></iframe>
  </GoogleMapSt>
);
