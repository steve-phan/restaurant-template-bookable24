import React, { ReactNode } from 'react';
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
} from '@bookable24/store/shop/bookingSlice';

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
  const { cartItems } = useAppSelector((state) => state.booking);

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
          dispatch(addItemToCart(foodItem));
        }}
      >
        {currentQuantity}
      </FoodItemOderQtyst>
      {/* <ShowDetailsFoodItem item={item} /> */}
      <FoodItemViewMorest
        onClick={() => {
          dispatch(
            openFoodItemModal({
              ...item,
              isOpenModal: true,
              quantity:
                typeof currentQuantity === 'number' ? currentQuantity : 1,
            })
          );
        }}
      >
        <ButtonViewMorest>More info</ButtonViewMorest>
      </FoodItemViewMorest>
    </BoxFoodItemSt>
  );
};
