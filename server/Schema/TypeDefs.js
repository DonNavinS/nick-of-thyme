const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    name: String
    price: Float
  }

  type Query {
    sayHi: String!
    getProducts: [Product]
    getProductByName: [Product]
  }
`;

module.exports = { typeDefs };
