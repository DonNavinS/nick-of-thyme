const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    name: String
  }

  type Query {
    sayHi: String!
    getProducts: [Product]
  }
`;

module.exports = { typeDefs };
