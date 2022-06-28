import * as React from 'react';
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from 'gatsby-plugin-image';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import { IFoodItemFromContentFul } from '@bookable24/RESTAURANT.CONFIG/restaurant.types';
import { ButtonViewMorest, FoodItemViewMorest } from './BoxFoodItem.styles';
import { AddFoodItemToCart } from './AddFoodItemToCart';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export const ShowDetailsFoodItem = ({
  item,
}: {
  item: IFoodItemFromContentFul;
}) => {
  const [open, setOpen] = React.useState(false);

  const { foodName, descriptionAboutFood, priceOfFood, foodId, foodImage } =
    item;

  const image = getImage(foodImage as ImageDataLike) as IGatsbyImageData;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <FoodItemViewMorest>
      <ButtonViewMorest onClick={handleClickOpen}>View more</ButtonViewMorest>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle>{foodName}</DialogTitle>
        <GatsbyImage
          image={image}
          alt='bookable24.de Booking Online System'
          style={{
            borderRadius: '4px',
            minHeight: '30vh',
          }}
        />
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            {descriptionAboutFood}
          </DialogContentText>
        </DialogContent>
        <AddFoodItemToCart
          priceOfFood={priceOfFood}
          foodId={foodId}
          foodName={foodName}
        />
      </Dialog>
    </FoodItemViewMorest>
  );
};
