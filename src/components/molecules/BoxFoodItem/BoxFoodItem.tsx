import React from 'react';
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from 'gatsby-plugin-image';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Grid } from '@mui/material';

import { IFoodItemFromContentFul } from '@bookable24/RESTAURANT.CONFIG/restaurant.types';
import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
import {
  addItemToCart,
  openFoodItemModal,
} from '@bookable24/store/oder/oderSlice';

import {
  BoxFoodItemSt,
  FoodItemInfoSt,
  FoodItemTitleSt,
  FoodItemDescSt,
  FoodItemPriceSt,
  FoodItemOderQtyst,
  FoodItemViewMorest,
  ButtonViewMorest,
} from './BoxFoodItem.styles';
// import { ShowDetailsFoodItem } from './ShowDetailsFoodItem';

export const BoxFoodItem = ({ item }: { item: IFoodItemFromContentFul }) => {
  const { foodName, descriptionAboutFood, priceOfFood, foodId, foodImage } =
    item;
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state) => state.oder);

  const exitsItem =
    !!cartItems && cartItems.find((item) => foodId === item.foodId);

  const currentQuantity =
    exitsItem && foodId === exitsItem.foodId ? (
      exitsItem.quantity
    ) : (
      <AddShoppingCartOutlinedIcon fontSize='small' />
    );

  const foodItem = {
    foodId,
    foodName,
    priceOfFood,
    descriptionAboutFood,
    quantity: 1,
  };

  const image = getImage(foodImage as ImageDataLike) as IGatsbyImageData;
  return (
    <BoxFoodItemSt>
      <Grid
        container
        sx={{
          paddingRight: '28px',
          alignItems: 'center',
        }}
      >
        <Grid item xs={2} md={2}>
          <GatsbyImage
            image={image}
            alt='bookable24.de Booking Online System'
            style={{
              borderRadius: '4px',
            }}
          />
        </Grid>
        <Grid
          item
          xs={10}
          md={10}
          sx={{
            padding: '8px 12px',
          }}
        >
          <FoodItemInfoSt>
            <FoodItemTitleSt>{foodName} </FoodItemTitleSt>
            <FoodItemDescSt> {descriptionAboutFood} </FoodItemDescSt>
          </FoodItemInfoSt>
          <FoodItemPriceSt>{priceOfFood} € </FoodItemPriceSt>
        </Grid>
      </Grid>
      <FoodItemOderQtyst
        onClick={() => {
          dispatch(addItemToCart({ ...foodItem, foodImage: image }));
        }}
      >
        {currentQuantity}
      </FoodItemOderQtyst>
      <FoodItemViewMorest
        onClick={() => {
          dispatch(
            openFoodItemModal({
              ...foodItem,
              isOpenModal: true,
              foodImage: image,
              quantity: exitsItem?.quantity || 0,
            })
          );
        }}
      >
        <ButtonViewMorest>More info</ButtonViewMorest>
      </FoodItemViewMorest>
    </BoxFoodItemSt>
  );
};
