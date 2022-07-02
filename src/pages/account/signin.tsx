import { graphql, PageProps } from 'gatsby';
import React from 'react';

import { SEO } from '@bookable24/components/Layout/SEO/SEO';
import Layout from '@bookable24/components/Layout/Layout';
import { SignIn } from '@bookable24/components/Account/SignIn/SignIn';

const SignInPage: React.FC<PageProps> = ({ location, data }) => {
  return (
    <Layout location={location}>
      <SEO title='New Account in BookAble24' />
      <SignIn />
    </Layout>
  );
};

export default SignInPage;

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
