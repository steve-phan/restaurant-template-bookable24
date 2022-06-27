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

const isInView = (element: HTMLElement, offset = 110) => {
  const top = element.getBoundingClientRect().top;
  const bottom = element.getBoundingClientRect().bottom;

  return offset - top >= 0 && bottom - offset > 0;
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

  const draw = (transform: number) => {
    const menuListElement = document.getElementById(
      'menulist-id'
    ) as HTMLElement;
    menuListElement.style.left = `-${transform}px`;
  };
  const spy = () => {
    // draw(transform);
    const filterCategories = CATEGORY.map((category) => {
      const targetCategoryElement = document.getElementById(category);
      const isInview = isInView(targetCategoryElement as HTMLElement);
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
      // draw(16);
    }
    setMenuList(filterCategories);
    numberRef.current = requestAnimationFrame(spy);
  };

  useEffect(() => {
    if (navRef.current) {
      navRef.current.scrollIntoView(true);
    }

    // setTransform(navRef.current?.getBoundingClientRect().left || 16);
  }, [activeMenu]);

  useEffect(() => {
    numberRef.current = requestAnimationFrame(spy);
    return () => cancelAnimationFrame(numberRef.current);
  }, [activeMenu]);

  return (
    <ShopOnlineSt>
      <ShopOnlineInfoSt>
        <h2>Wellcome to MaiSonTom</h2>
        <p>We deliver around 5km from 15 Euro</p>
      </ShopOnlineInfoSt>
      <WrapCategorySt>
        <CategorySt id='menulist-id'>
          <CategoryMenuSt>
            {menuList.map(({ isInview, category }, index) => (
              <CategoryItemSt
                ref={isInview ? navRef : null}
                key={index}
                active={isInview ? 'active' : 'normal'}
                onClick={() => {
                  // setActiveMenu(category);
                  const targetCategoryElement = document.getElementById(
                    category
                  ) as HTMLElement;
                  targetCategoryElement.scrollIntoView({
                    // block: 'nearest',
                    behavior: 'smooth',
                  });
                  // targetCategoryElement.scrollIntoView(true);
                }}
              >
                {category}
              </CategoryItemSt>
            ))}
          </CategoryMenuSt>
        </CategorySt>
      </WrapCategorySt>
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
