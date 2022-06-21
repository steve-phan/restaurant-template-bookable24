import React from 'react';

import { restaurantInfos } from '@bookable24/RESTAURANT.CONFIG/RESTAURANT.CONFIG';

import { RestaurantInfo } from '../RestaurantInfo/RestaurantInfo';

import { GoogleMapSt } from './GoogleMap.styles';

const apiKey = process.env.GATSBY_GOOGLE_API_KEY || '';

export const GoogleMap = () => (
  <GoogleMapSt>
    <RestaurantInfo restaurantInfos={restaurantInfos} />
    <iframe
      width='100%'
      height='450'
      frameBorder='0'
      loading='lazy'
      allowFullScreen
      referrerPolicy='no-referrer-when-downgrade'
      src={`https://www.google.com/maps/embed/v1/place?q=Maison%2C%Tom%2C% Asian%2C%49.00843704223029%2C%208.372898137312657&key=${apiKey}&zoom=15`}
    ></iframe>
  </GoogleMapSt>
);
