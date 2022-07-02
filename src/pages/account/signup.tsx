import { graphql, PageProps } from 'gatsby';
import React from 'react';

import { SEO } from '@bookable24/components/Layout/SEO/SEO';
import { SignUp } from '@bookable24/components/Account/SignUp/SignUp';
import Layout from '@bookable24/components/Layout/Layout';

const SignUpPage: React.FC<PageProps> = ({ location, data }) => {
  return (
    <Layout location={location}>
      <SEO title='Request Account BookAble24' />
      <SignUp />
    </Layout>
  );
};

export default SignUpPage;

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
