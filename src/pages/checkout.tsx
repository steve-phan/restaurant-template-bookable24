import React from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from '@bookable24/components/Layout/Layout';
import { Checkout } from '@bookable24/components/ShopOnline/CheckOut/CheckOut';

const CheckOutPage = () => {
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
