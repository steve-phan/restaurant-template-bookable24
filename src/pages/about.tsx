import React from 'react';

import Layout from '@bookable24/components/Layout/Layout';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <>About</>
    </Layout>
  );
};

export default AboutPage;

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
