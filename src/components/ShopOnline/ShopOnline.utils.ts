import { IFoodItemFromContentFul, TCategory } from '@bookable24/RESTAURANT.CONFIG/restaurant.types';

export interface IShopOnlineProps {
  restaurantMenu: IFoodItemFromContentFul[];
  CATEGORY: TCategory[];
}

export const menuSlideSettings = {
  infinite: false,
  arrows: false,
  dots: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
};
