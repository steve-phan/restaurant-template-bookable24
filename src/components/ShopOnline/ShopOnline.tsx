import React, { ReactElement, useEffect, useRef, useState } from 'react';

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

export const scrollTo = (element: HTMLElement) => {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });
};

interface TMenuList {
  isInview: boolean;
  category: TCategory;
}

export const ShopOnline = ({
  restaurantMenu,
}: {
  restaurantMenu: IFoodItem[];
}) => {
  const numberRef = useRef(0);
  const navRef = useRef<HTMLDivElement>(null);

  const categoryMenu = Object.entries(menuMapping(restaurantMenu));

  const [menuList, setMenuList] = useState<TMenuList[]>([]);
  const [activeMenu, setActiveMenu] = useState(CATEGORY[0]);
  const [transform, setTransform] = useState(0);
  const spy = () => {
    const filterCategorys = CATEGORY.map((category) => {
      const targetCategoryElement = document.getElementById(category);
      const isInview = isInView(targetCategoryElement as HTMLElement);
      if (isInview) setActiveMenu(category);
      return {
        isInview,
        category,
      };
    });
    setMenuList(filterCategorys);

    numberRef.current = requestAnimationFrame(spy);
  };

  const isInView = (element: HTMLElement, offset = 120) => {
    const top = element.getBoundingClientRect().top;
    return top + offset >= 0 && top - offset <= window.innerHeight;
  };
  useEffect(() => {
    setTransform(navRef.current?.getClientRects()[0].x || 0);
    // return () => setIsTransform(false);
  }, [activeMenu]);

  useEffect(() => {
    numberRef.current = requestAnimationFrame(spy);
    return () => cancelAnimationFrame(numberRef.current);
  }, []);
  // if (navRef.current?.getClientRects()[0].x)
  //   console.log({ navRef: navRef.current?.getClientRects()[0].x });
  console.log({ menuTransform: navRef.current?.getClientRects()[0].x });
  return (
    <ShopOnlineSt>
      <ShopOnlineInfoSt>
        <h2>Wellcome to MaiSonTom</h2>
        <p>We deliver around 5km from 15 Euro</p>
      </ShopOnlineInfoSt>
      <WrapCategorySt>
        <CategorySt
          style={{
            left: `${-transform}px`,
          }}
        >
          <CategoryMenuSt>
            {menuList.map(({ isInview, category }, index) => (
              <CategoryItemSt
                ref={isInview ? navRef : null}
                style={{
                  background: isInview ? 'red' : 'white',
                }}
                key={index}
              >
                {category}
              </CategoryItemSt>
            ))}
          </CategoryMenuSt>
        </CategorySt>
      </WrapCategorySt>
      {categoryMenu.map(([id, category], outerIndex) => (
        <CategorySectionSt key={outerIndex} id={id}>
          <HeadingSectionSt> {id} </HeadingSectionSt>
          {category?.foodItems?.map((item, innerIndex) => (
            <BoxFoodItem key={innerIndex} item={item} />
          ))}
        </CategorySectionSt>
      ))}
    </ShopOnlineSt>
  );
};
