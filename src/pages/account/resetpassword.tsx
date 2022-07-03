import React from 'react';
import { graphql } from 'gatsby';

import { ResetPassword } from '@bookable24/components/Account/ResetPassword/ResetPassword';
import Layout from '@bookable24/components/Layout/Layout';

const ResetPasswordPage = () => {
  return (
    <Layout>
      <ResetPassword />
    </Layout>
  );
};

export default ResetPasswordPage;

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
