import { graphql, PageProps } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import * as React from 'react';

import { SEO } from '@bookable24/components/Layout/SEO/SEO';
import Layout from '@bookable24/components/Layout/Layout';
import { homePageData } from '@bookable24/store/restaurant.homepage';
import { CenterSectionComponent } from '@bookable24/components/SectionsComponent/CenterSectionComponent/CenterSectionComponent';
import { OneSideSectionComponent } from '@bookable24/components/SectionsComponent/OneSideSectionComponent/OneSideSectionComponent';
import { GoogleMap } from '@bookable24/components/SectionsComponent/GoogleMap/GoogleMap';

interface IDataIndexPage {
  locale: { nodes: any[] };
  sectionImg: { nodes: any[] };
}

const mappingDataImages = (dataImgs: Record<string, any>[]) =>
  dataImgs
    .map((item) => {
      const section = item.childImageSharp.gatsbyImageData.images.fallback.src
        .split('/')
        .pop()
        .split('.')[0];
      return { [section]: item };
    })
    .reduce(
      (acc: Record<string, any>, cur: Record<string, any>) => ({
        ...acc,
        ...cur,
      }),
      {}
    );

const IndexPage: React.FC<PageProps<IDataIndexPage>> = ({ location, data }) => {
  const { t } = useTranslation();

  const dataImgs = data?.sectionImg.nodes as Record<string, any>[];
  const imgMapping = mappingDataImages(dataImgs);

  const { heroSection, aboutSection, menuSection, bookingSection } =
    homePageData;
  return (
    <Layout location={location}>
      <SEO title={t('Home')} />
      <CenterSectionComponent
        img={imgMapping['hero_section']}
        componentInfo={heroSection}
      />

      <OneSideSectionComponent
        img={imgMapping['booking_section']}
        componentInfo={bookingSection}
        contextPosition='left'
      />
      <OneSideSectionComponent
        img={imgMapping['menu_section']}
        componentInfo={menuSection}
        contextPosition='right'
      />
      <CenterSectionComponent
        img={imgMapping['about_section']}
        componentInfo={aboutSection}
      />

      <GoogleMap />
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
    sectionImg: allFile(filter: { absolutePath: { regex: "/bg_section/" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`;
