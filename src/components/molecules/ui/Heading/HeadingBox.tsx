import React from 'react';
import Typography from '@mui/material/Typography';

export const HeadingBox = ({ title }: { title: string }) => {
  return (
    <Typography sx={{ ml: 2, flex: 1 }} variant='body1' component='div'>
      {title}
    </Typography>
  );
};
