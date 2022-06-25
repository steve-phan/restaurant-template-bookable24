import React from 'react';

import Layout from '@bookable24/components/Layout/Layout';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import {
  BoxFoodItem,
  BundauMamTom,
} from '@bookable24/components/molecules/BoxFoodItem/BoxFoodItem';

const OderPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <BoxFoodItem item={BundauMamTom} />
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
