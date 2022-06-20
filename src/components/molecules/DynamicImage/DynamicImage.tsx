import React from 'react';
import {
  getImage,
  GatsbyImage,
  IGatsbyImageData,
  ImageDataLike,
} from 'gatsby-plugin-image';

export interface TDynamicImageProps {
  dataImg: ImageDataLike;
  alt?: string;
}

export const DynamicImage = ({
  dataImg,
  alt = 'bookable24.de Booking Online System',
}: TDynamicImageProps) => {
  const image = getImage(dataImg) as IGatsbyImageData;
  return (
    <GatsbyImage
      image={image}
      alt={alt}
      style={{
        height: '100%',
        filter: 'brightness(0.5)',
      }}
    />
  );
};
