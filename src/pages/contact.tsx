import React from 'react';

import Layout from '@bookable24/components/Layout/Layout';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <>HomePage</>
    </Layout>
  );
};

export default ContactPage;

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
