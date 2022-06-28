import React, { useEffect, useState } from 'react';

import { TCategory } from '@bookable24/RESTAURANT.CONFIG/restaurant.types';

export const isInView = (element: HTMLElement, offset = 110) => {
  const top = element.getBoundingClientRect().top;
  const bottom = element.getBoundingClientRect().bottom;

  return offset - top >= 0 && bottom - offset > 0;
};

export const getDefaultMenuList = (CATEGORY: TCategory[]) =>
  CATEGORY.map((category) => ({
    category,
    isInview: false,
  }));

export interface IMenuList {
  isInview: boolean;
  category: TCategory;
}

export const useScrollSpy = (CATEGORY: TCategory[]) => {
  const [menuList, setMenuList] = useState<IMenuList[]>(
    getDefaultMenuList(CATEGORY)
  );
  const [activeMenu, setActiveMenu] = useState(CATEGORY[0]);

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
      (filterCategory) => !!filterCategory && filterCategory.isInview
    );
    if (!isFirstMenuActive) {
      filterCategories[0].isInview = true;
    }
    setMenuList(filterCategories);
  };

  useEffect(() => {
    window.addEventListener('scroll', spy);
    return () => window.removeEventListener('scroll', spy);
  }, []);

  return {
    activeMenu,
    menuList,
    setActiveMenu,
    setMenuList,
  };
};
