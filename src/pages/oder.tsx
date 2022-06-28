import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@bookable24/components/Layout/Layout';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { BoxFoodItem } from '@bookable24/components/molecules/BoxFoodItem/BoxFoodItem';
import { restaurantMenu } from '@bookable24/RESTAURANT.CONFIG/RESTAURANT.MENU';
import { ShopOnline } from '@bookable24/components/ShopOnline/ShopOnline';
import {
  CATEGORY,
  IFoodItemFromContentFul,
} from '@bookable24/RESTAURANT.CONFIG/restaurant.types';

const OderPage = ({ pageContext, data }: { pageContext: any; data: any }) => {
  const { t } = useTranslation();
  console.log({ data });

  const restaurantMenuData = data?.allContentfulMenu
    ?.nodes as IFoodItemFromContentFul[];
  return (
    <Layout>
      <ShopOnline restaurantMenu={restaurantMenuData} CATEGORY={CATEGORY} />
    </Layout>
  );
};

export default OderPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allContentfulMenu {
      nodes {
        category
        foodImage {
          gatsbyImageData(width: 50, quality: 40)
        }
        foodName
        priceOfFood
        foodId
        descriptionAboutFood
      }
    }
  }
`;
