export interface IBoxWithIconInfos {
  icon: JSX.Element;
  heading: string;
  descriptions: string[];
}

export const RestaurantInfoConstants = {
  ADDRESS: 'address',
  OPENTIMES: 'openTimes',
  CONTACT: 'contact',
} as const;

export type GetValuesOf<T> = T[keyof T];

export type TRestaurantKeys = GetValuesOf<typeof RestaurantInfoConstants>;

export type TRestaurantInfos = Record<TRestaurantKeys, IBoxWithIconInfos>;

export interface IFoodItem {
  title: string;
  description: string;
  price: number;
  id: string;
  otherOption?: string;
}
