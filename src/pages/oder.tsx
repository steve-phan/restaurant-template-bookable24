import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@bookable24/components/Layout/Layout';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { BoxFoodItem } from '@bookable24/components/molecules/BoxFoodItem/BoxFoodItem';
import { restaurantMenu } from '@bookable24/RESTAURANT.CONFIG/RESTAURANT.MENU';
import { ShopOnline } from '@bookable24/components/ShopOnline/ShopOnline';
import { CATEGORY } from '@bookable24/RESTAURANT.CONFIG/restaurant.types';

const OderPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <ShopOnline restaurantMenu={restaurantMenu} CATEGORY={CATEGORY} />
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
  }
`;
