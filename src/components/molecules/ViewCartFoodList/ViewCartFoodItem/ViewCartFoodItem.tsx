import React, { useState } from 'react';
import { Box, Grid, TextareaAutosize } from '@mui/material';

import { IFoodItem } from '@bookable24/store/oder/shop.types';

import {
  AddNotesActionsSt,
  AddNotesBodySt,
  AddNotesButtonSt,
  BoxAdjustFoodItemSt,
  BoxViewCartFoodItemSt,
  FoodNameSt,
  QuantityFoodItemSt,
} from './ViewCartFoodItem.styles';
import { BoxAdjustFoodItem } from '../../BoxAdjustFoodItem/BoxAdjustFoodItem';
import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
import {
  addRequireItemToCart,
  removeRequireItemFromCart,
} from '@bookable24/store/oder/bookingSlice';

export const ViewCartFoodItem = ({ item }: { item: IFoodItem }) => {
  const [openNotes, setOpenNotes] = useState(false);
  const { foodName, priceOfFood, quantity, foodId, require } = item;
  const [notes, setNotes] = useState(require || '');
  const dispatch = useAppDispatch();
  const {} = useAppSelector((state) => state.booking);

  return (
    <BoxViewCartFoodItemSt>
      <QuantityFoodItemSt>{quantity}</QuantityFoodItemSt>
      <Box
        sx={{
          paddingLeft: '20px',
          fontSize: '14px',
        }}
      >
        <Grid container>
          <Grid item xs={10}>
            <FoodNameSt>{foodName}</FoodNameSt>
          </Grid>
          <Grid item xs={2} textAlign='end'>
            {(quantity * priceOfFood).toFixed(2)} €
          </Grid>
        </Grid>
        <BoxAdjustFoodItemSt>
          <AddNotesButtonSt onClick={() => setOpenNotes(!openNotes)}>
            Anmerkung hinzufügen
          </AddNotesButtonSt>
          <BoxAdjustFoodItem item={item} />
        </BoxAdjustFoodItemSt>
      </Box>
      {openNotes && (
        <AddNotesBodySt>
          <TextareaAutosize
            value={notes}
            minRows={3}
            aria-label='empty textarea'
            style={{ width: '100%', maxWidth: '100%' }}
            onChange={(e) => setNotes(e.target.value)}
          />
          <AddNotesActionsSt>
            <AddNotesButtonSt
              onClick={() => {
                setOpenNotes(!openNotes);
                dispatch(
                  removeRequireItemFromCart({
                    addNotes: {
                      foodId,
                      require: '',
                    },
                  })
                );
              }}
            >
              Löschen
            </AddNotesButtonSt>
            <AddNotesButtonSt
              onClick={() => {
                setOpenNotes(!openNotes);

                dispatch(
                  addRequireItemToCart({
                    addNotes: {
                      foodId,
                      require: notes,
                    },
                  })
                );
              }}
            >
              Speichern
            </AddNotesButtonSt>
          </AddNotesActionsSt>
        </AddNotesBodySt>
      )}
    </BoxViewCartFoodItemSt>
  );
};
