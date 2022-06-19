import { graphql, PageProps } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import * as React from 'react';

import { SEO } from '@bookable24/components/Layout/SEO/SEO';
import Layout from '@bookable24/components/Layout/Layout';
import { Section } from '@bookable24/components/molecules/Section/Section';

const IndexPage: React.FC<PageProps> = ({ location, data }) => {
  const { t } = useTranslation();
  return (
    <Layout location={location}>
      <SEO title={t('Home')} />
      <Section header='A MAISONTOM' description='This is a description' />
    </Layout>
  );
};

export default IndexPage;

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
