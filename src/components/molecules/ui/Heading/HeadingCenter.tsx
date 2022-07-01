import React from 'react';
import Typography from '@mui/material/Typography';
import { HeadingCenterSt } from './Heading.styles';

export const HeadingCenter = ({ title }: { title: string }) => {
  return <HeadingCenterSt>{title}</HeadingCenterSt>;
};
