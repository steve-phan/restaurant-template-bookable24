import React from 'react';

import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { EmptyViewCartSt, EmptyViewCartNoticeSt } from './EmptyViewCart.styles';
import { HeadingCenter } from '../ui/Heading/HeadingCenter';

export const EmptyViewCart = () => {
  return (
    <EmptyViewCartSt>
      <LocalMallOutlinedIcon fontSize='large' />
      <EmptyViewCartNoticeSt>
        <HeadingCenter title=' Fill your basket' />
        Your basket is empty
      </EmptyViewCartNoticeSt>
    </EmptyViewCartSt>
  );
};
