import React from 'react';

import { SectionWrapper } from '@bookable24/components/molecules/SectionContext/SectionContext.styles';
import { Grid } from '@mui/material';
import { DynamicImage } from '@bookable24/components/molecules/DynamicImage/DynamicImage';
import { SectionContext } from '@bookable24/components/molecules/SectionContext/SectionContext';
import { ImageDataLike } from 'gatsby-plugin-image';

export interface TOneSideSectionComponentProps {
  img: ImageDataLike;
  contextPosition: 'left' | 'right';
  componentInfo: {
    smallHeader: string;
    description: string;
    CTAButton: string;
  };
}

export const OneSideSectionComponent = ({
  img,
  contextPosition,
  componentInfo,
}: TOneSideSectionComponentProps) => {
  const { smallHeader, description, CTAButton } = componentInfo;
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
          order={contextPosition === 'left' ? 0 : 1}
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
          sx={(theme) => ({
            background: 'black',
            [theme.breakpoints.up('md')]: {
              height: '100%',
            },
          })}
        >
          <SectionContext
            smallHeader={smallHeader}
            description={description}
            ctaButton={CTAButton}
            background='black'
          />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};
