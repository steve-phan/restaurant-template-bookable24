import React, { useEffect, useRef, useState } from 'react';

import { useI18next } from 'gatsby-plugin-react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { menuMapping } from '@bookable24/RESTAURANT.CONFIG/RESTAURANT.MENU';
import { useScrollSpy } from '@bookable24/hooks/useScrollSpy';
import { TCategoryMenu } from '@bookable24/RESTAURANT.CONFIG/restaurant.types';
import { useDevices } from '@bookable24/hooks/useDevices';

import {
  ShopOnlineSt,
  ShopOnlineMenuListSt,
  ShopOnlineBasketSt,
  CategorySectionSt,
  CategoryMenuSt,
  CategoryItemSt,
  HeadingSectionSt,
  ShopOnlineInfoSt,
  CategorySt,
} from './ShopOnline.styles';
import { BoxFoodItem } from '../molecules/BoxFoodItem/BoxFoodItem';
import { IShopOnlineProps, menuSlideSettings } from './ShopOnline.utils';
import { ShowDetailsFoodItem } from '../molecules/BoxFoodItem/ShowDetailsFoodItem/ShowDetailsFoodItem';
import { BoxViewCart } from '../molecules/BoxViewCart/BoxViewCart';
import { DesktopViewCart } from '../molecules/DesktopViewCart/DesktopViewCart';

export const ShopOnline = ({ restaurantMenu, CATEGORY }: IShopOnlineProps) => {
  const navRef = useRef<HTMLDivElement>(null);
  const slickRef = useRef(null);
  const { activeMenu, menuList, setActiveMenu, setMenuList } =
    useScrollSpy(CATEGORY);
  const { navigate } = useI18next();

  const categoryMenu = Object.entries(menuMapping(restaurantMenu));

  const sortingCategoryMenu = CATEGORY.map((category) => {
    const foundMenu = categoryMenu.find(
      ([categoryName, foodArr]) => categoryName === category
    ) as TCategoryMenu;
    return [category, { foodItems: foundMenu[1].foodItems }];
  }) as TCategoryMenu[];

  useEffect(() => {
    const findIndex = CATEGORY.findIndex((item) => item === activeMenu);
    if (slickRef.current) {
      // @ts-ignore
      slickRef.current.slickGoTo(findIndex);
    }
  }, [activeMenu]);
  const device = useDevices();

  return (
    <ShopOnlineSt>
      <ShopOnlineMenuListSt>
        <ShopOnlineInfoSt>
          <h2>Wellcome to MaiSonTom</h2>
          <p>We deliver around 5km from 15 Euro</p>
        </ShopOnlineInfoSt>
        <CategorySt>
          <CategoryMenuSt id='menulist-id'>
            <Slider {...menuSlideSettings} ref={slickRef}>
              {menuList.map(({ isInview, category }, index) => (
                <CategoryItemSt
                  ref={isInview ? navRef : null}
                  key={index}
                  active={isInview ? 'active' : 'normal'}
                  onClick={() => {
                    navigate(`/oder/#${category}`);
                    setActiveMenu(category);
                  }}
                >
                  {category}
                </CategoryItemSt>
              ))}
            </Slider>
          </CategoryMenuSt>
        </CategorySt>
        {sortingCategoryMenu.map(([foodName, category], outerIndex) => {
          return (
            <CategorySectionSt key={outerIndex} id={foodName}>
              <HeadingSectionSt>{foodName}</HeadingSectionSt>
              {category?.foodItems?.map((item, innerIndex) => (
                <BoxFoodItem key={innerIndex} item={item} />
              ))}
            </CategorySectionSt>
          );
        })}
        <ShowDetailsFoodItem />
      </ShopOnlineMenuListSt>
      {device !== 'small' ? (
        <ShopOnlineBasketSt>
          <DesktopViewCart />
        </ShopOnlineBasketSt>
      ) : (
        <BoxViewCart />
      )}
    </ShopOnlineSt>
  );
};
