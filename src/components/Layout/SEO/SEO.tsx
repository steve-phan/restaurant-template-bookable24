/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql, PageProps } from 'gatsby';

interface IMeta {
  name: string;
  content: string;
}
interface ISEOProps {
  meta?: IMeta;
  description?: string;
  title: string;
}

export const SEO = ({
  description = 'Booking Online System for Restaurant, Nail, Doctor',
  meta = {
    name: `Website:https://bookable24.de`,
    content: 'BookAble24 Booking Online System',
  },
  title,
}: ISEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const website = 'https://bookable24de';
  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={`${title} Bookable24.de Booking Online System`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: website,
        },
        {
          name: `twitter:card`,
          content: website,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || `Steve Phan`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};
