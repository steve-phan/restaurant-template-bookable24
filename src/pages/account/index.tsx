import { Account } from '@bookable24/components/Account/Account';
import Layout from '@bookable24/components/Layout/Layout';
import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
import { graphql } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import React from 'react';

type Tmode = 'resetPassword' | 'recoverEmail' | 'verifyEmail';

const AccountPage = () => {
  // const { navigate } = useI18next();
  // const dispatch = useAppDispatch();
  // const { isUserLogin } = useAppSelector((state) => state.account);

  // if (!isUserLogin) {
  //   navigate('./account/login');
  // }

  return (
    <Layout>
      <Account />
    </Layout>
  );
};

export default AccountPage;

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
