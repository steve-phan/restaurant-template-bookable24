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

import { IFoodItemFromContentFul } from '@bookable24/RESTAURANT.CONFIG/restaurant.types';

import {
  CloseButtonSt,
  ButtonViewMorest,
  FoodItemViewMorest,
} from './ShowDetailsFoodItem.styles';
import { AddFoodItemToCart } from '../AddFoodItemToCart/AddFoodItemToCart';
import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
import { IFoodItemModal } from '@bookable24/store/shop/shop.types';
import {
  closeFoodItemModal,
  openFoodItemModal,
} from '@bookable24/store/shop/bookingSlice';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export const ShowDetailsFoodItem = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const {
    foodItemModal: {
      foodId,
      foodName,
      quantity,
      foodImage,
      isOpenModal,
      descriptionAboutFood,
      priceOfFood,
    },
  } = useAppSelector((state) => state.booking);

  const image = getImage(foodImage as ImageDataLike) as IGatsbyImageData;

  const handleClickOpen = () => {
    setOpen(true);
    dispatch(
      openFoodItemModal({
        foodId,
        foodName,
        quantity,
        foodImage,
        isOpenModal,
        descriptionAboutFood,
        priceOfFood,
      })
    );
  };

  const handleClose = () => {
    // setOpen(false);
    dispatch(closeFoodItemModal());
  };

  React.useEffect(() => {
    if (quantity === 0) handleClose();
  }, [quantity]);

  return (
    <FoodItemViewMorest>
      {/* <ButtonViewMorest onClick={handleClickOpen}>View more</ButtonViewMorest> */}
      <Dialog
        open={isOpenModal}
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
