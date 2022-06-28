import React, { useEffect, useRef, useState } from 'react';

import { useI18next } from 'gatsby-plugin-react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  CATEGORY,
  IFoodItem,
  TCategory,
} from '@bookable24/RESTAURANT.CONFIG/restaurant.types';
import { menuMapping } from '@bookable24/RESTAURANT.CONFIG/RESTAURANT.MENU';

import {
  ShopOnlineSt,
  CategorySectionSt,
  CategorySt,
  CategoryMenuSt,
  CategoryItemSt,
  HeadingSectionSt,
  WrapCategorySt,
  ShopOnlineInfoSt,
} from './ShopOnline.styles';
import { BoxFoodItem } from '../molecules/BoxFoodItem/BoxFoodItem';

export const isInView = (element: HTMLElement, offset = 110) => {
  const top = element.getBoundingClientRect().top;
  const bottom = element.getBoundingClientRect().bottom;

  return offset - top >= 0 && bottom - offset > 0;
};

export const defaultMenuList = CATEGORY.map((category) => ({
  category,
  isInview: false,
}));
export interface TMenuList {
  isInview: boolean;
  category: TCategory;
}

export const ShopOnline = ({
  restaurantMenu,
}: {
  restaurantMenu: IFoodItem[];
}) => {
  const numberRef = useRef(0);
  const timeOutRef = useRef(0);
  const navRef = useRef<HTMLDivElement>(null);
  const slickRef = useRef(null);

  const categoryMenu = Object.entries(menuMapping(restaurantMenu));

  const [menuList, setMenuList] = useState<TMenuList[]>(defaultMenuList);
  const [activeMenu, setActiveMenu] = useState(CATEGORY[0]);
  const { navigate } = useI18next();

  const spy = () => {
    const filterCategories = CATEGORY.map((category) => {
      const targetCategoryElement = document.getElementById(category);
      const isInview =
        !!targetCategoryElement &&
        isInView(targetCategoryElement as HTMLElement);
      if (isInview) setActiveMenu(category);
      return {
        isInview,
        category,
      };
    });
    const isFirstMenuActive = filterCategories.find(
      (filterCategory, index) => !!filterCategory && filterCategory.isInview
    );
    if (!isFirstMenuActive) {
      filterCategories[0].isInview = true;
    }
    setMenuList(filterCategories);
    numberRef.current = requestAnimationFrame(spy);
  };

  useEffect(() => {
    const findIndex = CATEGORY.findIndex((item) => item === activeMenu);

    if (slickRef.current) {
      // @ts-ignore
      slickRef.current.slickGoTo(findIndex);
    }
  }, [activeMenu]);

  useEffect(() => {
    window.addEventListener('scroll', spy);
    return () => window.removeEventListener('scroll', spy);
  }, []);

  const settings = {
    infinite: false,
    arrow: false,

    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <ShopOnlineSt>
      <ShopOnlineInfoSt>
        <h2>Wellcome to MaiSonTom</h2>
        <p>We deliver around 5km from 15 Euro</p>
      </ShopOnlineInfoSt>

      <CategoryMenuSt id='menulist-id'>
        <Slider {...settings} ref={slickRef}>
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

      <div>
        {categoryMenu.map(([id, category], outerIndex) => (
          <CategorySectionSt key={outerIndex} id={id}>
            <HeadingSectionSt> {id} </HeadingSectionSt>
            {category?.foodItems?.map((item, innerIndex) => (
              <BoxFoodItem key={innerIndex} item={item} />
            ))}
          </CategorySectionSt>
        ))}
      </div>
    </ShopOnlineSt>
  );
};
