import * as React from 'react';
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from 'gatsby-plugin-image';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import CloseIcon from '@mui/icons-material/Close';

import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
import { closeFoodItemModal } from '@bookable24/store/oder/bookingSlice';

import {
  CloseButtonSt,
  FoodItemViewMorest,
} from './ShowDetailsFoodItem.styles';
import { AddFoodItemToCart } from '../AddFoodItemToCart/AddFoodItemToCart';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export const ShowDetailsFoodItem = () => {
  const dispatch = useAppDispatch();
  const {
    cartItems,
    foodItemModal: {
      isOpenModal,
      foodImage,
      quantity,
      foodId,
      foodName,
      descriptionAboutFood,
    },
  } = useAppSelector((state) => state.booking);

  const image = getImage(foodImage as ImageDataLike) as IGatsbyImageData;

  const handleClose = () => {
    dispatch(closeFoodItemModal());
  };

  return (
    <FoodItemViewMorest>
      <Dialog
        open={isOpenModal as boolean}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby={`${foodId}-bookable-24-online-booking-system`}
      >
        <DialogTitle>{foodName}</DialogTitle>
        <CloseButtonSt onClick={handleClose}>
          <CloseIcon fontSize='medium' />
        </CloseButtonSt>
        <GatsbyImage
          image={image}
          alt='bookable24.de Booking Online System'
          style={{
            borderRadius: '4px',
            minHeight: '30vh',
          }}
        />
        <DialogContent>
          <DialogContentText id={`${foodId}-bookable-24-online-booking-system`}>
            {descriptionAboutFood}
          </DialogContentText>
        </DialogContent>
        <AddFoodItemToCart />
      </Dialog>
    </FoodItemViewMorest>
  );
};
