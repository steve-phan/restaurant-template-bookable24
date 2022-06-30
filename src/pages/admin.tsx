import React, { useState } from 'react';
import axios from 'axios';

import Layout from '@bookable24/components/Layout/Layout';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Adminpage = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <Layout>
      <>About</>
      <form
        action='submit'
        onSubmit={async (e) => {
          e.preventDefault();
          const res = await axios.post('https://europe-west3-shoponline-eu.cloudfunctions.net/api/test', {
            name,
            email,
          });
          console.log({ res });
        }}
      >
        <input type='text' value={name} placeholder='name' onChange={(e) => setName(e.target.value)} />
        <input type='text' value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)} />
        <button>submit</button>
      </form>
    </Layout>
  );
};

export default Adminpage;

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
