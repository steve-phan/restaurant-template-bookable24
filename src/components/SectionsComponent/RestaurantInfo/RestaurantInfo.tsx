import React from 'react';

import { Grid } from '@mui/material';

import { TRestaurantInfos } from '@bookable24/RESTAURANT.CONFIG/restaurant.types';
import { BoxWithIcon } from '@bookable24/components/molecules/BoxWithIcon/BoxWithIcon';

export const RestaurantInfo = ({
  restaurantInfos,
}: {
  restaurantInfos: TRestaurantInfos;
}) => {
  return (
    <Grid
      container
      sx={{
        marginBottom: '30px',
      }}
    >
      {Object.values(restaurantInfos).map((restaurantInfo, index) => {
        return (
          <Grid item xs={12} md={4} key={index}>
            <BoxWithIcon boxInfo={restaurantInfo} />
          </Grid>
        );
      })}
    </Grid>
  );
};
