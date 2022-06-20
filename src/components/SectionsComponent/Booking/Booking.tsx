import React from 'react';

import { SectionWrapper } from '@bookable24/components/molecules/SectionContext/SectionContext.styles';
import { Grid } from '@mui/material';
import { DynamicImage } from '@bookable24/components/molecules/DynamicImage/DynamicImage';
import { SectionContext } from '@bookable24/components/molecules/SectionContext/SectionContext';

import { bookingInfo } from './booking.info';

const Booking = ({ img }: { img: any }) => {
  return (
    <SectionWrapper>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Grid
          order={0}
          item
          xs={12}
          md={6}
          sx={(theme) => ({
            [theme.breakpoints.up('md')]: {
              height: '100%',
            },
          })}
        >
          <DynamicImage dataImg={img} />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          //   sx={{
          //     height: '100%',
          //     background: 'black',
          //   }}
          sx={(theme) => ({
            background: 'black',
            [theme.breakpoints.up('md')]: {
              height: '100%',
            },
          })}
        >
          <SectionContext
            smallHeader={bookingInfo.smallHeader}
            description={bookingInfo.description}
            ctaButton={bookingInfo.CTAbutton}
            background='black'
          />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default Booking;
