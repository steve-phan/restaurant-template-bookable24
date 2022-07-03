import { RowSt } from '@bookable24/components/molecules/ui/Container/Row';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';

export const OderSummary = ({
  sumPrices,
  sumQuantities,
}: {
  sumPrices: number;
  sumQuantities: number;
}) => {
  return (
    <Grid container bgcolor='InfoBackground'>
      <RowSt>
        <span>Zwischensumme</span>
        <span>{sumPrices}</span>
      </RowSt>
      <RowSt>
        <span>Lieferkosten</span>
        <span>Kostenlos</span>
      </RowSt>
    </Grid>
  );
};
