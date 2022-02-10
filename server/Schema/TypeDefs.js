const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Products {
    name: String
  }

  type Query {
    sayHi: String!
    getProducts: [Products]
  }
`;

module.exports = { typeDefs };
