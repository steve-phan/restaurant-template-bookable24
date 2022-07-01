import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@bookable24/components/Layout/Layout';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { ShopOnline } from '@bookable24/components/ShopOnline/ShopOnline';
import { CATEGORY, IFoodItemFromContentFul } from '@bookable24/RESTAURANT.CONFIG/restaurant.types';

const OderPage = ({ data }: { data: any }) => {
  const restaurantMenuData = data?.allContentfulMenu?.nodes as IFoodItemFromContentFul[];
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
          gatsbyImageData(width: 600, quality: 30)
        }
        foodName
        priceOfFood
        foodId
        descriptionAboutFood
      }
    }
  }
`;
