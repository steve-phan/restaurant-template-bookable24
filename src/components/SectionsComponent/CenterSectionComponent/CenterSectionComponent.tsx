import React from 'react';

import {
  SectionContextSt,
  SectionWrapper,
} from '@bookable24/components/molecules/SectionContext/SectionContext.styles';
import { Grid } from '@mui/material';
import { DynamicImage } from '@bookable24/components/molecules/DynamicImage/DynamicImage';
import { SectionContext } from '@bookable24/components/molecules/SectionContext/SectionContext';
import { ImageDataLike } from 'gatsby-plugin-image';

export interface IButtons {
  text: string;
  path?: string;
  externalLink?: string;
}

export interface IComponentInfoProps {
  header?: string;
  subHeader?: string;
  smallHeader?: string;
  description: string;
  CTAButton?: IButtons;
  buttons?: {
    buttonLeft: IButtons;
    buttonRight: IButtons;
  };
}

export interface ICenterSectionComponentProps {
  img: ImageDataLike;
  componentInfo: IComponentInfoProps;
}

export const CenterSectionComponent = ({
  img,
  componentInfo,
}: ICenterSectionComponentProps) => {
  const { header, subHeader, description, buttons } = componentInfo;

  return (
    <SectionWrapper>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          position: 'relative',
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
            header={header}
            subHeader={subHeader}
            description={description}
            background='transparent'
            buttons={buttons}
          />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};
