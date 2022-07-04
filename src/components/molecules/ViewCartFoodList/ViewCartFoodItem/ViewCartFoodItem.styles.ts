import { styled } from '@mui/material/styles';

export const BoxViewCartFoodItemSt = styled('div')(({ theme }) => ({
  position: 'relative',
}));

export const QuantityFoodItemSt = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  fontSize: 14,
}));

export const BoxAdjustFoodItemSt = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',

  paddingTop: 8,
}));

export const FoodNameSt = styled('span')(({ theme }) => ({
  fontFamily: 'Work Sans,sans-serif',
  fontWeight: 700,
}));

//AddNoteS Section

export const AddNotesSt = styled('div')(({ theme }) => ({}));

export const AddNotesButtonSt = styled('div')(({ theme }) => ({
  fontSize: 14,
  fontFamily: 'Work Sans,sans-serif',
  color: theme.color.secondary,
  textDecoration: 'underline',
  padding: '0 4px',

  ':hover': {
    cursor: 'pointer',
  },
}));

export const AddNotesBodySt = styled('div')(({ theme }) => ({
  marginTop: 8,
  paddingLeft: 16,
  width: '100%',
}));

export const AddNotesActionsSt = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
}));
