import { useState, useEffect } from 'react';
import gql from 'graphql-tag';

import client from './../../config/apollo/client';

const getInitialData = q => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    const res = await client
            .query({query: gql`${q}`});
    setData(res.data);
    setLoading(false);
  }
  useEffect(() => {
    getData();
  }, []);

  return [data, loading];
};

export default getInitialData;