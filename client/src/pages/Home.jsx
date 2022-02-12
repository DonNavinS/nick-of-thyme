import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_PRODUCTS = gql`
  query {
    getProducts {
      name
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  return (
    <div>{data && data.getProducts.map((item) => <div>{item.name}</div>)}</div>
  );
};

export default Home;
