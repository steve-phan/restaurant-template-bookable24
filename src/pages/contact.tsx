import React from 'react';

import Layout from '@bookable24/components/Layout/Layout';
import { graphql, PageProps } from 'gatsby';
import { IDataIndexPage } from '.';
import { GoogleMap } from '@bookable24/components/SectionsComponent/GoogleMap/GoogleMap';

const AboutPage: React.FC<PageProps<IDataIndexPage>> = ({ location, data }) => {
  return (
    <Layout>
      <GoogleMap />
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
