import { graphql, PageProps } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import Layout from '@bookable24/components/Layout/Layout';
import { SEO } from '@bookable24/components/Layout/SEO/SEO';
import { Recover } from '@bookable24/components/Account/Recover/Recover';

const Login: React.FC<PageProps> = ({ location, data }) => {
  const { t } = useTranslation();

  return (
    <Layout location={location}>
      <SEO title='Recover Password BookAble24' />

      <Recover />
    </Layout>
  );
};

export default Login;

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
