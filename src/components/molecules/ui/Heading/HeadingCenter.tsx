import React from 'react';
import { HeadingCenterSt } from './Heading.styles';

export const HeadingCenter = ({ title }: { title: string }) => {
  return <HeadingCenterSt>{title}</HeadingCenterSt>;
};
