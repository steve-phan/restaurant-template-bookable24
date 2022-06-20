import { graphql, PageProps } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import * as React from 'react';

import { SEO } from '@bookable24/components/Layout/SEO/SEO';
import Layout from '@bookable24/components/Layout/Layout';

import Hero from '@bookable24/components/SectionsComponent/Hero/Hero';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { DynamicImage } from '@bookable24/components/molecules/DynamicImage/DynamicImage';

interface IDataIndexPage {
  locale: { nodes: any[] };
  sectionImg: { nodes: any[] };
}

const getImageData = (dataImgs: any[], fileName: string) => {
  return dataImgs.find((item: any) =>
    item?.childImageSharp.gatsbyImageData.images.fallback.src.includes(fileName)
  );
};

const IndexPage: React.FC<PageProps<IDataIndexPage>> = ({ location, data }) => {
  const { t } = useTranslation();
  console.log({ data });
  const dataImgs = data?.sectionImg.nodes;
  const heroImg = getImageData(dataImgs, 'hero_section.jpg');

  return (
    <Layout location={location}>
      <SEO title={t('Home')} />
      <Hero img={heroImg} />
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
