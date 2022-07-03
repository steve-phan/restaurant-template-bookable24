import React from 'react';

import Layout from '@bookable24/components/Layout/Layout';
import { graphql, PageProps } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { CenterSectionComponent } from '@bookable24/components/SectionsComponent/CenterSectionComponent/CenterSectionComponent';
import { IDataIndexPage, mappingDataImages } from '.';
import { homePageData } from '@bookable24/store/restaurant.homepage';
import { Checkout } from '@bookable24/components/ShopOnline/CheckOut/CheckOut';

const CheckOutPage: React.FC<PageProps<IDataIndexPage>> = ({
  location,
  data,
}) => {
  return (
    <Layout>
      <Checkout />
    </Layout>
  );
};

export default CheckOutPage;

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
