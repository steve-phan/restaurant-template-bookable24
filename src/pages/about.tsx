import React from 'react';

import Layout from '@bookable24/components/Layout/Layout';
import { graphql, PageProps } from 'gatsby';
import { CenterSectionComponent } from '@bookable24/components/SectionsComponent/CenterSectionComponent/CenterSectionComponent';
import { IDataIndexPage, mappingDataImages } from '.';
import { homePageData } from '@bookable24/store/restaurant.homepage';

const ContactPage: React.FC<PageProps<IDataIndexPage>> = ({
  location,
  data,
}) => {
  const dataImgs = data?.sectionImg.nodes as Record<string, any>[];
  const imgMapping = mappingDataImages(dataImgs);
  const { aboutSection } = homePageData;
  return (
    <Layout>
      <CenterSectionComponent
        img={imgMapping['about_section']}
        componentInfo={aboutSection}
      />
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

    sectionImg: allFile(filter: { absolutePath: { regex: "/bg_section/" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`;
