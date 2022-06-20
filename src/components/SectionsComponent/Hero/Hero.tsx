import React from 'react';

import {
  SectionContextSt,
  SectionWrapper,
} from '@bookable24/components/molecules/SectionContext/SectionContext.styles';
import { Grid } from '@mui/material';
import { DynamicImage } from '@bookable24/components/molecules/DynamicImage/DynamicImage';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { SectionContext } from '@bookable24/components/molecules/SectionContext/SectionContext';

import { heroInfo } from './hero.info';

const Hero = ({ img }: { img: any }) => {
  return (
    <SectionWrapper>
      <Grid
        container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}
        >
          <DynamicImage dataImg={img} />
        </Grid>
        <Grid item xs={12}>
          <SectionContext
            header={heroInfo.header}
            subHeader={heroInfo.subHeader}
            description={heroInfo.description}
            background='transparent'
          />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default Hero;
